import styled from "styled-components";
import { theme } from "../../styles/theme";

export const SignInButton = styled.button`
  font-size: ${theme.fonts.small};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.background};
  background-color: ${theme.colors.primary};
  border: none;
  border-radius: ${theme.borderRadius.full};
  padding: 6px ${theme.spacing.medium};
  cursor: pointer;
`;

export const SignOutButton = styled.button`
  font-size: ${theme.fonts.small};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text};
  background-color: transparent;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.full};
  padding: 6px ${theme.spacing.medium};
  cursor: pointer;
`;

export const UserName = styled.span`
  font-size: ${theme.fonts.small};
  color: ${theme.colors.textMuted};
`;

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.small};
`;
