import { faHtml5, faCss3Alt, faJs, faGitAlt, faBootstrap, faReact, faPhp, faGithub, faLinkedin, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { IconSkillsAndSocialProps, TypeIcon } from '../interfaces';


const { skill, social } = TypeIcon

export const iconSkillsAndSocial: IconSkillsAndSocialProps[] = [
    {
        name: 'HTML',
        icon: faHtml5,
        type: skill
    },
    {
        name: 'CSS',
        icon: faCss3Alt,
        type: skill
    },
    {
        name: 'JavaScript',
        icon: faJs,
        type: skill
    },
    {
        name: 'Git',
        icon: faGitAlt,
        type: skill
    },
    {
        name: 'Bootstrap',
        icon: faBootstrap,
        type: skill
    },
    {
        name: 'React',
        icon: faReact,
        type: skill
    },
    {
        name: 'PHP',
        icon: faPhp,
        type: skill
    },
    {
        name: 'GitHub',
        icon: faGithub,
        type: social,
        url: 'https://github.com/carlosed7641'
    },
    {
        name: 'LinkedIn',
        icon: faLinkedin,
        type: social,
        url: 'https://www.linkedin.com/in/carlos-castro-reales-53448b213'
    },
    {
        name: 'Facebook',
        icon: faFacebook,
        type: social,
        url: 'https://www.facebook.com/carlos.castro21'
    },

    {
        name: 'WhatsApp',
        icon: faWhatsapp,
        type: social,
        url: 'https://wa.me/573004394704'
    }
]
