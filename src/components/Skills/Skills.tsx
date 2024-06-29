import { useEffect, useState } from 'react';
import './Skills.scss';

interface SkillsData {
  technicalSkills: string[];
  technicalSkillsToAcquire: string[];
  softSkills: string[];
  languages: string[];
}

function Skills() {
  const [skills, setSkills] = useState<SkillsData | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch('/assets/data/skills.json');
      const data = await response.json();
      setSkills(data);
    };

    fetchSkills();
  }, []);

  if (!skills) {
    return <div>Loading...</div>;
  }

  return (
    <div className="skills">
      <h2 className="skills__title highlight">Aptitudes et capacités</h2>
      <div className="skills__container">
        <div className="skills__item">
          <h3>Compétences <span className="highlight">techniques</span> en développement web</h3>
          <ul>
            {skills.technicalSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="bar"></div>
        <div className="skills__item">
          <h3>Compétences techniques <span className="highlight">à acquérir</span> en développement web mais aussi <span className="highlight">en audiovisuel</span></h3>
          <ul>
            {skills.technicalSkillsToAcquire.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="bar"></div>
        <div className="skills__item">
          <h3>Compétences <span className="highlight">comportementales</span></h3>
          <ul>
            {skills.softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="bar"></div>
        <div className="skills__item">
          <h3><span className="highlight">Langues</span></h3>
          <ul>
            {skills.languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
