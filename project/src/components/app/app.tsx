import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import DetailOfferScreen from '../detail-offer-screen/detail-offer-screen';
import PageNotFound from '../page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import { Offer } from '../../types/offers';
import { Review } from '../../types/reviews';
import { City } from '../../types/cities';

type AppScreenProps = {
  offers: Offer[];
  reviews: Review[];
  cities: City;
}

function App({ offers, reviews, cities }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen
            offers={offers}
            cities={cities}
          />
        </Route>
        <Route exact path={AppRoute.Login}>
          <LoginScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen offers={offers} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <DetailOfferScreen
            offers={offers}
            reviews={reviews}
          />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
