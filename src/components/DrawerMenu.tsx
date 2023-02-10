import { FC } from 'react'
import '../styles/DrawerMenu.css'
import { menuListInfo } from '../utils/menuListItem';
import { MenuListItem } from './MenuListItem';

export const DrawerMenu: FC = () => {
  return (
    <aside className='drawer-menu'>
      <ul className='menu-items-drawer'>
        {
          menuListInfo.map(({ icon, name }) => (
            <MenuListItem icon={icon} name={name} />
        ))
        }
      </ul>
    </aside>
  )
}
