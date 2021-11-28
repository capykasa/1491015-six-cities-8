import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { selectCity } from '../../store/action';
import { Offer } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offer[];
}

function FavoritesOffersList({ offers }: OffersListProps): JSX.Element {

  const individualCities = Array.from(new Set(offers.map((offer) => offer.city.name)));

  const dispatch = useDispatch();

  const handleSelectCity = (selectedCity: string) => {
    dispatch(selectCity(selectedCity));
  };

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {individualCities.map((favoriteCity) => (
              <li
                key={favoriteCity}
                className="favorites__locations-items"
              >
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link
                      onClick={() => {
                        handleSelectCity(favoriteCity);
                      }}
                      className="locations__item-link"
                      to={AppRoute.Main}
                    >
                      <span>{favoriteCity}</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((offer) => {
                    if (offer.city.name !== favoriteCity) {
                      return '';
                    }
                    return (
                      <article key={offer.id}
                        className="favorites__card place-card"
                      >
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <Link to={`/offer/${offer.id}`}>
                            <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place" />
                          </Link>
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
        </section>
      </div>
    </main>
  );
}

export default FavoritesOffersList;
