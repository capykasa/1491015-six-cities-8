import Logo from '../logo/logo';
import FvoritesOffersList from '../favorites-offers-list/favorites-offers-list';
import { useSelector } from 'react-redux';
import HeaderUser from '../header-user/header-user';
import { getOffers } from '../../store/data-reducer/selectors';

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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FvoritesOffersList
              offers={offers}
            />
          </section>
        </div>
      </main >
    </div >
  );
}

export default FavoritesScreen;
