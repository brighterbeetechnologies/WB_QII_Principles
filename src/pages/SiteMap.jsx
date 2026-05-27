import React, { useEffect, useState } from "react";
import "./SiteMap.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";

export default function SiteMap() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [activeQii, setActiveQii] = useState(null);

  const [openQii, setOpenQii] = useState(null);
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [{ path: "/site-map", title: "Site Map" }],
      }),
    );
  }, []);

  const qiiModules = [
    {
      id: 1,
      image: "images/UpdatedAssets/Qii1.svg",
      title: "QII.1",
      subtitle: "SUSTAINABLE GROWTH",
      bgClass: "qii1-bg",
      headerColor: "#003157",
      links: [],
    },

    {
      id: 2,
      image: "images/UpdatedAssets/Qii2.svg",
      title: "QII.2",
      subtitle: "ECONOMIC EFFICIENCY",
      bgClass: "qii2-bg",
      headerColor: "#23C0E9",
      links: [
        {
          label: "Technical Solutions",
          path: "/technicalsolutions",
        },
        {
          label: "Cost-Recovery",
          path: "/costrecovery",
        },
        {
          label: "Procurement",
          path: "/procurement",
        },
        {
          label: "Governance",
          path: "/governance",
        },
      ],
      caseStudies: [
        {
          label: "Fukuoka City: Life Cycle Costing For Water Management",
          path: "/qii2casestudy1",
        },
        {
          label: "India: Ganga River Wastewater Program",
          path: "/qii2casestudy2",
        },
      ],
    },

    {
      id: 3,
      image: "images/UpdatedAssets/Qii3.svg",
      title: "QII.3",
      headerColor: "#A2CD4A",
      subtitle: "ENVIRONMENT",
      bgClass: "qii3-bg",
      links: [
        {
          label: "Decarbonizing Infrastructure",
          path: "/DecarbonizingInfrastructure",
        },
        {
          label: "Quality Environmental Standards",
          path: "/QualityEnvironmentalStandards",
        },
        {
          label: "Green Designs And Nature Based Infrastructure",
          path: "/GreenDesigns&Nature-BasedInfrastructure",
        },
        {
          label: "Green Financing",
          path: "/GreenFinancingforInfrastructure",
        },
      ],
      caseStudies: [
        {
          label:
            "Timor-Leste: Tibar Bay Port: Applying Quality Environmental and Social Standards",
          path: "/qii3casestudy3",
        },
        {
          label:
            "Serbia: Belgrade Waste-to-Energy PPP: Turning a Liability into a Climate Asset",
          path: "/qii3casestudy1",
        },
        {
          label:
            "Japan: Futakotamagawa: Integrating Flood Protection and Urban Renewal",
          path: "/qii3casestudy2",
        },
      ],
    },

    {
      id: 4,
      image: "images/UpdatedAssets/Qii4.svg",
      title: "QII.4",
      headerColor: "#DD7A27",
      subtitle: "RESILIENCE",
      bgClass: "qii4-bg",
      links: [
        {
          label: "Diagnosing Vulnerabilities",
          path: "/Diagnosing-vulnerabilities",
        },
        {
          label: "Resilient Design and Operation",
          path: "/Resilient-design&operation",
        },
        {
          label: "Financing Resilience",
          path: "/Financing-resilience",
        },
        {
          label: "Managing Cybersecurity Risks",
          path: "/Managing-cyber-security-risks",
        },
      ],
      caseStudies: [
        {
          label: "Japan: Shibaura Wastewater Treatment Facility",
          path: "/qii4casestudy2",
        },
        {
          label: " Cabo Verde: Diagnosing Road Network Vulnerabilities",
          path: "/qii4casestudy3",
        },
        {
          label: "Solomon Islands: Modular Bridges for Resilient Transport",
          path: "/qii4casestudy4",
        },
      ],
    },

    {
      id: 5,
      image: "images/UpdatedAssets/Qii5.svg",
      title: "QII.5",
      headerColor: "#F8C416",
      subtitle: "INNOVATION",
      bgClass: "qii5-bg",
      links: [
        {
          label: "Inclusion Through Policies, Standards And Regulation",
          path: "/Policies_Standards_Regulation",
        },
        {
          label: " Inclusion in Project Design",
          path: "/Project_Planning_And_Design",
        },
        {
          label: "Inclusive Stakeholder Engagement",
          path: "/Stakeholder_Engagement",
        },
      ],
      caseStudies: [
        {
          label:
            "Mozambique: Maputo Bus Rapid Transit Project: Using Big Data for Inclusive Design ",
          path: "/qii5casestudy1",
        },
        {
          label:
            " Vietnam and Senegal: Incorporating Universal Accessibility in Infrastructure Planning and Design",
          path: "/qii5casestudy2",
        },
      ],
    },

    {
      id: 6,
      image: "images/UpdatedAssets/Qii6.svg",
      title: "QII.6",
      headerColor: "#32825B",
      subtitle: "GOVERNANCE",
      bgClass: "qii6-bg",
      links: [
        {
          label: "Infrastructure Institutions",
          path: "/Infrastructure-Institutions",
        },
        {
          label: "GovTech for Infrastructure",
          path: "/govtech-for-infrastructure",
        },
        {
          label: "Public Investment and Asset Management",
          path: "/Public-Investment-And-Asset-Management",
        },
      ],
      caseStudies: [
        {
          label:
            "Central Asia Applying the Infragov Assessment Framework in central Asia",
          path: "/qii6casestudy1",
        },
        {
          label:
            "Global: Public Transport Demand Forecasting Regional Platform for the Post COVID-19 Era",
          path: "/govtech-for-infrastructure",
          state: {
            scrollTo: "qii6-GI-section3",
          },
        },
      ],
    },
  ];

  const handleQiiClick = (id) => {
    setActiveQii(id);
    setOpenQii((prev) => (prev === id ? null : id));
  };

  const toggleAccordion = (id) => {
    setOpenQii(openQii === id ? null : id);
  };

  return (
    <div>
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
                  Fukuoka City: Pioneering Life Cycle Costing for Efficient
                  Water Management <span className="icon-arrow"></span>
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
                  onClick={() => navigate("/qii3casestudy2")}
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
                  Mozambique: Maputo Bus Rapid Transit Project: Using Big Data
                  for Inclusive Design <span className="icon-arrow"></span>
                </button>

                <button
                  className="qii-site-links-spotlights btn-arrow-txt-2"
                  onClick={() => navigate("/qii5casestudy2")}
                >
                  Vietnam and Senegal: Incorporating Universal Accessibility in
                  Infrastructure Planning and Design{" "}
                  <span className="icon-arrow"></span>
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
                  onClick={() =>
                    navigate("/govtech-for-infrastructure", {
                      state: { scrollTo: "qii6-GI-section3" },
                    })
                  }
                >
                  Global: Public Transport Demand Forecasting Regional Platform
                  for the Post COVID-19 Era<span className="icon-arrow"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="site-map-mobile">
        <div className="site-map-mobile-container">
          <div className="qii-site-map-principles">
            <div className="qii-site-map-timeline"></div>

            {qiiModules.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.title}
                className={`qii-image ${
                  activeQii === item.id ? "active-qii" : ""
                }`}
                onClick={() => handleQiiClick(item.id)}
              />
            ))}
          </div>

          <div className="qii-content-section">
            {qiiModules.map((item) => (
              <div key={item.id} className={`qii-content-box ${item.bgClass}`}>
                <div
                  className="qii-content-header"
                  style={{ backgroundColor: item.headerColor }}
                  onClick={() => toggleAccordion(item.id)}
                >
                  <div>
                    <p>{item.title}</p>
                    <p>{item.subtitle}</p>
                  </div>

                  <span>{openQii === item.id ? "⌃" : "⌄"}</span>
                </div>

                {openQii === item.id && (
                  <div className="qii-content-items">
              
                    {item.links.map((link, index) => (
                      <button
                        key={index}
                        className="btn-arrow-txt-1 qii-site-links"
                        // onClick={() => navigate(link.path)}
                        onClick={() =>
                          navigate(
                            link.path,
                            link.state ? { state: link.state } : {},
                          )
                        }
                      >
                        {link.label}
                        <span className="icon-arrow"></span>
                      </button>
                    ))}

                    {item.caseStudies?.length > 0 && (
                      <>
                        <div className="qii-site-cs-links">
                          <p>CASE STUDIES</p>
                        </div>

                        {item.caseStudies.map((study, index) => (
                          <button
                            key={index}
                            className="qii-site-links-spotlights btn-arrow-txt-2"
                            onClick={() => navigate(study.path)}
                          >
                            {study.label}
                            <span className="icon-arrow"></span>
                          </button>
                        ))}
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
