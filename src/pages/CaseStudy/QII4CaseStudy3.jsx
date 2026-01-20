import React, { useEffect } from "react";
import Header3 from "../../components/Header3";
import ListImageText from "../../components/ListImageText";
import "./QII4CaseStudy.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../../slices/appDataSlice";

export default function QII4CaseStudy3() {
  const dispatch = useDispatch();
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
          <div className="single-case-study-wrapper"style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.6) 85%, rgba(0, 0, 0, 0.8) 100% ), url("images/newresource/Diagnosing-Road-Network.png")`,
            }}>
            <h2 className="main-title">
              <p>Cabo Verde</p>
              <span>Diagnosing Road Network Vulnerabilities to Guide Resilient Investment</span> 
            </h2>
            <div className="sub-title">
              <h2>CASE SNAPSHOT</h2>
            </div>
            <div className="case-study-details">
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/sector_icon.svg" alt="" />
                  <h3>SECTOR</h3>
                  <p>Transport</p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/country_icon.svg" alt="" />
                  <h3>COUNTRY</h3>
                  <p>Cabo Verde
                    <br /><br />
                  </p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/timeline.svg" alt="" />
                  <h3>TIMELINE</h3>
                  <p>2010s-present</p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/cost_icon.svg" alt="" />
                  <h3>COST</h3>
                  <p>
                    Undisclosed
                    <br /><br />
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
                        Road sector investment, maintenance, and emergency response systematically informed and prioritized based on hazard risk and vulnerability diagnostics
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
                  "pdf/QII_4_Diagnosing vulnerabilities_Case 2 Cabo Verde.pdf",
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
                  "https://www.gfdrr.org/sites/default/files/publication/R2R%20Diagnostic%20Cabo%20Verde%20-%20Diagnostic%20Report%20(Web)_0.pdf",
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
