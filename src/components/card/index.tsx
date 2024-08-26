import * as S from "./styles";
import Image from "next/image";
import type { CardProps } from "./props";

/**
 * Display a card element.
 */
export const Card = ({
  name,
  difficulty,
  isHighlighted = false,
  imageUrl = "https://ddg0cip9uom1w.cloudfront.net/code-challenge/burger.jpg",
}: CardProps) => {
  return (
    <S.Card $isHighlighted={isHighlighted}>
      <Image
        src={imageUrl}
        alt={"Image for " + name + " recipe"}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          objectFit: "cover",
          width: "100%",
          maxHeight: "200px",
          height: "100%",
        }}
        priority
      />
      <S.Content>
        <S.Name $isHighlighted={isHighlighted}>{name}</S.Name>
        <S.Difficulty>{difficulty}</S.Difficulty>
      </S.Content>
    </S.Card>
  );
};
