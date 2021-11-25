import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import { State } from '../types/state';
import { Action } from 'redux';

export enum ActionType {
  SelectCity = 'offers/selectCity',
  SelectSort = 'offers/selectSort',
  LoadOffers = 'data/loadOffers',
  LoadReviews = 'data/loadReviews',
  LoadNearbyOffers = 'data/loadNearbyOffers',
  LoadFavoriteOffers = 'data/loadFavoriteOffers',
  ToggleOfferIsFavorite = 'data/toggleOfferIsFavorite',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetUsername = 'user/setUsername',
  RedirectToRoute = 'offers/redirectToRoute'
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
