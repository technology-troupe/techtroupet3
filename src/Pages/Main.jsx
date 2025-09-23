import React from 'react'
import Home from "./Home/Home";
import Ourexpertise from './Home/components/OurExpertise/OurExpertise';
import OurImpact from "./Home/components/OurImpact/OurImpact";
import Choosecompany from './Home/components/ChooseCompany/ChooseCompany';
import SuccessStory from './Home/components/SuccessStory/SuccessStory';
import Faqs from './Home/components/FAQ/FAQ';
import GetIn from './Home/components/GetIn/GetIn';

const Main = () => {
  return (
    <>
      <Home/>
      <Ourexpertise/>
      <OurImpact/>
      <Choosecompany/>
      <SuccessStory/>
      <Faqs/>
      <GetIn/>
    </>
  )
}

export default Main