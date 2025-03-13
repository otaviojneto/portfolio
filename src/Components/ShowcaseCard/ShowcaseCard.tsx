import React from "react";
import * as S from "./styles";
import Title from "../Title";

export type ShowcaseCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
  reverse?: boolean;
};

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
  buttonLink,
  reverse,
}) => {
  return (
    <S.Card reverse={reverse}>
      <S.Image src={imageUrl} alt={title} />

      <S.Content>
        <Title size="24px" description={title} />

        <S.Text>{description}</S.Text>

        <S.Link href={buttonLink} target="_blank">
          {buttonText}
        </S.Link>
      </S.Content>
    </S.Card>
  );
};

export default ShowcaseCard;
