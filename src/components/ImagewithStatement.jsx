import React from "react";
import "./ImagewithStatement.css";

const ImagewithStatement = ({ backgroundImage, text }) => {
  return (
    <div
      className="image-statement-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <p>{text}</p>
    </div>
  );
};

export default ImagewithStatement;
