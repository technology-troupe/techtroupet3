import './casestudy.css';
import Hero from "../../components/Hero/Hero";
import { HERO_CONTENT } from "../../data/constants";
import GetIn from "../Home/components/GetIn/GetIn";
import Featured from "./Featured/Featured";

function caseStudy(){
    return(
        <>
        <Hero {...HERO_CONTENT.casestudy} />
        <Featured/>
        <GetIn/>
        </>
    )
}


export default caseStudy;