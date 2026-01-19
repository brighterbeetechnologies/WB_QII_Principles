import React from "react";
import "./ListImageText.css";
export default function ListImageText({
  step,
  title,
  children,
  description,
  image,
  buttonText,
  link,
  disableDescription,
}) {
  return (
    <div className="case-card">
      <div className="step">
        <div className="step-number">{step}</div>
        <div className="step-title">{title}</div>
      </div>

      <div className="case-body">
        <div className="case-image">
          <img src={image} alt="case study" />
        </div>
        <div className="case-content">
          {!disableDescription && (
            <div className="description">
              <strong>{description}</strong>
            </div>
          )}
          <div className="contentText">{children}</div>
        </div>

        <div className="case-footer">
          <strong>{buttonText}</strong>
          <a href={link} target="_blank" className="case-btn ">
            <span className="icon-arrow">&#xe900;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
