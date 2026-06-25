import { useRouter } from "next/router";
import { QRCodeSVG } from "qrcode.react";
import CancelModal from "../CancelModal";
import ReviewForm from "../ReviewForm";
import {
  PageWrapper,
  Content,
  ConfirmedHeading,
  SubText,
  QRCodeWrapper,
  BookingIdText,
  BookingIdValue,
  DetailsCard,
  DetailRow,
  DetailLabel,
  DetailValue,
  CancelButton,
  GoHomeButton,
  ButtonGroup,
  LeaveReviewButton,
} from "./BookingConfirmation.styled";
import { formatDate } from "../../utils/formatDate";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export default function BookingConfirmation({ booking }) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [cancellationError, setCancellationError] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  const bookingUrl = `https://tentify.com/bookings/${booking._id}`;

  const isPastBooking = new Date(booking.date) < new Date();

  async function handleConfirmCancel() {
    setIsCancelling(true);
    setCancellationError(null);

    try {
      const response = await fetch(`/api/bookings/${booking._id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to cancel booking");
      }
      router.push("/?cancellationSuccess=true");
    } catch (error) {
      setCancellationError("Something went wrong. Please try again.");
    } finally {
      setIsCancelling(false);
    }
  }

  return (
    <PageWrapper>
      {showModal && (
        <CancelModal
          onConfirm={handleConfirmCancel}
          onClose={() => setShowModal(false)}
          isCancelling={isCancelling}
          cancellationError={cancellationError}
        />
      )}
      <Content>
        <ConfirmedHeading>Booking Confirmed! 🍺 🎉</ConfirmedHeading>
        <SubText>Your table is reserved.</SubText>

        <QRCodeWrapper>
          <QRCodeSVG value={bookingUrl} size={180} />
        </QRCodeWrapper>

        <BookingIdText>
          Booking ID: <BookingIdValue>{booking._id}</BookingIdValue>
        </BookingIdText>

        <DetailsCard>
          <DetailRow>
            <DetailLabel>Tent</DetailLabel>
            <DetailValue>{booking.tentId?.name ?? "Unknown tent"}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Date</DetailLabel>
            <DetailValue>{formatDate(booking.date)}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Time</DetailLabel>
            <DetailValue>{booking.timeSlot}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Guests</DetailLabel>
            <DetailValue>{booking.numberOfGuests} people</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Total Paid</DetailLabel>
            <DetailValue>€{Number(booking.totalPrice).toFixed(2)}</DetailValue>
          </DetailRow>
        </DetailsCard>

        <ButtonGroup>
          {!isPastBooking && (
            <CancelButton
              onClick={() => setShowModal(true)}
              aria-label="Cancel Booking"
            >
              🗑 Cancel Booking
            </CancelButton>
          )}
          <GoHomeButton
            onClick={() => router.push("/")}
            aria-label="Go to home page"
          >
            Go to Home
          </GoHomeButton>
        </ButtonGroup>
        {isPastBooking && (
          <>
            {showReviewForm ? (
              <ReviewForm
                tentId={booking.tentId?._id}
                bookingId={booking._id}
              />
            ) : (
              <LeaveReviewButton
                onClick={() => setShowReviewForm(true)}
                aria-label="Leave a review for this booking"
              >
                ⭐ Leave a Review
              </LeaveReviewButton>
            )}
          </>
        )}
      </Content>
    </PageWrapper>
  );
}
