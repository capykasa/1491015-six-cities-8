import Logo from '../logo/logo';
import MainOffersList from '../main-offers-list/main-offers-list';
import { Offer } from '../../types/offers';
import { City } from '../../types/cities';
import Map from '../map/map';
import { useState } from 'react';
import CitiesList from '../cities-list/cities-list';
import SortMenu from '../sort-menu/sort-menu';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { Actions } from '../../types/action';
import { State } from '../../types/state';
import { selectCity, selectSort } from '../../store/action';
import { Sorting } from '../../const';

const url = '';

type MainScreenProps = {
  cities: City;
}

const mapStateToProps = ({ city, sort, offers }: State) => {
  const sortOffers = offers.filter((offer) => offer.city.name === city);

  if (sort === Sorting.Popular) {
    sortOffers.sort((offerA, offerB) => offerB.rating - offerA.rating); // ПОПРАВИТЬ
  }

  if (sort === Sorting.PriceToHigh) {
    sortOffers.sort((offerA, offerB) => offerA.price - offerB.price);
  }

  if (sort === Sorting.PriceToLow) {
    sortOffers.sort((offerA, offerB) => offerB.price - offerA.price);
  }

  if (sort === Sorting.TopRated) {
    sortOffers.sort((offerA, offerB) => offerB.rating - offerA.rating);
  }

  return {
    city,
    sort,
    offers: sortOffers,
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
type ConnectedComponentProps = PropsFromRedux & MainScreenProps;

function MainScreen(props: ConnectedComponentProps): JSX.Element {
  const { offers, cities, city, onSelectCity, onSelectSort } = props;

  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);

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
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href={url}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href={url}>
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
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
                <Map city={cities} points={offers} selectedPoint={selectedPoint} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default connector(MainScreen);
