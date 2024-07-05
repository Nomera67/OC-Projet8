import { Link } from 'react-router-dom';
import './Error.scss';
import contactLogo from '../../assets/icons/contact.png';
import homeLogo from '../../assets/icons/home.png';
import aboutLogo from '../../assets/icons/about.png';

function Error() {

    return (
        <div className="nf__container">
            <div className="nf__item">
            <div className="nf__item__message">
                <p>
                Il n'y a pas <span>grand chose</span> à voir ici <br />
                sauf peut-être <span>le vide</span> et une <span>erreur 404</span>
                </p>
            </div>
            <div className="nf__item__redirection">
                <p>Vous pouvez continuer votre navigation simplement :</p>
                <div className="nf__item__buttons">
                    <Link to="/" className="nf__item__card" aria-label="Retourner à l'accueil">
                        <img src={homeLogo} alt="icône de maison" />
                        <p>Retourner à l'accueil</p>
                    </Link>
                    <Link to="/about" className="nf__item__card" aria-label="Lien vers la section à-propos">
                        <img src={aboutLogo} alt="icône d'information" />
                        <p>Envie d'en savoir un peu plus ?</p>
                    </Link>
                    <Link to="/contact" className="nf__item__card" aria-label="Me contacter">
                        <img src={contactLogo} alt="icône de contact" />
                        <p>Me contacter</p>
                    </Link>
                </div>
            </div>
            </div>
            <a href="https://www.pexels.com/fr-fr/@xi-xi-918184/">photo par Xi Xi</a>
        </div>
    );
};

export default Error;
