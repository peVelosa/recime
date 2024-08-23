import styled, { keyframes } from "styled-components";

export const Card = styled.div<{ $isHighlight: boolean }>`
  border: 2px solid
    ${({ theme, $isHighlight }) => ($isHighlight ? theme.blue : theme.black)};
  border-radius: 1rem;
  overflow: hidden;
`;

export const SkeletonAnimation = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
`;

export const Skeleton = styled.div`
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 1rem;
  overflow: hidden;
  min-height: 200px;
  min-width: 150px;
  background-color: ${({ theme }) => theme.gray};
  animation: ${SkeletonAnimation} 1s linear infinite alternate;
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const Name = styled.p<{ $isHighlight: boolean }>`
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ theme, $isHighlight }) =>
    $isHighlight ? theme.blue : theme.black};
`;

export const Difficulty = styled.p`
  text-transform: capitalize;
  font-weight: 300;
`;
