import './solution.css';
import Hero from "../../components/Hero/Hero";
import { HERO_CONTENT } from "../../data/constants";
import Ourexpertise from '../Home/components/OurExpertise/OurExpertise';
import GetIn from '../Home/components/GetIn/GetIn';

function Solution(){
    return(
        <>
        <Hero {...HERO_CONTENT.solution} />
        <Ourexpertise/>
        <GetIn/>
        </>
    )
}

    export default Solution;