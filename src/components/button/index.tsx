import { ButtonProps } from "./props";
import * as S from "./styles";

const Button = ({
  children,
  isSelected = false,
  edge,
  ...props
}: ButtonProps) => {
  return (
    <>
      <S.Button $isSelected={isSelected} $edge={edge} {...props}>
        {children}
      </S.Button>
    </>
  );
};

export default Button;
