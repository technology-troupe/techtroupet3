import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CASE_STUDIES } from '../../data/constants';
import Hero from '../../components/Hero/Hero';
import './ProjectDetails.css';


const ProjectOverview = React.memo(({ caseStudy }) => (
  <section className="project-overview">
    <div className="overview-container">
      <div className="overview-content">
        <div className="project-meta">
          <div className="meta-item">
            <h4>Client</h4>
            <p>{caseStudy.client}</p>
          </div>
          <div className="meta-item">
            <h4>Timeline</h4>
            <p>{caseStudy.timeline}</p>
          </div>
          <div className="meta-item">
            <h4>Team Size</h4>
            <p>{caseStudy.teamSize}</p>
          </div>
          <div className="meta-item">
            <h4>Category</h4>
            <p>{caseStudy.category}</p>
          </div>
        </div>
        
        <div className="technologies">
          <h4>Technologies Used</h4>
          <div className="tech-tags">
            {caseStudy.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="overview-image">
        <img src={caseStudy.heroImage} alt={caseStudy.title} />
      </div>
    </div>
  </section>
));

const ProjectSection = React.memo(({ title, description, items, isChallenge = false }) => (
  <section className={`project-section ${isChallenge ? 'challenge-section' : 'solution-section'}`}>
    <div className="section-container">
      <div className="section-content">
        <h2>{title}</h2>
        <p className="section-description">{description}</p>
        
        <div className="section-items">
          {items.map((item, index) => (
            <div key={index} className="section-item">
              <div className="item-marker"></div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
));

const ResultsSection = React.memo(({ results }) => (
  <section className="results-section">
    <div className="results-container">
      <h2>{results.title}</h2>
      
      <div className="metrics-grid">
        {results.metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-value">{metric.value}</div>
            <h4 className="metric-label">{metric.label}</h4>
            <p className="metric-description">{metric.description}</p>
          </div>
        ))}
      </div>
      
      <div className="outcomes">
        <h3>Key Outcomes</h3>
        <div className="outcomes-list">
          {results.outcomes.map((outcome, index) => (
            <div key={index} className="outcome-item">
              <div className="outcome-check">✓</div>
              <p>{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
));

const TestimonialSection = React.memo(({ testimonial }) => (
  <section className="testimonial-section">
    <div className="testimonial-container">
      <div className="testimonial-content">
        <blockquote>"{testimonial.quote}"</blockquote>
        <div className="testimonial-author">
          <h4>{testimonial.author}</h4>
          <p>{testimonial.position}</p>
        </div>
      </div>
    </div>
  </section>
));

const ProjectDetails = () => {
  const { slug } = useParams();
  const caseStudy = CASE_STUDIES.find(study => study.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/casestudy" replace />;
  }

  const heroContent = {
    title: caseStudy.title,
    description: caseStudy.shortDescription,
    content: `A deep dive into how T3 delivered exceptional results for ${caseStudy.client} in ${caseStudy.category}.`,
    primaryButton: {
      text: "Get a consultation",
      link: "/contact"
    },
    secondaryButton: {
      text: "View More Projects",
      link: "/casestudy"
    }
  };

  return (
    <div className="project-details">
      <Hero {...heroContent} />
      
      <ProjectOverview caseStudy={caseStudy} />
      
      <ProjectSection
        title={caseStudy.challenge.title}
        description={caseStudy.challenge.description}
        items={caseStudy.challenge.keyPoints}
        isChallenge={true}
      />
      
      <ProjectSection
        title={caseStudy.solution.title}
        description={caseStudy.solution.description}
        items={caseStudy.solution.approach}
        isChallenge={false}
      />
      
      <ResultsSection results={caseStudy.results} />
      
      <TestimonialSection testimonial={caseStudy.testimonial} />
    </div>
  );
};

export default ProjectDetails;


