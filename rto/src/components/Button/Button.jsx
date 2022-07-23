import React from "react";
import "./Button.css";

const Button = ({ children, width, ...rest }) => {
  const classes = ["custom-button"];
  return (
    <button style={{ width }} className={classes.join(" ")} {...rest}>
      {rest.facebook && <i className="fab fa-facebook-f"></i>}
      {rest.twitter && <i className="fab fa-twitter"></i>}
      {children}
    </button>
  );
};

export default Button;
