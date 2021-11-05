import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';
import { AuthorizationStatus, Cities, Sorting } from '../const';
import { offers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';

const initialState = {
  city: Cities[0],
  sort: Sorting.Popular,
  offers: [],
  reviews,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SelectCity:
      return { ...state, city: action.payload, offers };
    case ActionType.SelectSort: {
      return { ...state, sort: action.payload };
    }
    case ActionType.LoadOffers:
      return { ...state, offers };
    case ActionType.RequireAuthorization:
      return { ...state, authorizationStatus: action.payload };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    default:
      return state;
  }
};

export { reducer };
