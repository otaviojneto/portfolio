import React from "react";
import * as S from "./styles";

export type BadgeProps = {
  text: string;
};

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return <S.Bagde>{text}</S.Bagde>;
};

export default Badge;
