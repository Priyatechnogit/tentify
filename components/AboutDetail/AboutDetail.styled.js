import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
  padding-bottom: 64px;
`;

export const PageHeader = styled.header`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.medium};
  padding: ${theme.spacing.medium};
  border-bottom: 1px solid ${theme.colors.border};
`;

export const BackButton = styled.button`
  background: none;
  border: none;
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

export const HeroImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: ${({ $position }) => $position || "center"};
`;

export const Content = styled.div`
  padding: ${theme.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.medium};
`;

export const SectionTitle = styled.h2`
  font-size: ${theme.fonts.large};
  font-weight: ${theme.fontWeights.black};
  color: ${theme.colors.text};
`;

export const SectionText = styled.p`
  font-size: ${theme.fonts.body};
  color: ${theme.colors.textSecondary};
  line-height: 1.7;
`;

export const FunFactBox = styled.div`
  background-color: ${theme.colors.surfaceLight};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.medium};
`;

export const FunFactTitle = styled.p`
  font-size: ${theme.fonts.small};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xs};
`;

export const FunFactText = styled.p`
  font-size: ${theme.fonts.body};
  color: ${theme.colors.textSecondary};
  line-height: 1.6;
`;
