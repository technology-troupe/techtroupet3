import "./hero.css";



function Hero(){
    return(
        <>

  <div className="landing__container">

  
  <section className="landing__hero">
    {/* <p className="hero__resc">SOFTWARE.TECHNICAL CONSULTANCY</p> */}
    <h1 className="hero__title">Case Studies</h1>
    <p className="hero__desc">
      Proven Success Across Industries
    </p>
  </section>

  
  <div className="landing__clients">
    <div className="clients__heading">
      Explore how T3 has empowered businesses worldwide with tailored engineering solutions that deliver measurable results.
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
