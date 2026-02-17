import React from 'react';
import './QII1_CardBox.css';
import { setShowVideo, setVideoData } from '../slices/appDataSlice';
import { useDispatch } from 'react-redux';

export default function QII1_CardBox({ card }) {
  const dispatch = useDispatch();

  const openVideo = (url, title, width, height) => {
    dispatch(setVideoData({ url, title, width, height }));
    dispatch(setShowVideo(true));
  };

  const hasLink = Boolean(card.paths);

  return (
    <article className="qii1-box-card" role="listitem">
      <div className="qii1-card-link">
        <div className="qii1-card-overlay"></div>

        <div className="qii1-card-body">
          <img alt={card.title} src={card.image} />
        </div>

        <div className="qii1-card-data">
          {card.org && (
            <p className="qii1-card-subtext">{card.org}</p>
          )}
          <h3 className="qii1-card-title">{card.title}</h3>
           {card.country && (
            <p className="qii1-card-subtext">{card.country}</p>
          )}
          {card.subtext1 && (
            <p className="qii1-card-subtext">{card.subtext1}</p>
          )}
          {card.subtext2 && (
            <p className="qii1-card-subtext">{card.subtext2}</p>
          )}

          <div className={`qii1-card-btn-cnt ${card.videoUrl ? 'twoBtn' : ''}`}>
            <a
              className={`btn primary ${!hasLink ? 'disabled' : ''}`}
              href={hasLink ? card.paths : undefined}
              target={hasLink ? '_blank' : undefined}
              rel={hasLink ? 'noopener noreferrer' : undefined}
              onClick={(e) => {
                if (!hasLink) e.preventDefault();
              }}
              aria-disabled={!hasLink}
            >
              See The {card.type}
              <span className="icon-arrow">&#xe900;</span>
            </a>

            {card.videoUrl && (
              <button
                className="btn primary video_btn"
                onClick={() => {
                  openVideo(
                    card.videoUrl,
                    card.videoTitle,
                    1920,
                    1080
                  );
                }}
              >
                Video <span className="icon-video">&#xe91e;</span>
              </button>
            )}
          </div>
        </div>
      </div>
      
    </article>
  );
}
