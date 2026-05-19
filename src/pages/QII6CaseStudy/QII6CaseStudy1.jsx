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

export default function QII6CaseStudy1({id}) {
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
          { path: "/qii6", title: "QII.6 Governance" },
          { path: "/qii6", title: "Case Study" },
        ],
      }),
    );
  }, []);
  return (
    <div className="single-case-study-page" id={id}>
      <section className="color-light">
        <div className="container">
          <div
            className="single-case-study-wrapper"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.6) 85%, rgba(0, 0, 0, 0.8) 100% ), url("GIF/Qll6_Case_Study_Video-GIF.gif")`,
              margin: "1rem 0 0 0",
            }}
          >
            <h2 className="main-title-1">
              <div className="video-tag">VIDEO</div>
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
              <div className="case-study-play-btn-1">
                <button
                  className="video-play-btn icon-play"
                  onClick={() => {
                    openVideo("video/Qll6_Case_Study_Video.mp4", "QII.6 in Action", 1920, 1080);
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
                  <p>Governance​</p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/country_icon.svg" alt="" />
                  <h3>COUNTRY</h3>
                  <p>
                    Uzbekistan <br />Tajikistan <br /> Kyrgyz Republic​
                  
                  </p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/timeline.svg" alt="" />
                  <h3>TIMELINE</h3>
                  <p>
                    2012-Present​
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
                      <li>Uzbekistan: 265 PPPs initiated ($2.9B), ministries consolidated (61→28), e-procurement launched</li>
                      <li>Tajikistan: e-procurement system established (2019), improved budget transparency rankings</li>
                      <li>Kyrgyz Republic: 19 PPP contracts signed (3 operational), Open Budget score 62/100 </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-case-study-buttons">
            <div
              className="single-case-study-button"
              onClick={() => window.open("pdf/QII.6_SpotlightCase_InfraGov_Assessment_Framework.pdf", "_blank", "noopener,noreferrer")}
            >
              View case study summary
              <div className="arrow-btn icon-arrow">&#xe900;</div>
            </div>
            <div
              className="single-case-study-button"
              onClick={() => window.open("https://thedocs.worldbank.org/en/doc/96550c14d62154355b6edc367d4d7f33-0080012021/original/Infrastructure-Governance-Assessment-Framework-December-2020.pdf", "_blank", "noopener,noreferrer")}
            >
              Full Publication
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
