import { useRouter } from "next/router";
import useSWR from "swr";
import ReviewList from "../../../components/ReviewList";
import WaitlistButton from "../../../components/WaitlistButton";
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
  LocationLink,
} from "../../../components/TentDetail/TentDetail.styled";

export default function TentDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: tent,
    error,
    isLoading,
  } = useSWR(id ? `/api/tents/${id}` : null);

  const {
    data: reviews,
    error: reviewsError,
    isLoading: isReviewsLoading,
  } = useSWR(id ? `/api/reviews/${id}` : null);

  const averageRating =
    reviews && reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : null;

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
          <TentName>
            {tent.name} {averageRating && `⭐ ${averageRating}`}
          </TentName>
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
        <LocationLink
          href="https://maps.google.com/?q=Theresienwiese+Munich"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Theresienwiese location on Google Maps"
        >
          📍 Theresienwiese, Munich
        </LocationLink>
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
          disabled={!tent.isAvailable}
        >
          {tent.isAvailable ? "Book Now" : "Fully Booked"}
        </BookNowButton>
        {!tent.isAvailable && <WaitlistButton tentId={tent._id} />}
        <Divider />
        <SectionTitle>Guest Reviews</SectionTitle>
        {isReviewsLoading ? (
          <LoadingMessage>Loading reviews...</LoadingMessage>
        ) : (
          <ReviewList reviews={reviews} error={reviewsError} />
        )}
      </Content>
    </PageWrapper>
  );
}
