import useSWR from "swr";
import { useRouter } from "next/router";
import BookingForm from "../../../components/BookingForm";
import {
  PageWrapper,
  LoadingMessage,
  ErrorMessage,
} from "../../../components/BookingForm/BookingForm.styled";

export default function BookingPage() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: tent,
    error,
    isLoading,
  } = useSWR(id ? `/api/tents/${id}` : null);

  if (isLoading) {
    return (
      <PageWrapper>
        <LoadingMessage>Loading tent details...</LoadingMessage>
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

  if (!tent) {
    return (
      <PageWrapper>
        <ErrorMessage>Tent not found.</ErrorMessage>
      </PageWrapper>
    );
  }

  return <BookingForm tent={tent} />;
}
