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
  buttonText2,
  link2,
  disableDescription,
  disableStep,
  highlight,
}) {
  return (
    <div className="case-card">
      {!disableStep && (
        <div className="step">
          <div className="step-number">{step}</div>
          <div className="step-title">{title}</div>
        </div>
      )}
      <div className={`case-body ${highlight && "highlighted"}`}>
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
          <strong>{buttonText2}</strong>
          <a href={link2} target="_blank" className="case-btn ">
            <span className="icon-arrow">&#xe900;</span>
          </a>
        </div>
        {highlight && (
          <div
            className="highlighted-badge"
            style={{
              background: `${highlight === 1 ? `url("images/Spotlight_highlight_BG.png")` : `url("images/Star_BG.png")`}`,
              backgroundSize: "100% 100%",
            }}
          >
            <img src="images/Star_for_spotligh.svg" alt="" />
            {highlight === 1 && <>Spotlight Case Study</>}
          </div>
        )}
      </div>
    </div>
  );
}
