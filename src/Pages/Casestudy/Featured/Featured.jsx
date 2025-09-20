import './Featured.css';

function Featured(){
    return(
        <>
   <div className="featured_container">
    <div className="text1">
        <h1 className="t1">Featured Case studies</h1>
        <p className="tt1">Discover how our tailored solutions have transformed businesses across industries.</p>
    </div>
    <div className="whole_grid">

        <div className="grid1">
            <div className="img1"><img src="/logos/f1.svg" alt="" /></div>
            <div className="text"><h2>Seamless Legacy System Migration <br/>for a Healthcare Enterprise</h2></div>
            <div><h3 className='ss'>Challenge</h3>
            <p className='mm'>The client’s outdated system was causing inefficiencies, data loss, and scalability issues.</p>
            </div>
            <div><h3 className='ss'>Solution</h3>
            <p className='mm'>T3 developed a custom migration strategy, ensuring seamless data transfer, modernizing the infrastructure, and integrating the system.</p></div>
            <div><a href="">Read Full Case Study</a></div>
        </div>

        <div className="grid2">
            <div className="img2"><img src="/logos/f2.svg" alt="" /></div>
            <div className="text"><h2>Accelerating MVP Development for a <br/>FinTech Startup</h2></div>
            <div><h3 className='ss'>Challenge</h3>
            <p className='mm'>The startup needed a stable MVP within a tight timeline <br/>to secure investor funding.</p>
            </div>
            <div><h3 className='ss'>Solution</h3>
            <p className='mm'>Our automated teams delivered a bug-free MVP in just <br/>6 weeks, using agile development practices to meet the <br/>client’s requirements.</p></div>
            <div><a href="">Read Full Case Study</a></div>
        </div>


        <div className="grid3">
            <div className="img3"><img src="/logos/f3.svg" alt="" /></div>
            <div className="text"><h2>Scalable ERPImplementation for a <br/>Retail Chain</h2></div>
            <div><h3 className='ss'>Challenge</h3>
            <p className='mm'>The retail client struggled with fragmented operations across multiple locations.</p>
            </div>
            <div><h3 className='ss'>Solution</h3>
            <p className='mm'>T3 implemented a customized ERP system, integrating inventory, sales, and finance operations into a single streamlined platform.</p></div>
            <div><a href="/">Read Full Case Study</a></div>
        </div>






    </div>


   </div>

        </>
    )
}

export default Featured;