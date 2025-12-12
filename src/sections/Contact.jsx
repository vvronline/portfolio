import React from 'react';
import './Contact.css';
import { FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-subtitle">
                    Have a project in mind or just want to say hi? I'd love to hear from you.
                </p>

                <div className="contact-wrapper">
                    <div className="contact-form glass" style={{ textAlign: 'center', padding: '3rem' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Send me a message</h3>
                        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                        <a href="mailto:online.vishnu.vr@gmail.com" className="btn btn-primary submit-btn" style={{ display: 'inline-flex', justifyContent: 'center', textDecoration: 'none' }}>
                            Send Email <FaPaperPlane />
                        </a>
                    </div>

                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p>I am currently open for freelance projects and job opportunities.</p>

                        <div className="contact-details" style={{ marginBottom: '2rem' }}>
                            <a href="mailto:online.vishnu.vr@gmail.com" style={{ marginBottom: '0.5rem', color: 'var(--text-muted)', display: 'block', textDecoration: 'none' }}>online.vishnu.vr@gmail.com</a>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>+91 80894 98019</p>
                        </div>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/vr-vishnu/" className="social-icon" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://github.com/vvronline" className="social-icon" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
