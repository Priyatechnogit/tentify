import styled from "styled-components";

export const StarContainer = styled.div`
  display: flex;
  gap: 2px;
`;

export const Star = styled.span`
  font-size: 1.2rem;
  color: ${({ $filled }) => ($filled ? "#f5a623" : "#aaa")};
`;
