import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import '../../styles/SkillsItem.css'
import { IconSkillsProps } from '../../interfaces/interfaces';
import '../../styles/SkillsIcons.css'


export const SkillsIcons: FC<IconSkillsProps> = ({icon, name}) => {
    return (
        <li className='skill-icon' title={name}>
            <FontAwesomeIcon icon={icon} />
        </li>
    )
}
