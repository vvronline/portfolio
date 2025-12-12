import React from 'react';
import './Hero.css';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-title">
                        Vishnu <span className="text-gradient">VR</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        Full Stack Engineer
                    </h2>
                    <p className="hero-description">
                        Results-driven Full Stack Engineer with 3+ years of experience in end-to-end web development, backend automation, and cloud migration.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View Work <FaArrowRight />
                        </a>
                        <a href="/resume.pdf" className="btn btn-outline" download>
                            Download CV <FaDownload />
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    {/* Abstract visual element - glowing sphere or similar */}
                    <div className="glow-sphere"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
