import { Review } from '../../types/reviews';
import ReviewsList from '../reviews-list/reviews-list';

type ReviewsProps = {
  reviews: Review[];
}

function Reviews({ reviews }: ReviewsProps): JSX.Element {

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList
        reviews={reviews}
      />
    </section >
  );
}

export default Reviews;
