import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type NearOffersListProps = {
  offers: Offer[];
  onListItemHover: (listItemName: Offer | null) => void;
}

function NearOffersList({ offers, onListItemHover }: NearOffersListProps): JSX.Element {

  return (
    <div className="near-places__list places__list">
      {offers.map((item: Offer) => (
        <article key={item.id}
          onMouseEnter={() => {
            onListItemHover(item);
          }}
          onMouseLeave={() => {
            onListItemHover(null);
          }}
          className="near-places__card place-card"
        >
          <div className="near-places__image-wrapper place-card__image-wrapper">
            <Link to=''>
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
