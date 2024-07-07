import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDynamicTitle = () => {
  const location = useLocation()

  useEffect(() => {
      switch (location.pathname) {
        case '/home':
          document.title = 'Accueil | Yan R. Portfolio';
          break;
        case '/about':
          document.title = 'A-Propos | Yan R. Portfolio';
          break;
        case '/contact':
          document.title = 'Contact | Yan R. Portfolio';
          break;
        default:
          document.title = 'Yan R. Portfolio';
          break;
    }
  }, [location]);

  return null;
};

export default useDynamicTitle;
