import styled from "styled-components";

export const Card = styled.div<{ $isHighlighted: boolean }>`
  border: 2px solid
    ${({ theme, $isHighlighted }) =>
      $isHighlighted ? theme.blue : theme.black};
  border-radius: 1rem;
  overflow: hidden;
`;
export const Content = styled.div`
  padding: 1rem;
`;

export const Name = styled.p<{ $isHighlighted: boolean }>`
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ theme, $isHighlighted }) =>
    $isHighlighted ? theme.blue : theme.black};
`;

export const Difficulty = styled.p`
  text-transform: capitalize;
  font-weight: 300;
`;
