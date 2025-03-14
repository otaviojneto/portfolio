import styled from "styled-components";

type ContainerProps = {
  flexCenter?: boolean;
};

export const Container = styled.div<ContainerProps>`
  max-width: 1200px;
  display: ${({ flexCenter }) => (flexCenter ? "flex" : "block")};
  justify-content: ${({ flexCenter }) => (flexCenter ? "center" : "none")};
  margin: 0 auto;
  padding-inline: 20px;
`;
