import { useNavigate } from 'react-router-dom';
import './Error.scss';
import contactLogo from '../../assets/icons/contact.png';
import homeLogo from '../../assets/icons/home.png';
import aboutLogo from '../../assets/icons/about.png';

function Error() {
    const navigate = useNavigate();

    const returnHome = () => {
        navigate('/');
    };

    const goAbout = () => {
        navigate('/about');
    };

    const goContact = () => {
        navigate('/contact');
    };

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
                <div className="nf__item__card" onClick={returnHome}>
                    <img src={homeLogo} alt="icône de maison" />
                    <p>Retourner à l'accueil</p>
                </div>
                <div className="nf__item__card" onClick={goAbout}>
                    <img src={aboutLogo} alt="icône d'information" />
                    <p>Envie d'en savoir un peu plus ?</p>
                </div>
                <div className="nf__item__card" onClick={goContact}>
                    <img src={contactLogo} alt="icône de contact" />
                    <p>Me contacter</p>
                </div>
                </div>
            </div>
            </div>
            <a href="https://www.pexels.com/fr-fr/@xi-xi-918184/">photo par Xi Xi</a>
        </div>
    );
};

export default Error;
