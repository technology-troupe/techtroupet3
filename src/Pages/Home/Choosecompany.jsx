    import "./chooseCompany.css"
    import { Link } from 'react-router-dom';

    function chooseCompany(){
        return(
            <>
            <div className="landing_conatiner">
                <div className="landing_text">
                    <h1>Why Choose T3?</h1>
                    <p>We provide end-to-end solutions to help businesses across industries overcome challenges,innovate, and scale</p>
                </div>
                <div className="image_section">
                    <div className="image1"><img src="/logos/gl.webp" alt="" />
                    <h2>Global Reach</h2>
                    <p>Serving clients worldwide,from startups to <br/>enterprises.</p></div>
                    <div className="image2"><img src="/logos/sc.avif" alt="" />
                    <h2>Scalable Solutions</h2>
                    <p>Flexible services tailored to businesses of all<br/> sizes.</p></div>
                    <div className="image3"><img src="/logos/ex3.webp" alt="" /><h2>Expertise You Can Trust</h2>
                    <p>Decades of experience delivering quality solutions <br/>for complex problems.</p></div>
                </div>
                <div className="landing_btn"> <Link to="/contact"><button>Get a consultation</button></Link></div>
            </div>
        

            </>
        )
    }


    export default chooseCompany;
