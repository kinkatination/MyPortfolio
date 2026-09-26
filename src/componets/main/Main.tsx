import { Container } from "../container/Container";
import { TitleBlock } from "../title/Title";
import { PhotoBlock } from "../photoblock/PhotoBlock";
import { MainStyle } from "./Main.styled";

export const Main = () => {
  return (
    <MainStyle>
      <Container>
        <TitleBlock />
       <PhotoBlock src={"src/images/hero-cropped.jpeg"} alt ="Photo"/> 
      </Container>
    </MainStyle>
  );
};



