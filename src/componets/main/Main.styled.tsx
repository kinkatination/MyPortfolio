import styled from "styled-components";
import { Container } from "../container/Container";

export const Main = () => {
  return (
    <MainStyle>
      <Container />
    </MainStyle>
  );
};

const MainStyle = styled.main`
  width: 1440;
  height: 597;
  top: 953px;
  background-color: #b19999;
`;
