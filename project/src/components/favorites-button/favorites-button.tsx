import { useDispatch } from 'react-redux';
import { APIRoute } from '../../const';
import { api } from '../../services/api';
import { fetchOfferAction } from '../../store/api-actions';

type FavoritesButtonProps = {
  id: number;
  isFavorite: boolean;
  width: string;
  height: string;
}

function FavoritesButton(props: FavoritesButtonProps): JSX.Element {
  const { id, isFavorite, width, height } = props;

  const dispatch = useDispatch();

  const changeFavoriteStatus = (offerId: number, favoriteStatus: boolean) => {
    api.post<boolean>(`${APIRoute.Favorite}/${offerId}/${favoriteStatus ? 0 : 1}`)
      .then(() => {
        dispatch(fetchOfferAction());
      });
  };

  return (
    <button
      onClick={() => {
        changeFavoriteStatus(id, isFavorite);
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
