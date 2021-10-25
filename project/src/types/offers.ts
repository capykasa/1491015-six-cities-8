type OfferLocation = {
  latitude: number,
  longitude: number,
  zoom: number,
};

type OfferCity = {
  location: OfferLocation,
  name: string,
};

type OfferHost = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
};

export type Offer = {
  bedrooms: number,
  city: OfferCity,
  description: string,
  goods: string[],
  host: OfferHost,
  id: number | string,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: OfferLocation,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
};
