import Logo from '../logo/logo';
import FvoritesOffersList from '../favorites-offers-list/favorites-offers-list';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';

const url = '';

const mapStateToProps = ({ offers }: State) => ({
  offers,
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
            <FvoritesOffersList
              offers={offers}
            />
          </section>
        </div>
      </main >
    </div >
  );
}

export default connector(FavoritesScreen);
