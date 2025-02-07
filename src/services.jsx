// eslint-disable-next-line no-unused-vars
import React from 'react';
import './default.css';

export default function Services() {
    return(
        <div className="page-container">
            <div className="page-content">
                <div className="card">
                    <h2>Cyber Security Consulting</h2>
                    <p className="text-content">
                        Helping businesses strengthen their security posture.
                    </p>
                </div>
                <div className="card">
                    <h3>Software Development</h3>
                    <p className="text-content">
                        Building secure and efficient applications.
                    </p>
                </div>
                <div className="card">
                    <h3>Cloud Security</h3>
                    <p className="text-content">
                        Implementing security best practices for cloud environments.
                    </p>
                </div>
                <div className="card">
                    <h3>Penetration Testing</h3>
                    <p className="text-content">
                        Identifying and mitigating vulnerabilities in IT systems.
                    </p>
                </div>
            </div>
        </div>
    );
}