import { Review } from '../../types/reviews';
import ReviewItem from '../reviews-item/reviews-item';
import SendingReviewForm from '../sending-review-form/sending-review-form';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.length > 0 ?
          reviews.map((currentReview) => (
            <li
              key={currentReview.id}
              className="reviews__item"
            >
              <ReviewItem
                review={currentReview}
              />
            </li>
          )) : ''}
      </ul>
      <SendingReviewForm
        submitForm={() => {
          throw new Error('Function \'submitForm\' isn\'t implemented.');
        }}
      />
    </section >
  );
}

export default ReviewsList;
