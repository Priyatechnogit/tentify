import styled from "styled-components";
import Link from "next/link";
import { theme } from "../../styles/theme";

export const Card = styled(Link)`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.large};
  border: 1px solid ${theme.colors.border};
  overflow: hidden;
  text-decoration: none;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${theme.colors.primary};
  }
`;

export const CardImage = styled.img`
  width: 90px;
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

export const StatusBadge = styled.span`
  font-size: ${theme.fonts.small};
  font-weight: ${theme.fontWeights.bold};
  color: ${({ $upcoming }) =>
    $upcoming ? theme.colors.primary : theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const TentName = styled.h3`
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text};
  margin: 0;
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
`;

export const MetaText = styled.p`
  font-size: ${theme.fonts.small};
  color: ${theme.colors.textMuted};
  margin: 0;
`;

export const PriceText = styled.p`
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary};
  margin: 0;
`;

export const ArrowIcon = styled.span`
  font-size: 20px;
  color: ${theme.colors.textMuted};
  padding-right: ${theme.spacing.medium};
  flex-shrink: 0;
`;
