import styled from "styled-components";
import { TitleBlock } from "../title/Title";
import { PhotoBlock } from "../photoblock/PhotoBlock";

export const Container = () => {
  return (
    <ContainerStyled>
      <TitleBlock />
       <PhotoBlock src={"src/images/hero-cropped.jpeg"} alt ="Photo"/> 
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  max-width: 1200px; /* Максимальная ширина рабочей области из Figma */
  width: 100%; /* На маленьких экранах сжимается до 100% */
  margin: 0 auto; /* Центрирует блок по горизонтали */
  padding: 0 15px; /* Безопасные боковые отступы, чтобы контент не лип к краям на телефонах */
`

;
