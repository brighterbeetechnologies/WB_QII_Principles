import React from "react";
import "./Video.css";
import { setShowVideo, setVideoData } from "../slices/appDataSlice";
import { useDispatch } from "react-redux";

const Video = () => {
  const dispatch = useDispatch();
  const openVideo = (url, title, width, height) => {
    dispatch(setVideoData({ url, title, width, height }));
    dispatch(setShowVideo(true));
  };
  return (
    <>
      <div className="video-card">
        <div className="thumbnail">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400"
            alt="Construction site"
          />
          <div
            className="play-button"
            onClick={() => {
              openVideo(
                "./video/LandingPageVideo.mp4",
                "Unlocking the Potential of Life Cycle Costing",
                1920,
                1080,
              );
            }}
          ></div>
          <div className="badge">Video</div>
        </div>
        <div className="content">
          <div className="title">The Real Cost of Infrastructure</div>
          <div className="description">Life cycle costing explained.</div>
          <div className="meta">
            <div className="meta-item">
              <svg
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clip-rule="evenodd"
                />
              </svg>
              3 min watch
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
