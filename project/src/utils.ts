import { Sorting } from './const';
import { Offer } from './types/offers';

export const getSortedOffers = (offers: Offer[], sort: string): Offer[] => {
  let sortOffers = offers;

  if (sort === Sorting.Popular) {
    sortOffers = offers.sort((offerA, offerB) => offerB.rating - offerA.rating);
  }

  if (sort === Sorting.PriceToHigh) {
    sortOffers = offers.sort((offerA, offerB) => offerA.price - offerB.price);
  }

  if (sort === Sorting.PriceToLow) {
    sortOffers = offers.sort((offerA, offerB) => offerB.price - offerA.price);
  }

  if (sort === Sorting.TopRated) {
    sortOffers = offers.sort((offerA, offerB) => offerB.rating - offerA.rating);
  }
  return sortOffers;
};
