import React from "react";
import styled from "styled-components";
import Img from "../../assets/img/img.png";

type IconPropsType = {
    IconId?: string
}

export const Icon = () => {
    return (
//        <svg>
//             <img src="../../assets/img/img.png" alt=""/>
//    {/* <use xlinkHref={ `${iconSprite}#${props.IconId}`} /> */}
//        </svg>
<div>
      <StyledIcon src={Img} alt=""/>
</div>
    );
};

const StyledIcon = styled.img`
width: 50px;
height: 50px;
`