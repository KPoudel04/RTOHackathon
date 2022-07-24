import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Landing.css";
const Landing = () => {
  let navigate = useNavigate();
  let destination = "/login";
  return (
    <div className="wrapper">
      <div className="texts">
        <div className="title"> Pawfect Finder</div>
        <div className="subtitle"> Make your pet safe and happy</div>
        <Link to={"/profile"} className="link">
          Start Now →
        </Link>
      </div>
    </div>
  );
};

export default Landing;
