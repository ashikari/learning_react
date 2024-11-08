import React from 'react';
import Project from './Project';

const projectsData = [
  {
    title: 'Self-Driving Simulation',
    description: 'Developed a closed-loop GPU simulation for autonomous vehicles.',
    link: 'https://example.com/simulation'
  },
  {
    title: 'Multimodal Generative Modeling',
    description: 'Exploring generative models for complex, multimodal data.',
    link: 'https://example.com/generative-modeling'
  },
  {
    title: 'Mechanical Design Project',
    description: 'A mechanical design project demonstrating CAD and prototyping skills.',
    link: 'https://example.com/mechanical-design'
  }
];

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

