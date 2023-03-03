import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react';
import { MenuListProps } from '../../interfaces/interfaces';


export const MenuListItem: FC<MenuListProps> = ({ id ,icon, name, setIsActive }) => {
  return (
    <li onClick={()=> setIsActive!(false)}>
      <a href={`#${id}`}><FontAwesomeIcon icon={icon} />{name}</a>
    </li>
  )
}
