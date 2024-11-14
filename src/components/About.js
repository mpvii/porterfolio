import React, { useEffect, useState } from 'react';

const About = () => {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/about')
            .then(response => response.json())
            .then(data => setAboutData(data))
            .catch(error => console.error('Error fetching about data:', error));
    }, []);

    if (!aboutData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{aboutData.title}</h1>
            <p>{aboutData.content}</p>
        </div>
    );
};

export default About;