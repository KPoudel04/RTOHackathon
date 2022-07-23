import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import landingPic from "./landing.jpg";

const Landing = () => {
  return (
    <div className="wrapper">
      <img src={landingPic} class="img-fluid" alt="Responsive image"></img>

      <div className="texts">
        <div className="title"> Pawfect Finder</div>
        <Link to="/login" className="link">
          Find your lost pet{" "}
        </Link>
      </div>
    </div>
  );
};

export default Landing;
