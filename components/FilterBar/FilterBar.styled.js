import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FilterRow = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.small};
  padding: ${theme.spacing.medium};
  flex-wrap: wrap;
`;

export const FilterButton = styled.button`
  flex-shrink: 0;
  padding: 6px ${theme.spacing.medium};
  border-radius: ${theme.borderRadius.full};
  border: 1px solid
    ${({ $active }) => ($active ? theme.colors.text : theme.colors.border)};
  background-color: ${({ $active }) =>
    $active ? theme.colors.text : theme.colors.surface};
  color: ${({ $active }) =>
    $active ? theme.colors.background : theme.colors.textMuted};
  font-size: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
`;
