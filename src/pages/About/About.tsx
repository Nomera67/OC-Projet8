import './About.scss';

import AboutIntroduction from '../../components/AboutIntroduction/AboutIntroduction';
import Resume from '../../components/Resume/Resume';
import Skills from '../../components/Skills/Skills';

function About() {

  return (
    <div className="about__container">
        <AboutIntroduction />
        <Resume />
        <Skills />
    </div>
  )
}

export default About;