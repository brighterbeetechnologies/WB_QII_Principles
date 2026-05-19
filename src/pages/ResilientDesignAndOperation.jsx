import React, { useEffect } from "react";
import "./ResilientDesignAndOperation.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import Header3 from "../components/Header3";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";
import ResourceLibrary from "./ResourceLibrary";
import { Popover, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import VCardsPagination from "../components/VCardsPagination";
import { useLocation } from "react-router-dom";
import { updateCardClick } from "../utils/cardRanking";

export default function ResilientDesignAndOperation() {
  const location = useLocation();
   const resourceArray = [
    {
      id: 4,
      rId: 226,
      // country: "Global",
      title: "Global: Climate-Resilient Infrastructure Handbook",
      type: "Guidance note",
      // subTitle: "International Institute for Sustainable Development",
      description:
        "The handbook provides tools and knowledge on how to integrate climate resilience throughout the PPP project cycle.",
      img_path: "images/qii2/Climate_Resilient_Infrastructure_Handbook.png",
      path: "https://gca.org/reports/climate-resilient-infrastructure-officer-handbook/",
    },
     {
      id: 4,
      rId: 227,
      // country: "Global",
      title: "Regional: Resilient Solar Panels in Africa",
      type: "Case Study",
      // subTitle: "International Institute for Sustainable Development",
      description:
        "The brief identifies key climate hazards threatening solar PV projects across Africa—including extreme heat, flooding, dust storms, and wildfires. It presents evidence-based adaptation solutions across four categories: site selection, engineering design upgrades, operations and maintenance resilience, and agrivoltaics approaches.",
      img_path: "images/qii2/Resilient-Solar-Panels-in-Africa.png",
      path: "https://gca.org/reports/technical-brief-on-resilient-solar-panels-in-africa/",
    },
     {
      id: 4,
      rId: 228,
      // country: "Global",
      title: "Global: Design Principles for Resilient Low Volume Roads",
      type: "Guidance note",
      // subTitle: "International Institute for Sustainable Development",
      description:
        "The purpose of this guide is to support preliminary conceptual approaches and systematically promote climate resilience into the full lifecycle of low volume roads— from identification and planning through design, construction, maintenance, and eventual asset decommission.",
      img_path: "images/qii2/DesignPrinciplesforResilientLowVolumeRoads.png",
      path: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099532403022610169",
    },
  ];

  const STEP1_PAGE_SIZE = 3;
  const step1Cards = [
    {
      rId: 106,
      image:
        "images/qii4/ResilientDesignAndOperation/Modular Bridges in Madagascar.png",
      title: (
        <p>
          Madagascar
          <br />
          <strong>Modular Bridges</strong>
          <br />
          World Bank
        </p>
      ),
      buttonText: "Case Study",
      link: "https://www.worldbank.org/en/news/press-release/2025/07/10/building-resilient-afe-infrastructure-protecting-access-connectivity-and-communities",
      content: (
        <p>
          This update highlights how climate-resilient design standards and
          rapid-response operational planning (such as pre-positioned modular
          bridges) are being incorporated into Madagascar’s national
          infrastructure projects to proactively prevent isolation, maintain
          connectivity, and protect communities from natural disasters and
          climate shocks.
        </p>
      ),
    },
    {
      rId: 118,
      image:
        "images/qii4/ResilientDesignAndOperation/Building Code Checklist for Structural Resilience.png",
      title: (
        <p>
          Global <br />
          <strong>Building Code Checklist for Structural Resilience</strong>
        </p>
      ),
      buttonText: "Framework",
      link: "https://www.gfdrr.org/en/publication/building-code-checklist-structural-resilience",
      content: (
        <p>
          The Building Code Checklist for Structural Resilience provides
          expert-reviewed tools to evaluate and strengthen building code
          provisions for structural resilience, enabling systematic embedding of
          prevention-oriented standards - such as hazard-resistant design and
          construction - across infrastructure projects and align with global
          best practices for resilient infrastructure planning.
        </p>
      ),
    },
    {
      rId: 117,
      image: "images/qii4/ResilientDesignAndOperation/EU Taxonomy Compass.png",
      title: (
        <p>
          Cross-Regional <br />
          <strong>EU Taxonomy Compass</strong>
        </p>
      ),
      buttonText: "Framework",
      link: "https://ec.europa.eu/sustainable-finance-taxonomy/taxonomy-compass/the-compass",
      content: (
        <p>
          The EU's Taxonomy Regulation establishes six climate and environmental
          objectives in order for an economic activity to qualify as
          environmentally sustainable, and this includes objectives related to
          resilience and adaptation. The EU's Taxonomy Compass helps users
          better understand the EU Taxonomy in a simple and practical manner.
        </p>
      ),
    },
    {
      rId: 116,
      image: "images/qii4/ResilientDesignAndOperation/FAST-Infra Label.png",
      title: (
        <p>
          Global <br />
          <strong>FAST-Infra Label</strong>
        </p>
      ),
      buttonText: "Framework",
      link: "https://cdn.prod.website-files.com/64869a932dab4d8c36a88774/68a44d2347380f7f25d23d24_ST01_V2_05.12.2024.pdf",
      content: (
        <p>
          The FAST-Infra Label Framework ensures uniformity and comparability in
          evaluating sustainability performance of infrastructure across the
          global infrastructure finance market. The label aggregates
          international best practices on sustainable infrastructure financing
          from around the world. The criteria for resilience and adaptation can
          be found in page 46.
        </p>
      ),
    },
    {
      rId: 158,
      image:
        "images/qii4/ResilientDesignAndOperation/A Global Assessment of Building Codes.png",
      title: (
        <p>
          Global <br />
          <strong>
            A Global Assessment of Building Codes: Current Status and Evolving
            Needs to Promote Resilient, Green and Inclusive Buildings
          </strong>
          <br />
          World Bank; GFDRR; Inter-American Development Bank
        </p>
      ),
      buttonText: "Report",
      link: "https://openknowledge.worldbank.org/entities/publication/6f69f235-edf6-40b9-9a4b-5efad46630aa",
      content: (
        <p>
          This resource provides an in-depth evaluation of current building code
          standards and compliance mechanisms worldwide, highlighting how
          modern, climate-informed codes applied at scale can serve as a
          foundational prevention strategy for resilient, safe, and inclusive
          infrastructure development in the face of evolving hazards.
        </p>
      ),
    },
    {
      rId: 145,
      image:
        "images/qii4/ResilientDesignAndOperation/Building regulations in Sub-Saharan Africa A status review of the building regulatory environment.png",
      title: (
        <p>
          Cross-Regional <br />
          <strong>
            Building regulations in Sub-Saharan Africa: A status review of the
            building regulatory environment
          </strong>
          <br />
          GFDRR
        </p>
      ),
      buttonText: "Report",
      link: "https://www.preventionweb.net/publication/building-regulations-sub-saharan-africa-status-review-building-regulatory-environment",
      content: (
        <p>
          This status review examines building regulations across Sub-Saharan
          Africa, offering insights into current standards, enforcement, and
          gaps, and underscores how strengthening regulatory frameworks and
          implementing resilient design codes at the outset of infrastructure
          projects can proactively enhance prevention and structural safety
          region-wide.
        </p>
      ),
    },
    {
      rId: 146,
      image:
        "images/qii4/ResilientDesignAndOperation/Stronger Building Codes for a Safer, More Resilient Future.png",
      title: (
        <p>
          Global <br />
          <strong>
            Stronger Building Codes for a Safer, More Resilient Future
          </strong>
          <br />
          World Bank
        </p>
      ),
      buttonText: "Report",
      link: "https://www.worldbank.org/en/topic/disasterriskmanagement/publication/stronger-building-codes-for-a-safer-more-resilient-future",
      content: (
        <p>
          This study reviews building codes across 22 countries, illustrating
          how updated, hazard- and climate-responsive codes supported by strong
          compliance mechanisms can proactively prevent disaster risks,
          strengthen structural safety, serving as a key preventive solution for
          resilient infrastructure development.
        </p>
      ),
    },
    {
      rId: 126,
      image:
        "images/qii4/ResilientDesignAndOperation/Building Regulatory Capacity Assessment.png",
      title: (
        <p>
          Global <br />
          <strong>Building Regulatory Capacity Assessment</strong>
          <br />
          GFDRR
        </p>
      ),
      buttonText: "Guidance note",
      link: "https://www.gfdrr.org/en/publication/building-regulatory-capacity-assessment-brca-20-methodology",
      content: (
        <p>
          The Building Regulatory Capacity Assessment (BRCA) 2.0 offers a robust
          methodology and practical tools for evaluating and strengthening a
          country’s or city’s building and land use regulatory systems, enabling
          prevention-focused reforms that embed resilience standards into
          infrastructure planning, policy, and enforcement from the outset.
        </p>
      ),
    },
  ];

  const step2Cards = [
    {
      rId: 105,
      image:
        "images/qii4/ResilientDesignAndOperation/IADBAI and deep learning for identifying pavement failures.png",
      title: (
        <p>
          Cross-Regional <br />
          <strong>
            AI and Deep Learning for Identifying Pavement Failures
          </strong>
          <br />
          Inter-American Development Bank
        </p>
      ),
      buttonText: "Case Study",
      link: "https://infratech.gihub.org/infratech-case-studies/ai-and-deep-learning-for-identifying-pavement-failures-in-latin-american-and-the-caribbean",
      content: (
        <p>
          An innovative tool that improves paved road network planning and
          reduces maintenance costs for government agencies, replacing a costly
          and lengthy manual process; AI application, digitalization, and
          simplification of road assessment process.
        </p>
      ),
    },
    {
      rId: 97,
      image:
        "images/qii4/ResilientDesignAndOperation/Catalogue-of-Nature-Based-Solutions-for-Urban-Resilience.jpg",
      title: (
        <p>
          Global <br />
          <strong>
            Catalogue of Nature-Based Solutions for Urban Resilience
          </strong>
          <br />
          World Bank
        </p>
      ),
      buttonText: "Report",
      link: "https://openknowledge.worldbank.org/entities/publication/c33e226c-2fbb-5e11-8c21-7b711ecbc725",
      content: (
        <p>
          The catalogue of Nature-based solutions for urban resilience has been
          developed as a guidance document to support the growing demand for NBS
          by enabling an initial identification of potential investments in
          nature-based solutions.
        </p>
      ),
    },
    {
      rId: 159,
      image:
        "images/qii4/ResilientDesignAndOperation/IFC Catalogue of Nature Based Solutions for Infrastructure Projects.jpg",
      title: (
        <p>
          Global <br />
          <strong>
            Catalogue of Nature-Based Solutions for Infrastructure Projects
          </strong>
          <br />
          IFC
        </p>
      ),
      buttonText: "Report",
      link: "https://www.ifc.org/content/dam/ifc/doc/2023/catalogue-of-nature-based-solutions-for-infrastructure-projects.pdf",
      content: (
        <p>
          This catalogue provides examples of nature-based solutions that
          private infrastructure companies can integrate into their core
          business operations and articulates the business case for doing so.
          The intent of the catalogue is to raise the awareness of the business
          benefits of nature-based solutions and start the conversation with
          infrastructure companies to identify opportunities and possible
          projects.
        </p>
      ),
    },
    {
      rId: 142,
      image:
        "images/qii4/ResilientDesignAndOperation/Digital-Security-and-Resilience-in-Critical-Infrastructure-and-Essential-Services.jpg",
      title: (
        <p>
          Global <br />
          <strong>
            Digital Security and Resilience in Critical Infrastructure and
            Essential Services
          </strong>
          <br />
          Organisation for Economic Co-operation and Development​
        </p>
      ),
      buttonText: "Report",
      link: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2019/04/digital-security-and-resilience-in-critical-infrastructure-and-essential-services_5593c149/a7097901-en.pdf",
      content: (
        <p>
          This OECD resource serves as a digital toolkit for infrastructure
          operators and policy makers, delivering practical frameworks and
          protocols to strengthen digital security, enable continuous
          monitoring, boost adaptive operational resilience, and coordinate
          rapid response across critical infrastructure and essential services.
        </p>
      ),
    },
    {
      rId: 144,
      image:
        "images/qii4/ResilientDesignAndOperation/Digital-Public-Infrastructure-for-Digital-Governments.jpg",
      title: (
        <p>
          Global <br />
          <strong>Digital Public Infrastructure for Digital Governments</strong>
          <br />
          Organisation for Economic Co-operation and Development​
        </p>
      ),
      buttonText: "Report",
      link: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/12/digital-public-infrastructure-for-digital-governments_11fe17d9/ff525dc8-en.pdf",
      content: (
        <p>
          This OECD paper is a digital public infrastructure toolkit, providing
          frameworks and best practices for governments to develop and manage
          secure, interoperable digital systems that enhance operational
          resilience, enable inclusive service delivery, and support real-time
          adaptation and continuity across public infrastructure.
        </p>
      ),
    },
  ];

  const step3Cards = [
    {
      rId: 139,
      image:
        "images/qii4/ResilientDesignAndOperation/Resilience-in-Infrastructure-Prioritization-Japan-Road-Transport-Sector.jpg",
      title: (
        <p>
          Japan <br />
          <strong>
            Resilience in Infrastructure Prioritization: Japan’s Road Transport
            Sector
          </strong>
          <br />
          World Bank
        </p>
      ),
      buttonText: "Report",
      link: "https://ppp.worldbank.org/sites/default/files/2022-04/IPFResiliencedrmhubtokyo.pdf",
      content: (
        <p>
          This report presents operational methods and quantitative indicators
          (such as accumulated loss of functionality, redundancy metrics, and
          recovery time) to support infrastructure decision-makers in designing
          and prioritizing projects with built-in responsiveness. By measuring
          alternate routes, emergency access, and time-bound functional
          recovery, it ensures infrastructure systems are equipped to rapidly
          restore connectivity and essential services after disruptions and
          disasters, aligning design and investment with real-world performance
          targets.
        </p>
      ),
    },
    {
      rId: 140,
      image: "images/qii4/ResilientDesignAndOperation/Building-Back-Better.jpg",
      title: (
        <p>
          Global <br />
          <strong>Building Back Better</strong>
          <br />
          GFDRR
        </p>
      ),
      buttonText: "Report",
      link: "https://www.gfdrr.org/en/publication/building-back-better",
      content: (
        <p>
          The Resilient Recovery section (page 18) of the report highlights how
          resilience strategies, particularly redundancy (like alternate routes,
          backup capacity, distributed assets) and Functional Recovery (setting
          time-bound targets for restoration of vital services), are now central
          to post-disaster infrastructure planning. These approaches align
          design, operations, and budgets to maintain or rapidly restore service
          continuity, prevent cascading failures, and enable effective,
          efficient disaster response. Together, they ensure infrastructure
          systems are both responsive and robust when disruptions strike,
          guiding practitioners to prioritize investments that maximize
          resilience throughout the asset lifecycle.
        </p>
      ),
    },
    {
      rId: 141,
      image:
        "images/qii4/ResilientDesignAndOperation/Functional-Recovery-of-Lifeline-Infrastructure-System-Services.jpg",
      title: (
        <p>
          Global <br />
          <strong>
            Functional Recovery of Lifeline Infrastructure System Services
          </strong>
          <br />
          National Institute of Standards and Technology
        </p>
      ),
      buttonText: "Report",
      link: "https://www.nist.gov/publications/functional-recovery-lifeline-infrastructure-system-services",
      content: (
        <p>
          This NIST publication provides authoritative guidance on setting and
          implementing functional recovery targets for critical infrastructure
          systems, detailing engineering, operational, and policy strategies to
          ensure post-disaster service restoration within defined timeframes.
          Section 4 specifically outlines performance objectives and approaches
          for achieving rapid, reliable functional recovery, supporting
          practitioners to align design, operations, and investment priorities
          with resilience goals for lifeline infrastructure.
        </p>
      ),
    },
    {
      rId: 135,
      image:
        "images/qii4/ResilientDesignAndOperation/OECD Infrastructure Toolkit Strengthening Critical Infrastructure Resilience.png",
      title: (
        <p>
          Global <br />
          <strong>
            Infrastructure Toolkit: Strengthening Critical Infrastructure
            Resilience
          </strong>
          <br />
          Organisation for Economic Co-operation and Development
        </p>
      ),
      buttonText: "Data",
      link: "https://infrastructure-toolkit.oecd.org/governance/strengthen-critical-infrastructure-resilience/",
      content: (
        <p>
          This online toolkit frames resilience with an “all-hazards
          system-based approach,” aimed at maintaining service continuity
          despite diverse threats. It underscores strategies for systemic
          rebound and includes practical case studies.
        </p>
      ),
    },
    {
      rId: 143,
      image:
        "images/qii4/ResilientDesignAndOperation/Building Resilience New Strategies for Strengthening Infrastructure Resilience and Maintenance.jpg",
      title: (
        <p>
          Global <br />
          <strong>
            Building Resilience: New Strategies for Strengthening Infrastructure
            Resilience and Maintenance
          </strong>
          <br />
          Organisation for Economic Co-operation and Development
        </p>
      ),
      buttonText: "Report",
      link: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2021/11/building-resilience_6b655137/354aa2aa-en.pdf",
      content: (
        <p>
          This paper emphasizes designing infrastructure investments to not just
          address immediate needs but also ensure long-term functioning across
          an asset’s lifecycle. It approached infrastructure planning from a
          functional recovery perspective and provides a strategic framework for
          optimizing both existing and new infrastructure against future shocks.
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
          { path: "/qii4", title: "QII.4 Resilience" },
          {
            path: "/Resilient-design&operation",
            title: "Resilient Design and Operation​",
          },
        ],
      }),
    );
  }, []);
  return (
    <div className="ResilientDesignAndOperation">
      <section className="color-light">
        <Header3
          id="qii4-RDO-section1"
          img="images/qii4/resilient_design_and_ops.png"
          title={"Resilient Design and Operations"}
          hideDeskTitle={true}
        >
          <div className="hero-content">
            <div className="header-3-subpages">
              <img
                src="images/UpdatedAssets/Qii4.svg"
                alt="Qii4 logo"
                className="qii-badge"
              />
              <h1 className="header-title desk-title">
                Resilient Design and Operations
              </h1>
            </div>
          </div>
          <div className="subpage-description">
            <p className="light-font">
              A resilient approach to infrastructure requires more than durable
              construction that withstands shocks; it involves a sequence of
              actions throughout design and operations that addresses not just
              the asset itself but also the system in which the asset exists.{" "}
              <br />
              <br />
              Applying recognized resilience standards, building adaptive
              operational processes, and integrating innovative digital
              technologies and nature-based solutions – to address both natural
              and man-made shocks (such as cyber-security threats) –
              collectively enable projects to withstand and adapt to evolving
              risks over their lifetime.
            </p>
          </div>
        </Header3>
        <div className="container internal-pages-container">
          <p className="link-text" id="qii4-RDO-section2">
            The incorporation of resilience into the design of infrastructure
            assets and their operational processes can be broken down into three
            key categories of action: <strong>prevention</strong>, which aims to
            minimize damage and disruption through measures incorporated at the
            outset of infrastructure development; <strong>adaptation</strong>,
            which ensures continued performance under evolving conditions and
            threats; and <strong>responsiveness</strong>, which requires agile,
            flexible systems capable of real-time operational adjustments in the
            face of disaster.
          </p>
          <div className="border-dash"></div>
          <NumSteps num="1" id="qii4-RDO-section3">
            <strong>
              Prevention -
              <br className="mobile-break" /> Applying Resilience Standards to
              Planning and Design
            </strong>{" "}
            <br />
            Integrating design standards and climate considerations from the
            outset ensures that infrastructure design directly addresses
            foreseeable hazards. This proactive approach – especially when
            standards are applied system-wide (i.e. at a national, sector, or
            program level and not just project-by-project) – enables the
            scalable implementation of resilience interventions, including asset
            integrity and service continuity, in alignment with national
            resilience objectives.
          </NumSteps>
          <VCardsPagination cardsData={step1Cards} id="qii4-RDO-section4" />

          <div className="border-dash"></div>
          <NumSteps num="2" id="qii4-RDO-section5">
            <strong>
              Adaptation –
              <br className="mobile-break" /> Integrating Nature-based Solutions
              and Digital Technology into Design and Operations
            </strong>{" "}
            <br />
            Embedding technology, routine monitoring, maintenance protocols, and
            contingency planning within operations underpins reliable
            performance. These practices enable rapid restoration after natural
            and man-made shocks and sustain service levels under evolving
            environmental and operational pressures.
          </NumSteps>
          <br />
          <br />
          {/* <h4 className="sub-section-title">
            Nature-based Solutions for Resilience
          </h4> */}
          <p className="link-text" id="qii4-RDO-section5">
            More specifically, both nature-based solutions and advanced digital
            technologies are two effective mechanisms by which to enhance
            systemic resilience, system flexibility, and cost-effectiveness in
            both design and operations of infrastructure assets and systems.
            Moreover, these mechanisms deliver environmental, social, and
            economic co-benefits throughout the infrastructure lifespan.
          </p>
          <VCardsPagination cardsData={step2Cards} id="qii4-RDO-section6" />

          <p className="qii4-note mTop" id="qii4-RDO-section7">
            *For more on digital resilience, visit our{" "}
            <Link to="/Managing-cyber-security-risks" className="cyber-link">
              cybersecurity
            </Link>{" "}
            sub-page.
          </p>
          <div className="border-dash"></div>
          <NumSteps num="3" id="qii4-RDO-section8">
            <strong>
              Responsiveness – <br className="mobile-break" />
              Ensuring Post-event Performance of Infrastructure Assets and
              Systems
            </strong>{" "}
            <br />
            Infrastructure practitioners and planners are increasingly
            recognizing the importance of integrating key resilience strategies
            such as <strong>redundancy</strong>, which involves alternate
            routes, backup capacity, and distributed assets to maintain service
            continuity and prevent cascading failures, as well as{" "}
            <strong>Functional Recovery</strong>, which sets time-bound targets
            for restoring essential services. Taken together, these approaches
            ensure that design, operations, and budgets are aligned to
            effectively and efficiently respond when disruptions and disasters
            strike.
          </NumSteps>
          <VCardsPagination cardsData={step3Cards} id="qii4-RDO-section9" />
        </div>
      </section>
      <section className="color-dark" id="qii4-RDO-section10">
        <div className="container internal-pages-container">
          <h2 className="section-title light-font">
            Further Reading On Resilient Design and Operation
          </h2>
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
                      <p className="page-resource-type">{p.type}</p>
                      {/* {p.country && (
                              <>
                                <span>{p.country}</span> <br />
                              </>
                            )} */}
                      {/* <strong>{p.title}</strong> */}
                      <br />
                      {p.title}
                      {/* {p.org && (
                              <>
                                <br />
                                <span>{p.org}</span>
                              </>
                            )} */}
                      {/* {p.subTitle && (
                              <>
                                <br />
                                <span>{p.subTitle}</span>
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
                        <p className="page-resource-type">{p.type}</p>
                        {/* {p.country && (
                                <>
                                  <span>{p.country}</span> <br />
                                </>
                              )} */}
                        {/* <strong>{p.title}</strong> */}
                        <br />
                        {p.title}
                        {/* {p.org && (
                                <>
                                  <br />
                                  <span>{p.org}</span>
                                </>
                              )} */}
                        {/* {p.subTitle && (
                                <>
                                  <br />
                                  <span>{p.subTitle}</span>
                                </>
                              )} */}
                      </div>
                      {/* <div className="page-resource-description">
                              {p.description}
                            </div> */}
                      {/* <Popover
                              content={p.description}
                              // title={p.title}
                              trigger="click"
                            >
                              <div className="page-resource-description">
                                Read More...
                              </div>
                            </Popover> */}
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
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="color-dark z-2" id="resourcesSection">
        <ResourceLibrary
          preSelected={[
            {
              show: true,
              category: "QII Principle",
              title: "QII.4 Resilience",
              id: 3,
            },
          ]}
        ></ResourceLibrary>
      </section> */}
    </div>
  );
}
