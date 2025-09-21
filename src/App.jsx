
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from "./Pages/Home/Home";
// import Ourexpertise from './Pages/Home/ourexpertise';
// import OurImpact from "./Pages/Home/ourimpact";
// import Choosecompany from './Pages/Home/chooseCompany';
// import SuccessStory from './Pages/Home/SuccessStory';
// import Faqs from './Pages/Home/faqs';
// import GetIn from './Pages/Home/GetIn';
// import Footer from './Pages/Home/Footer';
// import Navbar from './components/navbar';
// import About from './Pages/Aboutus/About';
// import Main from './Pages/Main';
// import CaseStudy from './Pages/Casestudy/CaseStudy';
// import Solution from './Pages/Solution/Solution';
// import Contact from './Pages/contact/Contact';



//     function App() {
//       return (
//         <>
//         <BrowserRouter>
        
//         <Navbar/>
//         <Routes>
//             <Route path="/" element={<Main />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/casestudy" element={<CaseStudy />} />
//             <Route path="/solution" element={<Solution/>}/>
//             <Route path="/contact" element={<Contact/>}/>
          
            
            
            
//         </Routes>
//         <Footer/>

//         </BrowserRouter>
        
      
     
//         </>
//       );
//     }

//     export default App;


// import React, { useState } from "react";
// import IntroAnimation from './components/Intro';


// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from "./Pages/Home/Home";
// import Ourexpertise from './Pages/Home/ourexpertise';
// import OurImpact from "./Pages/Home/ourimpact";
// import Choosecompany from './Pages/Home/chooseCompany';
// import SuccessStory from './Pages/Home/SuccessStory';
// import Faqs from './Pages/Home/faqs';
// import GetIn from './Pages/Home/GetIn';
// import Footer from './Pages/Home/Footer';
// import Navbar from './components/navbar';
// import About from './Pages/Aboutus/About';
// import Main from './Pages/Main';
// import CaseStudy from './Pages/Casestudy/CaseStudy';
// import Solution from './Pages/Solution/Solution';
// import Contact from './Pages/contact/Contact';

// function App() {
//   const [introFinished, setIntroFinished] = useState(false); 

//  if (!introFinished) {
//   console.log("Showing intro");
//   return <IntroAnimation onFinish={() => {
//     console.log("Intro finished");
//     setIntroFinished(true);
//   }} />;
// }


//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/casestudy" element={<CaseStudy />} />
//           <Route path="/solution" element={<Solution />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import IntroAnimation from './components/Intro';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Ourexpertise from './Pages/Home/ourexpertise';
import OurImpact from "./Pages/Home/ourimpact";
import Choosecompany from './Pages/Home/chooseCompany';
import SuccessStory from './Pages/Home/SuccessStory';
import Faqs from './Pages/Home/faqs';
import GetIn from './Pages/Home/GetIn';
import Footer from './Pages/Home/Footer';
import Navbar from './components/navbar';
import About from './Pages/Aboutus/About';
import Main from './Pages/Main';
import CaseStudy from './Pages/Casestudy/CaseStudy';
import Solution from './Pages/Solution/Solution';
import Contact from './Pages/contact/Contact';

function App() {
  const [introFinished, setIntroFinished] = useState(() => {
    return sessionStorage.getItem("introFinished") === "true";
  });

  useEffect(() => {
    function handleBeforeUnload() {
      sessionStorage.removeItem("introFinished");
    }
    window.addEventListener("beforeunload", handleBeforeUnload);

    if (introFinished) {
      sessionStorage.setItem("introFinished", "true");
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [introFinished]);

  if (!introFinished) {
    return <IntroAnimation onFinish={() => setIntroFinished(true)} />;
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/casestudy" element={<CaseStudy />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
