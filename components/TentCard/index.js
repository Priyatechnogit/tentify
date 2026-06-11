import {
  Card,
  TentImage,
  CardContent,
  TentName,
  BadgeRow,
  CategoryBadge,
  StatusRow,
  StatusDot,
  StatusText,
  CapacityText,
  ArrowIcon,
} from "./TentCard.styled";

export default function TentCard({ tent }) {
  return (
    <Card>
      <TentImage
        src={tent.image}
        alt={tent.name}
        onError={(event) => {
          event.target.src = "/images/placeholder.jpg";
        }}
      />
      <CardContent>
        <TentName>{tent.name}</TentName>
        <BadgeRow>
          <CategoryBadge category={tent.category}>
            {tent.category}
          </CategoryBadge>
        </BadgeRow>
        <StatusRow>
          <StatusDot available={tent.isAvailable} />
          <StatusText available={tent.isAvailable}>
            {tent.isAvailable ? "Available" : "Full"}
          </StatusText>
        </StatusRow>
        <CapacityText>👤 Capacity: {tent.capacity}</CapacityText>
      </CardContent>
      <ArrowIcon>›</ArrowIcon>
    </Card>
  );
}
