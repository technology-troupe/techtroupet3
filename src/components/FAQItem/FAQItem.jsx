import React from 'react';

const FAQItem = ({ question, answer }) => {
  return (
    <details className="faq-item">
      <summary>{question}</summary>
      <p>{answer}</p>
    </details>
  );
};

export default React.memo(FAQItem);