import "./SuccessStory.css";
import { Link } from 'react-router-dom';

function SuccessStory(){
    return(
        <>
     <div className="landing_container">
        <div className="firsttext"> 
            <h1 className="success">Success Stories</h1>
            <p className="recs">Explore how we've transformed challenge into opportunities,driving success for businesses across industries worldwide.</p>
        </div>
        
            <div className="whole_section">
                <div className="firect_section">
                <h2 className="t1">Streamlined Operations <br/>with Custom ERP</h2>
                <p className="tt1">ABC Company delivered excatly<br/>what we needed-a scalable and <br/> secure ERP System that<br/>streamlined our operations</p>
                <h3 className="t_last">Manager,Global Retail Company</h3>
                </div>
                <div className="second_section">
                    <h2 className="t1">MVP Delivered Ahead Of <br/>Schedule</h2>
                    <p className="tt1">As a starup, we were looking <br/> for a reliable partner to build <br/>our MVP. T3 Exceeded <br/> our expectations, delivering a bug-free product.</p>
                    <h3 className="t_last">Founder, T3 Startup</h3>
                </div>
                <div className="third_section">
                    <h2 className="t1">Seamless Legacy System<br/> Migration</h2>
                    <p className="tt1">The legacy system migration T3 <br/> Company handled for us was <br/>seamless. We were impressed <br/>with their attention to detail, proactive communication.</p>
                    <h3 className="t_last">CTO, HealthCare Enterprise</h3>
                </div>
            </div>
            <Link to='/casestudy'><div className="btn"><button>View Case Studies</button></div></Link>
        
        

     </div>
        </>
    )
}


export default SuccessStory;


