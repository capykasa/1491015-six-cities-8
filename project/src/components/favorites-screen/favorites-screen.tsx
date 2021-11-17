import Logo from '../logo/logo';
import { useDispatch, useSelector } from 'react-redux';
import HeaderUser from '../header-user/header-user';
import { getOffers } from '../../store/data-reducer/selectors';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import OfferCard from '../offer-card/offer-card';
import { AppRoute, footerLogoSize } from '../../const';
import { Link } from 'react-router-dom';
import { selectCity } from '../../store/action';

function FavoritesScreen(): JSX.Element {

  const offers = useSelector(getOffers);

  const dispatch = useDispatch();

  const onSelectCity = (selectedCity: string) => {
    dispatch(selectCity(selectedCity));
  };

  const favoritesOffers = offers.filter((offer) => offer.isFavorite);
  const individualCities = Array.from(new Set(favoritesOffers.map((offer) => offer.city.name)));

  if (favoritesOffers.length === 0) {
    return <FavoritesEmpty />;
  }

  return (
    <div className="page">
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {individualCities.map((favoriteCity) => (
                <li
                  key={favoriteCity}
                  className="favorites__locations-items"
                >
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link
                        onClick={() => {
                          onSelectCity(favoriteCity);
                        }}
                        className="locations__item-link"
                        to={AppRoute.Main}
                      >
                        <span>{favoriteCity}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoritesOffers.map((offer) => {
                      if (offer.city.name !== favoriteCity) {
                        return '';
                      }
                      return (
                        <article key={offer.id}
                          className="favorites__card place-card"
                        >
                          <div className="favorites__image-wrapper place-card__image-wrapper">
                            <Link to={`/offer/${offer.id}`}>
                              <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place" />
                            </Link>
                          </div>
                          <OfferCard
                            offers={offer}
                          />
                        </article>);
                    },
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer">
        <Logo
          width={footerLogoSize.width}
          height={footerLogoSize.height}
        />
      </footer>
    </div>
  );
}

export default FavoritesScreen;
