import React from 'react';

const ClientCard = ({ logo, name }) => {
  return (
    <div className="client__item">
      <img src={logo} alt={name} />
    </div>
  );
};

export default React.memo(ClientCard);