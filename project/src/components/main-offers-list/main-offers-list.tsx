import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offer[];
  onOffersListHover: (OffersListName: Offer | undefined) => void;
}

function MainOffersList({ offers, onOffersListHover }: OffersListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item: Offer) => (
        <article key={item.id}
          onMouseEnter={() => {
            onOffersListHover(item);
          }}
          onMouseLeave={() => {
            onOffersListHover(undefined);
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
