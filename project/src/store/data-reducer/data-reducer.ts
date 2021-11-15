import { createReducer } from '@reduxjs/toolkit';
import { Data } from '../../types/state';
import { loadNearbyOffers, loadOffers, loadReviews } from '../action';

const initialState: Data = {
  offers: [],
  reviews: [],
  nearbyOffers: [],
  nearbyOffersForId: null,
};

const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload.offers;
      state.nearbyOffersForId = action.payload.id;
    });
});

export { dataReducer };
