import React, { useEffect } from "react";
import "./Procurement.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";

export default function Procurement() {
  const resourceArray = [
    {
      id: 0,
      title:
        "Life-Cycle Cost Analysis Primer U.S. Department of Transportation - Federal Highway Administration",
      description:
        "This primer provides an introduction to LCCA as a method for comparing the total long-term costs, including agency and user costs, of alternative infrastructure project designs. It explains the step-by-step LCCA process, key concepts, and practical implementation issues.",
      img_path: "images/procurement/resources/01.png",
      path: "https://www.fhwa.dot.gov/pavement/lcca/010621.pdf",
    },

    {
      id: 1,
      title:
        "New Strategies for Strengthening Infrastructure Resilience and Maintenance Organization for Economic Co-operation and Development",
      description:
        "This report presents strategies and practical recommendations for strengthening infrastructure resilience and maintenance, emphasizing a holistic, life-cycle approach. It covers regulatory frameworks, innovation (including digital and nature-based solutions), and funding models to help governments optimize existing assets and build new, sustainable infrastructure resilient to future risk.",
      img_path: "images/procurement/resources/02.png",
      path: "https://www.oecd.org/en/publications/building-resilience_354aa2aa-en.html",
    },
    {
      id: 2,
      title: "Bringing PPPs into the Sunlight Inter-American Development Bank",
      description:
        "This report critically examines Public-Private Partnerships (PPPs), considering their benefits and drawbacks. It provides guidance on institutional frameworks, fiscal implications, government support, and unsolicited proposals, emphasizing rigorous value-for-money analysis and risk management to avoid common pitfalls and maximize public benefit.",
      img_path: "images/procurement/resources/03.png",
      path: "https://publications.iadb.org/en/bringing-ppps-sunlight-synergies-now-and-pitfalls-later",
    },
    {
      id: 3,
      title:
        "Well Maintained: Economic Benefits from More Reliable and Resilient Infrastructure World Bank",
      description:
        "This report demonstrates that regular maintenance is essential for reliable and resilient infrastructure, quantifies the high economic and social costs of unreliable services, and provides evidence-based recommendations for improving maintenance practices, governance, and investment planning to maximize infrastructure’s economic benefits and resilience to shocks.",
      img_path: "images/procurement/resources/04.png",
      path: "https://ppp.worldbank.org/public-private-partnership/sites/default/files/2022-03/Final-LOW_WB_G20_Report_v4_1JUN_2021.pdf",
    },
    {
      id: 4,
      title:
        "Life-Cycle Costing in Sustainable Public Procurement International Institute for Sustainable Development",
      description:
        "This white paper explores how life-cycle costing (LCC) can enhance sustainable public procurement by evaluating all costs, financial, environmental, and social, across an asset’s life. It reviews global practices, highlights barriers to systematic LCC use, and offers recommendations for integrating LCC into procurement policies to achieve better long-term value and sustainability outcomes.",
      img_path: "images/procurement/resources/05.png",
      path: "https://www.iisd.org/publications/report/life-cycle-costing-sustainable-public-procurement-question-value",
    },
    {
      id: 5,
      title: "Life-Cycle Costing Guidance Note World Bank",
      description: "(Forthcoming)",
      img_path: "images/procurement/resources/06.png",
      path: "",
    },
  ];
  const slidesData = [
    {
      img: "images/procurement/header_bg_1.png",
      description:
        "The procurement process sets the foundation for the economic efficiency of an infrastructure project. Procurement processes that create incentives to minimize life- cycle costs can lead to better value for money and reduce long-term expenses. Conversely, weak procurement practices, such as focusing solely on initial purchase price, can result in higher operational and maintenance costs over the asset's lifespan. ",
      title: "Procurement",
    },
    {
      img: "images/procurement/header_bg_2.png",
      description:
        "The procurement of infrastructure under Public- Private Partnerships (PPPs) can be an effective way to align incentives for cost efficiency over the course of the project. This alignment will be strongest under PPPs that include an extended Operations and Maintenance (O&M) phase and where the revenues of the private sector partner are linked directly to long-term performance.",
      title: "Procurement",
    },
    {
      img: "images/procurement/header_bg_3.png",
      description:
        "Such incentives may not be as strong for infrastructure projects using public procurement. However, in such cases, the evaluation criteria for construction contracts can still be structured to encourage bidders to factor life- cycle costing into the infrastructure design. More detailed guidance on this topic can be found in the Life- Cycle Costing Guidance Note.",
      title: "Procurement",
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [
           
          { path: "/qii2", title: "QII.2 Economic Efficiency" },
          { path: "/procurement", title: "Procurement" },
        ],
      })
    );
  }, []);
  return (
    <div className="procurement">
      <section className="color-light">
        <HeaderCarousal slidesData={slidesData}></HeaderCarousal>
        <div className="container noPTop">
          <div className="link-text">
            <strong>
              Key procurement considerations to maximize economic efficiency
              include:{" "}
            </strong>
          </div>

          <NumSteps num="1">
            <strong>Incentive Structures</strong>
            <br />
            The use of PPPs and Performance-Based Contracts (PBCs) can be used
            to link the operator’s payments to efficient long-term performance.{" "}
            <span style={{ opacity: "0" }}>
              to link the operator’s payments to efficient long-term
            </span>
          </NumSteps>
          <div className="VCard-cnt col3">
            <VCard
              image="images/procurement/Vietnam.png"
              title={
                <p>
                  <strong>Vietnam Ho Chi Minh City PBCs</strong> World Bank
                </p>
              }
              buttonText="Case Study"
              link="https://www.ppiaf.org/documents/5629"
            >
              <p>
                Demonstrates the use of Performance-Based Contracts (PBC) to
                incentivize non-revenue water reduction.
              </p>
            </VCard>

            <VCard
              image="images/procurement/IndiaGanga.png"
              title={
                <p>
                  <strong>India Ganga River Wastewater Program</strong> World
                  Bank
                </p>
              }
              buttonText="Case Study"
              link="/notGiven"
              buttonText2="Case Study Summary"
              link2="/notGiven"
            >
              <p>
                Summarizes a procurement approach for a real-life project where
                annuity payments were linked to long-term O&M performance.
              </p>
            </VCard>

            <VCard
              image="images/procurement/ReferenceGuide.png"
              title={
                <p>
                  <strong>
                    Reference Guide on Output Specifications for Quality
                    Infrastructure
                  </strong>{" "}
                  Global Infrastructure Hub
                </p>
              }
              buttonText="Guidance"
              link="https://www.gihub.org/infrastructure-output-specifications/"
            >
              <p>
                Provides guidance on how quality infrastructure is incorporated
                in output specifications of long-term infrastructure contracts.
              </p>
            </VCard>
          </div>
          <div className="border-dash"></div>
          <NumSteps num="2">
            <strong>Innovative Technologies</strong>
            <br />
            Procurement processes can be structured to incentivize cost-saving
            innovations during both the construction and O&M phases.
            <span style={{ opacity: "0" }}>
              to link the operator’s payments to efficient long-term
            </span>
          </NumSteps>
          <div className="VCard-cnt">
            <VCard
              image="images/procurement/Pre-Fabrication.png"
              title={
                <p>
                  <strong>
                    Pre-Fabrication Technology for Modular Construction
                  </strong>{" "}
                  Global Infrastructure Hub
                </p>
              }
              buttonText="Case Study"
              link="https://www.gihub.org/infrastructure-technology-use-cases/case-studies/pre-fabrication-technology-for-modular-construction/"
            >
              <p>
                Reduces the cost and time taken to construct infrastructure
                projects by using pre-fabricated and modular components of
                railways and road bridges.
              </p>
            </VCard>

            <VCard
              image="images/procurement/Disruptive.png"
              title={
                <p>
                  <strong>Disruptive Technologies in Public Procurement</strong>{" "}
                  World Bank
                </p>
              }
              buttonText="Case Study"
              link="https://documents.worldbank.org/en/publication/documents-reports/documentdetail/522181612428427520/disruptive-technologies-in-public-procurement"
            >
              <p>
                Provides guidance on how to integrate the use of technologies in
                public procurement to enhance value-for-money and reduce total
                cost of ownership.
              </p>
            </VCard>
          </div>
        </div>
      </section>
      <section className="color-dark">
        <div className="container">
          <h2 className="section-title light-font">Resources</h2>
          <div className="page-resource-grid" role="list">
            {resourceArray.map((p, index) => (
              <article
                className="page-resource-card"
                key={index}
                role="listitem"
                style={{ backgroundImage: `url(${p.img})` }}
              >
                <div className="page-resource-link">
                  <div className="page-resource-body">
                    <div className="page-resource-title title-small">
                      <strong>{p.title}</strong>
                    </div>
                    <div className="page-resource-img-cnt">
                      <div className="page-resource-overlay" />
                      <img
                        className="page-resource-img"
                        src={p.img_path}
                        alt={p.title}
                      />
                    </div>
                    <div className="page-resource-data">
                      <div className="page-resource-title title-big">
                        <strong>{p.title}</strong>
                      </div>
                      <div className="page-resource-description">
                        {p.description}
                      </div>
                      <div className="page-resource-btn-cnt">
                        <a
                          className="page-resource-arrow"
                          href={p.path}
                          target="_blank"
                        >
                          <span className="icon-arrow">&#xe900;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
