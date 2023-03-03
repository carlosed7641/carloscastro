import '../styles/Skills.css'
import { SkillsItem } from './skills/SkillsItem';
import { skillsItems, iconSkills } from '../utils';
import { SkillsIcons } from './skills/SkillsIcons';

export const Skills = () => {
  return (
    <div id='skills' className='skills'>
      <section className='container container-skills'>
        <div className='container-benefits'>
          <h2 className='title-skills'>Beneficios <span className='line-skills'>____</span></h2>
          <h2>¿Por qué deberías contratarme?</h2>
          <p>
            Cuando elaboro un  proyecto web, me adhiero fielmente a estos prinicipios que hacen que mis sitios webs sean únicos y escalables.
          </p>
        </div>
        <ul className='container-list-skills'>
          {
            skillsItems.map(({ icon, skill, description }) => (
              <SkillsItem key={skill} icon={icon} skill={skill} description={description} />
            ))
          }
        </ul>
      </section>
      <ul className='container-icons-skills'>
        {
          iconSkills.map(({ icon, name }) => (
            <SkillsIcons key={name} icon={icon} name={name} />
          ))
        }
      </ul>
    </div>
  )
}
