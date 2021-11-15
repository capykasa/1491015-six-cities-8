import { createReducer } from '@reduxjs/toolkit';
import { Cities, Sorting } from '../../const';
import { Offers } from '../../types/state';
import { selectCity, selectSort } from '../action';

const initialState: Offers = {
  city: Cities[0],
  sort: Sorting.Popular,
};

const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(selectSort, (state, action) => {
      state.sort = action.payload;
    });
});

export { offersReducer };
