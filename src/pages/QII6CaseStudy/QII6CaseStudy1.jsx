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

export default function QII6CaseStudy1() {
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
          { path: "/qii6", title: "QII.5 Governance" },
          { path: "/qii6", title: "Case Study" },
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
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.6) 85%, rgba(0, 0, 0, 0.8) 100% ), url("images/qii2/Fukuoka_Case_study.png")`,
              margin: "1rem 0 0 0",
            }}
          >
            <h2 className="main-title">
              <span className="video-tag">VIDEO</span>
              <br />
              <br />
              <span>QII.6 in Action</span>
              <br />
              <br />
              <p>
                InfraGov assessments under the QII Partnership in Kyrgyz
                Republic, Tajikistan, and Uzbekistan provide practical roadmaps
                for strengthening infrastructure governance systems.
              </p>
              <br />
              <br />
              <span className="snapshot-video-duration">
                <svg width="14" height="14" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                3 min watch
              </span>
            </h2>
            <div className="qii-video-cnt">
              <div className="case-study-play-btn">
                <button
                  className="video-play-btn icon-play"
                  onClick={() => {
                    openVideo("", "Lessons from Success Stories", 1920, 1080);
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
                  <p>lorem</p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/country_icon.svg" alt="" />
                  <h3>COUNTRY</h3>
                  <p>
                    lorem
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
                    2019-2023(lorem)
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
                    lorem
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
                      <li>Lorem, ipsum dolor.</li>
                      <li>Lorem ipsum dolor sit.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-case-study-buttons">
            <div
              className="single-case-study-button disable-link"
              onClick={() => window.open("", "_blank", "noopener,noreferrer")}
            >
              View case study summary
              <div className="arrow-btn icon-arrow">&#xe900;</div>
            </div>
            <div
              className="single-case-study-button disable-link"
              onClick={() => window.open("", "_blank", "noopener,noreferrer")}
            >
              View the full publication
              <div className="arrow-btn icon-arrow">&#xe900;</div>
            </div>
            {/* <div
              className="single-case-study-button"
              onClick={() =>
                window.open(
                  "pdf/Fukuoka_city_case_study.pdf",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              View data
              <div className="arrow-btn icon-arrow">&#xe900;</div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
