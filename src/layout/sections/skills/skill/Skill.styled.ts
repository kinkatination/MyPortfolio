import styled from "styled-components";

export const SkillStyle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  border: #080808 solid 1px;
  width: calc((100% - 60px) / 3);
  box-sizing: border-box;
`;

export const SkillContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;
  background-color: #666666;
`;

export const SkillNumber = styled.span`
  font-size: 32px;
  font-weight: 300;
`;

export const SkillTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;

export const SkillText = styled.p`
  font-size: 14px;
  color: #050505;
  margin: 0;
  padding:0px 0px 10px 0px;
`;
