import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import TentList from "../components/TentList";
import FilterBar from "../components/FilterBar";
import BottomNav from "../components/BottomNav";
import {
  PageWrapper,
  PageHeader,
  PageTitle,
  SuccessBanner,
  CancellationBanner,
} from "../styles/HomePageStyled";

export default function HomePage() {
  const router = useRouter();
  const { data: tents, error, isLoading } = useSWR("/api/tents");
  const bookingSuccess = router.query.bookingSuccess === "true";
  const cancellationSuccess = router.query.cancellationSuccess === "true";
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    if (bookingSuccess || cancellationSuccess) {
      const timer = setTimeout(() => {
        router.replace("/", undefined, { shallow: true });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [bookingSuccess, cancellationSuccess, router]);

  const filteredTents = tents
    ? tents.filter((tent) => {
        if (activeFilter === "All") return true;
        if (activeFilter === "Available") return tent.isAvailable;
        return tent.category === activeFilter;
      })
    : [];

  return (
    <PageWrapper>
      <PageHeader>
        <PageTitle>Oktoberfest 2026 🍺</PageTitle>
      </PageHeader>
      {bookingSuccess && (
        <SuccessBanner>
          🎉 Booking confirmed! See you at Oktoberfest!{" "}
        </SuccessBanner>
      )}
      {cancellationSuccess && (
        <CancellationBanner>
          🗑 Booking cancelled successfully!
        </CancellationBanner>
      )}
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <main>
        <TentList tents={filteredTents} isLoading={isLoading} error={error} />
      </main>
      <BottomNav />
    </PageWrapper>
  );
}
