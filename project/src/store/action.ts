import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { ActionType } from '../types/action';
import { Offer } from '../types/offers';
import { Review } from '../types/reviews';

export const selectCity = createAction(
  ActionType.SelectCity,
  (city: string) => ({
    payload: city,
  }),
);

export const selectSort = createAction(
  ActionType.SelectSort,
  (sort: string) => ({
    payload: sort,
  }),
);

export const loadOffers = createAction(
  ActionType.LoadOffers,
  (offers: Offer[]) => ({
    payload: offers,
  }),
);

export const loadNearbyOffers = createAction(
  ActionType.LoadNearbyOffers,
  (offers: Offer[], id: number) => ({
    payload: { offers, id },
  }),
);

export const loadReviews = createAction(
  ActionType.LoadReviews,
  (reviews: Review[]) => ({
    payload: reviews,
  }),
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const setUsername = createAction(
  ActionType.SetUsername,
  (name: string) => ({
    payload: name,
  }),
);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);
