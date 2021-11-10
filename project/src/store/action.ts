import { AppRoute, AuthorizationStatus } from '../const';
import { ActionType } from '../types/action';
import { Offer } from '../types/offers';
import { Review } from '../types/reviews';

export const selectCity = (city: string) => ({
  type: ActionType.SelectCity,
  payload: city,
} as const);

export const selectSort = (sort: string) => ({
  type: ActionType.SelectSort,
  payload: sort,
} as const);

export const loadOffers = (offers: Offer[]) => ({
  type: ActionType.LoadOffers,
  payload: offers,
} as const);

export const loadNearbyOffers = (offers: Offer[]) => ({
  type: ActionType.LoadNearbyOffers,
  payload: offers,
} as const);

export const loadReviews = (reviews: Review[]) => ({
  type: ActionType.LoadReviews,
  payload: reviews,
} as const);

export const loadNewReview = (review: Review) => ({
  type: ActionType.LoadNewReview,
  payload: review,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const setUsername = (name: string) => ({
  type: ActionType.SetUsername,
  payload: name,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);
