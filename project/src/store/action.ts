import { AuthorizationStatus } from '../const';
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

export const loadReviews = (reviews: Review[]) => ({
  type: ActionType.LoadReviews,
  payload: reviews,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

