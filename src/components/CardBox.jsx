import React from "react";
import "./CardBox.css";
import { setShowVideo, setVideoData } from "../slices/appDataSlice";
import { useDispatch } from "react-redux";
import { Popover, Tooltip } from "antd";
import { Link, useNavigate } from "react-router-dom";
export default function CardBox({ card }) {
  const dispatch = useDispatch();
  const openVideo = (url, title, width, height) => {
    dispatch(setVideoData({ url, title, width, height }));
    dispatch(setShowVideo(true));
  };
  const navigate = useNavigate();

  return (
    <article
      className={`box-card ${card.highlight && "highlighted"}`}
      role="listitem"
    >
      <div className="card-link">
        <div className="card-overlay"></div>
        <div className="card-body">
          <img alt={card.title} src={card.image} />
        </div>
        <div className="card-data">
          <p className="card-type">{card.type}</p>
          <h3 className="card-title">
            <Tooltip placement="right" color={"white"} title={card.title}>
              {card.title}
            </Tooltip>
            <img
              src={`images/principles/Qii_${card.principles + 1}.png`}
              alt=""
              className="card-pinciple-badge"
            />
          </h3>
          <p className="card-desc">
            <Popover
              content={
                <div className="resource-popover-content">{card.desc}</div>
              }
              placement="left"
              title={false}
              trigger="click"
            >
              <u>READ MORE...</u>
            </Popover>
            {/* {card.desc} */}
            {/* </Tooltip> */}
          </p>
          <div className={`card-btn-cnt ${card.videoUrl ? "twoBtn" : ""}`}>
            {/* <Link
              className="btn primary"
              href={card.navigate ? "#" : card.paths}
              onClick={() => card.navigate && navigate(card.paths)}
              target={card.topResource ? "_self" : "_blank"}
            >
              See The {card.type}
              <span className="icon-arrow">&#xe900;</span>
            </Link> */}
            {card.pdf ? (
              <a
                className="btn primary"
                href={card.paths}
                target={card.topResource ? "_self" : "_blank"}
              >
                {/* See The {card.type} */}
                <span className="icon-arrow">&#xe900;</span>
              </a>
            ) : (
              <Link
                className="btn primary"
                to={card.paths}
                target={card.topResource ? "_self" : "_blank"}
              >
                {/* See The {card.type} */}
                <span className="icon-arrow">&#xe900;</span>
              </Link>
            )}
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
      {card.highlight ? (
        <div
          className="highlighted-badge"
          style={{
            background: `${card.highlight === 1 ? `url("images/Spotlight_highlight_BG.png")` : `url("images/Star_BG.png")`}`,
            backgroundSize: "100% 100%",
          }}
        >
          <img src="images/Star_for_spotligh.svg" alt="" />
          {card.highlight === 1 && <>Spotlight Case Study</>}
        </div>
      ) : (
        <></>
      )}
    </article>
  );
}
