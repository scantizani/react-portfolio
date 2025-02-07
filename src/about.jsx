// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import profileImage from "../src/assets/profile.jpg";
import resumeImage from "../src/assets/resume/resume.jpg";
import './default.css';

export default function About() {
    const [showResume, setShowResume] = useState(false);

    const handleToggleResume = () => {
        setShowResume(!showResume);
    };

    return (
        <div className="page-container">
            <div className="page-content">
                <div className="image-container">
                    <img src={ profileImage } alt="Profile" className="profile-image" />
                </div>
                <h2>About Me</h2>

                <div className="text-content">

                    <p>
                        <b>Cyber Security Analyst</b> with over ten years of experience, specializing in risk
                        assessment, compliance, and IT governance.
                    </p>

                    <p>
                        Experienced with frameworks like <b>NIST, ITIL, and ISO 27001</b>, helping organizations improve
                        security and data governance.
                    </p>

                    <p>
                        Currently studying <b>Software Engineering at Centennial College</b>, expanding knowledge in
                        cybersecurity and software development.
                    </p>

                    <button onClick={handleToggleResume} className="resume-button">
                        {showResume ? 'Hide Resume' : 'Show Resume'}
                    </button>
                    <a href="../src/assets/resume/resume.pdf" download>
                        <button className={"downloadBt"}>Download PDF</button>
                    </a>
                    {showResume && <img src={resumeImage} alt="Resume" className="resume-image"/>}
                </div>
            </div>
        </div>
    );
}