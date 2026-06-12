import { useState } from "react";
import { useRouter } from "next/router";
import {
  PageWrapper,
  Header,
  BackButton,
  CategoryBadge,
  FormContent,
  Section,
  SectionLabel,
  DateRow,
  DateButton,
  DateDay,
  DateNumber,
  GuestCounter,
  CounterButton,
  GuestCount,
  GuestCapacityText,
  TimeSlotSelect,
  PriceSummaryBox,
  PriceSummaryTitle,
  PriceRow,
  PriceLabel,
  PriceValue,
  Divider,
  TotalLabel,
  TotalValue,
  ConfirmButton,
  ErrorMessage,
  DateSectionLabel,
} from "./BookingForm.styled";

const TIME_SLOTS = [
  "11:00 AM – 2:00 PM",
  "2:00 PM – 5:00 PM",
  "6:00 PM – 9:30 PM",
];

function generateUpcomingDates() {
  const dates = [];
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const today = new Date();

  for (let i = 0; i < 6; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push({
      label: dayNames[date.getDay()],
      number: date.getDate(),
      fullDate: date,
    });
  }
  return dates;
}

export default function BookingForm({ tent }) {
  const router = useRouter();
  const dates = generateUpcomingDates();

  const [selectedDate, setSelectedDate] = useState(dates[0].fullDate);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(TIME_SLOTS[0]);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const totalPrice = numberOfGuests * tent.pricePerPerson;

  function handleDecreaseGuests() {
    setNumberOfGuests((previousCount) => Math.max(1, previousCount - 1));
  }

  function handleIncreaseGuests() {
    setNumberOfGuests((previousCount) =>
      Math.min(tent.capacity, previousCount + 1)
    );
  }

  async function handleSubmit() {
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tentId: tent._id,
          date: selectedDate,
          timeSlot: selectedTimeSlot,
          numberOfGuests,
          totalPrice,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to confirm booking");
      }

      router.push("/?bookingSuccess=true");
    } catch (error) {
      setSubmissionError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <PageWrapper>
      <Header>
        <BackButton
          onClick={() => router.back()}
          aria-label="Go back to tent details"
        >
          ← {tent.name}
        </BackButton>
        <CategoryBadge $category={tent.category}>{tent.category}</CategoryBadge>
      </Header>

      <FormContent>
        <Section>
          <DateSectionLabel>📅 Select Date</DateSectionLabel>
          <DateRow>
            {dates.map((date) => (
              <DateButton
                key={date.number}
                $selected={
                  selectedDate.toDateString() === date.fullDate.toDateString()
                }
                onClick={() => setSelectedDate(date.fullDate)}
                aria-label={`Select ${date.label} ${date.number}`}
              >
                <DateDay>{date.label}</DateDay>
                <DateNumber>{date.number}</DateNumber>
              </DateButton>
            ))}
          </DateRow>
        </Section>

        <Section>
          <SectionLabel htmlFor="time-slot-select">
            🕐 Select Time Slot
          </SectionLabel>
          <TimeSlotSelect
            id="time-slot-select"
            value={selectedTimeSlot}
            onChange={(event) => setSelectedTimeSlot(event.target.value)}
          >
            {TIME_SLOTS.map((timeSlot) => (
              <option key={timeSlot} value={timeSlot}>
                {timeSlot}
              </option>
            ))}
          </TimeSlotSelect>
        </Section>

        <Section>
          <DateSectionLabel>👥 Number of Guests</DateSectionLabel>
          <GuestCounter>
            <CounterButton
              onClick={handleDecreaseGuests}
              disabled={numberOfGuests <= 1}
              aria-label="Decrease guests"
            >
              −
            </CounterButton>
            <GuestCount>{numberOfGuests}</GuestCount>
            <CounterButton
              onClick={handleIncreaseGuests}
              disabled={numberOfGuests >= tent.capacity}
              aria-label="Increase guests"
            >
              +
            </CounterButton>
          </GuestCounter>
          <GuestCapacityText>
            Maximum capacity: {tent.capacity}
          </GuestCapacityText>
        </Section>

        <PriceSummaryBox>
          <PriceSummaryTitle>Price Summary</PriceSummaryTitle>
          <PriceRow>
            <PriceLabel>Price per person</PriceLabel>
            <PriceValue>€{Number(tent.pricePerPerson).toFixed(2)}</PriceValue>
          </PriceRow>
          <PriceRow>
            <PriceLabel>Guests</PriceLabel>
            <PriceValue>x{numberOfGuests}</PriceValue>
          </PriceRow>
          <Divider />
          <PriceRow>
            <TotalLabel>Total</TotalLabel>
            <TotalValue>€{totalPrice.toFixed(2)}</TotalValue>
          </PriceRow>
        </PriceSummaryBox>

        {submissionError && <ErrorMessage>{submissionError}</ErrorMessage>}

        <ConfirmButton onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Confirming..." : "Confirm Booking"}
        </ConfirmButton>
      </FormContent>
    </PageWrapper>
  );
}
