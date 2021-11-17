import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { fetchNearbyOffersAction, fetchReviewAction } from '../../store/api-actions';
import { getNearbyOffers, getNearbyOffersForId, getOffers, getReviews } from '../../store/data-reducer/selectors';
import { getAuthorizationStatus } from '../../store/user-reducer/selectors';
import FavoritesButton from '../favorites-button/favorites-button';
import HeaderUser from '../header-user/header-user';
import Logo from '../logo/logo';
import Map from '../map/map';
import NearOffersList from '../near-offers-list/near-offers-list';
import PageNotFound from '../page-not-found/page-not-found';
import Reviews from '../reviews/reviews';
import SendingReviewForm from '../sending-review-form/sending-review-form';

const favoritesButtonSize = {
  width: '31',
  height: '33',
} as const;

const paramToNumber = (id: string): number => parseInt(id.replace(':', ''), 10);

function DetailOfferScreen(): JSX.Element {

  const offers = useSelector(getOffers);
  const reviews = useSelector(getReviews);
  const nearbyOffers = useSelector(getNearbyOffers);
  const nearbyOffersForId = useSelector(getNearbyOffersForId);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const dispatch = useDispatch();

  const params = useParams() as { id: string };
  const paramId = paramToNumber(params.id);

  const offer = offers.find((item) => item.id === paramId);

  const isNearbyOffersLoaded = paramId === nearbyOffersForId;

  useEffect(() => {
    dispatch(fetchReviewAction(paramId.toString()));
  }, [paramId, dispatch]);

  useEffect(() => {
    dispatch(fetchNearbyOffersAction(paramId.toString()));
  }, [paramId, dispatch]);

  if (!offer) {
    return <PageNotFound />;
  }

  const offersForMap = nearbyOffers.concat(offer);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <HeaderUser />
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((image) => (
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
              {offer.isPremium ?
                <div className="property__mark">
                  <div className="place-card__mark">
                    <span>Premium</span>
                  </div>
                </div> : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <FavoritesButton
                  id={paramId}
                  isFavorite={offer.isFavorite}
                  width={favoritesButtonSize.width}
                  height={favoritesButtonSize.height}
                />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${offer.rating * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  {offer.maxAdults}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((good) => (
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
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  <span className="property__user-status">
                    {offer.host.isPro}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <Reviews
                reviews={reviews}
              />
              {authorizationStatus === AuthorizationStatus.Auth && <SendingReviewForm id={params.id} />}
            </div>
          </div>
          <section className="property__map map">
            {isNearbyOffersLoaded && <Map city={offer.city.location} points={offersForMap} selectedPoint={offer} />}
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <NearOffersList
                offers={nearbyOffers}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default DetailOfferScreen;
