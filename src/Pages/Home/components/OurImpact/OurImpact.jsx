import React from "react";
import "./OurImpact.css";
import { IMPACT_METRICS, UPTIME_METRIC } from "../../../../data/constants";
import ImpactMetric from "../../../../components/ImpactMetric/ImpactMetric";

const OurImpact = React.memo(() => {
    return (
        <div className="landing_impact">
            <div className="landing_text">
                <h1>Our Impact</h1>
                <p>Discover the milestones that define our success.</p>
            </div>
            <div className="impact_grid">
                {IMPACT_METRICS.map(metric => (
                    <ImpactMetric
                        key={metric.id}
                        value={metric.value}
                        label={metric.label}
                        className="impact_item"
                    />
                ))}
            </div>
            <ImpactMetric
                value={UPTIME_METRIC.value}
                label={UPTIME_METRIC.label}
                className="impact_uptime"
            />
        </div>
    );
});

export default OurImpact;
