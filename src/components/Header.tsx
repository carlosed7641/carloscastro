import '../styles/Header.css'
import { FC, useState } from 'react'
import { DrawerMenu } from './header/DrawerMenu';
import logo from "../assets/logo.svg"
import { MenuListItem } from './header/MenuListItem';
import { menuListInfo } from '../utils/menuListItems';
import { ThemeButton } from './header/ThemeButton';
import { MenuHamburguer } from './header/MenuHamburguer';


export const Header: FC = () => {

    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
    
    return (
        <>
            <header>
                <div className='container-header container'>
                    <a href="/" className="logo">
                        <img src={logo} alt="Carlos Castro" height={35} />
                    </a>
                    <ul className='menu-items-header'>
                        {
                            menuListInfo.map(({ icon, name }) => (
                                <MenuListItem icon={icon} name={name} />
                            ))
                        }
                        <ThemeButton />
                    </ul>
                    <MenuHamburguer
                        showMobileMenu={showMobileMenu}
                        setShowMobileMenu={setShowMobileMenu}
                    />
                </div>
            </header>
           <DrawerMenu isActive={showMobileMenu} />
        </>
    )
}
