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
                <span className="icon-home">&#xe920;</span>
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
                  Fukuoka City: Pioneering Life Cycle Costing for Eicient Water
                  Management <span className="icon-arrow"></span>
                </button>
                <button
                  className="qii-site-links-spotlights btn-arrow-txt-2"
                  onClick={() => navigate("/qii2casestudy2")}
                >
                  The Ganga Wastewater Program Strengthening Life Cycle Costing
                  through Public-Private Partnership{" "}
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
                  onClick={() => navigate("/qii3casestudy3")}
                >
                  Timor-Leste: Tibar Bay Port: Applying Quality Environmental
                  and Social Standards <span className="icon-arrow"></span>
                </button>

                <button
                  className="qii-site-links-spotlights btn-arrow-txt-2"
                  onClick={() => navigate("/qii3casestudy1")}
                >
                  Serbia: Belgrade Waste-to-Energy PPP: Turning a Liability into
                  a Climate Asset <span className="icon-arrow"></span>
                </button>

                <button
                  className="qii-site-links-spotlights btn-arrow-txt-2"
                  onClick={() => navigate("/qii4casestudy2")}
                >
                  Japan: Futakotamagawa: Integrating Flood Protection and Urban
                  Renewal <span className="icon-arrow"></span>
                </button>
              </div>
              <div className="site-map-link">
                <button
                  className="btn-arrow-txt-1 qii-site-links"
                  onClick={() => navigate("/Diagnosing-vulnerabilities")}
                >
                  Diagnosing Vulnerabilities{" "}
                  <span className="icon-arrow"></span>
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
                  onClick={() => navigate("/qii5casestudy1")}
                >
                  Mozambique:Maputo Bus Rapid Transit Project: Using Big Data
                  for Inclusive Design <span className="icon-arrow"></span>
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
                  GovTech for Infrastructure{" "}
                  <span className="icon-arrow"></span>
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
                  Central Asia Applying the Infragov Assessment Framework in
                  central Asia <span className="icon-arrow"></span>
                </button>

                <button
                  className="qii-site-links-spotlights btn-arrow-txt-2"
                  onClick={() => navigate("pdf/QII6_LAC_Transport_CaseStudy.pdf")}
                >
                  Global: Public Transport Demand Forecasting Regional Platform
                  for the Post COVID-19 Era<span className="icon-arrow"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
