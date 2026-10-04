import { Container } from "../../../componets/container/Container";
import { TitleBlock } from "./title/MainTitle";
import { PhotoBlock } from "./photoblock/PhotoBlock";
import { MainStyle } from "./Main.styled";

export const Main = () => {
  return (
    <MainStyle>
      <Container>
        <TitleBlock />
       <PhotoBlock src={"../../../src/assets/images/hero-cropped.jpeg"} alt ="Photo"/> 
      </Container>
    </MainStyle>
  );
};



