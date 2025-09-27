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
  className = "",
  page // 👈 add a prop to know which page we are on
}) => {
  return (
    <div className={`landing__container ${className}`}>
      <section className="landing__hero">
        {subtitle && <p className="hero__resc">{subtitle}</p>}
        <h1 className="hero__title" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="hero__desc">{description}</p>

        {/* Show one button only for home page */}
        {page === "home" && primaryButton && (
          <div className="hero__actions">
            <Link to={primaryButton.link} className="hero__cta hero__cta--primary">
              {primaryButton.text}
            </Link>
          </div>
        )}
      </section>

      {content && (
        <div className="landing__clients">
          <div
            className="clients__heading"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          {(primaryButton || secondaryButton) && (
            <div className="btn">
              {primaryButton && (
                <Link to={primaryButton.link}>
                  <button>{primaryButton.text}</button>
                </Link>
              )}
              {secondaryButton && (
                <Link to={secondaryButton.link}>
                  {secondaryButton.text}
                </Link>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default Hero;
