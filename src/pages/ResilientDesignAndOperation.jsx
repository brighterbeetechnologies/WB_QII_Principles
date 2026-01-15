import React, { useEffect } from "react";
import "./ResilientDesignAndOperation.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import Header3 from "../components/Header3";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";

export default function ResilientDesignAndOperation() {
  const slidesData = [
    {
      img: "images/qii4/ResilientDesignAndOperation/header_bg_1.png",
      description:
        "The procurement process sets the foundation for the economic efficiency of an infrastructure project. Procurement processes that create incentives to minimize life cycle costs can lead to better value for money and reduce long-term expenses. Conversely, weak procurement practices, such as focusing solely on initial purchase price, can result in higher operational and maintenance costs over the asset's lifespan.",
      title: "Resilient Design and Operations",
    },
    {
      img: "images/qii4/ResilientDesignAndOperation/header_bg_2.png",
      description:
        "The procurement of infrastructure under Public-Private Partnerships (PPPs) can be an effective way to align incentives for cost efficiency over the course of the project. This alignment will be strongest under PPPs that include an extended Operations and Maintenance (O&M) phase and where the revenues of the private sector partner are linked directly to long-term performance.",
      title: "Resilient Design and Operations",
    },
    {
      img: "images/qii4/ResilientDesignAndOperation/header_bg_3.png",
      description:
        "A resilient approach to infrastructure requires more than durable construction that withstands shocks; it involves a sequence of actions throughout design and operations that addresses not just the asset itself but also the system in which the asset exists. Applying recognized resilience standards, building adaptive operational processes, and integrating innovative digital technologies and nature-based solutions – to address both natural and man-made shocks (such as cyber-security threats) – collectively enable projects to withstand and adapt to evolving risks over their lifetime.",
      title: "Resilient Design and Operations",
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [
           
          { path: "/qii4", title: "QII.4 Resilience" },
          {
            path: "/Resilient-design&operation",
            title: "Resilient Design and Operations",
          },
        ],
      })
    );
  }, []);
  return (
    <div className="ResilientDesignAndOperation">
      <section className="color-light">
        <Header3
          img="images/qii4/resilient_design_and_ops.png"
          title="Resilient Design and Operations"
        >
          <p className="light-font">
            A resilient approach to infrastructure requires more than durable
            construction that withstands shocks; it involves a sequence of
            actions throughout design and operations that addresses not just the
            asset itself but also the system in which the asset exists. <br />
            <br />
            Applying recognized resilience standards, building adaptive
            operational processes, and integrating innovative digital
            technologies and nature-based solutions – to address both natural
            and man-made shocks (such as cyber-security threats) – collectively
            enable projects to withstand and adapt to evolving risks over their
            lifetime.
          </p>
        </Header3>
        {/* <HeaderCarousal slidesData={slidesData}></HeaderCarousal> */}

        <div className="container noPTop">
          <p className="list-title">
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
          <NumSteps num="1">
            <strong>
              Prevention - Applying Resilience Standards to Planning and Design:
            </strong>{" "}
            Integrating design standards and climate considerations from the
            outset ensures that infrastructure design directly addresses
            foreseeable hazards. This proactive approach – especially when
            standards are applied system-wide (i.e. at a national, sector, or
            program level and not just project-by-project) – enables the
            scalable implementation of resilience interventions, including asset
            integrity and service continuity, in alignment with national
            resilience objectives.
          </NumSteps>
          <p className="num1-para">
            *Much of the current work on resilience standards is still nascent,
            especially as it pertains to infrastructure, and tends to address
            sustainability in a broader sense, often encompassing themes such as
            climate change and biodiversity, but also transparency and human
            rights, etc. Additionally, the prevailing guidance has been heavily
            influenced by financial markets and the Disaster Risk Management
            field. Since efforts are relatively nascent globally, users may need
            to reference best practice examples from more developed contexts and
            field of practice, and these are outlined below.
          </p>
          <div className="VCard-cnt col3">
            <VCard
              image="images/qii4/ResilientDesignAndOperation/Building Code Checklist for Structural Resilience.png"
              title={
                <p>
                  <strong>
                    Building Code Checklist for Structural Resilience
                  </strong>
                </p>
              }
              buttonText="Guidance"
              link="https://www.gfdrr.org/en/publication/building-code-checklist-structural-resilience"
            >
              <p>
                The Building Code Checklist for Structural Resilience provides
                expert-reviewed tools to evaluate and strengthen building code
                provisions for structural resilience, enabling systematic
                embedding of prevention-oriented standards - such as
                hazard-resistant design and construction - across infrastructure
                projects and align with global best practices for resilient
                infrastructure planning.
              </p>
            </VCard>

            <VCard
              image="images/qii4/ResilientDesignAndOperation/EU Taxonomy Compass.png"
              title={
                <p>
                  <strong>EU Taxonomy Compass</strong>
                </p>
              }
              buttonText="Guidance"
              link="https://ec.europa.eu/sustainable-finance-taxonomy/taxonomy-compass/the-compass"
            >
              <p>
                The EU's Taxonomy Regulation establishes six climate and
                environmental objectives in order for an economic activity to
                qualify as environmentally sustainable, and this includes
                objectives related to resilience and adaptation. The EU's
                Taxonomy Compass helps users better understand the EU Taxonomy
                in a simple and practical manner.
              </p>
            </VCard>

            <VCard
              image="images/qii4/ResilientDesignAndOperation/FAST-Infra Label.png"
              title={
                <p>
                  <strong>FAST-Infra Label</strong>
                </p>
              }
              buttonText="Guidance"
              link="https://cdn.prod.website-files.com/64869a932dab4d8c36a88774/68a44d2347380f7f25d23d24_ST01_V2_05.12.2024.pdf"
            >
              <p>
                The FAST-Infra Label Framework ensures uniformity and
                comparability in evaluating sustainability performance of
                infrastructure across the global infrastructure finance market.
                The label aggregates international best practices on sustainable
                infrastructure financing from around the world. The criteria for
                resilience and adaptation can be found in page 46.
              </p>
            </VCard>

            <VCard
              image="images/qii4/ResilientDesignAndOperation/A Global Assessment of Building Codes.png"
              title={
                <p>
                  <strong>A Global Assessment of Building Codes:</strong>{" "}
                  Current Status and Evolving Needs to Promote Resilient, Green
                  and Inclusive Buildings
                </p>
              }
              buttonText="Report"
              link="https://openknowledge.worldbank.org/entities/publication/6f69f235-edf6-40b9-9a4b-5efad46630aa"
            >
              <p>
                This resource provides an in-depth evaluation of current
                building code standards and compliance mechanisms worldwide,
                highlighting how modern, climate-informed codes applied at scale
                can serve as a foundational prevention strategy for resilient,
                safe, and inclusive infrastructure development in the face of
                evolving hazards.
              </p>
            </VCard>

            <VCard
              image="images/qii4/ResilientDesignAndOperation/Building regulations in Sub-Saharan Africa A status review of the building regulatory environment.png"
              title={
                <p>
                  <strong>Building regulations in Sub-Saharan Africa:</strong> A
                  status review of the building regulatory environment
                </p>
              }
              buttonText="Report"
              link="https://www.preventionweb.net/publication/building-regulations-sub-saharan-africa-status-review-building-regulatory-environment"
            >
              <p>
                This status review examines building regulations across
                Sub-Saharan Africa, offering insights into current standards,
                enforcement, and gaps, and underscores how strengthening
                regulatory frameworks and implementing resilient design codes at
                the outset of infrastructure projects can proactively enhance
                prevention and structural safety region-wide.
              </p>
            </VCard>

            <VCard
              image="images/qii4/ResilientDesignAndOperation/Stronger Building Codes for a Safer, More Resilient Future.png"
              title={
                <p>
                  <strong>
                    Stronger Building Codes for a Safer, More Resilient Future
                  </strong>
                </p>
              }
              buttonText="Blog"
              link="https://www.worldbank.org/en/topic/disasterriskmanagement/publication/stronger-building-codes-for-a-safer-more-resilient-future"
            >
              <p>
                This study reviews building codes across 22 countries,
                illustrating how updated, hazard- and climate-responsive codes
                supported by strong compliance mechanisms can proactively
                prevent disaster risks, strengthen structural safety, serving as
                a key preventive solution for resilient infrastructure
                development.
              </p>
            </VCard>
          </div>
          <div className="VCard-cnt col2">
            <VCard
              image="images/qii4/ResilientDesignAndOperation/Building Regulatory Capacity Assessment.png"
              title={
                <p>
                  <strong>Building Regulatory Capacity Assessment</strong>
                </p>
              }
              buttonText="Guidance"
              link="https://www.gfdrr.org/en/publication/building-regulatory-capacity-assessment-brca-20-methodology"
            >
              <p>
                The Building Regulatory Capacity Assessment (BRCA) 2.0 offers a
                robust methodology and practical tools for evaluating and
                strengthening a country’s or city’s building and land use
                regulatory systems, enabling prevention-focused reforms that
                embed resilience standards into infrastructure planning, policy,
                and enforcement from the outset.
              </p>
            </VCard>

            <VCard
              image="images/qii4/ResilientDesignAndOperation/Modular Bridges in Madagascar.png"
              title={
                <p>
                  <strong>Modular Bridges in Madagascar</strong>
                </p>
              }
              buttonText="Case Study"
              link="https://www.worldbank.org/en/news/press-release/2025/07/10/building-resilient-afe-infrastructure-protecting-access-connectivity-and-communities"
            >
              <p>
                This update highlights how climate-resilient design standards
                and rapid-response operational planning (such as pre-positioned
                modular bridges) are being incorporated into Madagascar’s
                national infrastructure projects to proactively prevent
                isolation, maintain connectivity, and protect communities from
                natural disasters and climate shocks.
              </p>
            </VCard>
          </div>
          <div className="border-dash"></div>
          <NumSteps num="2">
            <strong>
              Adaptation – Integrating Nature-Based Solutions and Digital
              Approaches into Design and Operations:
            </strong>{" "}
            Embedding technology, consistent and routine monitoring, maintenance
            protocols, and contingency planning within operations underpins
            reliable performance. These practices enable rapid restoration after
            natural and man-made shocks and sustain service levels under
            evolving environmental and operational pressures.
            <br />
            <br />
            More specifically, both nature-based solutions and advanced digital
            technologies are two effective mechanisms by which to enhance
            systemic resilience, system flexibility, and cost-effectiveness in
            both design and operations of infrastructure assets and systems.
            Moreover, these mechanisms deliver environmental, social, and
            economic co-benefits throughout the infrastructure lifespan.
            <br />
            <br />
          </NumSteps>
          <h4 className="sub-section-title">
            Nature-based Solutions for Resilience
          </h4>

          <div className="VCard-cnt col2">
            <VCard
              image="images/qii4/ResilientDesignAndOperation/World Bank A Catalogue of Nature-Based Solutions for Urban Resilience.png"
              title={
                <p>
                  <strong>World Bank: </strong> A Catalogue of Nature-Based
                  Solutions for Urban Resilience
                </p>
              }
              buttonText="Tool"
              link="https://openknowledge.worldbank.org/entities/publication/c33e226c-2fbb-5e11-8c21-7b711ecbc725"
            >
              <p>
                The catalogue of Nature-based solutions for urban resilience has
                been developed as a guidance document to support the growing
                demand for NBS by enabling an initial identification of
                potential investments in nature-based solutions.
              </p>
            </VCard>

            <VCard
              image="images/qii4/ResilientDesignAndOperation/IFC Catalogue of Nature Based Solutions for Infrastructure Projects.png"
              title={
                <p>
                  <strong>
                    IFC Catalogue of Nature-Based Solutions for Infrastructure
                    Projects{" "}
                  </strong>{" "}
                </p>
              }
              buttonText="Tool"
              link="https://www.ifc.org/content/dam/ifc/doc/2023/catalogue-of-nature-based-solutions-for-infrastructure-projects.pdf"
            >
              <p>
                This catalogue provides examples of nature-based solutions that
                private infrastructure companies can integrate into their core
                business operations and articulates the business case for doing
                so. The intent of the catalogue is to raise the awareness of the
                business benefits of nature-based solutions and start the
                conversation with infrastructure companies to identify
                opportunities and possible projects.
              </p>
            </VCard>

            <VCard
              image="images/qii4/ResilientDesignAndOperation/A Catalogue of Nature-Based Solutions for Urban Resilience.png"
              title={
                <p>
                  <strong>
                    A Catalogue of Nature-Based Solutions for Urban Resilience{" "}
                  </strong>
                </p>
              }
              buttonText="Report"
              link="https://openknowledge.worldbank.org/entities/publication/c33e226c-2fbb-5e11-8c21-7b711ecbc725"
            >
              <p>
                A catalogue providing practical guidance and case examples for
                integrating nature-based solutions into urban infrastructure,
                showcasing how these approaches (combined with routine
                monitoring and adaptive maintenance) enhance system flexibility,
                resilience, and deliver broad environmental and social benefits
                throughout asset operations and recovery.
              </p>
            </VCard>

            <VCard
              image="images/qii4/ResilientDesignAndOperation/IADBAI and deep learning for identifying pavement failures.png"
              title={
                <p>
                  <strong>IADB: </strong>AI and deep learning for identifying
                  pavement failures
                </p>
              }
              buttonText="Case Study"
              link="https://infratech.gihub.org/infratech-case-studies/ai-and-deep-learning-for-identifying-pavement-failures-in-latin-american-and-the-caribbean"
            >
              <p>
                An innovative tool that improves paved road network planning and
                reduces maintenance costs for government agencies, replacing a
                costly and lengthy manual process; AI application,
                digitalization, and simplification of road assessment process.
              </p>
            </VCard>
          </div>
          <h4 className="sub-section-title">
            Digital Solutions for Resilience
          </h4>
          <div className="VCard-cnt col2">
            <VCard
              image="images/qii4/ResilientDesignAndOperation/Digital Security and Resilience in Critical Infrastructure and Essential Services1.png"
              title={
                <p>
                  <strong>
                    Digital Security and Resilience in Critical Infrastructure
                    and Essential Services{" "}
                  </strong>{" "}
                </p>
              }
              buttonText="Report"
              link="https://www.oecd.org/content/dam/oecd/en/publications/reports/2019/04/digital-security-and-resilience-in-critical-infrastructure-and-essential-services_5593c149/a7097901-en.pdf"
            >
              <p>
                This OECD resource serves as a digital toolkit for
                infrastructure operators and policy makers, delivering practical
                frameworks and protocols to strengthen digital security, enable
                continuous monitoring, boost adaptive operational resilience,
                and coordinate rapid response across critical infrastructure and
                essential services.
              </p>
            </VCard>

            <VCard
              image="images/qii4/ResilientDesignAndOperation/Digital Public Infrastructure for Digital Governments.png"
              title={
                <p>
                  <strong>
                    Digital Public Infrastructure for Digital Governments
                  </strong>{" "}
                </p>
              }
              buttonText="Report"
              link="https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/12/digital-public-infrastructure-for-digital-governments_11fe17d9/ff525dc8-en.pdf"
            >
              <p>
                This OECD paper is a digital public infrastructure toolkit,
                providing frameworks and best practices for governments to
                develop and manage secure, interoperable digital systems that
                enhance operational resilience, enable inclusive service
                delivery, and support real-time adaptation and continuity across
                public infrastructure.
              </p>
            </VCard>
          </div>
          <p className="qii4-note">
            *For more on digital resilience, visit our cybersecurity sub-page.
          </p>
          <div className="border-dash"></div>
          <NumSteps num="3">
            <strong>
              Responsiveness – Ensuring Post-Event Performance of Infrastructure
              Assets and Systems:
            </strong>{" "}
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
          <div className="VCard-cnt col3">
            <VCard
              image="images/qii4/ResilientDesignAndOperation/Incorporating Resilience into Infrastructure Prioritization Application to Japan’s Road Transport Sector.png"
              title={
                <p>
                  <strong>
                    Incorporating Resilience into Infrastructure Prioritization:{" "}
                  </strong>
                  Application to Japan's Road Transport Sector{" "}
                </p>
              }
              buttonText="Report"
              link="https://ppp.worldbank.org/sites/default/files/2022-04/IPFResiliencedrmhubtokyo.pdf"
            >
              <p>
                This report presents operational methods and quantitative
                indicators (such as accumulated loss of functionality,
                redundancy metrics, and recovery time) to support infrastructure
                decision-makers in designing and prioritizing projects with
                built-in responsiveness. By measuring alternate routes,
                emergency access, and time-bound functional recovery, it ensures
                infrastructure systems are equipped to rapidly restore
                connectivity and essential services after disruptions and
                disasters, aligning design and investment with real-world
                performance targets.
              </p>
            </VCard>

            <VCard
              image="images/qii4/ResilientDesignAndOperation/Building Back Better.png"
              title={
                <p>
                  <strong>Building Back Better </strong>
                </p>
              }
              buttonText="Report"
              link="https://www.gfdrr.org/en/publication/building-back-better"
            >
              <p>
                The Resilient Recovery section (page 18) of the report
                highlights how resilience strategies, particularly redundancy
                (like alternate routes, backup capacity, distributed assets) and
                Functional Recovery (setting time-bound targets for restoration
                of vital services), are now central to post-disaster
                infrastructure planning. These approaches align design,
                operations, and budgets to maintain or rapidly restore service
                continuity, prevent cascading failures, and enable effective,
                efficient disaster response. Together, they ensure
                infrastructure systems are both responsive and robust when
                disruptions strike, guiding practitioners to prioritize
                investments that maximize resilience throughout the asset
                lifecycle.
              </p>
            </VCard>

            <VCard
              image="images/qii4/ResilientDesignAndOperation/Functional Recovery of Lifeline Infrastructure System Services.png"
              title={
                <p>
                  <strong>
                    Functional Recovery of Lifeline Infrastructure System
                    Services{" "}
                  </strong>{" "}
                </p>
              }
              buttonText="Publication"
              link="https://www.nist.gov/publications/functional-recovery-lifeline-infrastructure-system-services"
            >
              <p>
                This NIST publication provides authoritative guidance on setting
                and implementing functional recovery targets for critical
                infrastructure systems, detailing engineering, operational, and
                policy strategies to ensure post-disaster service restoration
                within defined timeframes. Section 4 specifically outlines
                performance objectives and approaches for achieving rapid,
                reliable functional recovery, supporting practitioners to align
                design, operations, and investment priorities with resilience
                goals for lifeline infrastructure.
              </p>
            </VCard>
          </div>
          <div className="VCard-cnt col2">
            <VCard
              image="images/qii4/ResilientDesignAndOperation/OECD Infrastructure Toolkit Strengthening Critical Infrastructure Resilience.png"
              title={
                <p>
                  <strong>OECD Infrastructure Toolkit:</strong> Strengthening
                  Critical Infrastructure Resilience
                </p>
              }
              buttonText="Tool"
              link="https://infrastructure-toolkit.oecd.org/governance/strengthen-critical-infrastructure-resilience/"
            >
              <p>
                This online toolkit frames resilience with an “all-hazards
                system-based approach,” aimed at maintaining service continuity
                despite diverse threats. It underscores strategies for systemic
                rebound and includes practical case studies.
              </p>
            </VCard>

            <VCard
              image="images/qii4/ResilientDesignAndOperation/Building Resilience New Strategies for Strengthening Infrastructure Resilience and Maintenance.png"
              title={
                <p>
                  <strong>Building Resilience: </strong>New Strategies for
                  Strengthening Infrastructure Resilience and Maintenance
                </p>
              }
              buttonText="Policy Paper"
              link="https://www.oecd.org/content/dam/oecd/en/publications/reports/2021/11/building-resilience_6b655137/354aa2aa-en.pdf"
            >
              <p>
                This paper emphasizes designing infrastructure investments to
                not just address immediate needs but also ensure long-term
                functioning across an asset’s lifecycle. It approached
                infrastructure planning from a functional recovery perspective
                and provides a strategic framework for optimizing both existing
                and new infrastructure against future shocks.
              </p>
            </VCard>
          </div>
        </div>
      </section>
    </div>
  );
}
