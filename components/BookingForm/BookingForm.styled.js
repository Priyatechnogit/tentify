import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.medium};
  border-bottom: 1px solid ${theme.colors.border};
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.text};
  font-size: ${theme.fonts.medium};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
`;

export const HeaderTentName = styled.span`
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text};
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
`;

export const FormContent = styled.div`
  padding: ${theme.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.large};
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.small};
`;

export const SectionLabel = styled.label`
  font-size: ${theme.fonts.small};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
`;

export const DateRow = styled.div`
  display: flex;
  gap: ${theme.spacing.small};
  overflow-x: auto;
  padding-bottom: ${theme.spacing.xs};
`;

export const DateButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 52px;
  height: 60px;
  border-radius: ${theme.borderRadius.medium};
  border: 1px solid
    ${({ $selected }) =>
      $selected ? theme.colors.primary : theme.colors.border};
  background-color: ${({ $selected }) =>
    $selected ? theme.colors.primary : theme.colors.surface};
  color: ${({ $selected }) =>
    $selected ? theme.colors.background : theme.colors.text};
  cursor: pointer;
  flex-shrink: 0;
`;

export const DateDay = styled.span`
  font-size: ${theme.fonts.small};
  font-weight: ${theme.fontWeights.normal};
`;

export const DateNumber = styled.span`
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.bold};
`;

export const TimeSlotSelect = styled.select`
  width: 100%;
  padding: ${theme.spacing.medium};
  background-color: ${theme.colors.surface};
  color: ${theme.colors.text};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  font-size: ${theme.fonts.medium};
  font-family: inherit;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236B7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${theme.spacing.medium} center;
`;

export const GuestCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.small} ${theme.spacing.medium};
`;

export const CounterButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: ${theme.borderRadius.medium};
  border: 1px solid ${theme.colors.border};
  background-color: ${theme.colors.surfaceLight};
  color: ${theme.colors.text};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const GuestCount = styled.span`
  font-size: ${theme.fonts.xlarge};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text};
`;

export const GuestCapacityText = styled.p`
  font-size: ${theme.fonts.small};
  color: ${theme.colors.textMuted};
  text-align: center;
`;

export const PriceSummaryBox = styled.div`
  background-color: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.small};
`;

export const PriceSummaryTitle = styled.p`
  font-size: ${theme.fonts.small};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceLabel = styled.span`
  font-size: ${theme.fonts.body};
  color: ${theme.colors.textSecondary};
`;

export const PriceValue = styled.span`
  font-size: ${theme.fonts.body};
  color: ${theme.colors.text};
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${theme.colors.border};
`;

export const TotalLabel = styled.span`
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text};
`;

export const TotalValue = styled.span`
  font-size: ${theme.fonts.large};
  font-weight: ${theme.fontWeights.black};
  color: ${theme.colors.primary};
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.medium};
  background-color: ${theme.colors.text};
  color: ${theme.colors.background};
  border: none;
  border-radius: ${theme.borderRadius.medium};
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
  margin-top: ${theme.spacing.small};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  padding: ${theme.spacing.medium};
  background-color: ${theme.colors.fullBackground};
  border: 1px solid ${theme.colors.full};
  border-radius: ${theme.borderRadius.medium};
  color: ${theme.colors.full};
  font-size: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.semibold};
  text-align: center;
`;

export const LoadingMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xlarge};
  font-size: ${theme.fonts.medium};
  color: ${theme.colors.textMuted};
`;
