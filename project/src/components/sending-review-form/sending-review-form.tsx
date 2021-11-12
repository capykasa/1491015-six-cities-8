import React from 'react';
import { ChangeEvent, FormEvent, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { loadNewReview } from '../../store/action';
//import { sendComment } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { Review } from '../../types/reviews';
import { State } from '../../types/state';

const STARS = [5, 4, 3, 2, 1];

const mapStateToProps = ({ reviews, username }: State) => ({
  reviews,
  username,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(review: Review, id: string) {
    //(dispatch as ThunkAppDispatch)(sendComment(id));
    dispatch(loadNewReview(review));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function SendingReviewForm(props: PropsFromRedux): JSX.Element {
  const { reviews, username, onSubmit } = props;

  const commentRef = useRef<HTMLTextAreaElement | null>(null);
  let rating: number;                                             // Тут нужен тоже useRef?

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (commentRef.current !== null) {
      onSubmit({
        id: reviews.length + 1,
        user: {
          id: 1, // изменить
          isPro: true, // Понятия не имею
          name: username,
          avatarUrl: 'img/avatar.svg',
        },
        rating: rating,
        comment: commentRef.current.value,
        date: new Date().toString(), // Не тот формат
      }, (reviews.length + 1).toString());
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div
        onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
          rating = Number(target.value);
        }}
        className="reviews__rating-form form__rating"
      >
        {STARS.map((star) => (
          <React.Fragment
            key={star}
          >
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star.toString()}
              id={`${star}-stars`}
              type="radio"
            />
            <label
              htmlFor={`${star}-stars`}
              className="reviews__rating-label form__rating-label"
              title="perfect"
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        ref={commentRef}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        required
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">
            50 characters
          </b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
        >Submit
        </button>
      </div>
    </form >
  );
}

export default connector(SendingReviewForm);
