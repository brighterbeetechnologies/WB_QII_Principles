import React, { useEffect } from "react";
// import Header3 from "../components/Header3";
// import ListImageText from "../components/ListImageText";
import "../QII2CaseStudy.css";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../../slices/appDataSlice";
import { useLocation } from "react-router-dom";

export default function QII6CaseStudy2() {

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
          { path: "/qii6", title: "QII.6 Governance" },
          { path: "/qii6", title: "Case Study" },
        ],
      }),
    );
  }, []);
  return (
    <div className="single-case-study-page" id="qii6CS2">
      <section className="color-light">
        <div className="container">
          <div
            className="single-case-study-wrapper"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.6) 85%, rgba(0, 0, 0, 0.8) 100% ), url("images/qii6/Group1993.png")`,
              margin: "7rem 0 0 0",
              backgroundSize: "cover",
            }}
          >
            <h2 className="main-title main-title-internal">
              <span>Albania </span> <br />
              Quality Digital Infrastructure for Inclusive Public Services
            </h2>
            <div className="sub-title">
              <h2>CASE SNAPSHOT</h2>
            </div>
            <div className="case-study-details">
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/sector_icon.svg" alt="" />
                  <h3>SECTOR</h3>
                  <p>Digital </p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/country_icon.svg" alt="" />
                  <h3>COUNTRY</h3>
                  <p>Albania</p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/timeline.svg" alt="" />
                  <h3>TIMELINE</h3>
                  <p>2023 to Present </p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/cost_icon.svg" alt="" />
                  <h3>COST</h3>
                  <div>
                    <ul> 
                      <li>
                        US$375,000 (QII Technical Assistance) 
                      </li>
                      <li>
                        US$145 million (World Bank finance) 
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/result_icon.svg" alt="" />
                  <h3>RESULT</h3>
                  <div>
                    <ul>
                      <li>
                        95% of central government services online 
                      </li>
                      <li>
                        3+ million registered users 
                      </li>
                       <li>
                        1,200+ digital services 
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
                  "pdf/Albania Quality Digital Infrastructure for Inclusive Public Services.pdf",
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
                  "pdf/Albania Innovations_Results Story_March 2024.pdf",
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
