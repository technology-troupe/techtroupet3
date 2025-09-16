// import './faqs.css'

// function Faqs(){
//     return(
//         <>
// <div className="landing_conatiner">
// <div className="fist_text">
//     <h1 className="faqs">FAQs</h1>
//     <p className="tt1">Find clear, concise answer about our services, processes, and how we help businesses achieve their goal</p>
// </div>
// <div className="ques">
//     <details className="qq">
//         <summary className="q1">What is IT consultancy?</summary>
//         <div className="ans">IT consultancy helps businesses make the best use of technology by providing expert advice, solutions, and strategies to achieve their goals efficiently.</div>
//     </details>
//     <details className="qq">
//         <summary className="q1">Why does my business need IT consultancy?</summary>
//         <div className="ans">IT consultancy ensures your business leverages the right tools, saves costs, improves security, and stays competitive in a fast-changing digital world.</div>
//     </details>
//     <details className="qq">
//         <summary className="q1">What services do you provide under IT consultancy?</summary>
//         <div className="ans">We offer technology strategy, software development guidance, cloud migration, cybersecurity solutions, automation, and ongoing IT support.</div>
//     </details>
//     <details className="qq">
//         <summary className="q1">How do we get started?</summary>
//         <div className="ans">Simply reach out to us for a consultation—we’ll understand your needs and propose a clear roadmap to achieve your IT goals.</div>
//     </details>
// </div>

// </div>
//         </>
//     )
// }

// export default Faqs;

import './faqs.css';

function Faqs() {
    return (
        <div className="faq-container">
            <div className="faq-header">
                <h1>FAQs</h1>
                <p>Find clear, concise answers about our services, processes, and how we help businesses achieve their goals.</p>
            </div>
            <div className="faq-list">
                <details className="faq-item">
                    <summary>What is IT consultancy?</summary>
                    <p>IT consultancy helps businesses make the best use of technology by providing expert advice, solutions, and strategies to achieve their goals efficiently.</p>
                </details>
                <details className="faq-item">
                    <summary>Why does my business need IT consultancy?</summary>
                    <p>IT consultancy ensures your business leverages the right tools, saves costs, improves security, and stays competitive in a fast-changing digital world.</p>
                </details>
                <details className="faq-item">
                    <summary>What services do you provide under IT consultancy?</summary>
                    <p>We offer technology strategy, software development guidance, cloud migration, cybersecurity solutions, automation, and ongoing IT support.</p>
                </details>
                <details className="faq-item">
                    <summary>How do we get started?</summary>
                    <p>Simply reach out to us for a consultation—we’ll understand your needs and propose a clear roadmap to achieve your IT goals.</p>
                </details>
            </div>
        </div>
    );
}

export default Faqs;
