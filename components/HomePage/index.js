import useSWR from "swr";
import TentList from "../TentList";
import { PageWrapper, PageHeader, PageTitle } from "./HomePage.styled";

const fetcher = (url) => fetch(url).then((response) => response.json());

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
