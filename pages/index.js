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

const fetcher = (url) =>
  fetch(url).then((response) => {
    if (!response.ok) throw new Error("Failed to fetch tents");
    return response.json();
  });

export default function HomePage() {
  const router = useRouter();
  const { data: tents, error, isLoading } = useSWR("/api/tents", fetcher);
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
