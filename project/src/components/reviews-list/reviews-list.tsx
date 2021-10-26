import { Review } from '../../types/reviews';
import ReviewItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {

  return (
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
  );
}

export default ReviewsList;
