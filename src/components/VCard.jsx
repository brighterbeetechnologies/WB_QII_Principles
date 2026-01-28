import React from "react";
import "./VCard.css";
export default function VCard({
  image,
  title,
  buttonText,
  children,
  link,
  buttonText2,
  link2,
  imageStyle,
  highlight,
}) {
  return (
    <div className={`VCard ${highlight && "highlighted"}`}>
      <img className="VCardImg" src={image} alt={title} style={imageStyle} />
      <div className="vCardBody">
        <div className="v-title">{title}</div>
        {children}
      </div>
      <div className="VCard-footer">
        <div className="v-btn-cnt">
          {/* <strong></strong> */}
          <span>{buttonText}</span>
          <a href={link} target="_blank" className="VCard-btn ">
            <span className="icon-arrow">&#xe900;</span>
          </a>
        </div>
        {buttonText2 && (
          <div className="v-btn-cnt">
            <span>{buttonText2}</span>
            {/* <strong>{buttonText2}</strong> */}
            <a href={link2} target="_blank" className="VCard-btn ">
              <span className="icon-arrow">&#xe900;</span>
            </a>
          </div>
        )}
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
  );
}
