import React from 'react';
import './Experience.css';
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            role: 'Technical Specialist',
            company: 'Continental AG',
            duration: 'Sep 2022 – Present',
            desc: [
                'Maintained and enhanced complex Web Applications using modern JavaScript frameworks (React.js).',
                'Architected scalable server-side logic using Node.js, following strict coding standards.',
                'Led automation tools development for migrating legacy IMS systems to GitHub and IBM Jazz (60% effort reduction).',
                'Implemented Jenkins Shared Libraries and CI/CD pipelines across 15+ projects.',
                'Developed Python automation solutions for domain migration and SCM operations.'
            ]
        }
    ];

    const education = [
        {
            degree: 'B.Tech Computer Science and Engineering',
            school: 'Cochin University of Science and Technology',
            year: '2014 - 2018'
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Experience & Education</h2>

                <div className="timeline-container">
                    {/* Experience Column */}
                    <div className="timeline-column">
                        <h3 className="timeline-title"><FaBriefcase /> Experience</h3>
                        {experiences.map((exp, index) => (
                            <div key={index} className="timeline-card glass">
                                <div className="timeline-date">{exp.duration}</div>
                                <h4>{exp.role}</h4>
                                <h5 className="company">{exp.company}</h5>
                                <ul className="job-description">
                                    {exp.desc.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Education & Awards Column */}
                    <div className="timeline-column">
                        <h3 className="timeline-title"><FaGraduationCap /> Education</h3>
                        {education.map((edu, index) => (
                            <div key={index} className="timeline-card glass">
                                <div className="timeline-date">{edu.year}</div>
                                <h4>{edu.degree}</h4>
                                <h5 className="company">{edu.school}</h5>
                            </div>
                        ))}

                        <h3 className="timeline-title" style={{ marginTop: '3rem' }}><FaAward /> Achievements</h3>
                        <div className="timeline-card glass">
                            <ul className="job-description">
                                <li><strong>Sprint Champion (3x)</strong>: Recognized for high velocity and completing maximum User Stories.</li>
                                <li><strong>Employee of the Month (2x)</strong>: Awarded for outstanding contributions to project delivery.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
