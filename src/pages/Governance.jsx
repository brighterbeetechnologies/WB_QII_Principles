import React, { useEffect } from "react";
import Header3 from "../components/Header3";
import ListImageText from "../components/ListImageText";
import "./Governance.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";

export default function Governance() {
  const resourceArray = [
    {
      id: 0,
      title:
        "Well Maintained: Economic Benefits from More Reliable and Resilient Infrastructure",
      description:
        "This resource is a foundational guide for policymakers, practitioners, and stakeholders seeking to understand and implement effective infrastructure maintenance as a driver of economic efficiency, resilience, and sustainable development.",
      img_path: "images/governance/resources/01.jpg",
      path: "https://ppp.worldbank.org/public-private-partnership/sites/default/files/2022-03/Final-LOW_WB_G20_Report_v4_1JUN_2021.pdf",
    },
    {
      id: 1,
      title: "PPP Reference Guide",
      description:
        "This document acts as a comprehensive reference on Public-Private Partnership (PPP) structures, legal frameworks, and global case studies, designed to help governments and practitioners make informed decisions about PPPs.",
      img_path: "images/governance/resources/02.jpg",
      path: "https://ppp.worldbank.org/sites/default/files/2024-08/PPP Reference Guide Version 3.pdf",
    },
    {
      id: 2,
      title: "Infrastructure Maintenance in the Pacific",
      description:
        "This report explores the governance challenges of infrastructure maintenance in Pacific Island countries, emphasizing the need for clear institutional roles, accountability, and sustainable funding to break the “build-neglect-rebuild” cycle and ensure long-term service delivery.",
      img_path: "images/governance/resources/03.jpg",
      path: "https://prdrse4all.spc.int/system/files/149856004-infrastructure-maintenance-in-the-pacific-challenging-the-build-neglect-rebuild-paradigm.pdf",
    },
    {
      id: 3,
      title: "Bringing PPPs into the Sunlight Inter-American Development Bank",
      description:
        "This report examines the fiscal, institutional, and governance challenges of Public-Private Partnerships (PPPs), providing practical guidance to improve transparency, manage fiscal risks, and ensure PPPs deliver long-term value for money.",
      img_path: "images/governance/resources/04.jpg",
      path: "https://publications.iadb.org/en/bringing-ppps-sunlight-synergies-now-and-pitfalls-later",
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [
          { path: "/qii2", title: "QII.2 Economic Efficiency" },
          { path: "/governance", title: "Governance" },
        ],
      })
    );
  }, []);
  return (
    <div className="governance">
      <section className="color-light">
        <Header3 img="images/governance/header_bg.jpg" title="Governance">
          <div className="subpagehero">
            <img src="images/UpdatedAssets/Qii2.svg" alt="Qii2 logo" />
            <div className="subpage-description">
              <p className="light-font">
                Good governance doesn’t just support life-cycle costing, it’s
                what makes it possible. Governance frameworks which facilitate
                LCC – inclusive of clear roles, transparent processes, and
                robust standards for procurement through to contract management
                – empower governments to prioritize long-term value, curb waste,
                and deliver infrastructure that lasts.
              </p>
              <p className="bold-text">
                <strong>
                  When it comes to quality infrastructure investment, governance
                  is the foundation that determines whether life-cycle costing
                  is truly embedded in practice, or just an afterthought.
                </strong>
              </p>
            </div>
          </div>
        </Header3>
      </section>
      <section className="color-dark ">
        <div className="container max-1600">
          <p className="list-title">
            To enable life-cycle costing, governance frameworks must evolve in
            several specific ways
          </p>
          <ListImageText
            step="1"
            title={
              <p>
                <strong>Clear Institutional Roles​</strong> <br />
                This means assigning responsibility for LCC at each stage of the
                infrastructure life cycle - from planning and budgeting, to
                procurement, delivery, and long-term maintenance. Capable,
                well-coordinated institutions are essential for aligning
                decisions with long-term value, not just short-term gains.
              </p>
            }
            description={"Netherlands DuboCalc and CO2 Performance Ladder"}
            image="images/governance/list/01.jpg"
            buttonText="Case Study"
            link="https://www.oecd.org/en/publications/life-cycle-costing-in-public-procurement-in-hungary_8d90f627-en.html"
          >
            <p>
              Demonstrates how dedicated governance structures support long-term
              asset oversight through environmental and emissions tools.{" "}
            </p>

            <p className="mTop">
              DuboCalc is a tool applied in work tenders to calculate
              environmental impacts. It outputs a final Environmental Cost
              Indicator (ECI value).
            </p>
            <p className="mTop">
              An important foundation for the calculations is the underlying
              database, the National Environmental Database, which has a
              dedicated governance structure (National Environmental Database
              Foundation - NMD) tasked with maintaining and regularly updating
              the database .
            </p>
            <p className="mTop">
              The CO2 Performance Ladder is a certification system with which a
              tenderer can show the measures taken to limit CO2 emissions both
              within the company and in projects, as well as elsewhere in the
              supply chain. The CO2 Performance Ladder is managed by an
              independent foundation with a defined governance structure for the
              tool’s operation and maintenance.
            </p>
          </ListImageText>
          <div className="border-dash"></div>

          <ListImageText
            step="2"
            title={
              <p>
                <strong>
                  Requirement for LCC at Every Step in Procedures and Standards
                </strong>{" "}
                <br />
                This includes mandating life-cycle cost analysis in project
                appraisal, procurement documents, and contract management.
                Evaluation criteria should move beyond lowest initial cost to
                consider the total cost of ownership and service quality over
                time.
              </p>
            }
            description={"Bangladesh Combined Cycle Power Plant"}
            image="images/governance/list/02.jpg"
            buttonText="Case Study"
            link="pdf/Revised Draft Practice Manual-LCC- with sector specific guidance-15 Oct 2022.docx"
          >
            <p>
              Demonstrates how life-cycle costing was embedded across project
              appraisal, procurement, and contract management.
            </p>
            <ul>
              <li>
                <strong>Project Appraisal</strong>: LCC analysis compared
                technology options, selecting combined-cycle for its lower
                life-cycle costs despite higher initial investment, due to
                superior efficiency and reduced fuel consumption.
              </li>
              <li>
                <strong>Procurement</strong>: Bids required performance
                guarantees (e.g., net heat rate ≤6,700 kJ/kWh, output capacity
                450 MW ±20 MW). Evaluation prioritized lowest life-cycle cost
                (initial price + NPV of fuel savings over 25 years), not lowest
                bid.
              </li>
              <li>
                <strong>Contract Management</strong>: Strict liquidated damages
                enforced accountability ($150,000 per kJ/kWh shortfall, $1M per
                MW deficiency), ensuring long-term performance alignment with
                LCC objectives.
              </li>
            </ul>
            <p className="mTop">
              This approach justified a 17% fuel reduction versus conventional
              plants, demonstrating optimal life-cycle value.
            </p>
          </ListImageText>
          <div className="border-dash"></div>
          <ListImageText
            step="3"
            title={
              <p>
                <strong>
                  Strengthened Transparency and Reporting Mechanisms
                </strong>{" "}
                <br />
                Regular audits, open data on costs and performance, and clear
                reporting lines ensure that infrastructure decisions are
                evidence-based and publicly accountable. This helps prevent the
                “build-neglect-rebuild” cycle and supports better maintenance
                and asset management.
              </p>
            }
            description={"Malawi Infrastructure Data Innovations"}
            image="images/governance/list/03.jpg"
            buttonText="Case Study"
            link="pdf/Infrastructure Data Innovations in Malawi.pdf"
          >
            <p>
              Highlights how digital platforms and inclusive oversight
              mechanisms enhance governance and life-cycle accountability.
            </p>
            <p className="mTop">
              Malawi established the Information Platform for Public
              Infrastructure, an online system for centralized, digital storage
              and publication of infrastructure data by region and sector. The
              platform makes project information readily available to the
              public, government, and civil society.{" "}
            </p>
            <p className="mTop">
              A Multi-Stakeholder Group, with representatives from government,
              private sector, and civil society, oversees data disclosure and
              publicizes findings from regular assurance reports.{" "}
            </p>
            <p className="mTop">
              These mechanisms ensure transparency, evidence-based
              decision-making, and accountability throughout the infrastructure
              life cycle, helping to prevent “build-neglect-rebuild” cycles and
              supporting better maintenance and asset management.
            </p>
          </ListImageText>
          <div className="border-dash"></div>
          <ListImageText
            step="4"
            title={
              <p>
                <strong>Effective Capacity Building</strong>
                <br />
                Staff and stakeholders must be trained to use LCC tools,
                interpret cost and performance data, and apply LCC best
                practices throughout the infrastructure life cycle. Building
                technical skills and institutional knowledge ensures that LCC is
                not just a policy on paper, but a routine part of how
                infrastructure is delivered and maintained.
              </p>
            }
            description={
              "South Korea Public and Private Infrastructure Investment Management Center (PIMAC)"
            }
            image="images/governance/list/04.jpg"
            buttonText="Case Study"
            link="https://ppp.worldbank.org/library/basic-plan-public-private-partnerships-seoul-korea-development-institute-pimac-kr-2011"
          >
            <p>
              Showcases how institutional training strengthens the practical
              application of life-cycle costing.{" "}
            </p>
            <p className="mTop">
              PIMAC, the central PPP appraisal body in South Korea, runs a
              robust training program for both public officials and private
              sector representatives. These programs are structured at two
              levels:
            </p>
            <ul>
              <li>
                Basic training provides foundational knowledge on PPP concepts
                and processes.
              </li>
              <li>
                Advanced training covers in-depth topics such as feasibility
                studies, evaluation, financial modelling, negotiation, and the
                integration of life-cycle costing (LCC) into project selection,
                procurement documentation, and contract management.{" "}
              </li>
            </ul>
            <p className="mTop">
              These trainings ensure that public officials and private sector
              partners are equipped to use LCC tools, interpret cost and
              performance data, and apply LCC best practices throughout the
              infrastructure life cycle.
            </p>
          </ListImageText>
          <div className="border-dash"></div>
          <ListImageText
            step="5"
            title={
              <p>
                <strong>
                  Long-term Performance Rewarded with Incentives in Contracts
                </strong>{" "}
                – By updating regulatory frameworks to allow for innovative
                contracting structures, often involving the private sector in
                addition to sovereign entities (e.g., Performance-Based
                Contracts and Public-Private Partnerships), incentives such as
                user payments to the private party can be utilized to ensure
                service quality and asset condition are well maintained over the
                entire life cycle.
              </p>
            }
            description={"India Tamil Nadu Road Sector Project"}
            image="images/governance/list/05.jpg"
            buttonText="Case Study"
            link="pdf/Presentation on LCC Transport Unit_ver.pdf"
          >
            <p>
              Illustrates how governance reforms can align private incentives
              with life-cycle performance outcomes.
            </p>
            <p className="mTop">
              Performance-Based Contracts were structured to allocate life-cycle
              maintenance risks to contractors, with LCC calculations informing
              contract benchmarks and payment schedules.{" "}
            </p>
            <p className="mTop">
              This governance innovation ensures that contractors are
              accountable for the long-term performance and cost-effectiveness
              of road assets, aligning private incentives with public value.
            </p>
          </ListImageText>
          {/* <p className="last-text">
            By making these targeted changes in institutions, regulations,
            procedures, reporting, standards, and capacity, governance becomes
            the true enabler of life-cycle costing. This is how we ensure
            infrastructure investments deliver sustainable value, reliability,
            and efficiency for generations to come. Let’s build the governance
            systems that make quality infrastructure possible.
          </p> */}
        </div>
      </section>
      <section className="color-light">
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
