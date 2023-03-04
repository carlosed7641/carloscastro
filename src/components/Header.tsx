import '../styles/Header.css'
import { FC, useEffect, useState } from 'react'
import { DrawerMenu } from './header/DrawerMenu';
import logo from "../assets/logo.svg"
import { MenuListItem } from './header/MenuListItem';
import { menuListInfo } from '../utils/menuListItems';
import { ThemeButton } from './header/ThemeButton';
import { MenuHamburguer } from './header/MenuHamburguer';


export const Header: FC = () => {

    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
    const [fixed, setFixed] = useState<boolean>(false)

    const handleFixed = () => {
        window.scrollY >= 69 ? setFixed(true) : setFixed(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleFixed)
        return () => {
            window.removeEventListener("scroll", handleFixed)
        };
    }, [window.scrollY]);

    return (
        <>
            <header className={`${fixed ? 'shadow-header' : ''}`}>
                <div className='container-header container'>
                    <a href="/" className="logo">
                        <img src={logo} alt="Carlos Castro" height={35} />
                    </a>
                    <ul className='menu-items-header'>
                        {
                            menuListInfo.map(({ id, icon, name }) => (
                                <MenuListItem key={id} id={id} icon={icon} name={name} />
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
            <DrawerMenu
                showMobileMenu={showMobileMenu}
                setShowMobileMenu={setShowMobileMenu} />
        </>
    )
}
