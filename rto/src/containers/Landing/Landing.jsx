import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import landingPic from "./landing.jpg";

const Landing = () => {
  return (
    <div className="wrapper">
      {/* <img src={landingPic} class="img-fluid" alt="logo"></img>
      <div className="texts">
        <div className="title"> Pawfect Finder</div>
        <Link to="/login" className="link">
          Find your lost pet{" "}
        </Link>
      </div> */}
      <div className="texts">
        <div className="title"> Pawfect Finder</div>
        <div className="subtitle"> Make your pet safe and happy</div>
        <Link to="/login" className="link">
          Start Now →
        </Link>
      </div>
    </div>
  );
};

export default Landing;
