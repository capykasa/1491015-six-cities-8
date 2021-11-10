/* eslint-disable no-console */
import Logo from '../logo/logo';
import HeaderUser from '../header-user/header-user';
import MainOffersList from '../main-offers-list/main-offers-list';
import { Offer } from '../../types/offers';
import Map from '../map/map';
import { useState } from 'react';
import CitiesList from '../cities-list/cities-list';
import SortMenu from '../sort-menu/sort-menu';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { Actions } from '../../types/action';
import { State } from '../../types/state';
import { selectCity, selectSort } from '../../store/action';
import { getSortedOffers } from '../../utils';
import { cities } from '../../mocks/cities';

const mapStateToProps = ({ city, sort, offers, reviews, nearbyOffers }: State) => {
  const sortOffers = offers.filter((offer) => offer.city.name === city);

  return {
    city,
    sort,
    offers: getSortedOffers(sortOffers, sort),
    reviews: [],
    nearbyOffers: [],
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSelectSort(sort: string) {
    dispatch(selectSort(sort));
  },
  onSelectCity(city: string) {
    dispatch(selectCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainScreen(props: PropsFromRedux): JSX.Element {
  const { city, offers, onSelectCity, onSelectSort } = props;

  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);

  const cityOnMap = offers.length ? offers[0].city.location : cities;

  const onOffersListHover = (OfferList: Offer | undefined) => {
    setSelectedPoint(OfferList);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <HeaderUser />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
          city={city}
          onSelectCity={onSelectCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city}</b>
              <SortMenu
                onSelectSort={onSelectSort}
              />
              <MainOffersList
                offers={offers}
                onOffersListHover={onOffersListHover}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={cityOnMap} points={offers} selectedPoint={selectedPoint} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { MainScreen };
export default connector(MainScreen);
