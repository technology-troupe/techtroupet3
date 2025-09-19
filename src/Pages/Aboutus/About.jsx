import "./About.css";
import Navbar from "../../components/navbar";
import OurStory from "./Our Story/OurStory";
import Hero from "./hero/Hero";
import GetIn from "../Home/GetIn"
import JoinUs from "./Join/JoinUs";
import Stand from "./Stand/Stand";
import Focus from "./Focus/Focus";
import Team from "./Team/Team";



function Aboutus(){
    return(
        <>
        <Hero/>
        <OurStory/>
        <Stand/>
        <Team/>
        <JoinUs/>
        <Focus/>
        <GetIn/>
        

        
        </>
    )
}

export default Aboutus