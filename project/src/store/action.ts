import { ActionType, SelectCity, SelectOffersByCity, SelectSort } from '../types/action';
import { Offer } from '../types/offers';

export const selectCity = (city: string): SelectCity => ({
  type: ActionType.SelectCity,
  payload: city,
});

export const selectSort = (sort: string): SelectSort => ({
  type: ActionType.SelectSort,
  payload: sort,
});

export const selectOffersByCity = (offers: Offer[]): SelectOffersByCity => ({
  type: ActionType.SelectOffersByCity,
  payload: offers,
});
