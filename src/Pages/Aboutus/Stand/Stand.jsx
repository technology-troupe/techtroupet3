import './stand.css'

function Stand(){
    return(
        <>
          <div className="landing_conatiner">
            <div className="landing_text">
                <h1>What We Stand For</h1>
                <p>Our unwavering values shape our approach to delivering impactful solutions.</p>
            </div>
            <div className="image_section">
                <div className="image1"><img src="/logos/stand1.svg" alt="" />
                <h2>Innovation</h2>
                <p>Pioneering solutions tailored to<br/> your unique needs.</p></div>
                <div className="image2"><img src="/logos/stand2.png" alt="" />
                <h2>Reliability</h2>
                <p>Delivering on promises with <br/> precision and excellence.</p></div>
                <div className="image3"><img src="/logos/stand3.svg" alt="" /><h2>Collaboration</h2>
                <p>Partnering with clients to achieve <br/>shared success.</p></div>
                <div className="image4"><img src="/logos/stand4.svg" alt="" /><h2>Integrity</h2>
                <p>Building trust through transparency <br/>and accountability.</p></div>
            </div>
        </div>
        </>
    )
}

export default Stand;