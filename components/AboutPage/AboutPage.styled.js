import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
  padding-bottom: 64px;
`;

export const PageHeader = styled.header`
  padding: ${theme.spacing.medium};
  border-bottom: 1px solid ${theme.colors.border};
`;

export const PageTitle = styled.h1`
  font-size: ${theme.fonts.xlarge};
  font-weight: ${theme.fontWeights.black};
  color: ${theme.colors.text};
  text-align: center;
`;

export const SectionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.medium};
  padding: ${theme.spacing.medium};
`;

export const SectionCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.medium};
  background-color: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.large};
  padding: ${theme.spacing.medium};
`;

export const SectionImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: ${theme.borderRadius.medium};
  flex-shrink: 0;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SectionTitle = styled.h2`
  font-size: ${theme.fonts.medium};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text};
`;

export const SectionText = styled.p`
  font-size: ${theme.fonts.small};
  color: ${theme.colors.textMuted};
  line-height: 1.5;
`;
