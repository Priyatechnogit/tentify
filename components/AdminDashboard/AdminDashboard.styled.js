import styled from "styled-components";
import { theme } from "../../styles/theme";

export const DashboardWrapper = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
  padding: ${theme.spacing.large};
`;

export const DashboardTitle = styled.h1`
  font-size: ${theme.fonts.xlarge};
  font-weight: ${theme.fontWeights.black};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.large};
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.medium};
  margin-bottom: ${theme.spacing.large};
`;

export const StatCard = styled.div`
  background-color: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.large};
  padding: ${theme.spacing.large};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.small};
`;

export const StatLabel = styled.span`
  font-size: ${theme.fonts.small};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const StatValue = styled.span`
  font-size: ${theme.fonts.xlarge};
  font-weight: ${theme.fontWeights.black};
  color: ${theme.colors.primary};
`;

export const BookingsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: ${theme.spacing.medium};
  font-size: ${theme.fonts.small};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid ${theme.colors.border};
  background-color: ${theme.colors.surfaceLight};
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${theme.colors.border};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${theme.colors.surfaceLight};
  }
`;

export const TableCell = styled.td`
  padding: ${theme.spacing.medium};
  font-size: ${theme.fonts.body};
  color: ${theme.colors.text};
`;

export const DeleteButton = styled.button`
  padding: 6px ${theme.spacing.medium};
  background-color: transparent;
  color: ${theme.colors.error};
  border: 1px solid ${theme.colors.error};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.fonts.small};
  font-weight: ${theme.fontWeights.bold};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: opacity 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${theme.colors.fullBackground};
  }
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
