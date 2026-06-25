import styled from "styled-components";
import Link from "next/link";
import { theme } from "../../styles/theme";

export const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background-color: ${theme.colors.surface};
  border-top: 1px solid ${theme.colors.border};
  z-index: 50;
`;

export const NavLink = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: ${theme.spacing.small} 0;
  text-decoration: none;
  color: ${({ $active }) =>
    $active ? theme.colors.text : theme.colors.textMuted};
  transition: color 0.2s ease;
`;

export const NavIcon = styled.span`
  font-size: 18px;
`;

export const NavLabel = styled.span`
  font-size: ${theme.fonts.small};
  font-weight: ${({ $active }) =>
    $active ? theme.fontWeights.bold : theme.fontWeights.normal};
`;

export const ActiveIndicator = styled.span`
  width: 28px;
  height: 2px;
  background-color: ${({ $active }) =>
    $active ? theme.colors.primary : "transparent"};
  border-radius: ${theme.borderRadius.full};
  transition: background-color 0.2s ease;
`;
