import React from "react";
import { StyledIcon } from "./Icon.styled";

type IconPropsType = {
  iconId?: string;
  width?: string;
  height?: string;
  viewBox?: string;
};


export const Icon = ({
  width = "50",
  height = "50",
  viewBox = "0 0 50 50",
  ...otherProps // Все остальные пропсы (например, iconId)
}: IconPropsType) => {
  return (
    <StyledIcon
      // Передаем width, height, viewBox и все остальные пропсы через spread
      width={width}
      height={height}
      viewBox={viewBox}
      {...otherProps}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    ></StyledIcon>
  );
};

//        <svg>
//             <img src="../../assets/img/img.png" alt=""/>
//    {/* <use xlinkHref={ `${iconSprite}#${props.IconId}`} /> */}
//        </svg>
