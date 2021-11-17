import Logo from '../logo/logo';
import { useSelector } from 'react-redux';
import HeaderUser from '../header-user/header-user';
import { getOffers } from '../../store/data-reducer/selectors';
import EmptyFavoritesList from '../empty-favorites-list/empty-favorites-list';
import { FooterLogoSize } from '../../const';
import FvoritesOffersList from '../favorites-offers-list/favorites-offers-list';

function FavoritesScreen(): JSX.Element {

  const offers = useSelector(getOffers);

  const favoritesOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <div className={favoritesOffers.length === 0 ? 'page page--favorites-empty' : 'page'}>
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

      {favoritesOffers.length === 0
        ? <EmptyFavoritesList />
        : <FvoritesOffersList offers={favoritesOffers} />}

      <footer className="footer">
        <Logo
          width={FooterLogoSize.Width}
          height={FooterLogoSize.Height}
        />
      </footer>
    </div>
  );
}

export default FavoritesScreen;
