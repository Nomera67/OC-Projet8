import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectCard.scss';

import githubLogo from '../../assets/icons/github-sign.png';
import githubLogoMint from '../../assets/icons/github-sign-mint.png';
import webLogo from '../../assets/icons/web-white.png';
import webLogoMint from '../../assets/icons/web-mint.png';

interface Project {
    name: string;
    technologies: string[];
    image: string;
    description: string;
    competence: string;
    difficulties: string;
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

    useEffect(() => {
        if (project) {
            document.title = `${project.name} | Yan R. Portfolio`;
        } else {
            document.title = 'Projet non trouvé | Yan R. Portfolio';
        }
    }, [project]);

    if (!project) {
        return <div className="project__card__notfound">Aucun projet n'a été trouvé à cette adresse. Revenez à l'accueil, vous trouverez sûrement votre bonheur.</div>;
    }

    return (
        <div className="project__card">
            <div className="project__card__img">
                <img src={project.image} alt={project.name} />
            </div>
            <div className="project__card__content">
                <h1 className="project__card__title highlight">{project.name}</h1>
                <div className="project__card__technologies">
                    <h2 className="project__card__subtitles">Technologies utilisées :</h2>
                    <ul className="project__card__list">
                        {project.technologies.map((tech, index) => (
                            <li key={index}>- {tech}</li>
                        ))}
                    </ul>
                </div>
                <div className="project__card__contender">
                    <h2 className="project__card__subtitles">Description du projet :</h2>
                    <p className='project__card__description'>{project.description}</p>
                </div>
                <div className="project__card__contender">
                    <h2 className="project__card__subtitles">Compétences acquises :</h2>
                    <p className="project__card__description">{project.competence}</p>
                </div>
                <div className="project__card__contender">
                    <h2 className="project__card__subtitles">Difficultés rencontrées :</h2>
                    <p className='project__card__description'>{project.difficulties}</p>
                </div>
                
                <div className="project__card__links">
                    {project.githubLink ? (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className='project__card__link' aria-label={`Lien vers le repository GitHub du projet ${project.name}`}>
                            <img src={githubLogo} alt="" className='project__card__link__img1'/>
                            <img src={githubLogoMint} alt="" className='project__card__link__img2'/>
                        </a>
                    ) : (
                        <a href="#" className="disabled" aria-disabled="true">Aucun GitHub</a>
                    )}
                    {project.liveLink ? (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className='project__card__link' aria-label={`Lien vers l'hébergement du projet ${project.name}`}>
                        <img src={webLogo} alt="" className='project__card__link__img1'/>
                        <img src={webLogoMint} alt="" className='project__card__link__img2'/>
                    </a>
                    ) : (
                        <a href="#" className="disabled" aria-disabled="true">Aucun hébergement</a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
