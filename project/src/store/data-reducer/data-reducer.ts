import { ActionType, Actions } from '../../types/action';
import { Data } from '../../types/state';

const initialState: Data = {
  offers: [],
  reviews: [],
  nearbyOffers: [],
  nearbyOffersForId: null,
};

const dataReducer = (state = initialState, action: Actions): Data => {
  switch (action.type) {
    case ActionType.LoadOffers: {
      const offers = action.payload;
      return { ...state, offers };
    }
    case ActionType.LoadReviews: {
      const reviews = action.payload;
      return { ...state, reviews };
    }
    case ActionType.LoadNearbyOffers: {
      const nearbyOffers = action.payload.offers;
      const nearbyOffersForId = action.payload.id;
      return { ...state, nearbyOffers, nearbyOffersForId };
    }
    default:
      return state;
  }
};

export { dataReducer };
