import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import { State } from '../types/state';

import {
  loadOffers,
  loadReviews,
  loadNearbyOffers,
  selectCity,
  selectSort,
  requireAuthorization,
  requireLogout,
  setUsername,
  redirectToRoute
} from '../store/action';


export enum ActionType {
  SelectCity = 'offers/selectCity',
  SelectSort = 'offers/selectSort',
  LoadOffers = 'data/loadOffers',
  LoadReviews = 'data/loadReviews',
  LoadNearbyOffers = 'data/loadNearbyOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetUsername = 'user/setUsername',
  RedirectToRoute = 'offers/redirectToRoute'
}

export type Actions =
  | ReturnType<typeof selectCity>
  | ReturnType<typeof selectSort>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof loadReviews>
  | ReturnType<typeof loadNearbyOffers>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof setUsername>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
