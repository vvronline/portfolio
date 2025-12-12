import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: 'Impennata',
        desc: 'A React Native web app to monitor real-time charge data and analytics.',
        tech: ['React Native', 'Web', 'Real-time Data'],
        link: '#',
        github: 'https://github.com/vvronline/Impennata.git',
    },
    {
        title: 'Finance Dashboard',
        desc: 'Real-time dashboard for finance analytics, featuring data visualization and report generation.',
        tech: ['React.js', 'Python', 'sql', 'fastapi'],
        link: '#',
        github: 'https://github.com/vvronline/Finance-manager.git'
    },
    {
        title: 'Task Management App',
        desc: 'A sleek productivity tool for teams to manage tasks, collaborate, and track progress.',
        tech: ['React Native', 'Redux', 'Node.js'],
        link: '#',
        github: '#'
    }
];

const ProjectCard = ({ project }) => (
    <div className="project-card glass">
        <div className="project-image">
            {project.image ? (
                <>
                    <div className="project-bg-blur" style={{ backgroundImage: `url(${project.image})` }}></div>
                    <img src={project.image} alt={project.title} className="project-img-contain" loading="lazy" />
                </>
            ) : (
                <div className="img-placeholder"></div>
            )}
        </div>
        <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tech-stack">
                {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                ))}
            </div>
            <div className="project-links">
                <a
                    href={project.github}
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub /> Code
                </a>
                <a
                    href={project.link}
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaExternalLinkAlt /> Live Demo
                </a>
            </div>
        </div>
    </div>
);

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">My Portfolio</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
