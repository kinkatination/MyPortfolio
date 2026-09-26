import React from "react";
import styled from "styled-components";

export const TitleBlock = () => {
  return (
    <Title>
      <h1>Hello I'm Kate</h1>
      <p>Front-end dev</p>
    </Title>
  );
};

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
