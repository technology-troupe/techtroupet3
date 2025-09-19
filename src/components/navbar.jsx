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





// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from "./Pages/Home/Home";
// import Ourexpertise from './Pages/Home/ourexpertise';
// import OurImpact from "./Pages/Home/ourimpact";
// import Choosecompany from './Pages/Home/chooseCompany';
// import SuccessStory from './Pages/Home/successStory';
// import Faqs from './Pages/Home/faqs';
// import GetIn from './Pages/Home/GetIn';
// import Footer from './Pages/Home/Footer';
// import Navbar from './components/navbar';
// import About from './Pages/Aboutus/About';
// import CaseStudy from './Pages/Casestudy/CaseStudy';
// import Contact from './Pages/contact/Contact';

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/expertise" element={<Ourexpertise />} />
//           <Route path="/impact" element={<OurImpact />} />
//           <Route path="/choose-company" element={<Choosecompany />} />
//           <Route path="/success-story" element={<SuccessStory />} />
//           <Route path="/faqs" element={<Faqs />} />
//           <Route path="/get-in" element={<GetIn />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/case-study" element={<CaseStudy />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
