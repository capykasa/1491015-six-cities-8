import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';
import { Cities, Sorting } from '../const';
import { offers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';

const initialState = {
  city: Cities[0],
  sort: Sorting[0],
  offers: offers.filter((offer) => offer.city.name === 'Paris'), // Выглядит по-дурацки
  reviews,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SelectCity:
      return { ...state, city: action.payload };
    case ActionType.SelectSort: {
      let sortedOffers = offers;

      if (action.payload === Sorting[0]) {
        sortedOffers = state.offers.sort((offerA, offerB) => offerB.rating - offerA.rating); // ПОПРАВИТЬ
      }

      if (action.payload === Sorting[1]) {
        sortedOffers = state.offers.sort((offerA, offerB) => offerA.price - offerB.price);
      }

      if (action.payload === Sorting[2]) {
        sortedOffers = state.offers.sort((offerA, offerB) => offerB.price - offerA.price);
      }

      if (action.payload === Sorting[3]) {
        sortedOffers = state.offers.sort((offerA, offerB) => offerB.rating - offerA.rating);
      }

      return { ...state, sort: action.payload, offers: sortedOffers };
    }
    case ActionType.SelectOffersByCity: {
      const cityOffers = offers.filter((offer) => offer.city.name === state.city);
      return { ...state, offers: cityOffers };
    }
    default:
      return state;
  }
};

export { reducer };
