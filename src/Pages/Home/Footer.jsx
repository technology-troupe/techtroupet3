import './footer.css'

function Footer(){
    return(
        <>
        <div className="footer_container">
            <div className="whole_grid">

            <div className="first_section">
                <div className="text_block">
                    <h1 className="t12">T3</h1>
                    <p className="tt1">We help you incorporate AI into your business to get <br/>the max benefit possible, with the help of our creative <br/>engineers. From social media to CRMS, we got you covered. </p>
                    </div>
                    <div className="icon">
                        <a href="https://www.facebook.com/"><div className="i1"><img src="/logos/fb.svg" alt="" /></div></a>
                        <a href="https://x.com/i/flow/login"><div className="i2"><img src="/logos/tw.svg" alt="" /></div></a>
                        <a href="https://www.linkedin.com/feed/"><div className="i3"><img src="/logos/linkedin.svg" alt="" /></div></a>
                        <a href="https://www.instagram.com/"><div className="i4"><img src="/logos/ig.svg" alt="" /></div></a>

                        
                    </div>
                 </div>

            <div className="second_section">
                <div className="text1">
                <h1 className="navv">Navigation</h1>
                </div>
                <div className="link_grid">
                    <div className="link1"><a href="#">About Us</a></div>
                    <div className="link2"><a href="#">Case Studies</a></div>
                    <div className="link3"><a href="#">Careers</a></div>
                    <div className="link4"><a href="#">Contact Us</a></div>
                    <div className="link5"><a href="#">T&C</a></div>
                    <div className="link6"><a href="#">Privacy Policy</a></div>
                </div>
            </div>


            <div className="third_section">
                <div className="text_last">
                    <h1 className="serv">Services</h1>
                </div>
                <div className="last1">Legacy System Migration</div>
                <div className="last2">Erp Implementation</div>
                <div className="last3">Engineering Consulting</div>
                <div className="last4">Product Consulting</div>
                <div className="last5">Automated Teams</div>
                <div className="last6">Cybersecurity Services</div>
            </div>


            </div>

            <div className="lastt">
                <div className="tag">ABC Company</div>
                <div className="i">|</div>
                <div className="right">All Rights Reserved</div>
            </div>
        </div>
        </>
    )
}

export default Footer;