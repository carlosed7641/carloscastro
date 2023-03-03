import '../styles/AboutMe.css'

export const AboutMe = () => {
  return (
    <div id='about' className='container-aboutme'> 
      <div className='elements-about-me container'>
        <h2 className='title-aboutme'>Sobre mí <span className='line-aboutme'>_____</span></h2>
        <p>Soy ingeniero de sistemas y desarrolador frontend, vivo en Barranquilla, Colombia.</p>
        <p>Actualmente me dedico a estudiar en línea y trabajo para una compañía realizando sitios e-commerce.</p>
        <p>Soy muy competente en HTML y CSS, también he creado proyectos con JavaScript y TypeScript utilizando React. Actualmente sigo trabajando para mejorar mis habilidades en TypeScript y aprendiendo NodeJS para adentrarme al desarollo backend.</p>
        <p>En mis tiempos libres me dedico a investigar sobre las nuevas tecnologías web además de fortalecerme en un segundo idioma.</p>
        <p>Tecnologías y herramientas que actualmente estoy explorando y sobre las que estoy interesado.</p>
        <ul className='list-skills'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>PHP</li>
        </ul>
      </div>
    </div>
  )
}
