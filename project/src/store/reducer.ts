import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';
import { Cities } from '../const';
import { offers } from '../mocks/offers';

const initialState = {
  city: Cities.Paris,
  offers: offers,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SelectCity:
      return { ...state, city: state.city = action.type };
    default:
      return state;
  }
};

export { reducer };
