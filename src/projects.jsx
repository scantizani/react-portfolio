// eslint-disable-next-line no-unused-vars
import React from 'react';
import './default.css';

export default function Projects () {
    return (
        <div className="page-container">
            <div className="page-content">

                <div className="card">
                    <h2>Cyber Security Audit</h2>
                    <p className="text-content">
                        Audited the security system of a global company.
                    </p>
                    <ul className="text-content">
                        <li><strong>Result:</strong> Reduced critical vulnerabilities by 40% and improved ISO 27001 compliance.</li>

                    </ul>
                </div>

                <div className="card">
                    <h2>React Portfolio Website</h2>
                    <p className="text-content">
                        Developed my personal portfolio using React and Vite.
                    </p>
                    <ul className="text-content">
                        <li><strong>Result:</strong> Created a fully responsive and interactive website to showcase my skills.</li>

                    </ul>
                </div>

                <div className="card">
                    <h2>E-commerce Security Enhancement</h2>
                    <p className="text-content">
                        Implemented security measures for an online store.
                    </p>
                    <ul className="text-content">
                        <li><strong>Result:</strong> Improved the platform’s security and prevented data leaks.</li>

                    </ul>
                </div>

            </div>
        </div>
    );
}