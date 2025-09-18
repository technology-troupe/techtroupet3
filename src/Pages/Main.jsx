// import React from 'react'
// import OurImpact from './Home/ourimpact'
// import Ourexpertise from './Home/ourexpertise'
// import ChooseCompany from './Home/chooseCompany'
// import Faqs from './Home/faqs'
// import GetIn from './Home/GetIn'
// import SuccessStory from './Home/successStory'

// const Main = () => {
//   return (
//     <>
//     <div>Hi</div>
//        {/* <Home/> */}
//       <Ourexpertise/>
//       <OurImpact/>
//       <Choosecompany/>
//       <SuccessStory/>
//       <Faqs/>
//       <GetIn/>
//     </>
//   )
// }

// export default Main
import React from 'react'
import Home from "./Home/Home";
import Ourexpertise from './Home/ourexpertise';
import OurImpact from "./Home/ourimpact";
import Choosecompany from './Home/chooseCompany';
import SuccessStory from './Home/successStory';
import Faqs from './Home/faqs';
import GetIn from './Home/GetIn';

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