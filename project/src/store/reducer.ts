/* eslint-disable no-console */
import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';
import { Cities, Sorting } from '../const';
import { offers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';

const initialState = {
  city: Cities[0],
  sort: Sorting.Popular,
  offers: offers.filter((offer) => offer.city.name === 'Paris'), // Выглядит по-дурацки
  reviews,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SelectCity:
      return { ...state, city: action.payload, offers: offers };
    case ActionType.SelectSort: {
      return { ...state, sort: action.payload };
    }
    default:
      return state;
  }
};

export { reducer };
