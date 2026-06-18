import {
  Card,
  CardImage,
  CardContent,
  StatusBadge,
  TentName,
  MetaRow,
  MetaText,
  PriceText,
  ArrowIcon,
} from "./BookingCard.styled";
import { formatDate } from "../../utils/formatDate";

export default function BookingCard({ booking }) {
  const isUpcoming = new Date(booking.date) >= new Date();
  const tentName = booking.tentId?.name ?? "Unknown tent";
  const tentImage = booking.tentId?.image ?? "/images/tents/placeholder.png";

  return (
    <Card href={`/bookings/${booking._id}`}>
      <CardImage
        src={tentImage}
        alt={tentName}
        onError={(event) => {
          event.target.src = "/images/tents/placeholder.png";
        }}
      />
      <CardContent>
        <StatusBadge $upcoming={isUpcoming}>
          {isUpcoming ? "Upcoming" : "Past"}
        </StatusBadge>
        <TentName>{tentName}</TentName>
        <MetaRow>
          <MetaText>📅 {formatDate(booking.date)}</MetaText>
        </MetaRow>
        <MetaRow>
          <MetaText>🕐 {booking.timeSlot}</MetaText>
        </MetaRow>
        <MetaRow>
          <MetaText>👥 {booking.numberOfGuests} Guests</MetaText>
          <PriceText>€{Number(booking.totalPrice).toFixed(2)}</PriceText>
        </MetaRow>
      </CardContent>
      <ArrowIcon>›</ArrowIcon>
    </Card>
  );
}
