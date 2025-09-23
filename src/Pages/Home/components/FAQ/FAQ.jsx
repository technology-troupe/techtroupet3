
import React from 'react';
import './FAQ.css';
import { FAQS } from '../../../../data/constants';
import FAQItem from '../../../../components/FAQItem/FAQItem';

const Faqs = React.memo(() => {
    return (
        <div className="faq-container">
            <div className="faq-header">
                <h1>FAQs</h1>
                <p>Find clear, concise answers about our services, processes, and how we help businesses achieve their goals.</p>
            </div>
            <div className="faq-list">
                {FAQS.map(faq => (
                    <FAQItem
                        key={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </div>
        </div>
    );
});

export default Faqs;
