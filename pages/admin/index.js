import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import useSWR from "swr";
import AdminDashboard from "../../components/AdminDashboard";

const ADMIN_USERNAME = "Priyatechnogit";

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session || session.user.name !== ADMIN_USERNAME) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
}

export default function AdminPage() {
  const {
    data: bookings,
    error: bookingsError,
    isLoading: isBookingsLoading,
    mutate: mutateBookings,
  } = useSWR("/api/admin/bookings");

  const {
    data: stats,
    error: statsError,
    isLoading: isStatsLoading,
    mutate: mutateStats,
  } = useSWR("/api/admin/stats");

  return (
    <AdminDashboard
      bookings={bookings}
      stats={stats}
      bookingsError={bookingsError}
      statsError={statsError}
      isLoading={isBookingsLoading || isStatsLoading}
      mutateBookings={mutateBookings}
      mutateStats={mutateStats}
    />
  );
}
