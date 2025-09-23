import React from "react";
import "./ChooseCompany.css";
import { Link } from 'react-router-dom';
import { CHOOSE_COMPANY_FEATURES } from "../../../../data/constants";

const ChooseCompanyFeature = React.memo(({ image, title, description, className }) => (
    <div className={className}>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
));

const ChooseCompany = React.memo(() => {
    return (
        <>
            <div className="landing_conatiner">
                <div className="landing_text">
                    <h1>Why Choose T3?</h1>
                    <p>We provide end-to-end solutions to help businesses across industries overcome challenges,innovate, and scale</p>
                </div>
                <div className="image_section">
                    {CHOOSE_COMPANY_FEATURES.map(feature => (
                        <ChooseCompanyFeature
                            key={feature.id}
                            image={feature.image}
                            title={feature.title}
                            description={feature.description}
                            className={feature.className}
                        />
                    ))}
                </div>
                <div className="landing_btn">
                    <Link to="/contact">
                        <button>Get a consultation</button>
                    </Link>
                </div>
            </div>
        </>
    );
});

export default ChooseCompany;
