import React from "react";
import { ContainerStyled } from "./Container.styled";

type ContainerPropsType = {
  children: React.ReactNode;
};
export const Container: React.FC<ContainerPropsType> = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
