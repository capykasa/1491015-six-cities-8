/* eslint-disable no-console */
import { useState } from 'react';
import { Offer } from '../../types/offers';

const url = '';

type PlaceCardProps = {
  offers: Offer;
};

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const { offers } = props;
  const { id, isPremium, previewImage, price, /* rating, */ title, type } = offers;

  const [card, setCard] = useState(0); // Если убрать значение, то требуется обозначить тип. Как это правильно сделать?

  return (
    <article key={id} // *Что-то на бесполезном* =)
      onPointerEnter={() => {
        setCard(id);
        console.log(card); // Как не вызывать card? Или как вызывать? Я же и так сохраняю в card id строчкой выше
      }}
      className="cities__place-card place-card"
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={url}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={url}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
