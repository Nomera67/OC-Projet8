import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectCard.scss';

interface Project {
    name: string;
    technologies: string[];
    image: string;
    description: string;
    githubLink: string;
    liveLink: string;
    slug: string;
}

function ProjectCard() {
    const { slug } = useParams<{ slug: string }>();
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch('/config/projects.json');
                const data: Project[] = await response.json();
                const foundProject = data.find(p => p.slug === slug);
                setProject(foundProject || null);
            } catch (error) {
                console.error('Erreur lors du chargement du projet :', error);
            }
        };

        fetchProject();
    }, [slug]);

    if (!project) {
        return <div>Projet non trouvé</div>;
    }

    return (
        <div className="project__card">
            <img src={project.image} alt={project.name} />
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <p>{project.technologies.join(", ")}</p>
            <a href={project.githubLink} target="_blank" rel="Lien GitHub">GitHub</a>
            <a href={project.liveLink} target="_blank" rel="Lien hébergé">Live Demo</a>
        </div>
    );
};

export default ProjectCard;
