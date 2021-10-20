/* eslint-disable no-console */
import { Offer } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offer[];
}

const url = '';

function FvoritesOffersList({ offers }: OffersListProps): JSX.Element {
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);
  const individualCities = Array.from(new Set(favoritesOffers.map((offer) => offer.city.name)));

  return (
    <ul className="favorites__list">
      {individualCities.map((city) => (
        <li
          key={city}
          className="favorites__locations-items"
        >
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href={url}>
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoritesOffers.map((offer: Offer) => {
              if (offer.city.name !== city) {
                return '';
              }
              return (
                <article key={offer.id}
                  className="favorites__card place-card"
                >
                  <div className="favorites__image-wrapper place-card__image-wrapper">
                    <a href={url}>
                      <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place" />
                    </a>
                  </div>
                  <OfferCard
                    offers={offer}
                  />
                </article>);
            },
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FvoritesOffersList;
