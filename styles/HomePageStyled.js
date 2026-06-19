import styled from "styled-components";
import Link from "next/link";
import { theme } from "./theme";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

export const PageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.medium};
  border-bottom: 1px solid ${theme.colors.border};
`;

export const PageTitle = styled.h1`
  font-size: ${theme.fonts.xlarge};
  font-weight: ${theme.fontWeights.black};
  color: ${theme.colors.primary};
`;

export const MyBookingsButton = styled(Link)`
  font-size: ${theme.fonts.small};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text};
  text-decoration: none;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.full};
  padding: 6px ${theme.spacing.medium};
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

export const CancellationBanner = styled.div`
  background-color: ${theme.colors.fullBackground};
  border: 1px solid ${theme.colors.full};
  border-radius: ${theme.borderRadius.medium};
  color: ${theme.colors.full};
  font-size: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.semibold};
  padding: ${theme.spacing.medium};
  margin: ${theme.spacing.medium};
  text-align: center;
`;
