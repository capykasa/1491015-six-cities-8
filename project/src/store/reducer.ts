import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';
import { Cities, Sorting } from '../const';
import { offers } from '../mocks/offers';

const initialState = {
  city: Cities[0],
  sort: Sorting[0],
  cityOffers: offers,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SelectCity:
      return { ...state, city: action.payload };
    case ActionType.SelectSort:
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};

export { reducer };
