import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem',
            textAlign: 'center',
            borderTop: '1px solid var(--glass-border)',
            color: 'var(--text-muted)',
            fontSize: '0.9rem'
        }}>
            <p>© {new Date().getFullYear()} Vishnu VR. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
