import useSWR from "swr";
import { useRouter } from "next/router";
import BookingConfirmation from "../../components/BookingConfirmation";
import {
  PageWrapper,
  LoadingMessage,
  ErrorMessage,
} from "../../components/BookingConfirmation/BookingConfirmation.styled";

export default function BookingConfirmationPage() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: booking,
    error,
    isLoading,
  } = useSWR(id ? `/api/bookings/${id}` : null);

  if (isLoading) {
    return (
      <PageWrapper>
        <LoadingMessage>Loading booking details...</LoadingMessage>
      </PageWrapper>
    );
  }

  if (error) {
    return (
      <PageWrapper>
        <ErrorMessage>Something went wrong. Please try again.</ErrorMessage>
      </PageWrapper>
    );
  }

  if (!booking) {
    return (
      <PageWrapper>
        <ErrorMessage>Booking not found.</ErrorMessage>
      </PageWrapper>
    );
  }

  return <BookingConfirmation booking={booking} />;
}
