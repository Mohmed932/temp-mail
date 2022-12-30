import React from "react";
import "./Navbar.css";

const Navbar = ({ handelRefresh, handelCopy, email }) => {
  return (
    <div className="Navbar">
      <div className="Navbar-mail">
        <h3>Your Temporary Email Address</h3>
        <h1 className="temp-mail">
          {email === undefined ? "sorry Come tomorow " : email}
        </h1>
        <div className="email">
          <span onClick={handelCopy}>Copy</span>
          <span onClick={handelRefresh}>Refresh</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
