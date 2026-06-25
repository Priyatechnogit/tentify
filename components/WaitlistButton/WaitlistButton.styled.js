import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const StyledWaitlistButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.medium};
  background-color: transparent;
  color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.medium};
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.bold};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const SuccessMessage = styled.p`
  text-align: center;
  color: ${theme.colors.available};
  font-size: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.semibold};
  margin: 0;
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: ${theme.colors.error};
  font-size: ${theme.fonts.body};
  margin: 0;
`;
