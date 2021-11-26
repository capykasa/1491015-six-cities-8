import Logo from '../logo/logo';
import { useDispatch, useSelector } from 'react-redux';
import HeaderUser from '../header-user/header-user';
import { getFavoriteOffers } from '../../store/data-reducer/selectors';
import EmptyFavoritesList from '../empty-favorites-list/empty-favorites-list';
import { FooterLogoSize } from '../../const';
import FvoritesOffersList from '../favorites-offers-list/favorites-offers-list';
import { useEffect } from 'react';
import { fetchFavoriteOfferAction } from '../../store/api-actions';

function FavoritesScreen(): JSX.Element {

  const favoritesOffers = useSelector(getFavoriteOffers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOfferAction());
  }, [dispatch]);

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
