import * as S from "./styles";

export const Spinner = () => {
  return (
    <S.SpinnerWrapper>
      <S.Spinner
        $size={50}
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
