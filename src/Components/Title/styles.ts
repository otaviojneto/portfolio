import styled from "styled-components";

export type TitleStyleProps = {
  color?: string;
  size?: string;
  fontWeight?: string;
};

export const Title = styled.h1<TitleStyleProps>`
  color: ${({ color }) => color ?? "#0a001b"};
  font-size: ${({ size }) => size ?? "32px"};
  font-weight: ${({ fontWeight }) => fontWeight ?? "600"};
`;
