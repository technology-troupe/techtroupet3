

import React, { useState, useEffect } from "react";
import IntroAnimation from './components/Intro/Intro';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './Pages/Aboutus/About';
import Main from './Pages/Main';
import CaseStudy from './Pages/Casestudy/CaseStudy';
import Solution from './Pages/Solution/Solution';
import Contact from './Pages/contact/Contact';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import MyProjectDetails from "./Pages/ProjectDetails/MyProjectDetails";
import { My_Project } from './data/constants';  
import Ourexpertise from "./Pages/Home/components/OurExpertise/OurExpertise";
import ServiceDetail from "./Pages/Home/components/OurExpertise/ServiceDetail";






function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

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
        <ScrollToTop /> {/* ⬅️ added here */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/services" element={<Ourexpertise />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

          <Route path="/about" element={<About />} />
          <Route path="/casestudy" element={<CaseStudy />} />
          <Route path="/casestudy/:slug" element={<ProjectDetails />} />
          <Route path="/mycasestudy/:slug" element={<MyProjectDetails />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );  
}

export default App;
