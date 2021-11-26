import Logo from '../logo/logo';
import HeaderUser from '../header-user/header-user';
import MainOffersList from '../main-offers-list/main-offers-list';
import { Offer } from '../../types/offers';
import Map from '../map/map';
import { useState } from 'react';
import CitiesList from '../cities-list/cities-list';
import SortMenu from '../sort-menu/sort-menu';
import { useDispatch, useSelector } from 'react-redux';
import { selectCity, selectSort } from '../../store/action';
import { getSortedOffers } from '../../utils';
import { getCityName, getSelectSort } from '../../store/offers-reducer/selectors';
import { getOffers } from '../../store/data-reducer/selectors';
import MainOffersEmptyList from '../main-offers-empty-list/main-offers-empty-list';
import { DefaultCity } from '../../const';

function MainScreen(): JSX.Element {

  const city = useSelector(getCityName);
  const sort = useSelector(getSelectSort);
  const sortOffers = useSelector(getOffers).filter((offer) => offer.city.name === city);
  const offers = getSortedOffers(sortOffers, sort);

  const dispatch = useDispatch();

  const hundleSelectSort = (selectedSort: string) => {
    dispatch(selectSort(selectedSort));
  };

  const hundleSelectCity = (selectedCity: string) => {
    dispatch(selectCity(selectedCity));
  };

  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);

  const cityOnMap = offers.length ? offers[0].city.location : DefaultCity;

  const hundleOffersListHover = (OfferList: Offer | undefined) => {
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
          hundleSelectCity={hundleSelectCity}
        />
        {offers.length > 0 ?
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {city}</b>
                <SortMenu
                  hudleSelectSort={hundleSelectSort}
                />
                <MainOffersList
                  offers={offers}
                  hudleOffersListHover={hundleOffersListHover}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={cityOnMap} points={offers} selectedPoint={selectedPoint} />
                </section>
              </div>
            </div>
          </div>
          : <MainOffersEmptyList />}
      </main>
    </div>
  );
}

export default MainScreen;
