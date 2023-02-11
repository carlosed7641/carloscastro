import { FC, useContext } from 'react';
import '../styles/DrawerMenu.css'
import { menuListInfo } from '../utils/menuListItem';
import { MenuListItem } from './MenuListItem';
import { ThemeButton } from './ThemeButton';
import { AppContext } from '../context/AppContext';
import { AppContextProps } from '../interfaces';

export const DrawerMenu: FC = () => {

  const { isDarkMode } = useContext<AppContextProps>(AppContext)
  
  return (
    <aside className='drawer-menu'>
      <ul className='menu-items-drawer'>
        {
          menuListInfo.map(({ icon, name }) => (
            <MenuListItem icon={icon} name={name} />
          ))
        }
       <ThemeButton text={isDarkMode ? 'Modo claro' : 'Modo oscuro'} />
      </ul>
    </aside>
  )
}
