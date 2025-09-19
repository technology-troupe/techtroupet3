    import React from 'react';
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import Home from "./Pages/Home/Home";
    import Ourexpertise from './Pages/Home/ourexpertise';
    import OurImpact from "./Pages/Home/ourimpact";
    import Choosecompany from './Pages/Home/chooseCompany';
    import SuccessStory from './Pages/Home/successStory';
    import Faqs from './Pages/Home/faqs';
    import GetIn from './Pages/Home/GetIn';
    import Footer from './Pages/Home/Footer';
    import Navbar from './components/navbar';
    import About from './Pages/Aboutus/About';
    import Main from './Pages/Main';
    
    



    

    function App() {
      return (
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
        
      
     
        </>
      );
    }

    export default App;