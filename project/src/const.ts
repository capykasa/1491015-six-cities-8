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

export enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite'
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

export enum DefaultCity {
  title = 'Paris',
  latitude = 48.85661,
  longitude = 2.351499,
  zoom = 13,
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

export enum MarkerUrl {
  DefaultMarker = '../img/pin.svg',
  CurrentMarker = '../img/pin-active.svg',
}

export const PERCENTAGE_FOR_ONE_STAR = 20;
