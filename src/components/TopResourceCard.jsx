import React from "react";
import "./TopResourceCard.css";
export default function TopResourceCard({
  image,
  title,
  buttonText,
  children,
  link,
}) {
  return (
    <div className="top-resource-card">
      <img className="top-resource-cardImg" src={image} alt={title} />
      <div className="top-resource-cardBody">
        <div className="top-resource-card-title">{title}</div>
        <div className="top-resource-card-btn-cnt">
          <a href={link} target="_blank" className="top-resource-card-btn ">
            <span className="icon-arrow">&#xe900;</span>
          </a>
        </div>
      </div>
      <div className="top-resource-card-footer">
        <span className="r-type">{buttonText}</span>
      </div>
    </div>
  );
}
