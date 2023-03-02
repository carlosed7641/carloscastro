import { faMobileAlt, faCode, faPalette } from '@fortawesome/free-solid-svg-icons'
import { SkillsProps } from '../interfaces';

export const skillsItems: SkillsProps[] = [
    {
        icon: faMobileAlt,
        skill: 'Responsive Design',
        description: 'Me gusta hacer que los sitios webs que construyo se vean bien y sean adaptables a distintos dispositivos, navegadores y plataformas utilizando el enfoque de "first mobile"'
    },
    {
        icon: faCode,
        skill: 'Código reutilizable',
        description: 'Hago lo posible para escribir el código mínimo posible y que este sea legible para todos.'
    },
    {
        icon: faPalette,
        skill: 'UI/UX y Accesibilidad',
        description: 'Mi capacidad de análisis me permite transformar diseños y/o plantillas a código accesible para todos los usuarios.'
    }
]
