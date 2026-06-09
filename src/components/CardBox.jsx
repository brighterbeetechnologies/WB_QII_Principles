import React from "react";
import "./CardBox.css";
import { setShowVideo, setVideoData } from "../slices/appDataSlice";
import { useDispatch } from "react-redux";
import { Popover, Tooltip } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { updateCardClick } from "../utils/cardRanking";


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
          {card.country && (
            <>
              <br />
              <span className="card-org">{card.country}</span>
            </>
          )}
          <h3 className="card-title">
            <Tooltip placement="right" color={"white"} title={card.title}>
              {card.title}
            </Tooltip>
            {card.org && (
              <>
                <br />
                <span className="card-org">{card.org}</span>
              </>
            )}
            <img
              src={`images/principles/Qii_${card.principles + 1}.png`}
              alt=""
              className="card-pinciple-badge"
            />
            {card.principles2 === 0 ||
              (card.principles2 && (
                <img
                  src={`images/principles/Qii_${card.principles2 + 1}.png`}
                  alt=""
                  className="card-pinciple-badge card-pinciple-badge2"
                />
              ))}
            {card.principles3 === 0 ||
              (card.principles3 && (
                <img
                  src={`images/principles/Qii_${card.principles3 + 1}.png`}
                  alt=""
                  className="card-pinciple-badge card-pinciple-badge3"
                />
              ))}
          </h3>
          <p className="card-desc">
            <Popover
              content={
                <div className="resource-popover-content">{card.desc}</div>
              }
              // placement="top"
              title={false}
              trigger="click"
            >
              READ MORE...
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
                // onClick={() => console.log("My id is:", card.rId)}
                onClick={() => updateCardClick(card.rId)}
              >
                {/* See The {card.type} */}
                <span className="icon-arrow">&#xe900;</span>
              </a>
            ) : (
              <Link
                className="btn primary"
                to={card.paths}
                target={card.topResource ? "_self" : "_blank"}
                // onClick={() => console.log("My id is:", card.rId)}
                onClick={() => updateCardClick(card.rId)}
              >
                {/* See The {card.type} */}
                <span className="icon-arrow">&#xe900;</span>
              </Link>
            )}
            {card.videoUrl && (
              <button
                className="btn primary video_btn"
                // onClick={() => {
                //   openVideo(card.videoUrl, card.videoTitle, 1920, 1080);
                // }}
                onClick={() => {
                  updateCardClick(card.rId);
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
            background: `${card.highlight ? `url("images/Spotlight_highlight_BG.png")` : `url("images/Star_BG.png")`}`,
            backgroundSize: "100% 100%",
          }}
        >
          <img src="images/Star_for_spotligh.svg" alt="" />
          {card.highlight && <>Spotlight Case Study</>}
        </div>
      ) : (
        <></>
      )}
    </article>
  );
}
