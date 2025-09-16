import './nav.css'

const navbar = () => {
  return (
    <div>
       <nav className="landing__nav">
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
  </nav>
    </div>
  )
}

export default navbar
