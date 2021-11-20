export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export enum Sorting {
  Popular = 'Popular',
  PriceToHigh = 'Price: low to high',
  PriceToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum FooterLogoSize {
  Width = '64',
  Height = '33',
}

export enum FavoritesButtonSizeMain {
  Width = '18',
  Height = '19',
}

export enum FavoritesButtonSizeDetail {
  Width = '31',
  Height = '33',
}

export enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite'
}

export const URL_MARKER_DEFAULT = '../img/pin.svg';

export const URL_MARKER_CURRENT = '../img/pin-active.svg';
