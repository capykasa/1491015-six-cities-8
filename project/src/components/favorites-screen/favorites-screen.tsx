import Logo from '../logo/logo';
import FvoritesOffersList from '../favorites-offers-list/favorites-offers-list';
import { useSelector } from 'react-redux';
import HeaderUser from '../header-user/header-user';
import { getOffers } from '../../store/data-reducer/selectors';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

const footerLogoSize = {
  width: '64',
  height: '33',
} as const;

function FavoritesScreen(): JSX.Element {

  const offers = useSelector(getOffers);

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

      {offers.length > 0 ?
        <FvoritesOffersList
          offers={offers}
        />
        : <FavoritesEmpty />}

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
