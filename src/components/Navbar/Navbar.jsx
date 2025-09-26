import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../data/constants';
import './Navbar.css';

const NavLink = React.memo(({ to, children, onClick }) => (
  <Link to={to} className="nav__link" onClick={onClick}>
    {children}
  </Link>
));

const Navbar = React.memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav className={`landing__nav ${scrolled ? "scrolled" : ""}`}>
        <div className="landing__nav-brand">
          <span className="landing__nav-title">
            <img src="/logos/t3logo.jpeg" alt="T3 logo" className="nav-logo" />
          </span>
        </div>

        <button 
          className="hamburger" 
          aria-label="Toggle menu" 
          onClick={toggleMenu}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <div className={`landing__nav-links ${menuOpen ? 'nav-open' : ''}`}>
          {NAVIGATION_LINKS.map(link => (
            <NavLink
              key={link.id}
              to={link.path}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <a href="#" className="nav__cta">Ready To Start</a>
      </nav>
    </div>
  );
});

export default Navbar;



// import React, { useState, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import { NAVIGATION_LINKS } from '../../data/constants';
// import './Navbar.css';

// const NavLink = React.memo(({ to, children, onClick }) => (
//   <Link to={to} className="nav__link" onClick={onClick}>
//     {children}
//   </Link>
// ));

// const Navbar = React.memo(() => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = useCallback(() => {
//     setMenuOpen(prev => !prev);
//   }, []);

//   const closeMenu = useCallback(() => {
//     setMenuOpen(false);
//   }, []);

//   return (
//     <div>
//       <nav className="landing__nav">
//         <div className="landing__nav-brand">
//           <span className="landing__nav-title">
//             <img src="/logos/t3logo.jpeg" alt="T3 logo" className="nav-logo" />
//           </span>
//         </div>

//         <button 
//           className="hamburger" 
//           aria-label="Toggle menu" 
//           onClick={toggleMenu}
//         >
//           <span className="hamburger-line" />
//           <span className="hamburger-line" />
//           <span className="hamburger-line" />
//         </button>

//         <div className={`landing__nav-links ${menuOpen ? 'nav-open' : ''}`}>
//           {NAVIGATION_LINKS.map(link => (
//             <NavLink
//               key={link.id}
//               to={link.path}
//               onClick={closeMenu}
//             >
//               {link.label}
//             </NavLink>
//           ))}
//         </div>

//         <a href="#" className="nav__cta">Ready To Start </a>
//       </nav>
//     </div>
//   );
// });

// export default Navbar;
