import { ButtonProps } from "./props";
import * as S from "./styles";

export const Button = ({ children, ...props }: ButtonProps) => {
  return <S.Button {...props}>{children}</S.Button>;
};
