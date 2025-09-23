import React from 'react';

const Card = ({ image, title, description, className, altText }) => {
  return (
    <div className={className}>
      <img src={image} alt={altText || title} />
      <h3 className="card-title">{title}</h3>
      <p className="card-desc" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default React.memo(Card);