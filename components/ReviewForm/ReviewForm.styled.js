import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`;

export const FormTitle = styled.h3`
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text};
  margin: 0;
`;

export const StarRow = styled.div`
  display: flex;
  gap: 8px;
`;

export const StarButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ $filled }) =>
    $filled ? theme.colors.primary : theme.colors.textMuted};
  padding: 0;
  transition:
    color 0.15s ease,
    transform 0.15s ease;
  transform: ${({ $filled }) => ($filled ? "scale(1.1)" : "scale(1)")};
`;

export const CommentInput = styled.textarea`
  background-color: ${theme.colors.surfaceLight};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  padding: 0.75rem;
  color: ${theme.colors.text};
  font-size: ${theme.fonts.body};
  resize: none;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: ${theme.colors.textMuted};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  border: none;
  border-radius: ${theme.borderRadius.medium};
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.bold};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const ErrorMessage = styled.p`
  color: ${theme.colors.error};
  font-size: ${theme.fonts.body};
  margin: 0;
`;

export const SuccessMessage = styled.p`
  text-align: center;
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.semibold};
  padding: 1rem 0;
`;
