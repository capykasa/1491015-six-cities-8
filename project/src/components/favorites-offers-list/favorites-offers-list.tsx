import { Offer } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[];
}

const url = '';

function FvoritesOffersList({ offers }: OffersListProps): JSX.Element {
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);
  const favoritesParisOffers = favoritesOffers.filter((offer) => offer.city.name === 'Paris');
  const favoritesCologneOffers = favoritesOffers.filter((offer) => offer.city.name === 'Cologne');
  const favoritesBrusselsOffers = favoritesOffers.filter((offer) => offer.city.name === 'Brussele');
  const favoritesAmsterdamOffers = favoritesOffers.filter((offer) => offer.city.name === 'Amsterdam');
  const favoritesHumburgOffers = favoritesOffers.filter((offer) => offer.city.name === 'Humburg');
  const favoritesDusseldorfOffers = favoritesOffers.filter((offer) => offer.city.name === 'Dusseldorf');

  return (
    <ul className="favorites__list">
      {favoritesParisOffers.length > 0 ?
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href={url}>
                <span>Paris</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoritesParisOffers.map((item: Offer) => (
              <article key={item.id}
                className="favorites__card place-card"
              >
                <div className="favorites__image-wrapper place-card__image-wrapper">
                  <a href={url}>
                    <img className="place-card__image" src={item.previewImage} width="150" height="110" alt="Place" />
                  </a>
                </div>
                <PlaceCard
                  offers={item}
                />
              </article>
            ))}
          </div>
        </li> : ''}
      {favoritesCologneOffers.length > 0 ?
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href={url}>
                <span>Cologne</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoritesCologneOffers.map((item: Offer) => (
              <article key={item.id}
                className="favorites__card place-card"
              >
                <div className="favorites__image-wrapper place-card__image-wrapper">
                  <a href={url}>
                    <img className="place-card__image" src={item.previewImage} width="150" height="110" alt="Place" />
                  </a>
                </div>
                <PlaceCard
                  offers={item}
                />
              </article>
            ))}
          </div>
        </li> : ''}
      {favoritesBrusselsOffers.length > 0 ?
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href={url}>
                <span>Brussele</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoritesBrusselsOffers.map((item: Offer) => (
              <article key={item.id}
                className="favorites__card place-card"
              >
                <div className="favorites__image-wrapper place-card__image-wrapper">
                  <a href={url}>
                    <img className="place-card__image" src={item.previewImage} width="150" height="110" alt="Place" />
                  </a>
                </div>
                <PlaceCard
                  offers={item}
                />
              </article>
            ))}
          </div>
        </li> : ''}
      {favoritesAmsterdamOffers.length > 0 ?
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href={url}>
                <span>Amsterdam</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoritesAmsterdamOffers.map((item: Offer) => (
              <article key={item.id}
                className="favorites__card place-card"
              >
                <div className="favorites__image-wrapper place-card__image-wrapper">
                  <a href={url}>
                    <img className="place-card__image" src={item.previewImage} width="150" height="110" alt="Place" />
                  </a>
                </div>
                <PlaceCard
                  offers={item}
                />
              </article>
            ))}
          </div>
        </li> : ''}
      {favoritesHumburgOffers.length > 0 ?
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href={url}>
                <span>Humburg</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoritesHumburgOffers.map((item: Offer) => (
              <article key={item.id}
                className="favorites__card place-card"
              >
                <div className="favorites__image-wrapper place-card__image-wrapper">
                  <a href={url}>
                    <img className="place-card__image" src={item.previewImage} width="150" height="110" alt="Place" />
                  </a>
                </div>
                <PlaceCard
                  offers={item}
                />
              </article>
            ))}
          </div>
        </li> : ''}
      {favoritesDusseldorfOffers.length > 0 ?
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href={url}>
                <span>Dusseldor</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoritesDusseldorfOffers.map((item: Offer) => (
              <article key={item.id}
                className="favorites__card place-card"
              >
                <div className="favorites__image-wrapper place-card__image-wrapper">
                  <a href={url}>
                    <img className="place-card__image" src={item.previewImage} width="150" height="110" alt="Place" />
                  </a>
                </div>
                <PlaceCard
                  offers={item}
                />
              </article>
            ))}
          </div>
        </li> : ''}
    </ul>
  );
}

export default FvoritesOffersList;
