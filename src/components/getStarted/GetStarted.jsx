import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText" style={{color:"white"}}>Get Started With Homyz</span>
          <span className="secoundaryText">Subscribe and find super attractive price quotes from us.<br/>
          Find your residence soon</span>
          <span>
            <button className="button">Get Started</button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
