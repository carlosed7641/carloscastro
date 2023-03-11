import '../styles/Projects.css'
import { Project } from './projects/Project'
import { projectsList } from '../utils/projectsList';

export const Projects = () => {
  return (
    <div id='projects' className='container container-contact'>
      <h2 className='title-projects'>Proyectos <span>____</span></h2>
      <ul>
        {
        projectsList.map( props => (
          <Project key={props.name} {...props} />
        ))
}
      </ul>
    </div>
  )
}
