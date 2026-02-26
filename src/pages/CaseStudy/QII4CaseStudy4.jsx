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

export default function QII4CaseStudy4() {
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
          { path: "/qii4", title: "QII.4 Resilience" },
          { path: "/qii4", title: "Case Study" },
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
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.6) 85%, rgba(0, 0, 0, 0.8) 100% ), url("images/qii4/updated/QII-4-in-Action.png")`,
              margin: "1rem 0 0 0",
            }}
          >
            <h2 className="main-title">
              <div className="video-tag">VIDEO</div>
              <br />
              {/* <p>Solomon Islands</p>
              <span>Modular Bridges for Resilient Transport </span>  */}
              <span>QII.4 in Action</span>
              <br />
              <br />
              <p>
                The Solomon Islands’ adoption of prefabricated modular bridges
                demonstrates an efficient, climate-resilient solution for
                strengthening vital transport infrastructure in the Pacific.
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
                  <p>Transport (Roads & Bridges)</p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/country_icon.svg" alt="" />
                  <h3>COUNTRY</h3>
                  <p>
                    Solomon Islands
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
                    2019-2023
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
                    US$30 million (World Bank project)
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
                        100,000+ beneficiaries reached via safer crossings
                      </li>
                      <li>
                        Bridge installation times reduced from months to weeks -
                        30% cost savings vs. traditional builds
                      </li>
                      <li>Post-disaster isolation days cut by 75%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-case-study-buttons">
            <div
              className="single-case-study-button"
              onClick={() =>
                window.open(
                  "pdf/QII_4_SpotlightCase_SolomonIslands.pdf",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              View case study summary
              <div className="arrow-btn icon-arrow">&#xe900;</div>
            </div>
            <div
              className="single-case-study-button"
              onClick={() =>
                window.open(
                  "https://documents1.worldbank.org/curated/en/099307004292220446/pdf/IDU0ed85d1840ffad04ccd0aed80adae36eb0699.pdf",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
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
