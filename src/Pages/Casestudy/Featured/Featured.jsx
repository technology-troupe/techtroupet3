import React from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../../../data/constants';
import './Featured.css';

const CaseStudyCard = React.memo(({ caseStudy }) => (
    <div className="case-study-card">
        <img src={caseStudy.image} alt={caseStudy.title} />
        <h2>{caseStudy.title}</h2>
        <div className="challenge">
            <strong>Challenge</strong>
            <p>{caseStudy.shortDescription}</p>
        </div>
        <div className="solution">
            <strong>Solution</strong>
            <p>{caseStudy.solution.description}</p>
        </div>
        <Link to={`/casestudy/${caseStudy.slug}`}>Read Full Case study &#8594;</Link>
    </div>
));

const Featured = React.memo(() => {
    return (
        <>
            <div className="landing_container">
                <section className="case-studies-container">
                    <h1>Featured Case Studies</h1>
                    <p className="subtitle">
                        Discover how our tailored solutions have transformed businesses across industries.
                    </p>
                    <div className="case-studies-list">
                        {CASE_STUDIES.map(caseStudy => (
                            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
                        ))}
                    </div>
                    <div className="view-more">
                        <Link to="/casestudy">View More &#8594;</Link>
                    </div>
                </section>
            </div>
        </>
    );
});

export default Featured;

