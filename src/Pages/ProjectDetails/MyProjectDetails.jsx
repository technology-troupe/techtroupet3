import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import './MyProjectDetails.css';  // style file for this page
// import Hero from '../../components/Hero/Hero'; // not used
import { My_Project } from '../../data/constants';

const ProjectOverview = React.memo(({ project }) => (
  <section className="project-overview">
    <div className="overview-container">
      <div className="overview-content">
        <div className="project-meta">
          <div className="meta-item">
            <h4>Client</h4>
            <p>{project.client}</p>
          </div>
          <div className="meta-item">
            <h4>Timeline</h4>
            <p>{project.timeline}</p>
          </div>
          <div className="meta-item">
            <h4>Team Size</h4>
            <p>{project.teamsize}</p>
          </div>
          <div className="meta-item">
            <h4>Category</h4>
            <p>{project.category}</p>
          </div>
        </div>

        <div className="technologies">
          <h4>Technologies Used</h4>
          <div className="tech-tags">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="overview-image">
        <img src={project.heroImage} alt={project.title} />
      </div>
    </div>
  </section>
));

const ProblemSection = React.memo(({ problemstatement }) => (
  <section className="project-section problem-section">
    <div className="section-container">
      <h2>{problemstatement.title}</h2>
      <p>{problemstatement.description}</p>
    </div>
  </section>
));

const SolutionSection = React.memo(({ solved }) => (
  <section className="project-section solution-section">
    <div className="section-container">
      <h2>Solution</h2>
      <ul className="solution-list">
        {solved.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </section>
));

const FeedbackSection = React.memo(({ feedback }) => (
  <section className="project-section feedback-section">
    <div className="section-container">
      <h2>Client Feedback</h2>
      <p>{feedback}</p>
    </div>
  </section>
));

const MyProjectDetails = ({ projects }) => {
  const { slug } = useParams();
  const projectList = projects || My_Project;   // ✅ fallback to My_Project
  const project = projectList.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/casestudy" replace />;
  }

  return (
    <div className="my-project-details">
      <header className="hero-section">
        <h1>{project.title}</h1>
        <p className="short-description">{project.shortDescription}</p>
      </header>

      <ProjectOverview project={project} />
      <ProblemSection problemstatement={project.problemstatement} />
      <SolutionSection solved={project.Solved} />
      <FeedbackSection feedback={project.Feedback} />
    </div>
  );
};

export default MyProjectDetails;
