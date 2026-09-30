import { SkillStyle, SkillNumber, SkillContent, SkillTitle, SkillText} from "./Skill.styled";


type SkillPropsType = {
    number: string;
    title: string;
    text: string;
}

export const Skill = ({ number, title, text}: SkillPropsType) => {
    return (
        <>
        <SkillStyle>
            <SkillNumber>{number}</SkillNumber>
            <SkillContent>
                <SkillTitle>{title}</SkillTitle>
                <SkillText>{text}</SkillText>
            </SkillContent>
        </SkillStyle>
        </>
    )
}

