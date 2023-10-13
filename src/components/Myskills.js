import React from 'react';
import './styles/skills.css'

const Myskills = () => {
    return (
        <div className="main">
            <div className="skills">
                <h2>Skills</h2>
                <div className="skill-card">
                    <h3>Web Development</h3>
                    <p>HTML, CSS, JavaScript, React, Bootstrap,  MongoDb, Node js.</p>
                </div>
                <div className="skill-card">
                    <h3>Programming Languages</h3>
                    <p>Python, C++, C</p>
                </div>
                <div className="skill-card">
                    <h3>Designing</h3>
                    <p>Canva.</p>
                </div>
                
            </div>
        </div>
    );
}

export default Myskills;