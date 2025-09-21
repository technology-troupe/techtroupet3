import './footer.css'
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <>


        <footer class="footer">
  <div class="footer-container">
    <div class="footer-about">
      <h3>T3</h3>
      <p>Expert IT Consultancy & Custom Technology Solutions</p>
    </div>
    <div class="footer-links">
      <h4>Quick Links</h4> 
      <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/casestudy">Case Studies</Link></li>
        <li><Link to="/solution">Solution</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
    <div class="footer-contact">
      <h4>Contact</h4>
      <p>Email: contact@technologytroupe.com</p>
      <p>Phone: +91 0000000000</p>
      <p>Address: 123 Bareilly UP </p>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2025 T3. All rights reserved.</p>
  </div>
</footer>

        </>
    )
}

export default Footer;

