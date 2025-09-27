import './join.css'

function JoinUs(){
    return(
        <>
          <div className="landing_conatiner">
            <div className="landing_text">
                <h1>Join Us</h1>
                <p>Looking for a career where you can innovate and make an impact? <br/>T3 is always on the lookout for passionate individuals to join our growing team.</p>
            </div>
            <div className="image_section">
                <div className="image1"><img src="/logos/join1.svg" alt="" />
                <h2>Inclusive Environment</h2>
                <p>We celebrate diversity and foster a<br/> culture of respect and collaboration</p></div>
                <div className="image2"><img src="/logos/join2.svg" alt="" />
                <h2>Flexible Work Options</h2>
                <p>Work remotely, on-site, or in a hybrid<br/> setup that suits your lifestyle.</p></div>
                <div className="image3"><img src="/logos/join3.svg" alt="" /><h2>Recognition & Rewards</h2>
                <p>Your contributions are valued, and we <br/>celebrate achievements big and small.</p></div>
            </div>
            <div className="landing_btn">If you want to join us mail to</div>
            <div className="landing_btn"><a href='mailto:team@technologytroupe.com'>Join Our Team</a></div>

        </div>
        </>
    )
}

export default JoinUs;