import TentCard from "../TentCard";
import {
  ListContainer,
  EmptyState,
  EmptyStateIcon,
  EmptyStateText,
  EmptyStateSubText,
  ErrorMessage,
  LoadingMessage,
} from "./TentList.styled";

export default function TentList({ tents, isLoading, error }) {
  if (isLoading) {
    return <LoadingMessage>Loading tents...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>Something went wrong. Please try again.</ErrorMessage>;
  }

  if (!tents || tents.length === 0) {
    return (
      <EmptyState>
        <EmptyStateIcon>⛺</EmptyStateIcon>
        <EmptyStateText>No tents found</EmptyStateText>
        <EmptyStateSubText>Please check back later</EmptyStateSubText>
      </EmptyState>
    );
  }

  return (
    <ListContainer>
      {tents.map((tent) => (
        <TentCard key={tent._id} tent={tent} />
      ))}
    </ListContainer>
  );
}
