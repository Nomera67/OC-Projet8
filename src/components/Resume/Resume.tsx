import { useEffect, useState } from 'react';
import './Resume.scss';

interface ResumeItem {
  period: string;
  title: string;
  description: string;
  details?: string[];
}

function Resume(){
  const [resume, setResume] = useState<ResumeItem[]>([]);

  useEffect(() => {
    const fetchResume = async () => {
      const response = await fetch('/assets/data/resume.json');
      const data = await response.json();
      setResume(data);
    };

    fetchResume();
  }, []);

  return (
    <div className="resume">
      <h2 className="resume__title">Emplois et formations</h2>
      <div className="resume__container">
        {resume.map((item, index) => (
          <div key={index} className="resume__item">
            <h3 className='highlight'>
              <time>{item.period}</time> : {item.title}
            </h3>
            <p>{item.description}</p>
            {item.details && (
              <ul>
                {item.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            )}
            {index < resume.length - 1 && <div className="bar"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
