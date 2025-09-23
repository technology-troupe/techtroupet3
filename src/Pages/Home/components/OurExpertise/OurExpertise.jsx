import React from "react";
import "./OurExpertise.css";
import { EXPERTISE_SERVICES } from "../../../../data/constants";
import Card from "../../../../components/Card/Card";

const Ourexpertise = React.memo(() => {
    const firstRowServices = EXPERTISE_SERVICES.slice(0, 3);
    const secondRowServices = EXPERTISE_SERVICES.slice(3, 6);

    return (
        <>
            <section className="expertise-section">
                <div className="landing_container">
                    <div className="landing_tt">
                        <h1>Our Expertise</h1>
                        <p>We specialize in delivering tailored solutions to address your business needs across these key areas</p>
                    </div>

                    <div className="middle_recs">
                        <div className="image-row">
                            {firstRowServices.map(service => (
                                <Card
                                    key={service.id}
                                    image={service.image}
                                    title={service.title}
                                    description={service.description}
                                    className={service.className}
                                    altText=""
                                />
                            ))}
                        </div>
                        <div className="image-row">
                            {secondRowServices.map(service => (
                                <Card
                                    key={service.id}
                                    image={service.image}
                                    title={service.title}
                                    description={service.description}
                                    className={service.className}
                                    altText=""
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
});

export default Ourexpertise;

