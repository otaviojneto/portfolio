import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 230px;
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    height: 230px;
    opacity: 1;
  }
  to {
    height: 0;
    opacity: 0;
  }
`;

export const ContainerNav = styled.div`
  align-items: center;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 60px;
  display: flex;
  left: 20%;
  justify-content: space-between;
  max-width: 1200px;
  padding: 8px 40px;
  position: fixed;
  top: 20px;
  width: 60%;

  @media (max-width: 1088px) {
    left: 3%;
    padding: 8px 20px;
    width: 94%;
  }
`;

export const Brand = styled.img`
  border: 1px solid #d2d2d2;
  border-radius: 50%;
  height: 80px;
  width: 80px;

  @media (max-width: 1088px) {
    height: 40px;
    width: 40px;
  }
`;

export const UlDesktop = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 1088px) {
    display: none;
  }
`;

export const UlMobile = styled.div`
  display: none;

  @media (max-width: 1088px) {
    align-items: center;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
  }
`;

export const MenuMobile = styled.ul<{ open: boolean }>`
  display: none;

  @media (max-width: 1088px) {
    background-color: #ffffff;
    border-radius: 30px;
    display: block;
    left: 0;
    list-style: none;
    padding-inline: 20px;
    position: absolute;
    top: 0;
    width: 100%;
    animation: ${(props) => (props.open ? slideDown : slideUp)} 0.2s ease-in-out
      forwards;
  }
`;

export const Icon = styled.img`
  display: none;

  @media (max-width: 1088px) {
    display: block;
  }
`;

export const List = styled.li`
  @media (max-width: 1088px) {
    border-bottom: 1px solid #d2d2d2;

    &:last-of-type {
      border-bottom: none;
    }
  }
`;

export const Link = styled.a`
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 20px;
  transition: ease-in-out 0.3s;
  text-decoration: none;

  &:hover {
    background-color: #f1f1f1;
    border-radius: 50px;
  }

  &:active {
    background-color: #f1f1f1;
  }
`;

export const LinkMobile = styled.a`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  text-decoration: none;
  width: 100%;
`;
