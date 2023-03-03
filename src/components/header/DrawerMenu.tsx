import { FC, useContext } from 'react';
import '../../styles/DrawerMenu.css'
import { menuListInfo } from '../../utils/menuListItems';
import { MenuListItem } from './MenuListItem';
import { ThemeButton } from './ThemeButton';
import { AppContext } from '../../context/AppContext';
import { AppContextProps } from '../../interfaces';

interface Props {
  isActive: boolean
  setIsActive: (value: boolean) => void
}

export const DrawerMenu: FC<Props> = ({isActive, setIsActive }) => {

  const { isDarkMode } = useContext<AppContextProps>(AppContext)
  
  return (
    <aside className={`drawer-menu ${isActive ? 'drawer-active' : ''}`}>
      <ul className='menu-items-drawer'>
        {
          menuListInfo.map(({ id, icon, name }) => (
            <MenuListItem key={id} id={id} icon={icon} name={name} setIsActive={setIsActive} />
          ))
        }
       <ThemeButton text={isDarkMode ? 'Modo claro' : 'Modo oscuro'} />
      </ul>
    </aside>
  )
}
