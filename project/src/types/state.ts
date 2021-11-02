import { Offer } from './offers';
import { Review } from './reviews';

export type State = {
  city: string,
  sort: string,
  offers: Offer[],
  reviews: Review[],
};
