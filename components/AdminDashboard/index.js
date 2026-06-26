import { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import {
  DashboardWrapper,
  DashboardTitle,
  StatsGrid,
  StatCard,
  StatLabel,
  StatValue,
  BookingsTable,
  TableHeader,
  TableRow,
  TableCell,
  DeleteButton,
  ErrorMessage,
  LoadingMessage,
} from "./AdminDashboard.styled";

export default function AdminDashboard({
  bookings,
  stats,
  bookingsError,
  statsError,
  isLoading,
  mutateBookings,
  mutateStats,
}) {
  const [deletingId, setDeletingId] = useState(null);

  async function handleDelete(bookingId) {
    setDeletingId(bookingId);

    try {
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete booking");
      }

      mutateBookings();
      mutateStats();
    } catch (error) {
      console.error(error);
    } finally {
      setDeletingId(null);
    }
  }

  if (isLoading) {
    return <LoadingMessage>Loading dashboard...</LoadingMessage>;
  }

  if (bookingsError || statsError) {
    return (
      <ErrorMessage>
        Failed to load dashboard data. Please try again.
      </ErrorMessage>
    );
  }

  return (
    <DashboardWrapper>
      <DashboardTitle>🍺 Admin Dashboard</DashboardTitle>

      <StatsGrid>
        <StatCard>
          <StatLabel>Total Bookings</StatLabel>
          <StatValue>{stats?.totalBookings ?? 0}</StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>Total Revenue</StatLabel>
          <StatValue>€{Number(stats?.totalRevenue ?? 0).toFixed(2)}</StatValue>
        </StatCard>
      </StatsGrid>

      <BookingsTable>
        <thead>
          <tr>
            <TableHeader>Tent</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Time Slot</TableHeader>
            <TableHeader>Guests</TableHeader>
            <TableHeader>Total</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody>
          {bookings?.map((booking) => (
            <TableRow key={booking._id}>
              <TableCell>{booking.tentId?.name ?? "Unknown"}</TableCell>
              <TableCell>{formatDate(booking.date)}</TableCell>
              <TableCell>{booking.timeSlot}</TableCell>
              <TableCell>{booking.numberOfGuests}</TableCell>
              <TableCell>€{Number(booking.totalPrice).toFixed(2)}</TableCell>
              <TableCell>
                <DeleteButton
                  onClick={() => handleDelete(booking._id)}
                  disabled={deletingId === booking._id}
                  aria-label={`Delete booking for ${booking.tentId?.name}`}
                >
                  {deletingId === booking._id ? "Deleting..." : "🗑 Delete"}
                </DeleteButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </BookingsTable>
    </DashboardWrapper>
  );
}
