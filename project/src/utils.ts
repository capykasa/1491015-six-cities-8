import { Sorting } from './const';
import { Offer } from './types/offers';
import { Review } from './types/reviews';

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

export const adaptOfferToClient = (item: any): Offer => (
  {
    bedrooms: item['bedrooms'],
    description: item['description'],
    goods: item['goods'],
    id: item['id'],
    images: item['images'],
    price: item['price'],
    rating: item['rating'],
    title: item['title'],
    type: item['type'],
    previewImage: item['preview_image'],
    isFavorite: item['is_favorite'],
    isPremium: item['is_premium'],
    maxAdults: item['max_adults'],

    host: {
      avatarUrl: item.host['avatar_url'],
      id: item.host['id'],
      isPro: item.host['is_pro'],
      name: item.host['name'],
    },

    city: {
      name: item.city['name'],
      location: {
        latitude: item.city.location['latitude'],
        longitude: item.city.location['longitude'],
        zoom: item.city.location['zoom'],
      },
    },

    location: {
      latitude: item.location['latitude'],
      longitude: item.location['longitude'],
      zoom: item.location['zoom'],
    },
  }
);

export const adaptReviewToClient = (item: any): Review => (
  Object.assign(
    {},
    item,
    {
      user: {
        id: item.user['id'],
        isPro: item.user['is_pro'],
        name: item.user['name'],
        avatarUrl: item.user['avatar_url'],
      },
    },
  )
);

/* export const adaptReviewToServer = (item: any): Review => (
  Object.assign(
    {},
    item,
    {
      user: {
        id: item.user['id'],
        is_pro: item.user['isPro'],
        name: item.user['name'],
        avatar_url: item.user['avatarUrl'],
      },
    },
  )
); */
