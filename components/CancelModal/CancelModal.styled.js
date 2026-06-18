import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const ModalBox = styled.div`
  background-color: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.xlarge};
  padding: ${theme.spacing.large};
  width: 90%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.medium};
`;

export const ModalTitle = styled.h2`
  font-size: ${theme.fonts.large};
  font-weight: ${theme.fontWeights.black};
  color: ${theme.colors.text};
  text-align: center;
`;

export const ModalMessage = styled.p`
  font-size: ${theme.fonts.body};
  color: ${theme.colors.textSecondary};
  text-align: center;
  line-height: 1.6;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.small};
`;

export const ConfirmCancelButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.medium};
  background-color: ${theme.colors.full};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.medium};
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const KeepBookingButton = styled.button`
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

export const ErrorMessage = styled.p`
  font-size: ${theme.fonts.small};
  color: ${theme.colors.full};
  text-align: center;
  font-weight: ${theme.fontWeights.semibold};
`;
