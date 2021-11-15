import Logo from '../logo/logo';
import FvoritesOffersList from '../favorites-offers-list/favorites-offers-list';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import HeaderUser from '../header-user/header-user';
import { getOffers } from '../../store/data-reducer/selectors';

const mapStateToProps = (state: State) => ({
  offers: getOffers(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FavoritesScreen({ offers }: PropsFromRedux): JSX.Element {

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

export { FavoritesScreen };
export default connector(FavoritesScreen);
