import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.large};
  border: 1px solid ${theme.colors.border};
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${theme.colors.primary};
  }
`;

export const TentImage = styled.img`
  width: 110px;
  height: 90px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const CardContent = styled.div`
  flex: 1;
  padding: ${theme.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

export const TentName = styled.h3`
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text};
  margin: 0;
`;

export const BadgeRow = styled.div`
  display: flex;
  gap: ${theme.spacing.small};
`;

export const CategoryBadge = styled.span`
  background-color: ${({ $category }) =>
    $category === "Indoor"
      ? theme.colors.badgeIndoorBackground
      : theme.colors.badgeOutdoorBackground};
  color: ${({ $category }) =>
    $category === "Indoor"
      ? theme.colors.badgeIndoorText
      : theme.colors.badgeOutdoorText};
  padding: 2px ${theme.spacing.small};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.fonts.small};
  font-weight: ${theme.fontWeights.bold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
`;

export const StatusDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: ${theme.borderRadius.full};
  background-color: ${({ $available }) =>
    $available ? theme.colors.available : theme.colors.full};
`;

export const StatusText = styled.span`
  font-size: ${theme.fonts.small};
  font-weight: ${theme.fontWeights.bold};
  color: ${({ $available }) =>
    $available ? theme.colors.available : theme.colors.full};
`;

export const CapacityText = styled.p`
  font-size: ${theme.fonts.small};
  color: ${theme.colors.textMuted};
  margin: 0;
`;

export const ArrowIcon = styled.span`
  font-size: 20px;
  color: ${theme.colors.textMuted};
  padding-right: ${theme.spacing.medium};
  flex-shrink: 0;
`;

export const BreweryText = styled.p`
  font-size: ${theme.fonts.small};
  color: ${theme.colors.textMuted};
  margin: 0;
`;
