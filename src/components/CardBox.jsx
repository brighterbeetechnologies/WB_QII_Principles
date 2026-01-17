import React from "react";
import "./CardBox.css";
import { setShowVideo, setVideoData } from "../slices/appDataSlice";
import { useDispatch } from "react-redux";
export default function CardBox({ card }) {
  const dispatch = useDispatch();
  const openVideo = (url, title, width, height) => {
    dispatch(setVideoData({ url, title, width, height }));
    dispatch(setShowVideo(true));
  };
  return (
    <article
      className={`box-card ${card.type === "Case Study" && "highlighted"}`}
      role="listitem"
    >
      <div className="card-link">
        <div className="card-overlay"></div>
        <div className="card-body">
          <img alt={card.title} src={card.image} />
        </div>
        <div className="card-data">
          <p className="card-type">{card.type}</p>
          <h3 className="card-title">{card.title}</h3>
          <div className={`card-btn-cnt ${card.videoUrl ? "twoBtn" : ""}`}>
            <a className="btn primary" href={card.paths} target="_blank">
              See The {card.type}
              <span className="icon-arrow">&#xe900;</span>
            </a>
            {card.videoUrl && (
              <button
                className="btn primary video_btn"
                onClick={() => {
                  openVideo(card.videoUrl, card.videoTitle, 1920, 1080);
                }}
              >
                Video <span className="icon-video">&#xe91e;</span>
              </button>
            )}
          </div>
        </div>
      </div>
      {card.type === "Case Study" && (
        <div className="highlighted-badge">
          <img src="images/Star_for_spotligh.svg" alt="" srcset="" />
          Spotlight Case Study
        </div>
      )}
    </article>
  );
}
