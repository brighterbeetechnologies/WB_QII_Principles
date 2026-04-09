import React from "react";
import "./QIIVCard.css";
export default function QIIVCard({
  image,
  title,
  buttonText,
  children,
  link,
  buttonText2,
  link2,
  imageStyle,
  highlight,
  principles,
  index,
  setCurrentCard,
  currentCard,
  id
}) {
  return (
    <div id={id} className={`QIIVCard ${highlight && "highlighted"} ${currentCard === index && "card-active"}`}>
      <img className="QIIVCardImg" src={image} alt={title} style={imageStyle} />
      <div className="QIIvCardBody">
        <div className="QIIv-title">{title}</div>
        {children}
        <div className="QII-video-gif-badge">{principles}</div>
      </div>
      <div className="QIIVCard-footer">
        <div className="QIIv-btn-cnt">
          {currentCard === index ? (
            <></>
          ) : (
            <button
              // href={link || undefined}
              // target="_blank"
              // rel="noopener noreferrer"
              className={`QIIVCard-btn ${currentCard === index ? "disabled" : ""}`}
              // style={{
              //   display: "flex",
              //   alignItems: "center",
              //   gap: "0.2rem",
              // }}
              onClick={() => setCurrentCard(index)}
            >
              Learn More
              <span className="icon-arrow">&#xe900;</span>
            </button>
          )}
        </div>
        {/* {buttonText2 && (
          <div className="QIIv-btn-cnt">
           <a
              href={link2 || undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={`QIIVCard-btn ${!link2 ? "disabled" : ""}`}
            >
              Learn More
              <span className="icon-arrow">&#xe900;</span>
            </a>
          </div>
        )} */}
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
