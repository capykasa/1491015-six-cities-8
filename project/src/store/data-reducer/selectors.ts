import { Offer } from '../../types/offers';
import { Review } from '../../types/reviews';
import { State } from '../../types/state';
import { NameSpace } from '../reducer';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Data].nearbyOffers;
export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;
export const getNearbyOffersForId = (state: State): number | null => state[NameSpace.Data].nearbyOffersForId;
