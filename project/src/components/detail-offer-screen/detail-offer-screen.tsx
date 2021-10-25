/* eslint-disable no-console */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { City } from '../../types/cities';
import { Offer } from '../../types/offers';
import { Review } from '../../types/reviews';
import Logo from '../logo/logo';
import MainOffersList from '../main-offers-list/main-offers-list';
import Map from '../map/map';
import PageNotFound from '../page-not-found/page-not-found';
import ReviewsList from '../reviews-list/reviews-list';

type DetailOfferScreenProps = {
  offers: Offer[];
  reviews: Review[];
  cities: City;
}
const NEAR_CARD_COUNT = 3;
const url = '';

const paramToNumber = (id: string): number => parseInt(id.replace(':', ''), 10);

function DetailOfferScreen({ offers, reviews, cities }: DetailOfferScreenProps): JSX.Element {

  const [selectedPoint, setSelectedPoint] = useState<Offer | null>(
    null,
  );

  const onListItemHover = (listItem: Offer | null) => {
    setSelectedPoint(listItem);
  };

  const params = useParams() as { id: string };
  const paramId = paramToNumber(params.id);

  const thisOffer = offers.find((offer) => offer.id === paramId);
  const review = reviews.filter((currentReview) => currentReview.id === paramId);
  let nearOffers = offers.slice();

  if (offers.length > NEAR_CARD_COUNT && thisOffer !== undefined) {
    nearOffers = offers.filter((offer) => offer.id !== thisOffer.id);
    nearOffers.slice(NEAR_CARD_COUNT);
  }

  if (!thisOffer) {
    return <PageNotFound />;
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href={url}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href={url}>
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {thisOffer.images.map((image) => (
                <div
                  key={image}
                  className="property__image-wrapper"
                >
                  <img className="property__image" src={image} alt="studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                {thisOffer.isPremium ?
                  <div className="place-card__mark">
                    <span>Premium</span>
                  </div> : ''}
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {thisOffer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{thisOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {thisOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {thisOffer.bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  {thisOffer.maxAdults}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{thisOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {thisOffer.goods.map((good) => (
                    <li
                      key={good}
                      className="property__inside-item"
                    >
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={thisOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {thisOffer.host.name}
                  </span>
                  <span className="property__user-status">
                    {thisOffer.host.isPro}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {thisOffer.description}
                  </p>
                </div>
              </div>
              <ReviewsList
                reviews={review}
              />
            </div>
          </div>
          <section className="property__map map">
            <Map city={cities} points={nearOffers} selectedPoint={selectedPoint} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <MainOffersList
                offers={nearOffers}
                onListItemHover={onListItemHover}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default DetailOfferScreen;
