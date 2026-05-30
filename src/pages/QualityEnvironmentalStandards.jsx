import React, { useEffect } from "react";
import "./QualityEnvironmentalStandards.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import { Link } from "react-router-dom";
import Header3 from "../components/Header3";
import ResourceLibrary from "./ResourceLibrary";
import TopResourceCard from "../components/TopResourceCard";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";
import VCardsPagination from "../components/VCardsPagination";
import { Popover, Tooltip } from "antd";
import { updateCardClick } from "../utils/cardRanking";
import { useLocation } from "react-router-dom";

export default function QualityEnvironmentalStandards() {
  const location = useLocation();
  const resourceArray = [
    {
      rId: 46,
      id: 0,
      title: "Global: Blue Dot Network",
      type: "Framework",
      // country: "Global",
      // org: false,
      description:
        "The Blue Dot Network is a voluntary, private-sector-focused and government-supported certification scheme for infrastructure projects. Led by Australia, Japan, Spain, Switzerland, Türkiye, the United Kingdom and the United States, the certification system assesses infrastructure projects against high standards of transparency, sustainability, and developmental impact.",
      img_path: "images/qii5/PoliciesandRegulation/Blue-Dot-Network.png",
      path: "https://www.bluedot-network.org/about",
      target: "_blank",
    },
    {
      rId: 194,
      id: 1,
      title: "Global: FAST-Infra",
      type: "Framework",
      // country: "Global",
      // org: false,
      description:
        "The FAST-Infra Label is a globally applicable label for projects demonstrating significant positive sustainability performance. The FAST-Infra initiative was originally conceived collectively by the Climate Policy Initiative, HSBC, the OECD, the IFC and the World Bank Group’s Global Infrastructure Facility, and integrates QII-aligned criteria into its Label to attract private capital to sustainable assets by providing consistent evaluation metrics.",
      img_path: "images/qii3/GreenFinancingforInfrastructure/FAST-Infra.png",
      path: "https://www.fastinfralabel.org/",
      target: "_blank",
    },
  ];

  const STEP1_PAGE_SIZE = 3;
  const step1Cards = [
    // {
    //   image:
    //     "images/qii3/Quality-Environmental-Standards/Timor-Leste Tibar Bay Port.png",
    //   title: (
    //     <p>
    //       <strong>​Timor-Leste: Tibar Bay Port</strong>
    //     </p>
    //   ),
    //   buttonText: "Case Study",
    //   link: "pdf/QII_3_CaseStudy_TibarBay.pdf",
    //   content: (
    //     <p>
    //       This project demonstrates application of the IFC Performance
    //       Standards, which gained recognition for rigorous environmental and
    //       social scoping that led to key operational improvements such as
    //       reducing congestion and enhancing trade efficiency.
    //     </p>
    //   ),
    // },
    {
      image: "images/qii3/shutterstock_2607341901.jpg",
      rId: 52,
      title: (
        <p>
          Timor-Leste <br />
          <strong>
            Tibar Bay Port: Applying Quality Environmental and Social Standards
          </strong>
          <br />
          World Bank
        </p>
      ),
      highlight: 1,
      buttonText: "Full Publication",
      link: "pdf/QII_3_CaseStudy_TibarBay.pdf",
      buttonText2: "Case Study",
      link2:
        "https://www.gihub.org/innovative-funding-and-financing/case-studies/tibar-bay-port/",
      content: (
        <p>
          This project demonstrates application of the IFC Performance
          Standards, which gained recognition for rigorous environmental and
          social scoping that led to key operational improvements such as
          reducing congestion and enhancing trade efficiency.
        </p>
      ),
    },
    {
      image:
        "images/qii3/Quality-Environmental-Standards/Environmental and Social Framework (ESF).png",
      rId: 62,
      title: (
        <p>
          Global <br />
          <strong>Environmental and Social Framework​</strong> <br />
          World Bank
        </p>
      ),
      buttonText: "Framework",
      link: "https://thedocs.worldbank.org/en/doc/837721522762050108-0290022018/original/ESFFramework.pdf#page=29&zoom=80",
      content: (
        <p>
          This framework guides project level environmental and social
          management. The ESF helps to identify what risks must be managed
          (e.g., pollution, biodiversity loss, community health and safety,
          climate hazards) and provides an approach for addressing these risks
          through ten standards that integrate E&S considerations into
          infrastructure projects.
        </p>
      ),
    },
    {
      image:
        "images/qii3/Quality-Environmental-Standards/IFC Performance Standards on Environmental and Social Sustainability.png",
      rId: 63,
      title: (
        <p>
          Global <br />
          <strong>
            IFC's Performance Standards on Environmental and Social
            Sustainability​
          </strong>
          <br />
          IFC
        </p>
      ),
      buttonText: "Framework",
      link: "https://www.ifc.org/en/insights-reports/2012/ifc-performance-standards",
      content: (
        <p>
          The eight IFC Performance Standards establish minimum requirements
          that project developers must meet to be eligible for financing and
          provide reference information on technical limits, design approaches,
          monitoring metrics, and mitigation practices to do so. These standards
          are used by development finance institutions and private investors
          worldwide, ensuring that finance is only channeled to projects with
          strong environmental fundamentals.
        </p>
      ),
    },
  ];

  const step2Cards = [
    {
      rId: 64,
      image:
        "images/qii3/Quality-Environmental-Standards/Infrastructure_Standards.png",
      title: (
        <p>
          Global <br />
          <strong>Infrastructure Standards​</strong> <br />
          International Organization for Standardization
        </p>
      ),
      buttonText: "Framework",
      link: "https://www.iso.org/popular-standards.html",
      content: (
        <p>
          These engineering standards are widely referenced in sustainable
          infrastructure guidance provided by organizations such as the World
          Bank, IFC, and OECD for and are recognized internationally as good
          practice for environmental, social, and climate-resilient design.
          Below are examples of codes relevant to quality infrastructure.
          <ul>
            <li>
              <strong>
                ISO{" "}
                <a
                  href="https://www.iso.org/standard/14001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  14001
                </a>
              </strong>{" "}
              – Environmental management systems
            </li>
            <li>
              <strong>
                ISO{" "}
                <a
                  href="https://www.iso.org/standard/61885.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  37101
                </a> / 
                 <a
                  href="https://www.iso.org/files/live/sites/isoorg/files/archive/pdf/en/37120_briefing_note.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  37120
                </a>
              </strong>{" "}
              –Sustainable cities and communities / indicators for city services
              and quality of life
            </li>
            <li>
              <strong>
                ISO{" "}
                <a
                  href="https://www.iso.org/standard/61694.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  21930 
                </a> / 
                <a
                  href="https://www.iso.org/standard/71183.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  21931
                </a> 
              </strong>{" "}
              – Sustainability of construction works and building products 
            </li>
            <li>
              <strong>
                ISO{" "}
                <a
                  href="https://www.iso.org/standard/66453.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  14064
                </a>
              </strong>{" "}
              – Greenhouse gas accounting 
            </li>
          </ul>
        </p>
      ),
    },
    {
      rId: 65,
      image:
        "images/qii3/Quality-Environmental-Standards/Equator Principles.png",
      title: (
        <p>
          Global <br />
          <strong>​Equator Principles</strong>
        </p>
      ),
      buttonText: "Framework",
      link: "https://equator-principles.com/",
      content: (
        <p>
          A risk management framework adopted by financial institutions for
          environmental and social risks in project finance globally. The
          framework includes ten major principles, providing a minimum standard
          for due diligence and monitoring. Financial institutions that have
          adopted the Equator Principles cover most international project
          finance debt.
        </p>
      ),
    },
    {
      rId: 66,
      image:
        "images/qii3/Quality-Environmental-Standards/LEED for Buildings.png",
      title: (
        <p>
          Global <br />
          <strong>LEED​</strong> <br />
          U.S. Green Building Council
        </p>
      ),
      buttonText: "For Buildings",
      link: "https://www.usgbc.org/leed",
      buttonText2: " For Cities and Communities",
      link2: "https://www.usgbc.org/leed/rating-systems/leed-for-cities",
      content: (
        <p>
          LEED provides certification standards for sustainable building design.
          LEED for Cities and Communities extends this framework beyond
          buildings to advance sustainable development at city and community
          scale, providing local leaders, developers and practitioners with a
          sustainability framework aligned with the UN Sustainable Development
          Goals.
        </p>
      ),
    },
    {
      rId: 67,
      image: "images/newresource/BREEAM-Infrastructure.png",
      title: (
        <p>
          Global <br />
          <strong>​BREEAM Infrastructure</strong>{" "}
        </p>
      ),
      buttonText: "Framework",
      link: "https://breeam.com/breeam-infrastructure",
      content: (
        <p>
          BREEAM evaluates infrastructure projects against sustainability
          criteria, including energy, water, materials, biodiversity,
          resilience, and social value, and provides a rating (Pass, Good, Very
          Good, Excellent, Outstanding). It draws on existing standards,
          regulations, and best practices to define its criteria.
        </p>
      ),
    },
  ];

  const step3Cards = [
    {
      rId: 68,
      image: "images/qii3/shutterstock_2667061147.jpg",
      title: (
        <p>
          Global <br />
          <strong>Framework for SDG-Aligned Finance</strong> <br />
          OECD & UNDP
        </p>
      ),
      buttonText: "Guidance Note",
      link: "https://sdgfinance.undp.org/resource-library/framework-sdg-aligned-finance​",
      content: (
        <p>
          Explains how sustainability and risk management standards increase
          capital access. Demonstrates that incorporating environmental, social,
          and governance considerations into investment decisions enhances
          project bankability and attractiveness to investors while aligning
          finance with Sustainable Development Goals.
        </p>
      ),
    },
    {
      rId: 83,
      image:
        "images/qii3/Quality-Environmental-Standards/Infrastructure-Standards.png",
      title: (
        <p>
          Global <br />
          <strong>
            Infrastructure Standards – Building Blocks for a Resilient Future
          </strong>{" "}
          <br />
          CDRI
        </p>
      ),
      buttonText: "Guidance Note",
      link: "https://cdri.world/upload/biennial/CDRI_Global_Infrastructure_Resilience_Report.pdf",
      content: (
        <p>
          The Coalition for Disaster Resilient Infrastructure has developed a
          technical note, which maps out the need for resilience oriented
          standards across the infrastructure lifecycle, and identifies the
          principles that infrastructure standards should embed (robustness,
          redundancy, flexibility, recovery capacity, good governance, etc.).
        </p>
      ),
    },
    {
      rId: 76,
      image:
        "images/qii3/Quality-Environmental-Standards/Global-Environment-Outlook.png",
      title: (
        <p>
          Global <br />
          <strong>Global Environment Outlook (GEO-7)</strong> <br />
          UNEP
        </p>
      ),
      buttonText: "Guidance Note",
      link: "https://www.unep.org/geo/global-environment-outlook-7",
      content: (
        <p>
          To provide global evidence on natural capital losses and policy
          pathways for mitigation through better standards.
        </p>
      ),
    },
  ];

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
          { path: "/qii3", title: "QII.3 Environment" },
          {
            path: "/QualityEnvironmentalStandards",
            title: "Quality Environmental Standards",
          },
        ],
      }),
    );
  }, []);
  return (
    <div className="QualityEnvironmentalStandards">
      <section className="color-light">
        <Header3
          id="qii3-QES-section1"
          img="images/qii3/Quality-Environmental-Standards/shutterstock_2477739245.png"
          title={"Quality Environmental Standards"}
          hideDeskTitle={true}
        >
          <div className="hero-content">
            <div className="header-3-subpages">
              <img
                src="images/UpdatedAssets/Qii3.svg"
                alt="Qii2 logo"
                className="qii-badge"
              />
              <h1 className="header-title desk-title">
                Quality Environmental Standards
              </h1>
            </div>
          </div>
          <div className="subpage-description">
            <p className="light-font">
              Quality environmental standards are the foundation of good
              infrastructure project development. They are also a requirement
              for project developers seeking to attract credible investors.
            </p>
          </div>
        </Header3>
        <div className="container internal-pages-container">
          <div className="link-text" id="qii3-QES-section2">
            <strong>
              Applying Global Best Practices for Environmental and Social
              Safeguards
            </strong>
            <br />
            <br />
            Recognized environmental and social standards establish the basic
            requirements that quality infrastructure developers must meet
            throughout an infrastructure investment's lifecycle.
            <br />
            <br />
            The <strong>World Bank Environmental and Social Framework </strong>
            and the <strong> IFC Performance Standards</strong> exemplify such
            standards and provide a strong foundation for applying international
            environmental and social best practices to infrastructure design and
            delivery.
          </div>
          <VCardsPagination cardsData={step1Cards} id="qii3-QES-section3" />

          <div className="border-dash"></div>
          <div className="link-text" id="qii3-QES-section4">
            <p>
              A range of other internationally recognized frameworks and
              best-practice standards can also help guide quality design. The
              below resources presents a representative, non-exhaustive list of
              these standards and systems.
            </p>
          </div>
          <VCardsPagination cardsData={step2Cards} id="qii3-QES-section5" />
        </div>
      </section>

      <section className="color-dark" id="qii3-QES-section6">
        <div className="container internal-pages-container">
          <div className="link-text noPBottom" >
            Quality environmental standards can also increase the attractiveness
            of projects to potential investors. Financial institutions
            increasingly use internationally recognized standards as benchmarks
            to assess and manage risk in project finance. Projects that
            integrate these standards demonstrate reduced risk profiles and
            improved long-term viability. Moreover, they can qualify for
            certification by initiatives such as{" "}
            <strong>Blue Dot Network </strong>
            and <strong>Fast Infra</strong>, making them more attractive to
            investors.
          </div>
          <div className="container notop" id="qii3-QES-section7">
            <div className="page-resource-flex-container">
              <div className="page-resource-flex" role="list">
                {resourceArray.map((p, index) => {
                  return (
                    <article
                      // className="page-resource-card page-resource-card-flex"
                      className="page-resource-card-flex"
                      key={index}
                      role="listitem"
                      style={{ backgroundImage: `url(${p.img})` }}
                    >
                      <div className="page-resource-link">
                        <div className="page-resource-body">
                          <div className="page-resource-title title-small">
                            {/* {p.country && (
                              <>
                                <span>{p.country}</span> <br />
                              </>
                            )} */}
                            {/* <strong>{p.title}</strong> */}
                            <p className="page-resource-type">{p.type}</p>
                            <br />
                            {p.title}
                            {/* {p.org && (
                              <>
                                <br />
                                <span>{p.org}</span>
                              </>
                            )} */}
                          </div>
                          <div className="page-resource-overlay" />
                          <img
                            className="page-resource-img"
                            src={p.img_path}
                            alt={p.title}
                          />
                          {/* <div className="page-resource-img-cnt">
                                </div> */}
                          <div className="page-resource-data">
                            <div className="page-resource-title title-big">
                              {/* {p.country && (
                                <>
                                  <span>{p.country}</span> <br />
                                </>
                              )} */}
                              {/* <strong>{p.title}</strong> */}
                              <p className="page-resource-type">{p.type}</p>
                              <br />
                              {p.title}
                              {/* {p.org && (
                                <>
                                  <br />
                                  <span>{p.org}</span>
                                </>
                              )} */}
                            </div>
                            {/* <div className="page-resource-description">
                              {p.description}
                            </div> */}
                            <Popover
                              content={
                                <div className="resource-popover-content">
                                  {p.description}
                                </div>
                              }
                              placement="left"
                              title={false}
                              trigger="click"
                            >
                              <div className="page-resource-description">
                                Read More...
                              </div>
                            </Popover>
                            <div className="page-resource-btn-cnt">
                              {p.target === "_blank" ? (
                                <a
                                  className="page-resource-arrow"
                                  href={p.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    updateCardClick(p.rId);

                                    if (p.path) {
                                      window.open(p.path, "_blank");
                                    }
                                  }}
                                >
                                  <span className="icon-arrow">&#xe900;</span>
                                </a>
                              ) : (
                                <Link
                                  className="page-resource-arrow"
                                  to={p.path}
                                  target={p.target}
                                >
                                  <span className="icon-arrow">&#xe900;</span>
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container internal-pages-container color-light">
        <div className="section-title" id="qii3-QES-section8">
          <strong>
            Additional Framing Documentation on the Importance of Quality
            Standards
          </strong>
        </div>
        <VCardsPagination cardsData={step3Cards} id="qii3-QES-section8"/>

        <div className="link-text mTop2 noPBottom" id="qii3-QES-section9">
          The incorporation of environmental standards requires a robust
          <strong> governance framework</strong> that mandates these standards
          be met. For more on the development of strong governance practices
          that support and require environmental considerations in
          infrastructure planning and development, please navigate to{" "}
          <Link to="/qii6" target="_blank">
            <strong className="link">
              <u>QII 6: Governance</u>
            </strong>
          </Link>
          .
        </div>
      </section>
    </div>
  );
}
