import './calender.css'

import React, { useEffect } from "react";

function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h2 className='pp'>Book a Meeting</h2>
      <div
        className="calendly-inline-widget"
        // data-url="https://calendly.com/pathak-mohit426"
        data-url="https://calendly.com/pathak-mohit426/30min"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
}

export default CalendlyEmbed;
