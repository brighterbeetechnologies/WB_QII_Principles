import React, { useEffect, useState } from "react";
import "./SiteMap.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";

export default function SiteMap() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [{ path: "/site-map", title: "Site Map" }],
      }),
    );
  }, []);

  return (
    <div className="site-map">
      <section className="site-map color-light">
        <div className="site-map-container">
          <div className="site-map-content">
            <div className="site-map-header">
              <button
                className="btn-arrow-txt qii-site-links"
                onClick={() => navigate("/")}
              >
                <span className="icon-home">
              &#xe920;
            </span>
                Home{" "}
              </button>
              <h1 className="site-map-title">QII Reference Guide</h1>
              <button
                className="btn-arrow-txt qii-site-links"
                onClick={() => navigate("/fundamentals_of_qii")}
              >
                Fundamentals of QII <span className="icon-arrow"></span>
              </button>
            </div>
            <img
              className="site-map-qii-img"
              src="images/Full-graphic-site-map.png"
              alt=""
            />
            {/* <div className="site-map-links-container">
              <div className="site-map-link"></div>
              <div className="site-map-link">
                <button
                  className="btn-arrow-txt-1 qii-site-links"
                  onClick={() => navigate("/")}
                >
                  Technical Solutions <span className="icon-arrow"></span>
                </button>

                <button
                  className="btn-arrow-txt-1 qii-site-links"
                  onClick={() => navigate("/")}
                >
                  Cost-recovery <span className="icon-arrow"></span>
                </button>

                <button
                  className="btn-arrow-txt-1 qii-site-links"
                  onClick={() => navigate("/")}
                >
                  Procurement <span className="icon-arrow"></span>
                </button>

                <button
                  className="btn-arrow-txt-1 qii-site-links"
                  onClick={() => navigate("/")}
                >
                  Governance <span className="icon-arrow"></span>
                </button>

                <div className="qii-site-cs-links">
                  <p>CASE STUDIES</p>
                </div>

                <button
                  className="qii-site-links-spotlights btn-arrow-txt-2"
                  onClick={() => navigate("/")}
                >
                  Fukuoka City: Life Cycle Costing for Water Management <span className="icon-arrow"></span>
                </button>
                <button
                  className="qii-site-links-spotlights btn-arrow-txt-2"
                  onClick={() => navigate("/")}
                >
                  India: Ganga River Wastewater Program <span className="icon-arrow"></span>
                </button>
              </div>
              <div className="site-map-link">hello</div>
              <div className="site-map-link">hello</div>
              <div className="site-map-link">hello</div>
              <div className="site-map-link">hello</div>
            </div> */}
          </div>
          <div className="site-map-links-container">
            <div className="site-map-link"></div>
            <div className="site-map-link">
              <button
                className="btn-arrow-txt-1 qii-site-links"
                onClick={() => navigate("/technicalsolutions")}
              >
                Technical Solutions <span className="icon-arrow"></span>
              </button>

              <button
                className="btn-arrow-txt-1 qii-site-links"
                onClick={() => navigate("/costrecovery")}
              >
                Cost-recovery <span className="icon-arrow"></span>
              </button>

              <button
                className="btn-arrow-txt-1 qii-site-links"
                onClick={() => navigate("/procurement")}
              >
                Procurement <span className="icon-arrow"></span>
              </button>

              <button
                className="btn-arrow-txt-1 qii-site-links"
                onClick={() => navigate("/governance")}
              >
                Governance <span className="icon-arrow"></span>
              </button>

              <div className="qii-site-cs-links">
                <p>CASE STUDIES</p>
              </div>

              <button
                className="qii-site-links-spotlights btn-arrow-txt-2"
                onClick={() => navigate("/qii2casestudy1")}
              >
                Fukuoka City: Life Cycle Costing for Water Management{" "}
                <span className="icon-arrow"></span>
              </button>
              <button
                className="qii-site-links-spotlights btn-arrow-txt-2"
                onClick={() => navigate("/qii2casestudy2")}
              >
                India: Ganga River Wastewater Program{" "}
                <span className="icon-arrow"></span>
              </button>
            </div>
            <div className="site-map-link">
              <button
                className="btn-arrow-txt-1 qii-site-links"
                onClick={() => navigate("/DecarbonizingInfrastructure")}
              >
                Decarbonizing Infrastructure{" "}
                <span className="icon-arrow"></span>
              </button>

              <button
                className="btn-arrow-txt-1 qii-site-links"
                onClick={() => navigate("/QualityEnvironmentalStandards")}
              >
                Quality Environmental Standards{" "}
                <span className="icon-arrow"></span>
              </button>

              <button
                className="btn-arrow-txt-1 qii-site-links"
                onClick={() =>
                  navigate("/GreenDesigns&Nature-BasedInfrastructure")
                }
              >
                Green Designs And Nature Based Infrastructure{" "}
                <span className="icon-arrow"></span>
              </button>

              <button
                className="btn-arrow-txt-1 qii-site-links"
                onClick={() => navigate("/GreenFinancingforInfrastructure")}
              >
                Green Financing <span className="icon-arrow"></span>
              </button>

              <div className="qii-site-cs-links">
                <p>CASE STUDIES</p>
              </div>

              <button
                className="qii-site-links-spotlights btn-arrow-txt-2"
                onClick={() =>
                  window.open(
                    "https://www.conservation.org/projects/vida-manglar-carbon-project",
                    "_blank",
                  )
                }
              >
                Colombia: Vida Manglar Carbon Project{" "}
                <span className="icon-arrow"></span>
              </button>

              <button
                className="qii-site-links-spotlights btn-arrow-txt-2"
                onClick={() =>
                  window.open(
                    "https://www.gihub.org/innovative-funding-and-financing/case-studies/cape-town-green-bond/",
                    "_blank",
                  )
                }
              >
                South Africa: Cape Town Green Bond{" "}
                <span className="icon-arrow"></span>
              </button>
            </div>
            <div className="site-map-link">
              <button
                className="btn-arrow-txt-1 qii-site-links"
                onClick={() => navigate("/Diagnosing-vulnerabilities")}
              >
                Diagnosing Vulnerabilities <span className="icon-arrow"></span>
              </button>

              <button
                className="btn-arrow-txt-1 qii-site-links"
                onClick={() => navigate("/Resilient-design&operation")}
              >
                Resilient Design and Operation{" "}
                <span className="icon-arrow"></span>
              </button>

              <button
                className="btn-arrow-txt-1 qii-site-links"
                onClick={() => navigate("/Financing-resilience")}
              >
                Financing Resilience <span className="icon-arrow"></span>
              </button>

              <button
                className="btn-arrow-txt-1 qii-site-links"
                onClick={() => navigate("/Managing-cyber-security-risks")}
              >
                Managing Cybersecurity Risks{" "}
                <span className="icon-arrow"></span>
              </button>

              <div className="qii-site-cs-links">
                <p>CASE STUDIES</p>
              </div>
              <button
                className="qii-site-links-spotlights btn-arrow-txt-2"
                onClick={() => navigate("/qii4casestudy2")}
              >
                Japan: Shibaura Wastewater Treatment Facility{" "}
                <span className="icon-arrow"></span>
              </button>

              <button
                className="qii-site-links-spotlights btn-arrow-txt-2"
                onClick={() => navigate("/qii4casestudy3")}
              >
                Cabo Verde: Diagnosing Road Network Vulnerabilities{" "}
                <span className="icon-arrow"></span>
              </button>
              <button
                className="qii-site-links-spotlights btn-arrow-txt-2"
                onClick={() => window.open("https://georisk.gov.ph/", "_blank")}
              >
                Philippines: Geospatial Information Management Portal{" "}
                <span className="icon-arrow"></span>
              </button>
              <button
                className="qii-site-links-spotlights btn-arrow-txt-2"
                onClick={() => navigate("/qii4casestudy4")}
              >
                Solomon Islands: Modular Bridges for Resilient Transport{" "}
                <span className="icon-arrow"></span>
              </button>
            </div>
            <div className="site-map-link">
              <button
                className="btn-arrow-txt-1 qii-site-links"
                onClick={() => navigate("/Policies_Standards_Regulation")}
              >
                Inclusion Through Policies, Standards And Regulation{" "}
                <span className="icon-arrow"></span>
              </button>

              <button
                className="btn-arrow-txt-1 qii-site-links"
                onClick={() => navigate("/Project_Planning_And_Design")}
              >
                Inclusion in Project Design{" "}
                <span className="icon-arrow"></span>
              </button>

              <button
                className="btn-arrow-txt-1 qii-site-links"
                onClick={() => navigate("/Stakeholder_Engagement")}
              >
                Inclusive Stakeholder Engagement{" "}
                <span className="icon-arrow"></span>
              </button>

              <div className="qii-site-cs-links">
                <p>CASE STUDIES</p>
              </div>

              <button
                className="qii-site-links-spotlights btn-arrow-txt-2"
                onClick={() =>
                  window.open(
                    "https://projects.worldbank.org/en/projects-operations/project-detail/P160594",
                    "_blank",
                  )
                }
              >
                Albania: Gender Equality in Access to Economic Opportunities{" "}
                <span className="icon-arrow"></span>
              </button>

              <button
                className="qii-site-links-spotlights btn-arrow-txt-2"
                onClick={() => navigate("/qii5casestudy2")}
              >
                Vietnam and Senegal: Incorporating Universal Accessibility in
                Infrastructure <span className="icon-arrow"></span>
              </button>
            </div>
            <div className="site-map-link">
              <button
                className="btn-arrow-txt-1 qii-site-links"
                onClick={() => navigate("/Infrastructure-Institutions")}
              >
                Infrastructure Institutions{" "}
                <span className="icon-arrow"></span>
              </button>

              <button
                className="btn-arrow-txt-1 qii-site-links"
                onClick={() => navigate("/govtech-for-infrastructure")}
              >
                GovTech for Infrastructure <span className="icon-arrow"></span>
              </button>

              <button
                className="btn-arrow-txt-1 qii-site-links"
                onClick={() =>
                  navigate("/Public-Investment-And-Asset-Management")
                }
              >
                Public Investment and Asset Management{" "}
                <span className="icon-arrow"></span>
              </button>

              <div className="qii-site-cs-links">
                <p>CASE STUDIES</p>
              </div>

              <button
                className="qii-site-links-spotlights btn-arrow-txt-2"
                onClick={() => navigate("/qii6casestudy1")}
              >
                Central Asia: PPP Reforms in Kyrgyz Republic, Tajikistan, and
                Uzbekistan <span className="icon-arrow"></span>
              </button>

              <button
                className="qii-site-links-spotlights btn-arrow-txt-2"
                onClick={() => navigate("/qii6casestudy2")}
              >
                Albania: Innovations to Accelerate Inclusive and High Impact
                Public Services <span className="icon-arrow"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
