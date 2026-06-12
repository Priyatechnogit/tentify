import { useRouter } from "next/router";
import { QRCodeSVG } from "qrcode.react";
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
} from "./BookingConfirmation.styled";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BookingConfirmation({ booking }) {
  const router = useRouter();
  const bookingUrl = `https://tentify.com/bookings/${booking._id}`;

  return (
    <PageWrapper>
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
            <DetailValue>{booking.tentId.name}</DetailValue>
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
          <CancelButton disabled aria-label="Cancel booking - coming soon">
            🗑 Cancel Booking
          </CancelButton>
          <GoHomeButton
            onClick={() => router.push("/")}
            aria-label="Go to home page"
          >
            Go to Home
          </GoHomeButton>
        </ButtonGroup>
      </Content>
    </PageWrapper>
  );
}
