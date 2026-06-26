import styled from "styled-components";
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
  background: linear-gradient(135deg, #0a0e18 0%, #1a2235 100%);
`;

export const PageTitle = styled.h1`
  font-size: 28px;
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

export const PageTagline = styled.p`
  font-size: ${theme.fonts.small};
  color: ${theme.colors.textMuted};
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-align: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  flex: 1;
`;

export const CountdownBanner = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  font-size: ${theme.fonts.small};
  font-weight: ${theme.fontWeights.bold};
  padding: 6px 0;
  z-index: 100;
  overflow: hidden;
  white-space: nowrap;

  span {
    display: inline-block;
    animation: marquee 20s linear infinite;
  }

  @keyframes marquee {
    from {
      transform: translateX(100vw);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    span {
      animation: none;
    }
  }
`;
