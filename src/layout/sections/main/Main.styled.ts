import styled from "styled-components";
import { ContainerStyled } from "../../../componets/container/Container.styled";

export const MainStyle = styled.main`
  width: 1440;
  height: 597;
  top: 953px;
  background-color: #b19999;

  ${ContainerStyled} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
