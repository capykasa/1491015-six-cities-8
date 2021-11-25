import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-reducer/selectors';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  favorites?: boolean;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { exact, path, render, favorites = false } = props;

  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        // eslint-disable-next-line no-nested-ternary
        favorites
          ? authorizationStatus === AuthorizationStatus.Auth
            ? render()
            : <Redirect to={AppRoute.Login} />
          : authorizationStatus === AuthorizationStatus.NoAuth
            ? render()
            : <Redirect to={AppRoute.Main} />
      )}
    />
  );
}

export default PrivateRoute;
