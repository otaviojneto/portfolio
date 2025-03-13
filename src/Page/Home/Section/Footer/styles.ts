import styled from "styled-components";

export const ContainerFooter = styled.div`
  background-color: #0a001b;
  padding-top: 130px;
  padding-bottom: 20px;
  position: relative;
  width: 100%;

  &::before {
    background-color: #ffffff;
    border-radius: 0 0 60% 60%;
    content: "";
    height: 100px;
    position: absolute;
    width: 100%;
    top: 0;
  }
`;

export const ContentFooter = styled.div`
  color: #ffffff !important;
`;

export const Link = styled.a`
  border: 1px solid #ffffff;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
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

export const Text = styled.p`
  color: #ffffff;
  font-size: 12px;
  margin-block: 10px;
`;
