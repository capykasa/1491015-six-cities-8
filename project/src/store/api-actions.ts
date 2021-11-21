import { ThunkActionResult } from '../types/action';
import { setUsername, loadNearbyOffers, loadOffers, loadReviews, redirectToRoute, requireAuthorization, requireLogout } from './action';
import { saveToken, dropToken, Token } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { Offer } from '../types/offers';
import { AuthData } from '../types/auth-data';
import { Review } from '../types/reviews';
import { adaptOfferToClient, adaptReviewToClient } from '../utils';
import { toast } from 'react-toastify';

const AUTH_FAIL_MESSAGE = 'Log In. Please.';

export const fetchOfferAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);

    const adaptedData = data.map((item) => (adaptOfferToClient(item)));

    dispatch(loadOffers(adaptedData));
  };

export const fetchReviewAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);

    const adaptedData = data.map((item) => (adaptReviewToClient(item)));

    dispatch(loadReviews(adaptedData));
  };

export const fetchNearbyOffersAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);

    const adaptedData = data.map((item) => (adaptOfferToClient(item)));

    dispatch(loadNearbyOffers(adaptedData, parseInt(id, 10)));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const { data } = await api.get(APIRoute.Login);
      dispatch(setUsername(data.name));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      toast.info(AUTH_FAIL_MESSAGE);
    }
  };

export const loginAction = ({ login: email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data: { token } } = await api.post<{ token: Token }>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUsername(email));
    dispatch(fetchOfferAction());
    dispatch(redirectToRoute(AppRoute.Main));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(fetchOfferAction());
    dispatch(requireLogout());
  };
