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
  MetaText,
  ArrowIcon,
} from "./TentCard.styled";

export default function TentCard({ tent }) {
  return (
    <Card href={`/tents/${tent._id}`}>
      <TentImage
        src={tent.image}
        alt={tent.name}
        onError={(event) => {
          event.target.src = "/images/tents/placeholder.png";
        }}
      />
      <CardContent>
        <TentName>{tent.name}</TentName>
        <BadgeRow>
          <CategoryBadge $category={tent.category}>
            {tent.category}
          </CategoryBadge>
        </BadgeRow>
        <StatusRow>
          <StatusDot $available={tent.isAvailable} />
          <StatusText $available={tent.isAvailable}>
            {tent.isAvailable ? "Available" : "Full"}
          </StatusText>
        </StatusRow>
        <MetaText>👤 Capacity: {tent.capacity}</MetaText>
        <MetaText>🍺 {tent.brewery}</MetaText>
      </CardContent>
      <ArrowIcon>›</ArrowIcon>
    </Card>
  );
}
