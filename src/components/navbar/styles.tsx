import styled from "styled-components";
import * as S from "@/styles/shared/shared-styles";

export const Header = styled.header`
  background-color: ${({ theme }) => theme["light-gray"]};
`;

export const Nav = styled(S.MaxWidthContainer)``;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
`;
