import '../styles/Presentation.css'

export const Presentation = () => {
    return (
        <section className='presentation-container container'>
            <div className='presentation-info'>
                <h1 className='presentation-primary-text'>Carlos Castro</h1>
                <h2 className='presentation-secondary-text'>Frontend Developer &</h2>
                <h2 className='presentation-secondary-text'>Ingeniero de Sistemas</h2>
                <p>
                    Apasionado por encontrar soluciones a través de código
                </p>
            </div>
            <div className='presentation-image'>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" 
                width={240}
                height={240}
                alt="Imagen" />
            </div>
        </section>
    )
}
