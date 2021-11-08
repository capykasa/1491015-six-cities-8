import { ThunkActionResult } from '../types/action';
import { loadOffers, loadReviews, redirectToRoute, requireAuthorization, requireLogout } from './action';
import { saveToken, dropToken, Token } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { Offer } from '../types/offers';
import { AuthData } from '../types/auth-data';
import { Review } from '../types/reviews';
import { adaptOfferToClient, adaptReviewToClient } from '../utils';

export const fetchOfferAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);

    const adaptedDate = data.map((item) => (adaptOfferToClient(item)));

    dispatch(loadOffers(adaptedDate));
  };

export const fetchReviewAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);

    const adaptedDate = data.map((item) => (adaptReviewToClient(item)));

    dispatch(loadReviews(adaptedDate));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth)); // Не очень понимаю это
      });
  };

export const loginAction = ({ login: email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data: { token } } = await api.post<{ token: Token }>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
