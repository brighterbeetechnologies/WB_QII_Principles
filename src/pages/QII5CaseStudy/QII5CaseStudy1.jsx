import React, { useEffect } from "react";
import Header3 from "../../components/Header3";
import ListImageText from "../../components/ListImageText";
import "../QII2CaseStudy.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setBradcrump,
  setShowVideo,
  setVideoData,
} from "../../slices/appDataSlice";

export default function QII5CaseStudy1() {
  const dispatch = useDispatch();
  const openVideo = (url, title, width, height) => {
    dispatch(setVideoData({ url, title, width, height }));
    dispatch(setShowVideo(true));
  };
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [
          { path: "/qii5", title: "QII.5 Inclusion" },
          { path: "/qii5", title: "Case Study" },
        ],
      }),
    );
  }, []);
  return (
    <div className="single-case-study-page">
      <section className="color-light">
        <div className="container">
          <div
            className="single-case-study-wrapper"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.6) 85%, rgba(0, 0, 0, 0.8) 100% ), url("images/qii5/Qii5CaseStudy.jpg")`,
              margin: "1rem 0 0 0",
            }}
          >
            <h2 className="main-title">
              <div className="video-tag">VIDEO</div>
              <br />
              <span>QII.5 in Action</span>
              <br />
              <br />
              <p>
                Discover how the design of Maputo's Bus Rapid Transit system is
            transforming public transport in Mozambique's capital.
              </p>
              <br />
              <p className="snapshot-video-duration">
                <svg width="14" height="14" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                3 min watch
              </p>
            </h2>
            <div className="qii-video-cnt">
              <div className="case-study-play-btn">
                <button
                  className="video-play-btn icon-play"
                  onClick={() => {
                    openVideo(
                      "./video/LandingPageVideo.mp4",
                      "Lessons from Success Stories",
                      1920,
                      1080,
                    );
                  }}
                >
                  &#xe91e;
                </button>
              </div>
            </div>
            <div className="sub-title">
              <h2>CASE SNAPSHOT</h2>
            </div>
            <div className="case-study-details">
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/sector_icon.svg" alt="" />
                  <h3>SECTOR</h3>
                  <p>Urban Mobility / Transport​</p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/country_icon.svg" alt="" />
                  <h3>COUNTRY</h3>
                  <p>
                    Mozambique, Maputo Metropolitan Area​
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/timeline.svg" alt="" />
                  <h3>TIMELINE</h3>
                  <p>
                    2018–2027​
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/cost_icon.svg" alt="" />
                  <h3>COST</h3>
                  <p>
                    $250 million ​(World Bank project)​
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/result_icon.svg" alt="" />
                  <h3>RESULT</h3>
                  <div>
                    <ul>
                      <li>
                        Inclusive design targeting low-income residents, women, people with disabilities, and informal operators​
                      </li>
                      <li>
                        Increased access to jobs and services; 124,000 daily beneficiaries with at least 40% women ​
                      </li>
                      <li>Travel time reduction for marginalized neighborhoods​</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-case-study-buttons">
            <div
              className="single-case-study-button"
              // onClick={() =>
              //   window.open(
              //     "https://documents1.worldbank.org/curated/en/132321643990931297/pdf/Quality-Infrastructure-Investment-Partnership-2021-QII-Annual-Report.pdf",
              //     "_blank",
              //     "noopener,noreferrer",
              //   )
              // }
            >
              View case study summary
              <div className="arrow-btn icon-arrow disable-link">&#xe900;</div>
            </div>
            <div
              className="single-case-study-button"
              onClick={() =>
                window.open(
                  "https://documents1.worldbank.org/curated/en/132321643990931297/pdf/Quality-Infrastructure-Investment-Partnership-2021-QII-Annual-Report.pdf",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              Full Publication
              <div className="arrow-btn icon-arrow">&#xe900;</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
