  import React from 'react';
  // import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import Home from "./Pages/Home/Home";
  import Ourexpertise from './Pages/Home/ourexpertise';
  import OurImpact from "./Pages/Home/ourimpact";
  import Choosecompany from './Pages/Home/chooseCompany';
  // import Successstory from './Pages/Home/successStory';
  import SuccessStory from './Pages/Home/successStory';
  import Faqs from './Pages/Home/faqs';
  import GetIn from './Pages/Home/GetIn';
  import Footer from './Pages/Home/Footer';
  import Navbar from './components/navbar';



  

  function App() {
    return (
      <>
      <Navbar/>
      <Home/>
      <Ourexpertise/>
      <OurImpact/>
      <Choosecompany/>
      <SuccessStory/>
      <Faqs/>
      <GetIn/>
      <Footer/>
      </>
    );
  }

  export default App;
