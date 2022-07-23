import React from "react";
import "./CardHeader.css";

const CardHeader = ({ title }) => {
  return (
    <div className="custom-card-header">
      <div className="heading-1">{title}</div>
    </div>
  );
};

export default CardHeader;
