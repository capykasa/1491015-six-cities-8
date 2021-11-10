import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';
import { AuthorizationStatus, Cities, Sorting } from '../const';

const initialState = {
  city: Cities[0],
  sort: Sorting.Popular,
  offers: [],
  reviews: [],
  nearbyOffers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  username: '',
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SelectCity:
      return { ...state, city: action.payload };
    case ActionType.SelectSort: {
      return { ...state, sort: action.payload };
    }
    case ActionType.LoadOffers: {
      const offers = action.payload;
      return { ...state, offers };
    }
    case ActionType.LoadReviews: {
      const reviews = action.payload;
      return { ...state, reviews };
    }
    case ActionType.LoadNewReview: {
      const review = action.payload;
      return { ...state, reviews: state.reviews.concat(review) };
    }
    case ActionType.LoadNearbyOffers: {
      const nearbyOffers = action.payload;
      return { ...state, nearbyOffers };
    }
    case ActionType.RequireAuthorization:
      return { ...state, authorizationStatus: action.payload, isDataLoaded: true };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    case ActionType.AddingUsername:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

export { reducer };
