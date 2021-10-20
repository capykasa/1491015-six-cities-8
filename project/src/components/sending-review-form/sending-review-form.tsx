import { ChangeEvent, FormEvent, useState } from 'react';
import { ReviewComment, ReviewRating } from '../../types/reviews';

type SendingReviewFormProps = {
  submitForm: (comment: ReviewComment, rating: ReviewRating) => void;
}

const STARS = [5, 4, 3, 2, 1];

function SendingReviewForm({ submitForm }: SendingReviewFormProps): JSX.Element {
  const [userComment, setUserComment] = useState({ comment: '' });
  const [userRating, setUserRating] = useState({ rating: 0 });

  return (
    <form
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        submitForm(userComment, userRating);
      }}
      className="reviews__form form" action="#" method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div
        onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
          setUserRating({ rating: Number(target.value) });
        }}
        className="reviews__rating-form form__rating"
      >
        {STARS.map((star) => (
          <>
            <input
              key={star}
              className="form__rating-input visually-hidden" name="rating" value={star.toString()} id={`${star}-stars`} type="radio"
            />
            <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
        ))}
      </div>
      <textarea
        onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => {
          setUserComment({ comment: target.value });
        }}
        className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form >
  );
}

export default SendingReviewForm;
