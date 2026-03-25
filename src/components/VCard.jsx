import React from "react";
import "./VCard.css";
import { setShowVideo, setVideoData } from "../slices/appDataSlice";
import { useDispatch } from "react-redux";
import { updateCardClick } from "../utils/cardRanking";

export default function VCard({
  image,
  title,
  buttonText,
  children,
  rId,
  link,
  buttonText2,
  link2,
  imageStyle,
  highlight,
  badgeText,
  isVideo = false,
  videoUrl,
  videoTitle,
  duration = "3 min watch",
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
    <div className={`VCard ${highlight && "highlighted"}`}>
      {/* <img className="VCardImg" src={image} alt={title} style={imageStyle} />
      {badgeText && <div className="video-gif-badge">{badgeText}</div>} */}
      {isVideo ? (
        <div className="VCard-video-gif-thumbnail">
          <img
            className="VCardImg"
            src={image}
            alt={videoTitle}
            style={imageStyle}
          />
          <div
            className="VCard-video-gif-play-button"
            // onClick={openVideo}
            onClick={() => {
              updateCardClick(rId);
              openVideo();
            }}
          ></div>
          <div className="video-gif-badge">Video</div>
          <div className="VCard-video-duration">
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
      ) : (
        <>
          <img
            className="VCardImg"
            src={image}
            alt={title}
            style={imageStyle}
          />
          {badgeText && <div className="video-gif-badge">{badgeText}</div>}
        </>
      )}
      <div className="vCardBody">
        <div className="v-title">{title}</div>
        {/* {isVideo && (
          <div className="VCard-video-gif-meta">
            <div className="VCard-video-gif-meta-item">
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
        )} */}
        {children}
      </div>
      <div className="VCard-footer">
        <div className="v-btn-cnt">
          {/* <strong></strong> */}
          {buttonText && <p>{buttonText}</p>}
          {/* <a href={link} target="_blank" className="VCard-btn ">
            <span className="icon-arrow">&#xe900;</span>
          </a> */}
          <a
            href={link || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`VCard-btn ${!link ? "disabled" : ""}`}
            // onClick={() => updateCardClick(rId)}
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
        </div>

        {buttonText2 && (
          <div className="v-btn-cnt"> 
            <p>{buttonText2}</p>
            {/* <strong>{buttonText2}</strong> */}
            {/* <a href={link2} target="_blank" className="VCard-btn ">
              <span className="icon-arrow">&#xe900;</span>
            </a> */}
            <a
              href={link2 || undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={`VCard-btn ${!link2 ? "disabled" : ""}`}
              // onClick={() => updateCardClick(rId)}
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
