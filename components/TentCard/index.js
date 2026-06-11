import { useRouter } from "next/router";
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
  BreweryText,
  ArrowIcon,
} from "./TentCard.styled";

export default function TentCard({ tent }) {
  const router = useRouter();

  function handleClick() {
    router.push(`/tents/${tent.id}`);
  }
  return (
    <Card onClick={handleClick}>
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
        <CapacityText>👤 Capacity: {tent.capacity}</CapacityText>
        <BreweryText>🍺 {tent.brewery}</BreweryText>
      </CardContent>
      <ArrowIcon>›</ArrowIcon>
    </Card>
  );
}
