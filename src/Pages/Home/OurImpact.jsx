import "./impact.css";

function OurImpact() {
    return (
        <div className="landing_impact">
            <div className="landing_text">
                <h1>Our Impact</h1>
                <p>Discover the milestones that define our success.</p>
            </div>
            <div className="impact_grid">
                <div className="impact_item">
                    <div className="impact_value">95%</div>
                    <div className="impact_label">Client Satisfaction Rate</div>
                </div>
                <div className="impact_item">
                    <div className="impact_value">300+</div>
                    <div className="impact_label">Successful Projects Delivered</div>
                </div>
                <div className="impact_item">
                    <div className="impact_value">40%</div>
                    <div className="impact_label">Faster MVP Delivery</div>
                </div>
                <div className="impact_item">
                    <div className="impact_value">10+</div>
                    <div className="impact_label">Years of Combined Expertise</div>
                </div>
            </div>
            <div className="impact_uptime">
                <div className="uptime_value">99.9%</div>
                <div className="uptime_label">Uptime Guarantee</div>
            </div>
        </div>
    );
}

export default OurImpact;
