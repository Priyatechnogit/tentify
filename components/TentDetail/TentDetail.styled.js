import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;

export const BackButton = styled.button`
  position: absolute;
  top: ${theme.spacing.medium};
  left: ${theme.spacing.medium};
  width: 36px;
  height: 36px;
  border-radius: ${theme.borderRadius.full};
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  color: ${theme.colors.white};
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const HeroWrapper = styled.div`
  position: relative;
`;

export const Content = styled.div`
  padding: ${theme.spacing.medium};
  background-color: ${theme.colors.background};
`;

export const TentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.small};
`;

export const TentName = styled.h1`
  font-size: ${theme.fonts.xlarge};
  font-weight: ${theme.fontWeights.black};
  color: ${theme.colors.text};
  flex: 1;
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
  padding: 4px ${theme.spacing.small};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.fonts.small};
  font-weight: ${theme.fontWeights.bold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 6px;
`;

export const StatusPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  background-color: ${({ $available }) =>
    $available
      ? theme.colors.availableBackground
      : theme.colors.fullBackground};
  border: 1px solid
    ${({ $available }) =>
      $available ? theme.colors.available : theme.colors.full};
  border-radius: ${theme.borderRadius.full};
  padding: 5px 12px;
  margin-bottom: ${theme.spacing.medium};
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

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${theme.colors.border};
  margin: ${theme.spacing.medium} 0;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.medium};
  margin-bottom: ${theme.spacing.medium};
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoLabel = styled.span`
  font-size: ${theme.fonts.small};
  color: ${theme.colors.textMuted};
  font-weight: ${theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const InfoValue = styled.span`
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text};
`;

export const SectionTitle = styled.h2`
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.small};
`;

export const Description = styled.p`
  font-size: ${theme.fonts.body};
  color: ${theme.colors.textSecondary};
  line-height: 1.65;
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.surfaceLight};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.medium};
  margin-bottom: ${theme.spacing.medium};
`;

export const PriceLabel = styled.span`
  font-size: ${theme.fonts.body};
  color: ${theme.colors.textMuted};
`;

export const PriceValue = styled.span`
  font-size: 26px;
  font-weight: ${theme.fontWeights.black};
  color: ${theme.colors.primary};
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xlarge};
  font-size: ${theme.fonts.medium};
  color: ${theme.colors.error};
  font-weight: ${theme.fontWeights.semibold};
`;

export const LoadingMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xlarge};
  font-size: ${theme.fonts.medium};
  color: ${theme.colors.textMuted};
`;

export const BookNowButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.medium};
  background-color: ${({ disabled }) =>
    disabled ? theme.colors.border : theme.colors.primary};
  color: ${({ disabled }) =>
    disabled ? theme.colors.textMuted : theme.colors.background};
  border: none;
  border-radius: ${theme.borderRadius.medium};
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.bold};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  margin-top: ${theme.spacing.small};
`;
