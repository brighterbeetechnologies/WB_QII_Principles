import React, { useEffect } from "react";
// import Header3 from "../components/Header3";
// import ListImageText from "../components/ListImageText";
import "../QII2CaseStudy.css";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../../slices/appDataSlice";
import { useLocation } from "react-router-dom";

export default function QII5CaseStudy2() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (location.state?.scrollTo) {
        const el = document.getElementById(location.state.scrollTo);
        el?.scrollIntoView({ behavior: "smooth" });
        navigate(location.pathname, { replace: true, state: null });
      }
    }, 500);
  }, [location]);

  const dispatch = useDispatch();
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
    <div className="single-case-study-page" id="qii5CS2">
      <section className="color-light">
        <div className="container">
          <div
            className="single-case-study-wrapper"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.6) 85%, rgba(0, 0, 0, 0.8) 100% ), url("images/qii5/shutterstock_2309884753.jpg")`,
              margin: "7rem 0 0 0",
              backgroundSize: "cover",
            }}
          >
            <h2 className="main-title main-title-internal">
              <span>Vietnam and Senegal </span> <br />
              Incorporating Universal Accessibility into Infrastructure Planning
              and Design
            </h2>
            <div className="sub-title">
              <h2>CASE SNAPSHOT</h2>
            </div>
            <div className="case-study-details">
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/sector_icon.svg" alt="" />
                  <h3>SECTOR</h3>
                  <p>Urban Development </p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/country_icon.svg" alt="" />
                  <h3>COUNTRY</h3>
                  <p>Vietnam & Senegal</p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/timeline.svg" alt="" />
                  <h3>TIMELINE</h3>
                  <p>
                    Vietnam: 2017-202 <br />
                    Senegal: QII engagement Jan 2023 - Apr 2024
                  </p>
                </div>
              </div>
              <div className="case-study-details-card case-study-details-card-child4-Qii5-cs-2">
                <div className="icon-title">
                  <img src="images/qii2/case-study/cost_icon.svg" alt="" />
                  <h3>COST</h3>
                  <div>&lt; $1 million</div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <div className="case-study-details-card case-study-details-card-child5-Qii5-cs-2">
                <div className="icon-title">
                  <img src="images/qii2/case-study/result_icon.svg" alt="" />
                  <h3>RESULT</h3>
                  <div className="qii5-snap-case-result">
                    <div className="qii5-snap-case-result-1">
                      <h4>Vietnam:</h4>
                      <div>
                        <ul>
                          <li>First national accessibility guideline</li>
                          <li>90,000 beneficiaries in low-income areas</li>
                          <li>Methodology scaled global</li>
                        </ul>
                      </div>
                    </div>
                    <div className="qii5-snap-case-result-1">
                      <h4>Senegal:</h4>
                      <div>
                        <ul>
                          <li>Context-sensitive design guidelines</li>
                          <li>Enhanced public infrastructure</li>
                          <li>Cross-sector stakeholder capacity built</li>
                        </ul>
                      </div>
                    </div>
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
                  "pdf/QII5-CaseStudy_UniversalAccessibility_VietnamSenegal.pdf",
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
                  "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099010626090013789",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              Full Publication​
              <div className="arrow-btn icon-arrow">&#xe900;</div>
            </div>
            {/* <div
              className="single-case-study-button"
              onClick={() =>
                window.open(
                  "pdf/Ganga_case_study.pdf",
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
