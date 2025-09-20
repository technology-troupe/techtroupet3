import Button from './Button/Button'
import './nav.css'


const navbar = () => {
  return (
    <div>
       <nav className="landing__nav">
    <div className="landing__nav-brand">
      <span className="landing__nav-title"><img src="/logos/t3logo.jpeg" alt="T3 logo" className='nav-logo' /></span>
    </div>
    <div className="landing__nav-links">
      <a href="/" className="nav__link">Home</a>
      <a href="/about" className="nav__link">About Us</a>
      <a href="/casestudy" className="nav__link">Case Studies</a>
      <a href="/solution" className="nav__link">Solution</a>
      <a href="/contact" className="nav__link">Contact Us</a>
    </div>
  
    <a href="#" className="nav__cta">Ready To Start </a>
  {/* <div className=' ml-50 ' >
    <Button/>
    </div> */}
  </nav>
    </div>
  )
}

export default navbar

