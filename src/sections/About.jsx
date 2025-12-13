import React from 'react';
import './About.css';
import { FaCode, FaServer, FaMobileAlt, FaPaintBrush, FaCloud, FaDatabase } from 'react-icons/fa';

const About = () => {
    const skills = [
        { name: 'Frontend', icon: <FaCode />, level: 'React.js, Next.js, Redux' },
        { name: 'Backend', icon: <FaServer />, level: 'Node.js, Java, Python' },
        { name: 'Cloud/DevOps', icon: <FaCloud />, level: 'AWS, Docker, Jenkins' },
        { name: 'Database', icon: <FaDatabase />, level: 'MongoDB, SQL, DynamoDB' },
    ];

    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text glass">
                        <h3>Professional Summary</h3>
                        <p>
                            I am a results-driven Full Stack Engineer with over 3+ years of experience in designing scalable architectures and delivering enterprise-grade solutions. My expertise spans across modern web development, backend automation, and cloud infrastructure.
                        </p>
                        <p>
                            I specialize in modernizing legacy systems, implementing CI/CD pipelines, and driving continuous delivery using AWS, Jenkins, and Docker. I am adept at working in Agile environments to enable secure, high-performance software solutions.
                        </p>
                        <div className="stats">
                            <div className="stat-item">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Years Exp.</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">20+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card glass">
                                <div className="skill-icon">{skill.icon}</div>
                                <h4>{skill.name}</h4>
                                <p>{skill.level}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
