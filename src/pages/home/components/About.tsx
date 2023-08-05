import './About.css';
import { AboutGrid } from './';

export const About = () => {
    return (
    <div className="about">
        <h2 className="about-heading">Conocé Conectar</h2>
        <div className="about-text">
            <p>Somos una empresa familiar de informática con más de 20 años de experiencia, arraigada en el mundo de la tecnología. Nuestra dedicación se centra en brindar soluciones personalizadas para satisfacer las necesidades de nuestros clientes, ya sea en entornos domésticos o empresariales. Desde nuestros inicios, hemos mantenido un firme compromiso con la satisfacción del cliente, adaptándonos continuamente a las últimas tendencias y avances tecnológicos.</p>
            <p>La confianza depositada en nosotros a lo largo de los años nos motiva a seguir creciendo y mejorando, mientras continuamos construyendo relaciones sólidas con una amplia gama de clientes. Descubrí algunos de nuestros trabajos y vas a entender por qué nos siguen eligiendo.</p>
        </div>
        <AboutGrid />
    </div>
    )
};