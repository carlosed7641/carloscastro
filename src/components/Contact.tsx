import '../styles/Contact.css'
import { iconSkillsAndSocial } from '../utils'
import { SkillsAndSocialIcons } from './skills/SkillsAndSocialIcons'

export const Contact = () => {
    const iconSocial = iconSkillsAndSocial.filter(({ type }) => type === 'social')
    return (
        <div id='contact' className='container container-contact'>
            <h2 className='title-contact'>Contáctame <span className='line-contact'>____</span></h2>
            <ul className='container-icons-social'>
                {
                    iconSocial.map(({ icon, name, type, url }) => (
                        <SkillsAndSocialIcons key={name} icon={icon} name={name} type={type} url={url} />
                    ))
                }

            </ul>
        </div>
    )
}
