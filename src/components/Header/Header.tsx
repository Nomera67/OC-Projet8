import './Header.scss';

import { NavLink, useLocation } from 'react-router-dom';


function Header() {

    const location = useLocation();

    return (
        <header className='header'>
            <div className="header__logo">
                <span>YR</span>
            </div>
            <nav className='header__nav'>
                <NavLink to="/home" className={location.pathname === '/home' ? 'active' : ''}>Accueil</NavLink>
                <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>À propos</NavLink>
                <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</NavLink>
            </nav>
        </header>
    )
}

export default Header