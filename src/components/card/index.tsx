import * as S from "./styles";
import Image from "next/image";
import type { CardProps } from "./props";

const Card = ({
  name,
  difficulty,
  isLoading,
  isHighlight = false,
  imageUrl = "https://ddg0cip9uom1w.cloudfront.net/code-challenge/burger.jpg",
}: CardProps) => {
  if (isLoading) {
    return <S.Skeleton></S.Skeleton>;
  }

  return (
    <S.Card $isHighlight={isHighlight}>
      <Image
        src={imageUrl}
        alt={"Image for " + name + " recipe"}
        width={200}
        height={200}
        style={{ objectFit: "cover", width: "100%", maxHeight: "100%" }}
        priority
      />
      <S.Content>
        <S.Name $isHighlight={isHighlight}>{name}</S.Name>
        <S.Difficulty>{difficulty}</S.Difficulty>
      </S.Content>
    </S.Card>
  );
};

export default Card;
