import { Link } from 'react-router-dom';
import { FavoritesButtonSizeMain, PERCENTAGE_FOR_ONE_STAR } from '../../const';
import { Offer } from '../../types/offers';
import FavoritesButton from '../favorites-button/favorites-button';

type OfferCardProps = {
  offers: Offer;
};

function OfferCard(props: OfferCardProps): JSX.Element {
  const { offers } = props;
  const { id, isFavorite, price, title, type, rating } = offers;

  return (
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <FavoritesButton
          id={id}
          isFavorite={isFavorite}
          width={FavoritesButtonSizeMain.Width}
          height={FavoritesButtonSizeMain.Height}
        />
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${rating * PERCENTAGE_FOR_ONE_STAR}%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${id}`}>
          {title}
        </Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  );
}

export default OfferCard;
