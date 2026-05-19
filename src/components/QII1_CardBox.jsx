import React from "react";
import "./QII1_CardBox.css";
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
    <>
      <div
        className="card-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)
    ),
    url("${card.image}")`,
        }}
      >
        <h2>
          {card.country && (
            <>
              <span>{card.country}</span>
              <br />
            </>
          )}
          {card.title} <br />
          {card.org && (
            <>
              <span>{card.org}</span>
              <br />
            </>
          )}
        </h2>
        <br />
        {card.subtext1 && <p>{card.subtext1}</p>}
        {card.subtext2 && <p>{card.subtext2}</p>}
        {card.subtext3 && <p>{card.subtext3}</p>}
        {/* if card link is there */}
        {card.showButton && (
          <div className="card-4-footer">
            <div className="card-btn-cnt">
              {card.pdf ? (
                <a
                  className="btn primary"
                  href={card.paths}
                  target={card.topResource ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                >
                  See The {card.type}
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
            </div>
          </div>
        )}
      </div>
    </>
  );
}
