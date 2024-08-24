import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<{ $size?: number }>`
  border: 4px solid ${({ theme }) => theme.gray};
  border-top: 4px solid ${({ theme }) => theme.blue};
  border-radius: 50%;
  width: ${({ $size }) => $size || 40}px;
  height: ${({ $size }) => $size || 40}px;
  animation: ${spin} 1s linear infinite;
`;

export const SpinnerWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
`;
