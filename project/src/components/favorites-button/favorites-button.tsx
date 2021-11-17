/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { APIRoute, AppRoute, AuthorizationStatus } from '../../const';
import { api } from '../../services/api';
import { getOffers } from '../../store/data-reducer/selectors';
import { getAuthorizationStatus } from '../../store/user-reducer/selectors';

type FavoritesButtonProps = {
  id: number;
  isFavorite: boolean;
  width: string;
  height: string;
}

function FavoritesButton(props: FavoritesButtonProps): JSX.Element {
  const { id, isFavorite, width, height } = props;

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const offers = useSelector(getOffers);

  const changeFavoriteStatus = (offerId: number, favoriteStatus: boolean) => {
    api.post<boolean>(`${APIRoute.Favorite}/${offerId}/${favoriteStatus ? 0 : 1}`);
    /* .then(() => {
      dispatch(fetchOfferAction());
    }); */
  };

  return (
    <button
      onClick={() => {
        /* const offer = offers.find((item) => item.id === id);
        Object.assign({}, offer?.isFavorite: true); */
        authorizationStatus === AuthorizationStatus.Auth
          ? changeFavoriteStatus(id, isFavorite)
          /* : <Link to={AppRoute.Login}></Link>; */
          : <Redirect to={AppRoute.Login} />;
      }}
      className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
      type="button"
    >
      <svg
        className="place-card__bookmark-icon"
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'To bookmarks' : 'In bookmarks'}</span>
    </button>
  );
}

export default FavoritesButton;
