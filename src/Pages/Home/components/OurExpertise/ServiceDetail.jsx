import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { EXPERTISE_SERVICES } from '../../../../data/constants';
import Hero from '../../../../components/Hero/Hero';
import './ServiceDetail.css';

const ServiceHero = React.memo(({ service }) => (
  <header className="hero-section">
    <h1>{service.title}</h1>
    <p className="short-description">{service.shortDescription}</p>
  </header>
));

const ServiceOverview = React.memo(({ service }) => (
  <section className="service-overview">
    <div className="overview-container">
      <div className="overview-content">
      </div>
      <div className="overview-image">
        <img src={service.image} alt={service.title} />
      </div>
    </div>
  </section>
));

const FeaturesSection = React.memo(({ features }) => (
  <section className="service-section features-section">
    <div className="section-container">
      <h2>Features</h2>
      <ul className="feature-list">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  </section>
));

const DescriptionSection = React.memo(({ description }) => (
  <section className="service-section description-section">
    <div className="section-container">
      <h2>Description</h2>
      <p>{description}</p>
    </div>
  </section>
));

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = EXPERTISE_SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="service-detail">
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <DescriptionSection description={service.description} />
      <FeaturesSection features={service.features} />
    </div>
  );
};

export default ServiceDetail;


