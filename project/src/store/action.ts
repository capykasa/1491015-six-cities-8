import { ActionType, SelectCity } from '../types/action';
import { Offer } from '../types/offers';

export const selectCity = (offers: Offer[]): SelectCity => ({
  type: ActionType.SelectCity,
  payload: offers,
});
