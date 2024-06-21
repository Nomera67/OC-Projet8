import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectList.scss';

interface Project {
    name: string;
    technologies: string[];
    image: string;
    description: string;
    githubLink: string;
    liveLink: string;
    slug: string;
}

function ProjectList() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filter, setFilter] = useState<string[]>([]);
    const [technologies, setTechnologies] = useState<string[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/config/projects.json');
                const data = await response.json();
                setProjects(data);

                const techSet = new Set<string>();
                data.forEach((project: Project) => {
                    project.technologies.forEach(tech => techSet.add(tech));
                });
                setTechnologies(Array.from(techSet));
            } catch (error) {
                console.error('Erreur lors du chargement des projets :', error);
            }
        };

        fetchProjects();
    }, []);

    const handleFilterChange = (tech: string) => {
        if (filter.includes(tech)) {
            setFilter(filter.filter(t => t !== tech));
        } else {
            setFilter([...filter, tech]);
        }
    };

    const filteredProjects = filter.length === 0 ? projects : projects.filter(project =>
        filter.every(f => project.technologies.includes(f))
    );

    const noMatches = filter.length > 0 && filteredProjects.length === 0;

    return (
        <div className="projects__container">
            <h2 className="projects__title">Mes <span className="highlight">projets :</span></h2>
            <div className="projects__filters__container">
                <p className="projects__choice">Filtrez les projets :</p>
                <div className="projects__filters">
                    <button className="projects__filter" onClick={() => setFilter([])}>Reset</button>
                    {technologies.map(tech => (
                        <button
                            key={tech}
                            className={`projects__filter ${filter.includes(tech) ? 'filter__active' : ''}`}
                            onClick={() => handleFilterChange(tech)}
                        >
                            {tech}
                        </button>
                    ))}
                </div>
            </div>
            
            {noMatches && <p className='projects__cards__error'>Aucun projet ne correspond à votre recherche.</p>}
            <div className="projects__cards">
                {filteredProjects.map((project, index) => (
                    <Link to={`/projects/${project.slug}`} className="projects__cards__container" key={index}>
                        <img src={project.image} alt={project.name} className='projects__cards__images'/>
                        <div className="projects__cards__content">
                            <h3 className='projects__cards__titles'>{project.name}</h3>
                            <p className='projects__cards__technologies'>{project.technologies.join(", ")}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
