import React from "react";
import * as S from "./styles";

export type TitleProps = S.TitleStyleProps & {
  description: string;
};

const Title: React.FC<TitleProps> = ({
  description,
  color,
  fontWeight,
  size,
}) => {
  return (
    <S.Title color={color} size={size} fontWeight={fontWeight}>
      {description}
    </S.Title>
  );
};

export default Title;
