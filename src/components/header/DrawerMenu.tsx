import { FC, useContext } from 'react';
import '../../styles/DrawerMenu.css'
import { menuListInfo } from '../../utils/menuListItems';
import { MenuListItem } from './MenuListItem';
import { ThemeButton } from './ThemeButton';
import { AppContext } from '../../context/AppContext';
import { AppContextProps } from '../../interfaces';

interface Props {
  showMobileMenu: boolean
  setShowMobileMenu: (value: boolean) => void
}

export const DrawerMenu: FC<Props> = ({showMobileMenu, setShowMobileMenu }) => {

  const { isDarkMode } = useContext<AppContextProps>(AppContext)
  
  return (
    <aside className={`drawer-menu ${showMobileMenu ? 'drawer-active' : ''}`}>
      <ul className='menu-items-drawer'>
        {
          menuListInfo.map(({ id, icon, name }) => (
            <MenuListItem key={id} id={id} icon={icon} name={name} setShowMobileMenu={setShowMobileMenu} />
          ))
        }
       <ThemeButton text={isDarkMode ? 'Modo claro' : 'Modo oscuro'} />
      </ul>
    </aside>
  )
}
