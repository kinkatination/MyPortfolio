import styled from "styled-components";


type PhotoBlockPropsType = {
  src: string;
  alt?: string;
};

export const PhotoBlock = (props: PhotoBlockPropsType) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export const StyledPhotoBlock = styled.div`
  position: relative;
  max-width: 100%;
  `