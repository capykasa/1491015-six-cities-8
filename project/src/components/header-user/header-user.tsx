import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getUsername } from '../../store/user-reducer/selectors';

/* const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogoutAction() {
    dispatch(logoutAction());
  },
}); */

function HeaderUser(): JSX.Element {

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const username = useSelector(getUsername);

  const dispatch = useDispatch();

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

                dispatch(logoutAction());
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

export default HeaderUser;
