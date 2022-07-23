import React from "react";
import { Container } from "react-bootstrap";
import "./Landing.css";
import landingPic from "./landing.png";

const Landing = () => {
  return (
    <div>
      <div className="centered">
        <div className="row">
          <div className="column">
            <img src={landingPic} class="img-fluid" alt="Responsive image">
            </img>
          </div>

          <div className="column">
            <div>
              <h1 > Pawfect Finder</h1>
              <h2>Find your perfect pet</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;
