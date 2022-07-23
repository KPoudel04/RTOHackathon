import React from "react";
import "./Input.css";

const Input = ({ textarea, ...props }) => {
  const classes = ["custom-input"];
  if (props.disabled) {
    classes.push("disabled");
  }
  if (textarea) {
    classes.push("textarea");
  }

  return (
    <div className="zoom-field-wrapper">
      {textarea ? (
        <textarea className={classes.join(" ")} {...props} />
      ) : (
        <input className={classes.join(" ")} {...props} />
      )}
    </div>
  );
};

export default Input;
