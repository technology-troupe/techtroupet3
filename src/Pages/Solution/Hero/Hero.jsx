import "./hero.css";
import { Link } from 'react-router-dom';




function Hero(){
    return(
        <>

  <div className="landing__container">

  
  <section className="landing__hero">
    {/* <p className="hero__resc">SOFTWARE.TECHNICAL CONSULTANCY</p> */}
    <h1 className="hero__title">Solutions</h1>
    <p className="hero__desc">
      Transforming Businesses with Tailored Engineering Solutions
    </p>
  </section>

  
  <div className="landing__clients">
    <div className="clients__heading">
        From startups to multinational enterprises, our services are designed to address your unique challenges and help you achieve measurable success.
    </div>
    <div className="btn">
      <Link to="/contact"><button>Get a consultantion</button></Link>
      <Link to="/solution">View Our Services</Link>
        
    </div>
   
    </div>
  </div>

        </>
    )
}




export default Hero;
