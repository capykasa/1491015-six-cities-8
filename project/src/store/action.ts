import { ActionType, SelectCity, SelectSort } from '../types/action';
//import { Offer } from '../types/offers';

export const selectCity = (city: string): SelectCity => ({
  type: ActionType.SelectCity,
  payload: city,
});

export const selectSort = (sort: string): SelectSort => ({
  type: ActionType.SelectSort,
  payload: sort,
});
