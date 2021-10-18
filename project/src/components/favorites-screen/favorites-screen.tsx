import Logo from '../logo/logo';
import { Offer } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

const url = '';

type OffersListProps = {
  offers: Offer[];
}

// СОЗДАТЬ НОВЫЙ КОМПОНЕНТ ПО ТИПУ main-offers-list И ОТОБРАЗИТЬ КАРТОЧКИ ПО ГОРОДАМ

function FavoritesScreen({ offers }: OffersListProps): JSX.Element {
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <div className="page">
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href={url}>
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {favoritesOffers.map((item: Offer) => (
                    <article key={item.id}
                      className="favorites__card place-card"
                    >
                      <div className="favorites__image-wrapper place-card__image-wrapper">
                        <a href={url}>
                          <img className="place-card__image" src={item.previewImage} width="150" height="110" alt="Place" />
                        </a>
                      </div>
                      <PlaceCard
                        offers={item}
                      />
                    </article>
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default FavoritesScreen;
