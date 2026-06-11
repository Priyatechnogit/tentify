import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.medium};
  padding: ${theme.spacing.medium};
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
