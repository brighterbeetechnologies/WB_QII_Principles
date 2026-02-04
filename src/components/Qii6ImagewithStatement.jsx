import React from "react";
import "./Qii6ImagewithStatement.css";

const Qii6ImagewithStatement = ({
  backgroundImage,
  text,
  subtext,
  subtext2,
}) => {
  return (
    <div
      className="Qii6-image-statement-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="Qii6-image-statement-text">
        <p>{text}</p>

        <div className="Qii6-image-statement-subtext-container">
          <p className="Qii6-image-statement-subtext">{subtext}</p>
          <p className="Qii6-image-statement-subtext2">{subtext2}</p>
        </div>
      </div>
    </div>
  );
};

export default Qii6ImagewithStatement;
