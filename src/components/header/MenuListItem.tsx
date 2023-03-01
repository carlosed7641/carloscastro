import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react';
import { MenuListProps } from '../../interfaces/interfaces';


export const MenuListItem: FC<MenuListProps> = ({ icon, name }) => {
  return (
    <li>
      <a href="#"><FontAwesomeIcon icon={icon} />{name}</a>
    </li>
  )
}
