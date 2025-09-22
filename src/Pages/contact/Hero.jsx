import "./hero.css";
import { Link } from 'react-router-dom';




function Hero(){
    return(
        <>

  <div className="landing__container">

  
  <section className="landing__hero">
    <h1 className="hero__title">Get In Touch</h1>
    <p className="hero__desc">
      Let's create the future of your business together
    </p>
  </section>

  
  <div className="landing__clients">
    <div className="clients__heading">
        Whether you need consulting, development, or robust digital solutions, ABC Company is here to help
    </div>
    <div className="btn">
      <Link to="/contact"><button>Contact Us</button></Link>
      <Link to="/solution">View Our Services</Link>
        
    </div>
   
    </div>
  </div>

        </>
    )
}




export default Hero;
