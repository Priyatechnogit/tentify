import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

export const Content = styled.div`
  padding: ${theme.spacing.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.medium};
`;

export const ConfirmedHeading = styled.h1`
  font-size: ${theme.fonts.xlarge};
  font-weight: ${theme.fontWeights.black};
  color: ${theme.colors.text};
  text-align: center;
`;

export const SubText = styled.p`
  font-size: ${theme.fonts.body};
  color: ${theme.colors.textSecondary};
  text-align: center;
`;

export const QRCodeWrapper = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.large};
  padding: ${theme.spacing.medium};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BookingIdText = styled.p`
  font-size: ${theme.fonts.small};
  color: ${theme.colors.textMuted};
  text-align: center;
`;

export const BookingIdValue = styled.span`
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text};
`;

export const DetailsCard = styled.div`
  width: 100%;
  background-color: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.medium};
  border-bottom: 1px solid ${theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

export const DetailLabel = styled.span`
  font-size: ${theme.fonts.body};
  color: ${theme.colors.textMuted};
`;

export const DetailValue = styled.span`
  font-size: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.text};
`;

export const CancelButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.medium};
  background-color: transparent;
  color: ${theme.colors.full};
  border: 1px solid ${theme.colors.full};
  border-radius: ${theme.borderRadius.medium};
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.bold};
  cursor: not-allowed;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.small};
`;

export const GoHomeButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.medium};
  background-color: transparent;
  color: ${theme.colors.text};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
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

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.small};
`;
