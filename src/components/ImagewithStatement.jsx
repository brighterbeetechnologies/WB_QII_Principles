import React from "react";
import "./ImagewithStatement.css";

const ImagewithStatement = ({ backgroundImage, text, backgroundPosition, id }) => {
  return (
    <>
      {backgroundPosition ? (
        <div
          className="image-statement-container"
          id={id}

          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: backgroundPosition,
          }}
        >
          <p>{text}</p>
        </div>
      ) : (
        <div
          className="image-statement-container"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <p>{text}</p>
        </div>
      )}
    </>
  );
};

export default ImagewithStatement;
