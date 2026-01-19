import React, { useEffect } from "react";
import "./CostRecovery.css";
import Header3 from "../components/Header3";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import { setBradcrump } from "../slices/appDataSlice";
import { useDispatch } from "react-redux";
import ResourceLibrary from "./ResourceLibrary";
import { Popover, Tooltip } from "antd";

export default function CostRecovery() {
  const resourceArray = [
    {
      id: 0,
      title:
        "Financing Climate Adaptation and Nature-Based Infrastructure (World Bank)",
      description:
        "Drawing on infrastructure projects from across the globe, this report explores how different financing and cost recovery solutions have successfully mobilized private sector participation and investment to address the growing risks of flooding, droughts, storm surges and heatwaves.",
      img_path: "images/costRecovery/resources/01.png",
      path: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099050725135521570",
    },
    {
      id: 1,
      title:
        "Life-Cycle Cost Analysis for Management of Highway Assets World Bank",
      description:
        "This report contains an inventory of quantitative processes and models for predicting LCC associated with highway assets.",
      img_path: "images/costRecovery/resources/02.png",
      path: "https://ppp.worldbank.org/public-private-partnership/library/life-cycle-cost-analysis-management-highway-assets",
    },
    {
      id: 2,
      title:
        "Harnessing Land Value Capture Municipal Public-Private Partnership Framework Global Platform for Sustainable Cities",
      description:
        "This report introduces concepts of land value capture and describes different instruments for climate-related funding and financing of projects. It provides brief examples of solutions developed in specific energy and agricultural sub-sectors.",
      img_path: "images/costRecovery/resources/03.png",
      path: "https://ppp.worldbank.org/public-private-partnership/sites/default/files/2020-02/World Bank_Municipal PPP_Module 16_Content.pdf",
    },
    {
      id: 3,
      title:
        "Monetization of Carbon Credits Energy and Agriculture Sectors World Bank",
      description:
        "This presentation introduces concepts of the carbon market and describes a few of the key instruments that municipalities can use to capture land value.",
      img_path: "images/costRecovery/resources/04.png",
      path: "https://thedocs.worldbank.org/en/doc/89d9f9d960bb2870ac1592b041232094-0070012024/original/Monetizing-carbon-credits-in-energy-and-agri-sectors-Agritechnica-May-22-2024.pdf",
    },
    {
      id: 4,
      title: "Revenue Levers to Fund Infrastructure Global Infrastructure Hub",
      description:
        "This library of case studies demonstrate the use of innovative revenue, risk management, and financing levers to make projects bankable.",
      img_path: "images/costRecovery/resources/05.png",
      path: "https://www.gihub.org/innovative-funding-and-financing/revenue-levers/",
    },
    {
      id: 4,
      title:
        "Banking on Cities : Investing in Resilient and Low-Carbon Urbanization",
      description:
        "This report provides a stock take of various cost recovery mechanisms for low carbon cities.",
      img_path: "images/newresource/Cost-Recovery.png",
      path: "https://worldbankgroup.sharepoint.com/sites/DNRINT/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDNRINT%2FShared%20Documents%2FP180194%2Db0d1220d%2Df566%2D4788%2D8d06%2Da61f97de6114%2Epdf&parent=%2Fsites%2FDNRINT%2FShared%20Documents",
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [
          { path: "/qii2", title: "QII.2 Economic Efficiency" },
          { path: "/costrecovery", title: "Cost-recovery" },
        ],
      }),
    );
  }, []);
  return (
    <div className="costRecovery">
      <section className="color-light">
        {/* <Header3 img="images/costRecovery/header_bg.png" title="Cost Recovery">
          <p className="light-font">
            Identifying and accounting for all life- cycle costs during the
            project design stage is essential. However, this is only part of the
            process. Equally important is determining the method for{" "}
            <strong>recovering these costs</strong> throughout the
            infrastructure's lifespan.
          </p>
        </Header3> */}
        <Header3
          img="images/costRecovery/header_bg.png"
          title={"Cost Recovery"}
          hideDeskTitle={true}
        >
          <div className="hero-content">
            <div className="header-3-subpages">
              <img
                src="images/UpdatedAssets/Qii2.svg"
                alt="Qii2 logo"
                className="qii-badge"
              />
              <h1 className="header-title desk-title">Cost Recovery</h1>
            </div>
          </div>
          <div className="subpage-description">
            <p className="light-font">
              Identifying and accounting for all life- cycle costs during the
              project design stage is essential. However, this is only part of
              the process. Equally important is determining the method for{" "}
              <strong>recovering these costs</strong> throughout the
              infrastructure's lifespan.{" "}
            </p>
          </div>
        </Header3>
        <div className="container noPTop">
          <div className="link-text">
            <strong>
              Options for recovering the costs of infrastructure depend on the
              type of project and service delivered:{" "}
            </strong>
          </div>

          <NumSteps num="1">
            <strong>User Fees</strong> <br />
            Where infrastructure provides direct and measurable benefits to
            specific users, such as electricity supply, water supply, or public
            transport, it can be possible to recover all or partial costs
            through tariffs and user fees.
          </NumSteps>
          <div className="VCard-cnt col3">
            <VCard
              image="images/costRecovery/Timor-Leste.png"
              title={
                <p>
                  Timor-Leste <br />
                  <strong>Tibar Bay Port PPP</strong>
                  <br /> International Finance Corporation
                </p>
              }
              buttonText="Case Study"
              link="https://documents1.worldbank.org/curated/en/470341542225495367/pdf/132059-BRI-PUBLIC-PPP-Stories-Tibar-Bay-Port.pdf"
            >
              <p>
                Demonstrates the use of a combined user-pays and government-pays
                model for the delivery of a port PPP in Timor-Leste.
              </p>
            </VCard>
            <VCard
              image="images/costRecovery/Maldives.png"
              title={
                <p>
                  Maldives <br />
                  <strong>
                    Facilitating Private Investment in Clean and Affordable
                    Energy
                    <br />
                  </strong>{" "}
                  World Bank
                </p>
              }
              buttonText="Case Study"
              link="https://documents1.worldbank.org/curated/en/942711467994666687/pdf/103935-REVISED-LW61-fin-logo-OKR.pdf"
            >
              <p>
                Describes a program for tariff-based revenues secured through
                long-term power-purchase agreements with utilities supported by
                a World Bank guarantee.
              </p>
            </VCard>
            <VCard
              image="images/costRecovery/TroubledTariffs.png"
              title={
                <p>
                  <strong>
                    Revisiting Water Pricing for Affordable and Sustainable
                    Water Services{" "}
                  </strong>
                  <br />
                  World Bank
                </p>
              }
              buttonText="Report"
              link="https://documents1.worldbank.org/curated/en/568291635871410812/pdf/Troubled-Tariffs-Revisiting-Water-Pricing-for-Affordable-and-Sustainable-Water-Services.pdf"
            >
              <p>
                Synthesizes the literature to articulate a step-by-step process
                for designing effective water tariffs.
              </p>
            </VCard>
          </div>
          <div className="border-dash"></div>
          <NumSteps num="2" className="no-margin">
            <strong>Public Budgets</strong>
            <br />
            To fund the delivery of infrastructure that serves the public at
            large, governments typically rely on revenues generated through
            their tax base. <br />
          </NumSteps>
          <div className="border-dash"></div>
          <NumSteps num="3">
            <strong>Ancillary Revenues</strong>
            <br />
            In some cases, it may be possible to generate supplementary revenue
            streams from infrastructure assets. Examples include commercial
            retail spaces in transit stations, or advertising in public
            facilities. Projects that create climate co-benefits may also be
            able to tap into climate-related funding streams, such as carbon
            markets.
          </NumSteps>
          <div className="VCard-cnt col-2">
            <VCard
              image="images/costRecovery/India.png"
              title={
                <p>
                  India <br />
                  <strong>Hyderabad Metro Rail</strong>
                  <br /> Global Infrastructure Hub
                </p>
              }
              buttonText="Case Study"
              link="https://infrastructuredeliverymodels.gihub.org/case-studies/hyderabad-metro-rail/"
            >
              <p>
                Demonstrates the use of ancillary revenue sources from rentals
                of commercial real estate at the metro station.
              </p>
            </VCard>
            <VCard
              image="images/costRecovery/InnovativeRevenues.png"
              title={
                <p>
                  <strong>
                    Innovative Revenues for Infrastructure Guidelines
                  </strong>{" "}
                  <br />
                  World Bank
                </p>
              }
              buttonText="Guidance"
              link="https://ppp.worldbank.org/public-private-partnership/Innovative_Revenues_Infrastructure/Table_of_Contents"
            >
              <p>
                Provides guidance on analyzing key requirements to implement
                Commercial Value Capture (CVC) for a project or portfolio of
                projects.
              </p>
            </VCard>
          </div>
          <div className="border-dash"></div>
          <NumSteps num="4">
            <strong>Land Value Capture</strong> <br />
            Infrastructure often increases the value of surrounding land and
            properties. Land value capture seeks to monetize these positive
            value adjustments through development contributions or special
            taxes, levies, or betterment charges on beneficiaries within
            designated zones.
          </NumSteps>
          <div className="VCard-cnt col-2">
            <VCard
              image="images/costRecovery/lvc.png"
              title={
                <p>
                  <strong>Investment in Infrastructure </strong>
                  <br />
                  City Resilience Program, Global Facility for Disaster
                  Reduction and Recovery
                </p>
              }
              buttonText="Guidance"
              link="https://www.gfdrr.org/sites/default/files/publication/Land Value Capture.pdf"
            >
              <p>
                Identifies the different types of land value capture mechanisms
                and how they were applied in certain locations.
              </p>
            </VCard>
            <VCard
              image="images/costRecovery/Argentina.png"
              title={
                <p>
                  Argentina <br />
                  <strong>Land Value Capture and Infrastructure </strong>
                  <br />
                  World Bank
                </p>
              }
              buttonText="Case Study"
              link="https://documents1.worldbank.org/curated/en/099325009052225715/pdf/P1773160bfd9f30ed0977607550f60b2651.pdf"
            >
              <p>
                Assesses the potential for land value capture for urban
                infrastructure financing in the Buenos Aires Metropolitan Area.
              </p>
            </VCard>
          </div>
          <p className="cost-recovery-last-para">
            Different projects may involve a mix of these solutions. The
            critical factor is to plan for, and implement, a cost recovery
            strategy that is acceptable to stakeholders. Without a reliable
            source of long-term funding, even the highest quality infrastructure
            projects will fall into neglect due to insufficient resources to
            cover full life-cycle costs, including operations, maintenance,
            upgrades, and renewals.
          </p>
        </div>
      </section>
      <section className="color-dark">
        <div className="container">
          <h2 className="section-title light-font">QII.2 Resources</h2>
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
                        <strong>{p.title}</strong>
                      </div>
                      <Popover
                        content={p.description}
                        title={p.title}
                        trigger="click"
                      >
                        <div className="page-resource-description">
                          Read More...
                        </div>
                      </Popover>
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
      <section className="color-light z-2" id="resourcesSection">
        <ResourceLibrary
          preSelected={[
            {
              show: true,
              category: "QII Principle",
              title: "QII.2 Economic Efficiency",
              id: 1,
            },
          ]}
        ></ResourceLibrary>
      </section>
    </div>
  );
}
