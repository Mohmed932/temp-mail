import React from "react";
import "./Mail.css";

const Mail = ({ all }) => {
  return (
    <div className="Mail">
      <div className="Mail-Date">
        <div className="from">
          <h3>
            <span>{all.from}</span>
          </h3>
        </div>
        <div className="date">
          <h6>
            <span>Date</span>
            {all.created_at}
          </h6>
        </div>
      </div>
      <div className="Mail-Subject">Subject:{all.subject}</div>
      <div className="Mail-content">
        <p>{all.body_text}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: all.body_html }} className="htmlPage"></div>
    </div>
  );
};

export default Mail;
