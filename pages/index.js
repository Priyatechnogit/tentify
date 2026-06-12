import { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import TentList from "../components/TentList";
import {
  PageWrapper,
  PageHeader,
  PageTitle,
  SuccessBanner,
} from "../styles/HomePageStyled";

export default function HomePage() {
  const router = useRouter();
  const { data: tents, error, isLoading } = useSWR("/api/tents");
  const bookingSuccess = router.query.bookingSuccess === "true";

  useEffect(() => {
    if (bookingSuccess) {
      const timer = setTimeout(() => {
        router.replace("/", undefined, { shallow: true });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [bookingSuccess]);

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
      <main>
        <TentList tents={tents} isLoading={isLoading} error={error} />
      </main>
    </PageWrapper>
  );
}
