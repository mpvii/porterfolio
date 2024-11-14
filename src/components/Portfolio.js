import React, { useState, useEffect } from 'react';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/portfolio') // Your Flask backend URL
            .then(response => response.json())
            .then(data => setPortfolio(data))
            .catch(error => console.error('Error fetching the portfolio:', error));
    }, []);

    if (!portfolio) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{portfolio.name}</h1>
            <p>{portfolio.bio}</p>
            <h2>Skills</h2>
            <ul>
                {portfolio.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <h2>Projects</h2>
            <ul>
                {portfolio.projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Portfolio;
