import "./hero.css";



function Hero(){
    return(
        <>

  <div className="landing__container">

  
  <section className="landing__hero">
    {/* <p className="hero__resc">SOFTWARE.TECHNICAL CONSULTANCY</p> */}
    <h1 className="hero__title">About Us</h1>
    <p className="hero__desc">
      Driving Innovation, Empowering Businesses Worldwide
    </p>
  </section>

  
  <div className="landing__clients">
    <div className="clients__heading">
        At ABC Company, we are more than just a service provider—we’re your trusted partner<br/> in engineering success. With decades of experience and a commitment to excellence,<br/> we deliver tailored solutions that help businesses, from startups to global enterprises,<br/> achieve their goals.
    </div>
    <div className="btn">
        <button>Get a consultantion</button>
        <a href="/">View Case Studies</a>
    </div>
   
    </div>
  </div>

        </>
    )
}




export default Hero;
