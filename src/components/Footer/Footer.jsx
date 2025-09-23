import React from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../data/constants';
import './Footer.css';

const FooterLink = React.memo(({ to, children }) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
));

const Footer = React.memo(() => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>T3</h3>
          <p>Expert IT Consultancy & Custom Technology Solutions</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4> 
          <ul>
            {NAVIGATION_LINKS.filter(link => link.path !== '/').map(link => (
              <FooterLink key={link.id} to={link.path}>
                {link.label}
              </FooterLink>
            ))}
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: contact@technologytroupe.com</p>
          <p>Phone: +91 0000000000</p>
          <p>Address: 123 Bareilly UP</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 T3. All rights reserved.</p>
      </div>
    </footer>
  );
});

export default Footer;