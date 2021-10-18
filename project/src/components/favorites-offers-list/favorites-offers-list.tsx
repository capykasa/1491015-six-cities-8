//import { useState } from 'react';
import { Offer } from '../../types/offers';
//import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  placesCount: number;
  offers: Offer[];
}

function FvoritesOffersList({ placesCount, offers }: OffersListProps): JSX.Element {

  //const [card, setCard] = useState<Offer | number | null>(null);

  return (
    <div className="favorites__places">
      {/* {offers.map((item) => (
        <PlaceCard
          key={item.id}
          offers={item}
          focusCard={() => setCard(card)}
        />))} */}
    </div>
  );
}

export default FvoritesOffersList;
