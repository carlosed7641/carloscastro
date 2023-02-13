import '../styles/Header.css'
import { FC, useState } from 'react'
import { DrawerMenu } from './DrawerMenu';
import logo from "../assets/logo.svg"
import { MenuListItem } from './MenuListItem';
import { menuListInfo } from '../utils/menuListItem';
import { ThemeButton } from './ThemeButton';
import { MenuHamburguer } from './MenuHamburguer';


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
            {showMobileMenu && <DrawerMenu />}
        </>
    )
}
