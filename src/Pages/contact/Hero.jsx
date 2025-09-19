import './hero.css';

function Hero(){
    return(
        <>
        <div className="contact_container">
         <div className="grid">

            <div className="grid1">
                <h1 className="t1">Get In Touch</h1>
                <p className="t2">Let's Create the future of your business together</p>
            </div>

            <div className="grid2">
                <p className="t3">Whether you need consulting, development, or robust digital solutions, T3 is here to help.</p>
                <div className="btn">
                    <a href=""><button className='b1'>Contact Us</button></a>
                    <a href="/solution">View Our Services</a>
                </div>
            </div>







         </div>
        </div>
        
        </>
    )
}

export default Hero;