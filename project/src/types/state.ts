import { AuthorizationStatus } from '../const';
import { Offer } from './offers';
import { Review } from './reviews';

export type State = {
  city: string,
  sort: string,
  offers: Offer[],
  reviews: Review[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  username: string | undefined,
};
