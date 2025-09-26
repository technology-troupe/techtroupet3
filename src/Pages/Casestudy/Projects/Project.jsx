// Project.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { My_Project } from '../../../data/constants';
import './Project.css';

// ✅ Export ProjectCard
const ProjectCard = React.memo(({ caseStudy }) => (
  <div className="case-study-card">
    <img src={caseStudy.image} alt={caseStudy.title} />
    <h2>{caseStudy.title}</h2>

    <div className="challenge">
      <strong>Challenge</strong>
      <p>{caseStudy.shortDescription}</p>
    </div>

    <div className="solution">
      <strong>Solution</strong>
      <ul>
        {caseStudy.Solved.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>

    <Link to={`/mycasestudy/${caseStudy.slug}`}>View Project →</Link>
  </div>
));

const FeaturedProjects = React.memo(() => {
  return (
    <div className="landing_container">
      <section className="case-studies-container">
        <h1>Projects</h1>
        <p className="subtitle">
          Discover how our tailored solutions have transformed businesses across industries.
        </p>

        <div className="case-studies-list">
          {My_Project.map((caseStudy) => (
            <ProjectCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>

        <div className="view-more">
          <Link to="/casestudy">View More →</Link>
        </div>
      </section>
    </div>
  );
});

export default FeaturedProjects;

