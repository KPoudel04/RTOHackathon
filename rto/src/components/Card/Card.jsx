import React from "react";
import CardHeader from "./CardHeader/CardHeader";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ type, children }) => {
  return (
    <section className="auth-container">
      <div className="auth-content-container">
        <CardHeader title={type === "signin" ? "Login" : "Sign up"} />
        <div className="main-auth-container">{children}</div>
        <div className="main-auth-footer">
          <p className="auth-footer-content">
            {type !== "signin" ? "Already have an account?" : "Not a member?"}{" "}
            <Link to={type === "signin" ? "/signup" : "/login"}>
              {type === "signin" ? "Sign up" : "Login"}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Card;
