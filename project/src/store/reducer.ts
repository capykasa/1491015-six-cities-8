/* eslint-disable no-console */
import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';
import { Cities, Sorting } from '../const';
import { offers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';

const initialState = {
  city: Cities[3],
  sort: Sorting[0],
  offers,
  reviews,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SelectCity:
      return { ...state, city: action.payload };
    case ActionType.SelectSort:
      return { ...state, sort: action.payload };
    case ActionType.SelectOffersByCity: {
      const cityOffers = offers.filter((offer) => offer.city.name === state.city);
      return { ...state, offers: cityOffers };
    }
    case ActionType.SortOffers: {
      const popular = offers.sort((offerA, offerB) => offerB.rating = offerA.rating); // ПОПРАВИТЬ
      const priceToHigh = offers.sort((offerA, offerB) => offerA.price = offerB.price);
      const priceToLow = offers.sort((offerA, offerB) => offerB.price = offerA.price);
      const topRated = offers.sort((offerA, offerB) => offerB.rating = offerA.rating);

      if (state.sort === Sorting[0]) {
        return { ...state, offers: popular };
      }

      if (state.sort === Sorting[1]) {
        return { ...state, offers: priceToHigh };
      }

      if (state.sort === Sorting[2]) {
        return { ...state, offers: priceToLow };
      }

      if (state.sort === Sorting[3]) {
        return { ...state, offers: topRated };
      }

      return { ...state, offers: action.payload };
    }
    default:
      return state;
  }
};

export { reducer };
