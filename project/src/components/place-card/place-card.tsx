import { useHistory } from 'react-router-dom';
import { Offer } from '../../types/offers';

const url = '';

type PlaceCardProps = {
  offers: Offer;
};

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const { offers } = props;
  const { id, isFavorite, price, title, type } = offers;

  const history = useHistory(); // Не очень понял что это и как должно работать. Работает плохо, собственно.

  return (
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: '80%' }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a
          onClick={(evt) => {
            evt.preventDefault();
            history.push(`/offer/:${id}`);
          }}
          href={url}
        >
          {title}
        </a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  );
}

export default PlaceCard;
