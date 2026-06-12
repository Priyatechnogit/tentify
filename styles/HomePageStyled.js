import styled from "styled-components";
import { theme } from "./theme";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

export const PageHeader = styled.header`
  padding: ${theme.spacing.medium};
  border-bottom: 1px solid ${theme.colors.border};
`;

export const PageTitle = styled.h1`
  font-size: ${theme.fonts.xlarge};
  font-weight: ${theme.fontWeights.black};
  color: ${theme.colors.primary};
  text-align: center;
`;

export const SuccessBanner = styled.div`
  background-color: ${theme.colors.availableBackground};
  border: 1px solid ${theme.colors.available};
  border-radius: ${theme.borderRadius.medium};
  color: ${theme.colors.available};
  font-size: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.semibold};
  padding: ${theme.spacing.medium};
  margin: ${theme.spacing.medium};
  text-align: center;
`;
