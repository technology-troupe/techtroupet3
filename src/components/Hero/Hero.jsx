import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = React.memo(({ 
  subtitle, 
  title, 
  description, 
  content, 
  primaryButton, 
  secondaryButton,
  showActions = true,
  className = ""
}) => {
  return (
    <div className={`landing__container ${className}`}>
      <section className="landing__hero">
        {subtitle && <p className="hero__resc">{subtitle}</p>}
        <h1 className="hero__title" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="hero__desc">{description}</p>
        {showActions && primaryButton && (
          <div className="hero__actions">
            <a href={primaryButton.link} className="hero__cta hero__cta--primary">
              {primaryButton.text}
            </a>
          </div>
        )}
      </section>

      {content && (
        <div className="landing__clients">
          <div className="clients__heading" dangerouslySetInnerHTML={{ __html: content }} />
          {(primaryButton || secondaryButton) && (
            <div className="btn">
              {primaryButton && (
                <Link to={primaryButton.link}>
                  <button>{primaryButton.text}</button>
                </Link>
              )}
              {secondaryButton && (
                <Link to={secondaryButton.link}>{secondaryButton.text}</Link>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default Hero;