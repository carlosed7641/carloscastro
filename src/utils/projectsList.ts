import { ProjectListProps } from "../interfaces";


export const projectsList: ProjectListProps[] = [
    {
        name: "Blog de Café",
        desc: "Sitio estático de tipo blog, en donde se recomiendan recetas y beneficios sobre el café, además de ofrecer enlaces a una lista de cursos y talleres.",
        languages: ["HTML", "CSS"],
        repo: "https://github.com/carlosed7641/blog-cafe",
        url: "https://blog-cafe-bq.netlify.app",
        urlImg: "blog_cafe"
    },
    {
        name: "App Peluquería",
        desc: "Aplicación web para agendar citas en un negocio de peluquería, con paginación de secciones y un resumen con la información de la cita y el costo total.",
        languages: ["HTML", "CSS", "JavaScript"],
        repo: "",
        url: "https://app-peluqueria-bq.netlify.app",
        urlImg: "app_peluqueria"
    },
    {
        name: "Heroes SPA",
        desc: "Sitio construido para visualizar un catalogo de comics consumido desde una API, divido en categorías, con la posibilidad de ver más detalles de un comic en espifico o asimismo buscar uno.",
        languages: ["React", "JavaScript", "CSS"],
        repo: "https://github.com/carlosed7641/heroes-spa",
        url: "https://heroes-spa-bq.netlify.app",
        urlImg: "heroes_spa"
    },
    {
        name: "Festival Música",
        desc: "Sitio web informativo ambientado en un festival de música, con secciones para visualizar el cronograma de conciertos, galería y lista de precios de entrada.",
        languages: ["HTML", "SASS", "JavaScript"],
        repo: "https://github.com/carlosed7641/festival-musica",
        url: "https://festival-musica-bq.netlify.app",
        urlImg: "festival_musica"
    }
]