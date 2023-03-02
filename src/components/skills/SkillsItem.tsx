import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { SkillsProps } from '../../interfaces'
import '../../styles/SkillsItem.css'


export const SkillsItem: FC<SkillsProps> = ({icon, skill, description}) => {
    return (
        <li className='skill-item'>
            <span><FontAwesomeIcon icon={icon} /></span>
            <h3>{skill}</h3>
            <p>{description}</p>
        </li>
    )
}
