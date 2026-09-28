import { StyledHeader } from "./Header.styled";
import { Logo } from "../../componets/logo/Logo";
import { Nav } from "./nav/Navigation";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
};
