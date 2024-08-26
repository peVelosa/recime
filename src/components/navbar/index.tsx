import * as S from "./styles";
import C from "./constants";

/**
 * Display a navbar element.
 */
export const Navbar = () => {
  return (
    <S.Header>
      <S.Nav>
        <S.Title>{C.title}</S.Title>
      </S.Nav>
    </S.Header>
  );
};
