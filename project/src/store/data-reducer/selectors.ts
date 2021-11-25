import { Offer } from '../../types/offers';
import { Review } from '../../types/reviews';
import { State } from '../../types/state';
import { NameSpace } from '../reducer';

export const getOffers = (state: State): Offer[] => state[NameSpace.data].offers;
export const getReviews = (state: State): Review[] => state[NameSpace.data].reviews;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.data].nearbyOffers;
export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.data].favoriteOffers;
export const getNearbyOffersForId = (state: State): number | null => state[NameSpace.data].nearbyOffersForId;
