import styled from "styled-components";

export const Button = styled.button<{
  $isSelected: boolean;
  $edge?: "first" | "last";
}>`
  padding: 0.5rem 2rem;
  background-color: ${({ theme }) => theme.white};
  font-weight: 700;
  border: 1px solid;
  border-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.blue : theme.gray};
  ${({ $edge }) => {
    if ($edge === "first") {
      return {
        borderTopLeftRadius: "0.5rem",
        borderBottomLeftRadius: "0.5rem",
      };
    }
    if ($edge === "last") {
      return {
        borderTopRightRadius: "0.5rem",
        borderBottomRightRadius: "0.5rem",
      };
    }
  }}
`;
