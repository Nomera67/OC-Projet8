import './Header.scss';

import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';


function Header() {

    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    const location = useLocation();

    useEffect(() => {
        const primaryNav = document.getElementById('primary-navigation');
        const items = Array.from(document.querySelectorAll('.nav__item'));
    
        const handleMouseOver = (index: number) => {
          if (primaryNav) {
            primaryNav.setAttribute('data-active-index', index.toString());
          }
        };
    
        items.forEach((item, index) => {
          item.addEventListener('mouseover', () => handleMouseOver(index));
        });
    
        return () => {
          items.forEach((item) => {
            item.removeEventListener('mouseover', () => handleMouseOver);
          });
        };
      }, [isNavVisible]); 

    return (
        <header className='header'>
            <div className="header__logo" onClick={() => window.location.href = '/'}>
                <span>YR</span>
            </div>
            <button 
                id="toggleButton" 
                className={`mobileNavToggle ${isNavVisible ? 'expanded' : ''}`} 
                aria-controls="primary-navigation" 
                aria-expanded={isNavVisible} 
                onClick={toggleNav}
            >
                <span className="toggle__line"></span>
                <span className="toggle__line"></span>
                <span className="toggle__line"></span>
            </button>
            <nav className={`header__nav ${isNavVisible ? 'visible' : ''}`} id="navBar">
                <ul id="primary-navigation" className="nav__list" data-visible={isNavVisible}>
                    <li className="nav__item">
                        <NavLink to="/home" className={location.pathname === '/home' ? 'active' : ''} aria-label={`Lien vers l'accueil`}>Accueil</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''} aria-label={`Lien vers la section à-propos`}>À propos</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''} aria-label={`Lien vers la section de contact`}>Contact</NavLink>
                    </li>
                    <div className="nav__list__points"></div>
                    <div className="nav__list__background" id="background__menu"></div>
                </ul>
            </nav>
        </header>
    )
}

export default Header
