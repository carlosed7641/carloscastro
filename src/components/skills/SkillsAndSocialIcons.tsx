import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import "../../styles/SkillsItem.css";
import { IconSkillsAndSocialProps } from "../../interfaces/interfaces";
import "../../styles/SkillsIcons.css";

export const SkillsAndSocialIcons: FC<IconSkillsAndSocialProps> = ({
    icon,
    name,
    type,
    url
}) => {
    if (type === "skill") {
        return (
            <li className="icon" title={name}>
                <FontAwesomeIcon icon={icon} />
            </li>
        );
    }

    return (
        <a  className="icon" target="_blank" href={url} title={name}>
            <FontAwesomeIcon icon={icon} />
        </a>
    );
};
