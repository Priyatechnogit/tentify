import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import BookingCard from "../../components/BookingCard";
import BottomNav from "../../components/BottomNav";
import {
  PageWrapper,
  PageHeader,
  BackButton,
  PageTitle,
  TabRow,
  Tab,
  BookingList,
  EmptyState,
  EmptyStateIcon,
  EmptyStateText,
  EmptyStateSubText,
  ErrorMessage,
  LoadingMessage,
} from "../../styles/BookingPageStyled";

export default function BookingsPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = useState("upcoming");

  const { data: bookings, error, isLoading } = useSWR("/api/bookings");

  if (status === "loading") {
    return (
      <PageWrapper>
        <LoadingMessage>Loading...</LoadingMessage>
        <BottomNav />
      </PageWrapper>
    );
  }

  if (!session) {
    router.push("/api/auth/signin");
    return null;
  }

  const now = new Date();

  const upcomingBookings = bookings
    ? bookings.filter((booking) => new Date(booking.date) >= now)
    : [];

  const pastBookings = bookings
    ? bookings.filter((booking) => new Date(booking.date) < now)
    : [];

  const displayedBookings =
    activeTab === "upcoming" ? upcomingBookings : pastBookings;

  if (isLoading) {
    return (
      <PageWrapper>
        <LoadingMessage>Loading bookings...</LoadingMessage>
        <BottomNav />
      </PageWrapper>
    );
  }

  if (error) {
    return (
      <PageWrapper>
        <ErrorMessage>Something went wrong. Please try again.</ErrorMessage>
        <BottomNav />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <PageHeader>
        <BackButton
          onClick={() => router.push("/")}
          aria-label="Back to home page"
        >
          ←
        </BackButton>
        <PageTitle>My Bookings</PageTitle>
      </PageHeader>

      <TabRow>
        <Tab
          $active={activeTab === "upcoming"}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming
        </Tab>
        <Tab
          $active={activeTab === "past"}
          onClick={() => setActiveTab("past")}
        >
          Past
        </Tab>
      </TabRow>

      {displayedBookings.length === 0 ? (
        <EmptyState>
          <EmptyStateIcon>🎪</EmptyStateIcon>
          <EmptyStateText>No {activeTab} bookings</EmptyStateText>
          <EmptyStateSubText>
            {activeTab === "upcoming"
              ? "Book a tent to get started!"
              : "Your past bookings will appear here."}
          </EmptyStateSubText>
        </EmptyState>
      ) : (
        <BookingList>
          {displayedBookings.map((booking) => (
            <li key={booking._id}>
              <BookingCard booking={booking} />
            </li>
          ))}
        </BookingList>
      )}
      <BottomNav />
    </PageWrapper>
  );
}
