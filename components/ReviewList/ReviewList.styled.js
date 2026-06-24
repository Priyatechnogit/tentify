import styled from "styled-components";

export const ReviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`;

export const ReviewCard = styled.div`
  background: #1e1e2e;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ReviewOwner = styled.span`
  font-size: 0.85rem;
  color: #aaa;
`;

export const ReviewDate = styled.span`
  font-size: 0.8rem;
  color: #aaa;
`;

export const ReviewComment = styled.p`
  font-size: 0.95rem;
  color: #fff;
  margin: 0;
`;

export const EmptyStateText = styled.p`
  text-align: center;
  color: #aaa;
  font-size: 0.95rem;
  padding: 2rem 0;
`;

export const ErrorText = styled.p`
  text-align: center;
  color: #e74c3c;
  font-size: 0.95rem;
  padding: 2rem 0;
`;
