import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 2rem;
  background-color: ${({ theme }) => theme.white};
  font-weight: 700;
  &:hover {
    background-color: ${({ theme }) => theme["light-gray"]};
  }
`;
