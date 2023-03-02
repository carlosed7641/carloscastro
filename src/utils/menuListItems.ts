import { faUser, faCog, faCode, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { MenuListProps } from '../interfaces';

export const menuListInfo: MenuListProps[] = [
    {
        name: 'Sobre mí',
        icon: faUser
    },
    {
        name: 'Skills',
        icon: faCog
    },
    {
        name: 'Proyectos',
        icon: faCode
    },
    {
        name: 'Contacto',
        icon: faAddressBook
    }
]
