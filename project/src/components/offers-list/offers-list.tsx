//import { useState } from 'react';
import { Offer } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  placesCount: number;
  offers: Offer[];
}
//ВОЗМОЖНО СТОИТ ОТРИСОВАТЬ КАРТОЧКИ КАК В ПРИМЕРЕ ЧЕРЕЗ ВТОРОЙ return ВНУТРИ <div></div> ЧЕРЕЗ map И УЖЕ ТАМ ИСПОЛЬЗОВАТЬ onFocus
function OffersList({ placesCount, offers }: OffersListProps): JSX.Element {

  //const [focus, setFocus] = useState();

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => (<PlaceCard offers={item} key={item.id} />))}
    </div>
  );
}

export default OffersList;
