import { StarContainer, Star } from "./StarRating.styled";

export default function StarRating({ rating }) {
  return (
    <StarContainer aria-label={`Rating: ${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} $filled={star <= rating}>
          ★
        </Star>
      ))}
    </StarContainer>
  );
}
