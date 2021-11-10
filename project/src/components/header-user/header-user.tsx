import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { State } from '../../types/state';

const mapStateToProps = ({ authorizationStatus, username }: State) => ({
  authorizationStatus,
  username,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogoutAction() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function HeaderUser(props: PropsFromRedux): JSX.Element {
  const { authorizationStatus, username, onLogoutAction } = props;

  return (
    <nav className="header__nav">
      {authorizationStatus === AuthorizationStatus.Auth
        ?
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">{username}</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link
              className="header__nav-link"
              onClick={(evt) => {
                evt.preventDefault();

                onLogoutAction();
              }}
              to='/'
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
        :
        <Link
          className="header__nav-link"
          to={AppRoute.Login}
        >
          <span className="header__signout">Sign in</span>
        </Link>}
    </nav>
  );
}

export default connector(HeaderUser);
