import * as S from "./styles";
import C from "./constants";

const Navbar = () => {
  return (
    <S.Header>
      <S.Nav>
        <S.Title>{C.title}</S.Title>
      </S.Nav>
    </S.Header>
  );
};

export default Navbar;
