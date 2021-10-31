import { Offer } from './offers';

export enum ActionType {
  SelectCity = 'main/selectCity',
  SortOffers = 'main/sortOffers',
}

export type SelectCity = {
  type: ActionType.SelectCity;
  payload: Offer[];
};

export type Actions = SelectCity;
