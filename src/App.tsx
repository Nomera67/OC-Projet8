import './App.scss';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import ProjectCard from './components/ProjectCard/ProjectCard';

import useScrollToTop from './hooks/useScrollToTop';

function App() {

  function ScrollHandler() {
    useScrollToTop();
    return null;
  }
  

  return (
    <Router>
      <ScrollHandler />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:slug" element={<ProjectCard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  )
}



export default App;
