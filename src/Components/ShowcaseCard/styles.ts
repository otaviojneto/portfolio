import styled from "styled-components";

export const Card = styled.div<{ reverse?: boolean }>`
  align-items: center;
  display: flex;
  gap: 50px;
  justify-content: space-between;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "none")};
  padding: 40px 0;
  width: 100%;

  @media (max-width: 1088px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  max-width: 450px;

  @media (max-width: 1088px) {
    width: 100%;
  }
`;

export const Content = styled.div``;

export const Text = styled.p`
  color: #667;
  margin: 16px 0;
  max-width: 568px;
`;

export const Link = styled.a`
  background-color: #0a001b;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  padding: 10px 16px;
  text-decoration: none;
  transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 1088px) {
    text-align: center;
    width: 100%;
  }
`;
