import styled from "styled-components";
import { theme } from "./theme";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

export const PageHeader = styled.header`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.medium};
  padding: ${theme.spacing.medium};
  border-bottom: 1px solid ${theme.colors.border};
`;

export const BackButton = styled.button`
  color: ${theme.colors.text};
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${theme.borderRadius.full};
  background-color: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  flex-shrink: 0;
`;

export const PageTitle = styled.h1`
  font-size: ${theme.fonts.xlarge};
  font-weight: ${theme.fontWeights.black};
  color: ${theme.colors.text};
`;

export const TabRow = styled.div`
  display: flex;
  padding: ${theme.spacing.medium};
  gap: ${theme.spacing.small};
  border-bottom: 1px solid ${theme.colors.border};
`;

export const Tab = styled.button`
  flex: 1;
  padding: ${theme.spacing.small} ${theme.spacing.medium};
  border-radius: ${theme.borderRadius.full};
  border: none;
  font-size: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
  background-color: ${({ $active }) =>
    $active ? theme.colors.text : theme.colors.surface};
  color: ${({ $active }) =>
    $active ? theme.colors.background : theme.colors.textMuted};
`;

export const BookingList = styled.ul`
  list-style: none;
  padding: ${theme.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.medium};
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xlarge};
  gap: ${theme.spacing.medium};
`;

export const EmptyStateIcon = styled.span`
  font-size: 48px;
`;

export const EmptyStateText = styled.p`
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text};
`;

export const EmptyStateSubText = styled.p`
  font-size: ${theme.fonts.body};
  color: ${theme.colors.textMuted};
  text-align: center;
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
