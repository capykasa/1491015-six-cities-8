import {
  loadOffers,
  selectCity,
  selectSort,
  requireAuthorization,
  requireLogout
} from '../store/action';


export enum ActionType {
  SelectCity = 'main/selectCity',
  SelectSort = 'main/selectSort',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type Actions =
  | ReturnType<typeof selectCity>
  | ReturnType<typeof selectSort>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;
