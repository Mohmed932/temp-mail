import React from "react";
import "./Content.css";

const Content = ({ detales, data }) => {
  const result = data.map(
    ({ id, from, to, email, subject, body_text, created_at, body_html }) => (
      <div
        className="Content-mail"
        key={id}
        onClick={() =>
          detales({
            id,
            from,
            to,
            email,
            subject,
            body_text,
            created_at,
            body_html,
          })
        }
      >
        <h3>{from}</h3>
        <p>{subject}</p>
      </div>
    )
  );
  return (
    <div className="Content">
      {data.length > 0 ? result : <p className="Inbox-Empaty">Inbox Empaty</p>}
    </div>
  );
};

export default Content;
