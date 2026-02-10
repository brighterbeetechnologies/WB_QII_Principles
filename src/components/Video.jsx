// import React from "react";
// import "./Video.css";
// import { setShowVideo, setVideoData } from "../slices/appDataSlice";
// import { useDispatch } from "react-redux";

// const Video = () => {
//   const dispatch = useDispatch();
//   const openVideo = (url, title, width, height) => {
//     dispatch(setVideoData({ url, title, width, height }));
//     dispatch(setShowVideo(true));
//   };
//   return ( 
//     <>
//       <div className="video-gif-card">
//         <div className="thumbnail">
//           <img src="images/qii2/Landing-QII-2.gif" alt="Construction site" />
//           <div
//             className="video-gif-play-button"
//             onClick={() => {
//               openVideo(
//                 "./video/LandingPageVideo.mp4",
//                 "Unlocking the Potential of Life Cycle Costing",
//                 1920,
//                 1080,
//               );
//             }}
//           ></div>
//           <div className="video-gif-badge">Video</div>
//         </div>
//         <div className="video-gif-content">
//           <div className="video-gif-title">
//             <span>Unlocking the Potential of </span> <br />
//             Life Cycle Costing
//           </div>
//           <div className="video-gif-description">Life cycle costing explained.</div>
//           <div className="video-gif-meta">
//             <div className="video-gif-meta-item">
//               <svg
//                 width="14"
//                 height="14"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
//                   clip-rule="evenodd"
//                 />
//               </svg>
//               3 min watch
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Video;




import React from "react";
import "./Video.css";
import { setShowVideo, setVideoData } from "../slices/appDataSlice";
import { useDispatch } from "react-redux";

const Video = ({
  thumbnail,
  videoUrl,
  videoTitle,
  cardTitle,
  description,
  duration = "3 min watch",
  width = 1920,
  height = 1080,
  badgeText = "Video",
}) => {
  const dispatch = useDispatch();

  const openVideo = () => {
    dispatch(
      setVideoData({
        url: videoUrl,
        title: videoTitle,
        width,
        height,
      })
    );
    dispatch(setShowVideo(true));
  };

  return (
    <div className="video-gif-card">
      <div className="video-gif-thumbnail">
        <img src={thumbnail} alt={videoTitle} />

        <div
          className="video-gif-play-button"
          onClick={openVideo}
        ></div>

        {badgeText && (
          <div className="video-gif-badge">{badgeText}</div>
        )}
      </div>

      <div className="video-gif-content">
        <div className="video-gif-title">
          {cardTitle}
        </div>

        {description && (
          <div className="video-gif-description">
            {description}
          </div>
        )}

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
      </div>
    </div>
  );
};

export default Video;
