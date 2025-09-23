import './contact.css'
import Hero from "../../components/Hero/Hero";
import { HERO_CONTENT } from "../../data/constants";
import GetIn from '../Home/components/GetIn/GetIn';
import CalendlyEmbed from './components/Calendar/Calendar';

function Contact(){
    return(
        <>
        <Hero {...HERO_CONTENT.contact} />
        <CalendlyEmbed/>
        <GetIn/>
        </>
    )
}
export default Contact;

