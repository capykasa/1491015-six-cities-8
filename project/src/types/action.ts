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
  selectCity,
  selectSort,
  requireAuthorization,
  requireLogout
} from '../store/action';


export enum ActionType {
  SelectCity = 'main/selectCity',
  SelectSort = 'main/selectSort',
  LoadOffers = 'data/loadOffers',
  LoadReviews = 'data/loadReviews',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type Actions =
  | ReturnType<typeof selectCity>
  | ReturnType<typeof selectSort>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof loadReviews>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
