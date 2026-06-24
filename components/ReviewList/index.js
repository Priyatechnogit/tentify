import StarRating from "../StarRating";
import {
  ReviewListWrapper,
  EmptyStateText,
  ErrorText,
  ReviewCard,
  ReviewHeader,
  ReviewOwner,
  ReviewDate,
  ReviewComment,
} from "./ReviewList.styled";

export default function ReviewList({ reviews, error }) {
  if (error) {
    return (
      <ReviewListWrapper>
        <ErrorText>Failed to load reviews. Please try again later.</ErrorText>
      </ReviewListWrapper>
    );
  }

  if (!reviews || reviews.length === 0) {
    return (
      <ReviewListWrapper>
        <EmptyStateText>
          🍺 No reviews yet — be the first to share your experience!
        </EmptyStateText>
      </ReviewListWrapper>
    );
  }

  return (
    <ReviewListWrapper>
      {reviews.map((review) => (
        <ReviewCard key={review._id}>
          <ReviewHeader>
            <StarRating rating={review.rating} />
            <ReviewDate>
              {new Date(review.createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </ReviewDate>
          </ReviewHeader>
          <ReviewOwner>{review.owner ?? "Anonymous"}</ReviewOwner>
          {review.comment && <ReviewComment>{review.comment}</ReviewComment>}
        </ReviewCard>
      ))}
    </ReviewListWrapper>
  );
}
