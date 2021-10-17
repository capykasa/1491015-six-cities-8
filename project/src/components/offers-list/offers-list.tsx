import { Offer } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  placesCount: number;
  offers: Offer[];
}

function OffersList({ placesCount, offers }: OffersListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => (<PlaceCard offers={item} key={item.id} />))}
    </div>
  );
}

export default OffersList;
