import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { User } from '../../types/state';
import { requireAuthorization, requireLogout, setUsername } from '../action';

const initialState: User = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  username: '',
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(setUsername, (state, action) => {
      state.username = action.payload;
    });
});

export { userReducer };
