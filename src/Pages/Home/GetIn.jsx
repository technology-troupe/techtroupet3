import './getin.css'

function GetIn(){
    return(
        <>
        <div className="landing_container">
            <div className="main_text">
                <h1 className="text1">Get in Touch Today</h1>
                <p className="tt1">Let's create the future of your business together. Whether you need consulting, development,<br/> or robust digital solutions, AbC Company is here to help.</p>
            </div>
            <div className="middle_section">
                <div className="image1">
                    <img src="/logos/email.svg" alt="" />
                    <h2 className="itext">Email Us</h2>
                    <p className="c1">contact@abccompany.com</p>
                </div>
                <div className="image2"><img src="/logos/call.svg" alt="" />
                <h2 className="itext">Call Us</h2>
                <p className="c1">+91 0000000000</p></div>
                <div className="image3">
                    <img src="/logos/visit.svg" alt="" />
                    <h2 className="itext">Visit Us</h2>
                    <p className="c1">123, Station road, Bareilly UP</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default GetIn;