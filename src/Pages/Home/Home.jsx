
import "./Home.css";



function Home(){
    return(
        <>

  <div className="landing__container">
  {/* <nav className="landing__nav">
    <div className="landing__nav-brand">
      <span className="landing__nav-title">T<sub>3</sub></span>
    </div>
    <div class="landing__nav-links">
      <a href="#" className="nav__link">Home</a>
      <a href="#" className="nav__link">About Us</a>
      <a href="#" className="nav__link">Case Studies</a>
      <a href="#" className="nav__link">Services</a>
      <a href="#" className="nav__link">Contact Us</a>
    </div>
    <a href="#" className="nav__cta">Ready To Start </a>
  </nav> */}

  
  <section className="landing__hero">
    <p className="hero__resc">SOFTWARE.TECHNICAL CONSULTANCY</p>
    <h1 className="hero__title">Your Business is the Story<br />Tech is the Medium.</h1>
    <p className="hero__desc">
      We're the troupe
    </p>
    <div className="hero__actions">
      <a href="#" className="hero__cta hero__cta--primary">Ready to Start</a>
    </div>
  </section>

  
  <div className="landing__clients">
    <div className="clients__heading">Join in our ever growing client list</div>
    <div className="clients__list">
      
      <div className="client__item">
        <img src="/logos/logo.svg" alt="Boltshift"  />
        
      </div>
      <div className="client__item">
        <img src="/logos/light.svg" alt="Lightbox"  />
        
      </div>
      <div className="client__item">
        <img src="/logos/Feather.svg" alt="FeatherDev"  />
        
      </div>
      <div className="client__item">
        <img src="/logos/Spherule.svg" alt="Spherule"  />
        
      </div>
      <div className="client__item">
        <img src="/logos/GlobalBank.svg" alt="GlobalBank"  />
        
      </div>
      <div className="client__item">
        <img src="/logos/Nietzsc.svg" alt="Nietzsche" />
        
      </div>
    </div>
  </div>
</div>
        </>
    )
}




export default Home;