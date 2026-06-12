import { useRouter } from "next/router";
import useSWR from "swr";
import {
  PageWrapper,
  HeroImage,
  HeroWrapper,
  BackButton,
  Content,
  TentHeader,
  TentName,
  CategoryBadge,
  StatusPill,
  StatusDot,
  StatusText,
  Divider,
  InfoGrid,
  InfoItem,
  InfoLabel,
  InfoValue,
  SectionTitle,
  Description,
  PriceRow,
  PriceLabel,
  PriceValue,
  ErrorMessage,
  LoadingMessage,
  BookNowButton,
} from "../../../components/TentDetail/TentDetail.styled";

const fetcher = (url) =>
  fetch(url).then((response) => {
    if (!response.ok) throw new Error("Failed to fetch tent");
    return response.json();
  });

export default function TentDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: tent,
    error,
    isLoading,
  } = useSWR(id ? `/api/tents/${id}` : null, fetcher);

  if (isLoading) {
    return (
      <PageWrapper>
        <LoadingMessage>Loading tent details...</LoadingMessage>
      </PageWrapper>
    );
  }

  if (error) {
    return (
      <PageWrapper>
        <ErrorMessage>Something went wrong. Please try again.</ErrorMessage>
      </PageWrapper>
    );
  }

  if (!tent) {
    return (
      <PageWrapper>
        <ErrorMessage>Tent not found.</ErrorMessage>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <HeroWrapper>
        <BackButton
          onClick={() => router.push("/")}
          aria-label="Back to tent list"
        >
          ←
        </BackButton>
        <HeroImage
          src={tent.image}
          alt={tent.name}
          onError={(event) => {
            event.target.src = "/images/tents/placeholder.png";
          }}
        />
      </HeroWrapper>
      <Content>
        <TentHeader>
          <TentName>{tent.name}</TentName>
          <CategoryBadge $category={tent.category}>
            {tent.category}
          </CategoryBadge>
        </TentHeader>
        <StatusPill $available={tent.isAvailable}>
          <StatusDot $available={tent.isAvailable} />
          <StatusText $available={tent.isAvailable}>
            {tent.isAvailable ? "Available" : "Full"}
          </StatusText>
        </StatusPill>
        <Divider />
        <InfoGrid>
          <InfoItem>
            <InfoLabel>Capacity</InfoLabel>
            <InfoValue>{tent.capacity} people</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Type</InfoLabel>
            <InfoValue>{tent.category}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Brewery</InfoLabel>
            <InfoValue>{tent.brewery}</InfoValue>
          </InfoItem>
        </InfoGrid>
        <Divider />
        <SectionTitle>About This Tent</SectionTitle>
        <Description>{tent.description}</Description>
        <Divider />
        <PriceRow>
          <PriceLabel>Price per person</PriceLabel>
          <PriceValue>€{Number(tent.pricePerPerson).toFixed(2)}</PriceValue>
        </PriceRow>
        <BookNowButton
          onClick={() => router.push(`/tents/${id}/book`)}
          aria-label={`Book a table at ${tent.name}`}
          disabled={!tent.isAvailable}
        >
          {tent.isAvailable ? "Book Now" : "Fully Booked"}
        </BookNowButton>
      </Content>
    </PageWrapper>
  );
}
