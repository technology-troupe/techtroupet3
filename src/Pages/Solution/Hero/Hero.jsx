import "./hero.css";



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
      <a href="/contact"><button>Get a consultantion</button></a>
        
        <a href="/solution">View Our Services</a>
    </div>
   
    </div>
  </div>

        </>
    )
}




export default Hero;
