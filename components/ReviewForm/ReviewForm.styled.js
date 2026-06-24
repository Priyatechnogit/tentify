import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`;

export const FormTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
`;

export const StarRow = styled.div`
  display: flex;
  gap: 8px;
`;

export const StarButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ $filled }) => ($filled ? "#f5a623" : "#555")};
  padding: 0;
  transition: color 0.15s ease;
  transform: ${({ $filled }) => ($filled ? "scale(1.1)" : "scale(1)")};
  transition:
    color 0.15s ease,
    transform 0.15s ease;
`;

export const CommentInput = styled.textarea`
  background-color: #1e1e2e;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 0.75rem;
  color: #fff;
  font-size: 0.95rem;
  resize: none;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: #aaa;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background-color: #f5a623;
  color: #000;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin: 0;
`;

export const SuccessMessage = styled.p`
  text-align: center;
  color: #f5a623;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 0;
`;
