import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type NearOffersListProps = {
  offers: Offer[];
}

function NearOffersList({ offers }: NearOffersListProps): JSX.Element {

  return (
    <div className="near-places__list places__list">
      {offers.map((item: Offer) => (
        <article key={item.id}
          className="near-places__card place-card"
        >
          <div className="near-places__image-wrapper place-card__image-wrapper">
            <Link to={`/offer/${item.id}`}>
              <img className="place-card__image" src={item.previewImage} width="260" height="200" alt="Place" />
            </Link>
          </div>
          <OfferCard
            offers={item}
          />
        </article>
      ))}
    </div>
  );
}

export default NearOffersList;
