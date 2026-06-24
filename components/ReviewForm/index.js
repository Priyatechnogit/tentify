import { useState } from "react";
import {
  FormWrapper,
  FormTitle,
  StarRow,
  StarButton,
  CommentInput,
  SubmitButton,
  ErrorMessage,
  SuccessMessage,
} from "./ReviewForm.styled";

export default function ReviewForm({ tentId, bookingId }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit() {
    if (rating === 0) {
      setSubmissionError("Please select a star rating.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tentId, bookingId, rating, comment }),
      });

      if (response.status === 409) {
        setSubmissionError("You have already reviewed this booking.");
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      setIsSubmitted(true);
    } catch (error) {
      setSubmissionError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <FormWrapper>
        <SuccessMessage>🍺 Thanks for your review!</SuccessMessage>
      </FormWrapper>
    );
  }

  return (
    <FormWrapper>
      <FormTitle>Leave a Review</FormTitle>
      <StarRow onMouseLeave={() => setHoveredRating(0)}>
        {[1, 2, 3, 4, 5].map((star) => (
          <StarButton
            key={star}
            type="button"
            $filled={star <= (rating > 0 ? rating : hoveredRating)}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            aria-label={`Rate ${star} out of 5`}
          >
            {star <= (rating > 0 ? rating : hoveredRating) ? "★" : "☆"}
          </StarButton>
        ))}
      </StarRow>
      <CommentInput
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="Share your experience (optional)"
        aria-label="Review comment"
        rows={4}
      />
      {submissionError && <ErrorMessage>{submissionError}</ErrorMessage>}
      <SubmitButton
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting}
        aria-label="Submit review"
      >
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </SubmitButton>
    </FormWrapper>
  );
}
