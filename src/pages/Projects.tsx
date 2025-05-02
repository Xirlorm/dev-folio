import React from 'react';

const Projects: React.FC = () => {
    const dummyProjects = [
        { id: 1, name: 'Project Alpha', description: 'This is a description for Project Alpha.' },
        { id: 2, name: 'Project Beta', description: 'This is a description for Project Beta.' },
        { id: 3, name: 'Project Gamma', description: 'This is a description for Project Gamma.' },
    ];

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {dummyProjects.map((project) => (
                    <li key={project.id}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;