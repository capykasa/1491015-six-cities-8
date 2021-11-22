import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { APIRoute, AppRoute, AuthorizationStatus } from '../../const';
import { api } from '../../services/api';
import { toggleOfferIsFavorite } from '../../store/action';
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

  const history = useHistory();
  const dispatch = useDispatch();

  const changeFavoriteStatus = (offerId: number, favoriteStatus: boolean) => {
    api.post<boolean>(`${APIRoute.Favorite}/${offerId}/${favoriteStatus ? 0 : 1}`)
      .then(() => {
        dispatch(toggleOfferIsFavorite(offerId, !favoriteStatus));
      });
  };

  return (
    <button
      onClick={() => {
        authorizationStatus === AuthorizationStatus.Auth
          ? changeFavoriteStatus(id, isFavorite)
          : history.push(AppRoute.Login);
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
