import './Featured.css';

function Featured(){
    return(
        <>
   
<div className="landing_container">

   <section class="case-studies-container">
        <h1>Featured Case Studies</h1>
        <p class="subtitle">
            Discover how our tailored solutions have transformed businesses across industries.
        </p>
        <div class="case-studies-list">
            <div class="case-study-card">
                <img src="/logos/f1.svg" alt="Healthcare Enterprise UI"/>
                <h2>Seamless Legacy System Migration for a Healthcare Enterprise</h2>
                <div class="challenge">
                    <strong>Challenge</strong>
                    <p>The client's outdated system was causing inefficiencies, data loss, and scalability issues.</p>
                </div>
                <div class="solution">
                    <strong>Solution</strong>
                    <p>
                        T3 developed a custom migration strategy, ensuring seamless data transfers, modernizing infrastructure, and integrating the system with advanced analytics tools.
                    </p>
                </div>
                <a href="#">Read Full Case study &#8594;</a>
            </div>
            <div class="case-study-card">
                <img src="/logos/f2.svg" alt="FinTech Startup Mobile Screens"/>
                <h2>Accelerating MVP Development for a FinTech Startup</h2>
                <div class="challenge">
                    <strong>Challenge</strong>
                    <p>The startup needed a stable MVP within a tight window to secure investor funding.</p>
                </div>
                <div class="solution">
                    <strong>Solution</strong>
                    <p>
                        Our team delivered a bug-free MVP in just 6 weeks, using agile development practices to suit the client’s requirements.
                    </p>
                </div>
                <a href="#">Read Full Case study &#8594;</a>
            </div>
            <div class="case-study-card">
                <img src="/logos/f3.svg" alt="ERP Dashboard Screenshot"/>
                <h2>Scalable ERP Implementation for a Retail Chain</h2>
                <div class="challenge">
                    <strong>Challenge</strong>
                    <p>The retail client struggled with fragmented operations across multiple locations, affecting efficiency and reporting accuracy.</p>
                </div>
                <div class="solution">
                    <strong>Solution</strong>
                    <p>
                        T3 implemented a customized ERP system, integrating inventory, sales, and finance operations into a single streamlined platform.
                    </p>
                </div>
                <a href="#">Read Full Case study &#8594;</a>
            </div>
        </div>
        <div class="view-more">
            <a href="#">View More &#8594;</a>
        </div>
    </section>
    </div>

        </>
    )
}

export default Featured;