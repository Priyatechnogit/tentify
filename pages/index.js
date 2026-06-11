import useSWR from "swr";
import TentList from "../components/TentList";
import { PageWrapper, PageHeader, PageTitle } from "../styles/HomePageStyled";

const fetcher = (url) =>
  fetch(url).then((response) => {
    if (!response.ok) throw new Error("Failed to fetch tents");
    return response.json();
  });

export default function HomePage() {
  const { data: tents, error, isLoading } = useSWR("/api/tents", fetcher);

  return (
    <PageWrapper>
      <PageHeader>
        <PageTitle>Oktoberfest 2026 🍺</PageTitle>
      </PageHeader>
      <TentList tents={tents} isLoading={isLoading} error={error} />
    </PageWrapper>
  );
}
