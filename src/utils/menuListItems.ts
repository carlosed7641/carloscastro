import { faUser, faCog, faCode, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { MenuListProps } from '../interfaces';

export const menuListInfo: MenuListProps[] = [
    {
        id: 'about',
        name: 'Sobre mí',
        icon: faUser
    },
    {
        id: 'skills',
        name: 'Skills',
        icon: faCog
    },
    {
        id: 'projects',
        name: 'Proyectos',
        icon: faCode
    },
    {
        id: 'contact',
        name: 'Contacto',
        icon: faAddressBook
    }
]
