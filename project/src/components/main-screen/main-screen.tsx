/* eslint-disable no-console */
import Logo from '../logo/logo';
import MainOffersList from '../main-offers-list/main-offers-list';
import { Offer } from '../../types/offers';
import { City } from '../../types/cities';
import Map from '../map/map';
import { useState } from 'react';
import CitiesList from '../cities-list/cities-list';

const url = '';

type MainScreenProps = {
  offers: Offer[];
  cities: City;
}

function MainScreen({ offers, cities }: MainScreenProps): JSX.Element {

  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);
  const [selectedCity, setSelectedCity] = useState<string>('Paris');

  const onOffersListHover = (OfferList: Offer | undefined) => {
    setSelectedPoint(OfferList);
  };

  const onCitiesListClick = (CityList: string) => {
    setSelectedCity(CityList);
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
          onCitiesListClick={onCitiesListClick}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {selectedCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
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

export default MainScreen;
