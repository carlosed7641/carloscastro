import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react';
import { MenuListProps } from '../../interfaces/interfaces';


export const MenuListItem: FC<MenuListProps> = ({ id ,icon, name, setShowMobileMenu }) => {


  return (
    <li onClick={()=> typeof(setShowMobileMenu) === 'function' ? setShowMobileMenu!(false) : null}>
      <a href={`#${id}`}><FontAwesomeIcon icon={icon} />{name}</a>
    </li>
  )
}
