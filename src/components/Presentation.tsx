import '../styles/Presentation.css'

export const Presentation = () => {
    return (
        <section className='presentation-container container'>
            <div className='presentation-info'>
                <h1 className='presentation-primary-text'>Carlos Castro</h1>
                <h2 className='presentation-secondary-text'>Ingeniero de Sistemas  &</h2>
                <h2 className='presentation-secondary-text'>Frontend Developer</h2>
                <p>
                    Apasionado por encontrar soluciones a través de código. <br />
                    Atraverse es hacer!
                </p>
                <button className='curriculum'>Currículum</button>
            </div>
            <div className='presentation-image'>
                <div className='overlay-icons'></div>
                <img src="https://i.ibb.co/GxM5Xcg/IMG-20230208-172556.jpg" alt="Imagen" />
            </div>
        </section>
    )
}
