import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offer[];
  onListItemHover: (listItemName: number | null) => void;
}

function MainOffersList({ offers, onListItemHover }: OffersListProps): JSX.Element {

  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item: Offer) => (
        <article key={item.id}
          onMouseEnter={() => {
            setActiveCardId(item.id);
            onListItemHover(activeCardId);
          }}
          onMouseLeave={() => {
            setActiveCardId(null);
          }}
          className="cities__place-card place-card"
        >
          {item.isPremium &&
            <div className="place-card__mark">
              <span>Premium</span>
            </div>}
          <div className="cities__image-wrapper place-card__image-wrapper">
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

export default MainOffersList;
