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

    const filteredProjects = projects.filter(project =>
        filter.every(f => project.technologies.includes(f))
    );

    return (
        <div className="projects__container">
            <h2 className="projects__title">Mes projets :</h2>
            <div className="projects__filters">
                <button className="projects__filter" onClick={() => setFilter([])}>Reset Filters</button>
                {technologies.map(tech => (
                    <button
                    key={tech}
                    className={filter.includes(tech) ? 'active' : ''}
                    onClick={() => handleFilterChange(tech)}
                    >
                    {tech}
                    </button>
                ))}
            </div>
            <div className="projects__cards">
                {filteredProjects.map((project, index) => (
                    <div className="projects__cards__container" key={index}>
                        <img src={project.image} alt={project.name} />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p>{project.technologies.join(", ")}</p>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        <Link to={`/projects/${project.slug}`}>Voir le projet</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
