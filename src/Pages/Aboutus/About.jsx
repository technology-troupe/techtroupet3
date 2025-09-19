import "./About.css";
import Navbar from "../../components/navbar";
import OurStory from "./Our Story/OurStory";
import Hero from "./hero/Hero";
import GetIn from "../Home/GetIn"
import JoinUs from "./Join/JoinUs";



function Aboutus(){
    return(
        <>
        <Hero/>
        <OurStory/>
        <JoinUs/>
        <GetIn/>
        

        
        </>
    )
}

export default Aboutus