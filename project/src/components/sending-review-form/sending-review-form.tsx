/* eslint-disable no-console */
import React, { ChangeEvent, useState } from 'react';
import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { APIRoute } from '../../const';
import { api } from '../../services/api';
import { fetchReviewAction } from '../../store/api-actions';
import { Review, ReviewPost } from '../../types/reviews';

const FORM_SUBMISSION_ERROR = 'No.';
const FORM_SUBMISSION_RULES = 'Min 50 symbols, max 300';
const MIN_SYMBOLS = 50;
const MAX_SYMBOLS = 300;

const STARS = [5, 4, 3, 2, 1];

type SendingReviewFormProps = {
  id: string;
}

function SendingReviewForm(props: SendingReviewFormProps): JSX.Element {
  const { id } = props;

  const [disabledForm, setDisabledForm] = useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>('');
  const [ratingValue, setRatingValue] = useState<number>(0);

  const dispatch = useDispatch();

  const isReviewValid = (text: string, rating: number) => {
    if (text.length < MIN_SYMBOLS || text.length > MAX_SYMBOLS) {
      return false;
    }
    if (!rating) {
      return false;
    }
    return true;
  };

  const onSubmit = (review: ReviewPost, reviewId: string) => {
    api.post<Review>(`${APIRoute.Reviews}/${reviewId}`, review)
      .then(() => {
        dispatch(fetchReviewAction(reviewId));
        setDisabledForm(false);
      })
      .then(() => {
        setCommentText('');
        setRatingValue(0);
      })
      .catch(() => {
        toast.info(FORM_SUBMISSION_ERROR);
      })
      .finally(() => {
        setDisabledForm(false);
      });
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    await setDisabledForm(true);
    evt.preventDefault();

    if (isReviewValid(commentText, ratingValue)) {
      onSubmit(
        {
          rating: ratingValue,
          comment: commentText,
        },
        id);
    } else {
      toast.info(FORM_SUBMISSION_RULES);
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
          setRatingValue(Number(target.value));
        }}
        className="reviews__rating-form form__rating"
      >
        {STARS.map((star) => (
          <React.Fragment
            key={star}
          >
            <input
              disabled={disabledForm}
              className="form__rating-input visually-hidden"
              name="rating"
              value={star}
              id={`${star}-stars`}
              type="radio"
              checked={ratingValue === star} readOnly
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
        onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => {
          setCommentText(target.value);
        }}
        disabled={disabledForm}
        value={commentText}
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
          and describe your stay with
          {commentText.length < MIN_SYMBOLS
            ? <b className="reviews__text-amount"> at least {MIN_SYMBOLS - commentText.length} characters</b>
            : <b className="reviews__text-amount"> no more than {MAX_SYMBOLS - commentText.length} characters</b>}
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isReviewValid(commentText, ratingValue) || disabledForm}
        >Submit
        </button>
      </div>
    </form >
  );
}

export default SendingReviewForm;
