import { AuthorizationStatus } from '../const';
import { RootState } from '../store/reducer';
import { Offer } from './offers';
import { Review } from './reviews';

export type Offers = {
  city: string,
  sort: string,
};

export type Data = {
  offers: Offer[],
  reviews: Review[],
  nearbyOffers: Offer[],
  nearbyOffersForId: number | null;
};

export type User = {
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  username: string,
}

export type State = RootState;
