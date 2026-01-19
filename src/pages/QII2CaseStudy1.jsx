import React, { useEffect } from "react";
import Header3 from "../components/Header3";
import ListImageText from "../components/ListImageText";
import "./QII2CaseStudy.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";

export default function QII2CaseStudy1() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [
          { path: "/qii2", title: "QII.2 Economic Efficiency" },
          { path: "/qii2", title: "Case Study" },
        ],
      }),
    );
  }, []);
  return (
    <div className="single-case-study-page">
      <section className="color-light">
        <div className="container">
          <div className="single-case-study-wrapper">
            <h2 className="main-title">
              <span>Fukuoka City:</span> Pioneering Life Cycle Costing for
              Efficient Water Management
            </h2>
            <div className="sub-title">
              <h2>CASE SNAPSHOT</h2>
            </div>
            <div className="case-study-details">
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/sector_icon.svg" alt="" />
                  <h3>SECTOR</h3>
                  <p>Water</p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/country_icon.svg" alt="" />
                  <h3>COUNTRY</h3>
                  <p>Japan</p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/timeline.svg" alt="" />
                  <h3>TIMELINE</h3>
                  <p>1979–Present</p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/cost_icon.svg" alt="" />
                  <h3>COST</h3>
                  <p>
                    Initial investment of ¥32.5 billion ($148.3 million) for the
                    Water Distribution Control Center and leakage reduction
                    program.
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
                        Internal Rate of Return (IRR) of <strong>15%</strong>,
                        demonstrating sound investment decisions.
                      </li>
                      <li>
                        Leakage rate reduced from{" "}
                        <strong>14% in 1979 to 2% by mid-2000s</strong>,
                        significantly lowering operational costs and water
                        production needs.
                      </li>
                      <li>
                        Delayed capital expenditures by controlling demand
                        through water reclamation facilities and usage-based
                        tariffs.
                      </li>
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
                  "pdf/Fukuoka_city_case_study.pdf",
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
                  "https://openknowledge.worldbank.org/entities/publication/39c49500-f182-5d63-a002-56133d6f5d9c",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              View detailed case study
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
