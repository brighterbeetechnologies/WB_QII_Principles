import React from "react";
import "./ListImageText.css";
import { useDispatch } from "react-redux";
import { setShowVideo, setVideoData } from "../slices/appDataSlice";
import { updateCardClick } from "../utils/cardRanking";

export default function ListImageText({
  step,
  title,
  children,
  description,
  image,
  rId,
  isVideo,
  videoUrl,
  videoTitle,
  videoDisable,
  buttonText,
  link,
  buttonText2,
  link2,
  disableDescription,
  disableStep,
  highlight,
  duration,
  width = 1920,
  height = 1080,
}) {
  const dispatch = useDispatch();
  const openVideo = () => {
    dispatch(
      setVideoData({
        url: videoUrl,
        title: videoTitle,
        width,
        height,
      }),
    );
    dispatch(setShowVideo(true));
  };
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
          {isVideo && (
            <>
              <div className="video-gif-badge">VIDEO</div>
              <div
                className={`video-gif-play-button ${videoDisable && "video-gif-play-button-disable"}`}
                onClick={() => {
                  updateCardClick(rId);
                  openVideo();
                }}
              ></div>
              <div className="video-gif-meta">
                <div className="video-gif-meta-item">
                  <svg width="14" height="14" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {duration}
                </div>
              </div>
            </>
          )}

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
          <a
            href={link}
            target="_blank"
            className="case-btn"
            onClick={(e) => {
              e.preventDefault();
              // console.log("CLICKED:", rId);
              updateCardClick(rId);
              if (link) {
                window.open(link, "_blank");
              }
            }}
          >
            <span className="icon-arrow">&#xe900;</span>
          </a>
          {buttonText2 && (
            <>
              <strong>{buttonText2}</strong>
              <a
                href={link2}
                target="_blank"
                className="case-btn"
                onClick={(e) => {
                  e.preventDefault();
                  // console.log("CLICKED:", rId);
                  updateCardClick(rId);
                  if (link2) {
                    window.open(link2, "_blank");
                  }
                }}
              >
                <span className="icon-arrow">&#xe900;</span>
              </a>
            </>
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
    </div>
  );
}
