import { Container } from "../../../componets/container/Container";
import { SectionTitle } from "../../../componets/sectionTitle/SectionTitle";
import { Skill } from "./skill/Skill";
import { SkillsList, SkillsStyled } from "./Skills.styled";

type SkillDataType = {
  id: string;
  number: string;
  title: string;
  text: string;
};

const skillData: SkillDataType[] = [
  {
    id: "1",
    number: "01",
    title: "React",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: "2",
    number: "02",
    title: "Styled Component",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: "3",
    number: "03",
    title: "Figma",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: "4",
    number: "04",
    title: "HTML",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: "5",
    number: "05",
    title: "CSS",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: "6",
    number: "06",
    title: "Mongo DB",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
];

export const Skills = () => {
  return (
    <SkillsStyled>
    <Container>
      <SectionTitle />
      <SkillsList>
        {skillData.map((skill) => (
          <Skill
            key={skill.id}
            number={skill.number}
            title={skill.title}
            text={skill.text}
          />
        ))}
      </SkillsList>
    </Container>
    </SkillsStyled>
  );
};
