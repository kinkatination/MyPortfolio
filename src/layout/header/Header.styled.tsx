import React from "react";
import styled from "styled-components";
import { Logo } from "../../componets/logo/Logo";
import { Nav } from "../../componets/nav/Navigation";

export const Header = () => {
    return (
        <StyledHeader>
           <Logo/>
            <Nav/>

        </StyledHeader>
    )
};

const StyledHeader = styled.header`
display: flex;
background-color: #d6c7d4;
justify-content: space-between;
align-items: center; 
`