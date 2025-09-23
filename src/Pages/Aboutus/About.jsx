import "./About.css";
import Hero from "../../components/Hero/Hero";
import { HERO_CONTENT } from "../../data/constants";
import OurStory from "./Our Story/OurStory";
import GetIn from "../Home/components/GetIn/GetIn"
import JoinUs from "./Join/JoinUs";
import Stand from "./Stand/Stand";
import Focus from "./Focus/Focus";
import Team from "./Team/Team";

function Aboutus(){
    return(
        <>
        <Hero {...HERO_CONTENT.about} />
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