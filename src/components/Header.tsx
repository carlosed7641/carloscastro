import '../styles/Header.css'
import { FC, useState } from 'react'
import { DrawerMenu } from './DrawerMenu';
import logo from "../assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { MenuListItem } from './MenuListItem';
import { menuListInfo } from '../utils/menuListItem';


export const Header: FC = () => {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)


    return (
        <>
            <header>
                <div className='container-header'>
                    <a href="/" className="logo">
                        <img src={logo} alt="Carlos Castro" height={35} />
                    </a>
                    <ul className='menu-items-header'>
                        {
                            menuListInfo.map(({ icon, name }) => (
                                <MenuListItem icon={icon} name={name} />
                            ))
                        }
                        <li onClick={() => setIsDarkMode(!isDarkMode)}>
                            <p className='theme-mode' title={isDarkMode ? 'Modo claro' : 'Modo oscuro'}><FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} width={16} /></p>
                        </li>
                    </ul>
                    <p className='mobile-menu' onClick={() => setShowMobileMenu(!showMobileMenu)}><FontAwesomeIcon icon={showMobileMenu ? faClose : faBars} /></p>
                </div>
            </header>
            {showMobileMenu && <DrawerMenu />}
        </>
    )
}
