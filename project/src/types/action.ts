//import { Offer } from './offers';

export enum ActionType {
  SelectCity = 'main/selectCity',
  SelectSort = 'main/selectSort',
}

export type SelectCity = {
  type: ActionType.SelectCity;
  payload: string;
};

export type SelectSort = {
  type: ActionType.SelectSort;
  payload: string;
};

export type Actions =
  | SelectCity
  | SelectSort;
