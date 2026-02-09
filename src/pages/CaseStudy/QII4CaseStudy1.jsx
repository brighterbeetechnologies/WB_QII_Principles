import React, { useEffect } from "react";
import Header3 from "../../components/Header3";
import ListImageText from "../../components/ListImageText";
import "../QII2CaseStudy.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../../slices/appDataSlice";

export default function QII4CaseStudy1() {
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
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.6) 85%, rgba(0, 0, 0, 0.8) 100% ), url("images/qii4/updated/Futakotamagawa.png")`,
            }}>
            <h2 className="main-title">
              <p>Japan</p>
              <span>Futakotamagawa:</span> Integrating Flood Protection and Urban Renewal
            </h2>
            <div className="sub-title">
              <h2>CASE SNAPSHOT</h2>
            </div>
            <div className="case-study-details">
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/sector_icon.svg" alt="" />
                  <h3>SECTOR</h3>
                  <p>Urban Development & Flood Management</p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/country_icon.svg" alt="" />
                  <h3>COUNTRY</h3>
                  <p>Japan
                    <br /><br />
                    <br /><br />
                  </p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/timeline.svg" alt="" />
                  <h3>TIMELINE</h3>
                  <p>2004-2015
                    <br />(main phases)</p>
                </div>
              </div>
              <div className="case-study-details-card">
                <div className="icon-title">
                  <img src="images/qii2/case-study/cost_icon.svg" alt="" />
                  <h3>COST</h3>
                   <div>
                    <ul>
                      <li>
                        <strong>Futakotamagawa Rise :</strong> ¥102.4 billion ($875 million)  Phase 1 (8.1  ha out of 11.2 ha)
                      </li>
                      <li>
                        <strong>Futakotamagawa Park :</strong> ¥1.274 billion ($11.6 million)
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
                        Regulatory expectations demanded improvements in service reliability and financial sustainability.
                      </li>
                      <li>
                        Resilience through the project: Integration of flood protcteion and public-private cost-sharing created a model where urban livelihood, ecological values, and economic viability mutually reinforce each other.
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
                  "pdf/QII_4_Case Japan Urban Resilience 1.pdf",
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
                  "https://documents1.worldbank.org/curated/en/915131601460271575/pdf/Appendix-Case-Studies-in-Integrated-Urban-Flood-Risk-Management-in-Japan.pdf#page=7",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              View the full publication​
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
