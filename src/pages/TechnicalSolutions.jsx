import React, { useEffect } from "react";
import "./TechnicalSolutions.css";
import Header3 from "../components/Header3";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";
import ResourceLibrary from "./ResourceLibrary";
import { Popover, Tooltip } from "antd";
export default function TechnicalSolutions() {
  const resourceArray = [
    {
      id: 0,
      title: "InfraTech Portal Asian Infrastructure Investment Bank",
      description:
        "This portal was developed by the AIIB to disseminate free information on InfraTech and facilitate interaction among the InfraTech community.",
      img_path: "images/technicalSolutions/resources/InfratechPortal.png",
      path: "https://www.infratechportal.org/LandingPage",
    },
    {
      id: 1,
      title: "InfraTech Policy Toolkit World Bank",
      description:
        "This toolkit outlines key priority areas for policymaking and tools for policymakers wishing to integrate InfraTech across the infrastructure life cycle.",
      img_path:
        "images/technicalSolutions/resources/InfraTechPolicyToolkit.png",
      path: "https://cdn.gihub.org/umbraco/media/3061/world-bank-group-s-reference-note-on-infratech-toolkit.pdf",
    },
    {
      id: 2,
      title:
        "Nature-Based Solutions for Infrastructure Projects International Finance Corporation",
      description:
        "This catalogue provides examples of nature-based solutions that private infrastructure companies can integrate into their core business operations and articulates the business case for doing so.",
      img_path: "images/technicalSolutions/resources/CatalogueofNature.png",
      path: "https://www.ifc.org/content/dam/ifc/doc/2023/catalogue-of-nature-based-solutions-for-infrastructure-projects.pdf",
    },
    {
      id: 3,
      title:
        "Global BIM Network UK Foreign, Commonwealth and Development Office",
      description:
        "This platform connects international public sector representatives and multi-lateral organizations with the aim of advancing the digitalization of the global built environment and sharing the resulting benefits.",
      img_path: "images/technicalSolutions/resources/GlobalBIMetwork.png",
      path: "https://globalbim.org/about-us/",
    },
    {
      id: 4,
      title: "IEA Technology Roadmaps International Energy Agency",
      description:
        "This publication offers a series of roadmaps for some of the most important energy technologies, and provide analytical footing that enables policy makers and industry to develop and adopt specific technologies.",
      img_path: "images/technicalSolutions/resources/IEATechnology.png",
      path: "https://www.oecd.org/en/publications/iea-technology-roadmaps_22182837.html",
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [
          { path: "/qii2", title: "QII.2 Economic Efficiency" },
          { path: "/technicalsolutions", title: "Technical Solutions" },
        ],
      }),
    );
  }, []);
  return (
    <div className="technicalSolutions">
      <section className="color-light">
        {/* <Header3
          img="images/technicalSolutions/header_bg.jpg"
          title="Technical Solutions"
        >
          <p className="light-font">
            The <strong>technical solutions</strong> selected for an
            infrastructure project play a decisive role in determining its
            life-cycle cost. Adopting innovative infrastructure technologies can
            not only improve the quality and resilience of a project but also
            significantly enhance its economic efficiency.{" "}
          </p>
        </Header3> */}
        <Header3
          img="images/technicalSolutions/header_bg.jpg"
          title={"Technical Solutions"}
          hideDeskTitle={true}
        >
          <div className="hero-content">
            <div className="header-3-subpages">
              <img
                src="images/UpdatedAssets/Qii2.svg"
                alt="Qii2 logo"
                className="qii-badge"
              />
              <h1 className="header-title desk-title">Technical Solutions</h1>
            </div>
          </div>
          <div className="subpage-description">
            <p className="light-font">
              The <strong>technical solutions</strong> selected for an
              infrastructure project play a decisive role in determining its
              life-cycle cost. Adopting innovative infrastructure technologies
              can not only improve the quality and resilience of a project but
              also significantly enhance its economic efficiency.{" "}
            </p>
          </div>
        </Header3>
        <div className="container noPTop">
          <div className="link-text">
            <p>
              Infrastructure technologies include a broad range of new or
              innovative materials, machines, or digital technology solutions
              which can be applied during the design, construction, and
              Operations and Maintenance (O&M) phases to improve life cycle
              costs.
            </p>
            <p className="mTop">
              For example, some studies estimate that{" "}
              <a
                href="https://publications.iadb.org/en/increasing-efficiency-public-infrastructure-delivery-evidence-based-potential-efficiency-gains"
                target="_blank"
                className="link2"
              >
                around 22% of the total investment in infrastructure could be
                saved
              </a>{" "}
              by minimizing cost overruns from infrastructure. Also, new
              analytical capabilities applied across a portfolio of assets could{" "}
              <a
                href="https://openknowledge.worldbank.org/bitstream/handle/10986/34320/Infratech-Value-Drivers.pdf?sequence=1&isAllowed=y"
                target="_blank"
                className="link2"
              >
                deliver 10–20% in savings on capital expenditure
              </a>
              .{" "}
            </p>
            <p className="mTop2">
              <strong>Some examples of common uses include:</strong>
            </p>
          </div>
          <NumSteps num="1">
            <strong>Reducing Construction Costs</strong>
            <br /> <br className="mobile-break" />
            Using innovative materials, modern construction methods, and green
            alternatives to conventional ‘gray’ infrastructure, such as
            nature-based solutions, can significantly lower upfront construction
            costs. These approaches often reduce the need for expensive raw
            materials, minimize installation expenses, and accelerate
            construction timelines.{" "}
          </NumSteps>
          <div className="VCard-cnt col-2">
            <VCard
              image="images/technicalSolutions/SolomonIslands.png"
              title={
                <p>
                  Solomon Islands <br /> 
                  <strong>
                    Climate-Resilient Solution for Small Bridges in the Pacific
                  </strong>{" "}
                  <br />
                  World Bank
                </p>
              }
              buttonText="Case Study"
              link="https://blogs.worldbank.org/en/ppps/modular-bridges-climate-resilient-solution-small-bridges-pacific"
            >
              <p>
                Illustrates how modular bridge systems significantly shortened
                design and construction timelines during the replacement of a
                deteriorating bridge in the Solomon Islands. Faster construction
                reduced the duration of road closures, lowered safety risks for
                workers, and minimized disturbances to local communities and the
                surrounding environment.
              </p>
            </VCard>

            <VCard
              image="images/technicalSolutions/SouthAfrica.png"
              title={
                <p>
                  South Africa <br />
                  <strong>
                    Nature-based Infrastructure to Enhance Water Security
                  </strong>{" "}
                  <br />
                  The Nature Conservancy
                </p>
              }
              buttonText="Case Study"
              link="https://www.nature.org/content/dam/tnc/nature/en/documents/GCTWF-Business-Case-April-2019.pdf"
            >
              <p>
                Demonstrates how nature-based solutions, through ecological
                restoration in the watershed, can strengthen water security for
                domestic and commercial water users of the Western Cape Water
                Supply System (WCWSS).
              </p>
            </VCard>
          </div>
          <p className="v-small-text">
            Global Infrastructure Hub (2023). InfraTech.{" "}
            <a
              href="https://infratech.gihub.org/#improving-efficiency"
              target="_blank"
              className="link2"
            >
              https://infratech.gihub.org/#improving-efficiency
            </a>
            .
          </p>

          <div className="border-dash"></div>

          <NumSteps num="2">
            <strong>Reducing Operational Costs</strong>
            <br /> <br className="mobile-break" />
            Real-time reporting, data analytics, and visualization tools can
            transform large volumes of sensor and monitoring data into
            actionable intelligence. This enables operators to optimize resource
            consumption and make more informed, data-driven O&M decisions,
            ultimately lowering routine operational expenses.
          </NumSteps>
          <div className="VCard-cnt col-2">
            <VCard
              image="images/technicalSolutions/Peru.png"
              title={
                <p>
                  Peru <br />
                  <strong>
                    Technologies to Increase Observability and Controllability
                    in Real-Time System Operations
                  </strong>{" "}
                  <br />
                  World Bank
                </p>
              }
              buttonText="Case Study"
              link="https://documents1.worldbank.org/curated/en/099032924175510017/pdf/P1760001ef88ab00a18d18167fe0293af27.pdf"
            >
              <p>
                Examines the experience of the Peruvian power operator, COES, in
                deploying digital tools to optimize real-time system operations.
                A life-cycle cost analysis justified investing over $100,000 in
                an Online Security Assessment Tool by demonstrating its ability
                to reduce reliance on thermal generation, defer major
                transmission infrastructure investments, and prevent costly
                outages.
              </p>
            </VCard>

            <VCard
              image="images/technicalSolutions/Vietnam.png"
              title={
                <p>
                  Vietnam <br />
                  <strong>
                    National Power Transmission Corporation’s Digitalization
                    Journey
                  </strong>{" "}
                  <br />
                  World Bank
                </p>
              }
              buttonText="Case Study"
              link="https://openknowledge.worldbank.org/entities/publication/bbfb9200-de1a-489e-a360-fac68c72d81f"
            >
              <p>
                Highlights how the Vietnam National Power Transmission
                Corporation (EVN NPT) applied artificial intelligence (AI) to
                improve the operations and maintenance of electricity
                transmission infrastructure. Life-cycle cost modelling showed
                that, despite higher upfront costs, these technologies would
                result in a lower total cost of ownership over the assets’
                lifespan.
              </p>
            </VCard>
          </div>

          <div className="border-dash"></div>

          <NumSteps num="3">
            <strong>Increasing the Life of Assets </strong>
            <br /> <br className="mobile-break" />
            Predictive maintenance technologies, smart monitoring systems, and
            automated inspection tools can help identify wear and degradation
            before they lead to failure. By enabling targeted interventions and
            timely repairs, these technologies reduce unplanned downtime, extend
            asset life, and minimize the frequency and cost of major
            rehabilitations over the asset’s life cycle.
          </NumSteps>
          <div className="VCard-cnt col-2">
            <VCard
              image="images/technicalSolutions/AIanddeep.png"
              title={
                <p>
                  <strong>
                    AI and Deep Learning for Identifying Pavement Failures
                  </strong>{" "}
                  <br />
                  Global Infrastructure Hub
                </p>
              }
              buttonText="Case Study"
              link="https://infratech.gihub.org/infratech-case-studies/ai-and-deep-learning-for-identifying-pavement-failures-in-latin-american-and-the-caribbean/"
            >
              <p>
                Describes how AI technologies were used to improve road network
                assessment and planning, reducing critical road failures and
                reducing maintenance costs for government agencies by replacing
                costly and time-consuming manual processes.
              </p>
            </VCard>

            <VCard
              image="images/technicalSolutions/SensorsAndMachine.png"
              title={
                <p>
                  <strong>
                    Sensors and Machine Learning for Predictive Maintenance
                  </strong>{" "}
                  <br />
                  Global Infrastructure Hub
                </p>
              }
              buttonText="Case Study"
              link="https://www.gihub.org/infrastructure-technology-use-cases/case-studies/sensors-and-machine-learning-for-predictive-maintenance/"
            >
              <p>
                Describes sensors and software solutions that build models to
                provide early warnings of potential failures in physical and
                mechanical assets, such as pipes, pumps, and motors. These tools
                help prevent costly rehabilitation and replacement by keeping
                assets operating in optimal condition.
              </p>
            </VCard>
          </div>
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
