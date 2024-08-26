import * as S from "./styles";
import type { SpinnerProps } from "./props";

/**
 * Display a spinner element.
 */
export const Spinner = ({ size = 50 }: SpinnerProps) => {
  return (
    <S.SpinnerWrapper>
      <S.Spinner
        $size={size}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </S.SpinnerWrapper>
  );
};
