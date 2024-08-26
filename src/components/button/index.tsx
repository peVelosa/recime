import { ButtonProps } from "./props";
import * as S from "./styles";

/**
 * Display a button element.
 */
export const Button = ({ children, ...props }: ButtonProps) => {
  return <S.Button {...props}>{children}</S.Button>;
};
