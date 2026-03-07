import React, { useEffect } from "react";
import "./DiagnosingVulnerabilities.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import Header3 from "../components/Header3";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";
import ResourceLibrary from "./ResourceLibrary";
import VCardsPagination from "../components/VCardsPagination";

export default function DiagnosingVulnerabilities() {
  const STEP1_PAGE_SIZE = 3;
  const step1Cards = [
    {
      image:
        "images/qii4/DiagnosingVulnerabilities/Geospatial Information Management.png",
      title: (
        <p>
          Philippines
          <br />
          <strong>
            Geospatial Information Management and Analysis Portal
          </strong>
          <br />GeoRiskPH
          <br />
        </p>
      ),
      buttonText: "Case study",
      link: "https://georisk.gov.ph/",
      content: (
        <p>
          This online resource provides protocols and platforms to share
          hazards, exposure and other risk information to help people,
          communities, local governments, and national agencies prepare and plan
          how to reduce the risks from natural hazards.
        </p>
      ),
    },
    {
      image:
        "images/qii4/DiagnosingVulnerabilities/Learning from Mega-disasters Japan Case Study.png",
      title: (
        <p>
          Japan
          <br />
          <strong>Learning from Mega-Disasters</strong>
          <br />
          World Bank
        </p>
      ),
      buttonText: "Case Study",
      link: "https://openknowledge.worldbank.org/entities/publication/db0df170-6101-526e-8fc8-d0e448196fc4",
      content: (
        <p>
          Section V, Chapters 25–27 of this resource provides detailed guidance
          for hazard mapping and exposure assessments, covering scenario
          selection, risk and hazard map development, effective data management,
          and methods for integrating local knowledge with technical analysis to
          inform resilient planning and decision-making.
        </p>
      ),
    },
    {
      image:
        "images/qii4/DiagnosingVulnerabilities/World Bank Climate Knowledge Portal.png",
      title: (
        <p>Global <br />
          <strong>Climate Knowledge Portal</strong>
          <br />
          World Bank
        </p>
      ),
      buttonText: "Data",
      link: "https://climateknowledgeportal.worldbank.org/",
      content: (
        <p>
          A data source for granular climate risk and scenario projections to
          inform the vulnerability diagnosis of critical assets.
        </p>
      ),
    },
    {
      image: "images/qii4/updated/GDFR_Thinkhazard.png",
      title: (
        <p>Global <br />
          <strong>ThinkHazard!</strong>
          <br />
          GFDRR
        </p>
      ),
      buttonText: "Data",
      link: "https://thinkhazard.org/en/",
      content: (
        <p>
          Think Hazard is an online tool that provides rapid, location-specific
          hazard mapping and exposure assessments for multiple natural hazards,
          offering practical risk summaries, recommended mitigation actions, and
          relevant guidance to support risk-informed project planning and
          resilient decision-making.
        </p>
      ),
    },
  ];

  const step2Cards = [
    {
      image:
        "images/qii4/DiagnosingVulnerabilities/Vanuatu Post-Disaster Needs.png",
      title: (
        <p>Vanuatu <br />
          <strong>Post-Disaster Needs Assessment</strong>
          <br />
          GFDRR
        </p>
      ),
      buttonText: "Case study",
      link: "https://www.gfdrr.org/sites/default/files/publication/pda-2015-vanuatu.pdf",
      content: (
        <p>
          This Post-Disaster Needs Assessment (PDNA) looks at the scale of
          impact of Tropical Cyclone Pam on key sectors and the economy as a
          whole. This PDNA formed the basis of a Joint Action Plan prepared by
          the government of Vanuatu.
        </p>
      ),
    },
    {
      image:
        "images/qii4/DiagnosingVulnerabilities/Climate Impact Assessment.png",
      title: (
        <p>
          Cross-Regional <br />
          <strong>
            Enhancing the Climate Resilience of Africa's Infrastructure
          </strong>
          <br />
          World Bank
        </p>
      ),
      buttonText: "Report",
      link: "https://openknowledge.worldbank.org/handle/10986/21875",
      content: (
        <p>
          This resource details consistent, state-of-the-art methods to assess
          the vulnerability of Africa's power and water infrastructure,
          analyzing physical condition, design, and operational
          interdependencies to identify system weaknesses under climate stress
          and recommending ways to strengthen resilience and adaptive planning.
        </p>
      ),
    },
    {
      image:
        "images/qii4/DiagnosingVulnerabilities/Notre Dame Global Adaptation Initiative.png",
      title: (
        <p>Global <br />
          <strong>Notre Dame Global Adaptation Initiative</strong>
          <br />
          University of Notre Dame
        </p>
      ),
      buttonText: "Data",
      link: "https://gain.nd.edu/our-work/country-index/rankings/",
      content: (
        <p>
          The ND-GAIN Country Index compares countries' vulnerabilities to
          climate change and other global challenges in combination with its
          readiness to improve resilience.
        </p>
      ),
    },
  ];

  const step3Cards = [
    {
      image:
        "images/qii4/DiagnosingVulnerabilities/Jamaica Disaster Vulnerability Reduction Project.png",
      title: (
        <p>Jamaica <br />
          <strong>Disaster Vulnerability Reduction Project</strong>
          <br /> World Bank​
        </p>
      ),
      buttonText: "Case study",
      link: "https://www.worldbank.org/en/news/feature/2025/07/17/jamaica-how-investments-in-disaster-resilience-helped-protect-communities",
      content: (
        <p>
          The Disaster Vulnerability Reduction Project aims to strengthen
          Jamaica’s resilience to disasters and climate risks through four
          components: technical assistance to improve hazard data and
          monitoring, risk reduction measures such as retrofitting and coastal
          protection, a contingent emergency response mechanism to finance
          recovery after disasters, and project administration.
        </p>
      ),
    },
    {
      image:
        "images/qii4/DiagnosingVulnerabilities/Initial Sea Level Rise Risk Assessment for Nauru (Chapter 5.6.1).png",
      title: (
        <p>Cross-Regional <br />
          <strong>
            Initial Sea Level Rise Risk Assessment for Nauru
          </strong>
          <br />
          Pacific Regional Infrastructure Facility
        </p>
      ),
      buttonText: "Case study",
      link: "https://www.theprif.org/sites/theprif.org/files/documents/PRIF_SLR-Report_DigitalV2.pdf",
      content: (
        <p>
          Chapter 5.6.1- A conceptual sea level rise assessment has been completed for Nauru to
          assess potential infrastructure risk and vulnerability.
        </p>
      ),
    },
    {
      image:
        "images/qii4/DiagnosingVulnerabilities/Disaster Risk Profiles (GFDRR).png",
      title: (
        <p>Global <br />
          <strong>Disaster Risk Profiles</strong>
          <br />
          GFDRR
        </p>
      ),
      buttonText: "Report",
      link: "https://www.gfdrr.org/en/disaster-risk-profiles",
      content: (
        <p>
          These risk profiles provide a preliminary view of disaster risk at the
          national level, and distribution of risk across regions of the country
          and types of assets. They enable the identification and prioritization
          of risk, to guide risk management activities and identify the need for
          further, more detailed risk assessment.
        </p>
      ),
    },
    {
      image:
        "images/qii4/DiagnosingVulnerabilities/World Bank Climate Knowledge Portal.png",
      title: (
        <p>Nepal <br />
          <strong>Resilience Rating System</strong>
          <br />
          World Bank
        </p>
      ),
      buttonText: "Blog",
      link: "https://blogs.worldbank.org/en/climatechange/building-resilience-in-investment-projects--the-power-of-resilie",
      content: (
        <p>
          This framework provides insights into projects’ economic viability
          against current and future climate and disaster scenarios through a
          climate risk stress test.
        </p>
      ),
    },
    {
      image:
        "images/qii4/DiagnosingVulnerabilities/Global Infrastructure Risk.png",
      title: (
        <p>Global <br />
          <strong>
            Global Infrastructure Risk Model and Resilience Index
          </strong>
          <br />
          Coalition for Disaster Resilient Infrastructure
        </p>
      ),
      buttonText: "Data",
      link: "https://giri.unepgrid.ch/",
      content: (
        <p>
          This is a fully probabilistic risk model to estimate risk for
          infrastructure assets for most geological and climate-related hazards.
        </p>
      ),
    },
    {
      image:
        "images/qii4/DiagnosingVulnerabilities/INFORM Climate Change Tool (European Commission).png",
      title: (
        <p>Global <br />
          <strong>INFORM Climate Change Tool</strong>
          <br />
          European Commission
        </p>
      ),
      buttonText: "Data",
      link: "https://drmkc.jrc.ec.europa.eu/inform-index/INFORM-Climate-Change/INFORM-Climate-Change-Tool",
      content: (
        <p>
          INFORM Climate Change tool provides insight into the results of the
          climate change risk analysis. It helps the users to easily navigate
          within different scenario combinations and different points in time,
          exploring the potential changes in risk, Hazard & Exposure variables,
          vulnerability gap and population.
        </p>
      ),
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
            path: "/Diagnosing-vulnerabilities",
            title: "Diagnosing Vulnerabilities​",
          },
        ],
      }),
    );
  }, []);
  return (
    <div className="DiagnosingVulnerabilities">
      <section className="color-light">
        <Header3
          img="images/qii4/Diagnosing_Vulnerabilities.png"
          title={"Diagnosing Vulnerabilities"}
          hideDeskTitle={true}
        >
          <div className="hero-content">
            <div className="header-3-subpages">
              <img
                src="images/UpdatedAssets/Qii4.svg"
                alt="Qii2 logo"
                className="qii-badge"
              />
              <h1 className="header-title desk-title">
                Diagnosing Vulnerabilities
              </h1>
            </div>
          </div>
          <div className="subpage-description">
            <p className="light-font">
              Assessing the vulnerability of infrastructure systems ensures they
              can withstand, adapt, and recover from shocks. Vulnerability
              assessments identify the weak points in the system, highlighting
              areas where exposure to natural disasters and man-made events
              (such as cyber attacks) present great risks. These assessments
              help prioritize interventions where they are needed the most,
              making the best use of public and private investment.
            </p>
          </div>
        </Header3>

        {/* <HeaderCarousal slidesData={slidesData}></HeaderCarousal> */}
        <div className="container internal-pages-container">
          <p className="link-text">
            There are three main components to vulnerability assessment: (i)
            identifying hazards and exposures, (ii) evaluating asset and system
            vulnerabilities and (iii) applying risk-informed decision making.
            This will determine how assets and systems may fail under stress and
            guides investment priorities to strengthen resilience and ensure
            reliable services.
          </p>
          <div className="border-dash"></div>
          <NumSteps num="1">
            <strong>Hazards and Exposure Assessments</strong>
            <br /> <br className="mobile-break" />
            This involves mapping the full range of natural and man-made threats
            or hazards that could affect infrastructure—such as floods,
            droughts, earthquakes, cyberattacks and understanding where these
            assets are geographically and how impacted or exposed they are to
            these threats.
          </NumSteps>
          <VCardsPagination cardsData={step1Cards} />
          {/* <div className="VCard-cnt col3">
            <VCard
              image="images/qii4/DiagnosingVulnerabilities/Geospatial Information Management.png"
              title={
                <p>
                  <strong>
                    Geospatial Information Management and Analysis Project for
                    Hazards and Risk Assessment in the Philippines
                  </strong>
                </p>
              }
              buttonText="Case study"
              link="https://georisk.gov.ph/"
            >
              <p>
                This online resource provides protocols and platforms to share
                hazards, exposure and other risk information to help people,
                communities, local governments, and national agencies prepare
                and plan how to reduce the risks from natural hazards.
              </p>
            </VCard>
            <VCard
              image="images/qii4/DiagnosingVulnerabilities/Learning from Mega-disasters Japan Case Study.png"
              title={
                <p>
                  Japan <br />
                  <strong>Learning from Megadisasters </strong> <br />
                  World Bank
                </p>
              }
              buttonText="Guidance"
              link="https://openknowledge.worldbank.org/entities/publication/db0df170-6101-526e-8fc8-d0e448196fc4"
            >
              <p>
                Section V, Chapters 25–27 of this resource provides detailed
                guidance for hazard mapping and exposure assessments, covering
                scenario selection, risk and hazard map development, effective
                data management, and methods for integrating local knowledge
                with technical analysis to inform resilient planning and
                decision-making.
              </p>
            </VCard>

            <VCard
              image="images/qii4/DiagnosingVulnerabilities/World Bank Climate Knowledge Portal.png"
              title={
                <p>
                  <strong> Climate Knowledge Portal</strong>
                  <br />
                  World Bank
                </p>
              }
              buttonText="Tool"
              link="https://climateknowledgeportal.worldbank.org/"
            >
              <p>
                A data source for granular climate risk and scenario projections
                to inform the vulnerability diagnosis of critical assets.
              </p>
            </VCard>

            <VCard
              image="images/qii4/updated/GDFR_Thinkhazard.png"
              title={
                <p>
                  <strong>ThinkHazard!</strong>
                  <br />
                  GFDRR
                </p>
              }
              buttonText="Tool"
              link="https://thinkhazard.org/en/"
            >
              <p>
                Think Hazard is an online tool that provides rapid,
                location-specific hazard mapping and exposure assessments for
                multiple natural hazards, offering practical risk summaries,
                recommended mitigation actions, and relevant guidance to support
                risk-informed project planning and resilient decision-making.
              </p>
            </VCard>
          </div> */}
          <div className="border-dash"></div>
          <NumSteps num="2">
            <strong>Asset and System Vulnerability Assessments </strong>
            <br /> <br className="mobile-break" />
            This involves examining the physical condition, design standards,
            and interdependencies of infrastructure systems to determine how
            they might fail or degrade under stress. It also considers
            institutional and operational weaknesses that limit resilience and
            recovery.
          </NumSteps>
          <VCardsPagination cardsData={step2Cards} />
          {/* <div className="VCard-cnt col3">
            <VCard
              image="images/qii4/DiagnosingVulnerabilities/Vanuatu Post-Disaster Needs.png"
              title={
                <p>
                  <strong>Vanuatu Post-Disaster Needs Assessment </strong>{" "}
                  <br />
                  GFDRR
                </p>
              }
              buttonText="Case study"
              link="https://www.gfdrr.org/sites/default/files/publication/pda-2015-vanuatu.pdf"
            >
              <p>
                This Post-Disaster Needs Assessment (PDNA) looks at the scale of
                impact of Tropical Cyclone Pam on key sectors and the economy as
                a whole. This PDNA formed the basis of a Joint Action Plan
                prepared by the government of Vanuatu.
              </p>
            </VCard> */}
          {/* <VCard
              image="images/qii4/DiagnosingVulnerabilities/Climate Impact Assessment.png"
              title={
                <p>
                  Africa <br />
                  <strong>Climate Impact Assessment Frameworks</strong> <br />
                  (Infrastructure Example)
                </p>
              }
              buttonText="Guidance"
              link="https://openknowledge.worldbank.org/handle/10986/21875"
            >
              <p>
                This resource details consistent, state-of-the-art methods to
                assess the vulnerability of Africa's power and water
                infrastructure, analyzing physical condition, design, and
                operational interdependencies to identify system weaknesses
                under climate stress and recommending ways to strengthen
                resilience and adaptive planning.
              </p>
            </VCard> */}

          {/* <VCard
              image="images/qii4/DiagnosingVulnerabilities/Climate Impact Assessment.png"
              title={
                <p>
                  <strong>
                    Enhancing the Climate Resilience of Africa's Infrastructure
                  </strong>{" "}
                  <br />
                  ​World Bank
                </p>
              }
              buttonText="Guidance"
              link="https://openknowledge.worldbank.org/handle/10986/21875"
            >
              <p>
                This resource details consistent, state-of-the-art methods to
                assess the vulnerability of Africa's power and water
                infrastructure, analyzing physical condition, design, and
                operational interdependencies to identify system weaknesses
                under climate stress and recommending ways to strengthen
                resilience and adaptive planning.
              </p>
            </VCard>

            <VCard
              image="images/qii4/DiagnosingVulnerabilities/Notre Dame Global Adaptation Initiative.png"
              title={
                <p>
                  <strong>Notre Dame Global Adaptation Initiative </strong>{" "}
                  <br />
                  University of Notre Dame
                </p>
              }
              buttonText="Tool"
              link="https://gain.nd.edu/our-work/country-index/rankings/"
            >
              <p>
                The ND-GAIN Country Index compares countries' vulnerabilities to
                climate change and other global challenges in combination with
                its readiness to improve resilience.
              </p>
            </VCard>
          </div> */}
          <div className="border-dash"></div>
          <NumSteps num="3">
            <strong>Risk-informed Decision-Making​</strong>
            <br /> <br className="mobile-break" />
            This involves translating hazard and vulnerability assessments into
            actionable choices. By quantifying risks in terms of probability and
            impact, decision-makers can prioritize investments, strengthen
            standards, and integrate resilience into planning, operations, and
            policy.
          </NumSteps>
          <VCardsPagination cardsData={step3Cards} />
          {/* <div className="VCard-cnt col3">
            <VCard
              image="images/qii4/DiagnosingVulnerabilities/Jamaica Disaster Vulnerability Reduction Project.png"
              title={
                <p>
                  <strong>
                    Jamaica Disaster Vulnerability Reduction Project
                  </strong>
                </p>
              }
              buttonText="Case study"
              link="https://www.worldbank.org/en/news/feature/2025/07/17/jamaica-how-investments-in-disaster-resilience-helped-protect-communities"
            >
              <p>
                The Disaster Vulnerability Reduction Project aims to strengthen
                Jamaica’s resilience to disasters and climate risks through four
                components: technical assistance to improve hazard data and
                monitoring, risk reduction measures such as retrofitting and
                coastal protection, a contingent emergency response mechanism to
                finance recovery after disasters, and project administration.
              </p>
            </VCard>

            <VCard
              image="images/qii4/DiagnosingVulnerabilities/Initial Sea Level Rise Risk Assessment for Nauru (Chapter 5.6.1).png"
              title={
                <p>
                  <strong>
                    Initial Sea Level Rise Risk Assessment for Nauru (Chapter
                    5.6.1){" "}
                  </strong>{" "}
                  <br />
                  Pacific Regional Infrastructure Facility
                </p>
              }
              buttonText="Case study"
              link="https://www.theprif.org/sites/theprif.org/files/documents/PRIF_SLR-Report_DigitalV2.pdf"
            >
              <p>
                A conceptual sea level rise assessment has been completed for
                Nauru to assess potential infrastructure risk and vulnerability.
              </p>
            </VCard>
            <VCard
              image="images/qii4/DiagnosingVulnerabilities/Disaster Risk Profiles (GFDRR).png"
              title={
                <p>
                  <strong>Disaster Risk Profiles </strong>
                  <br /> GFDRR
                </p>
              }
              buttonText="Guidance"
              link="https://www.gfdrr.org/en/disaster-risk-profiles"
            >
              <p>
                These risk profiles provide a preliminary view of disaster risk
                at the national level, and distribution of risk across regions
                of the country and types of assets. They enable the
                identification and prioritization of risk, to guide risk
                management activities and identify the need for further, more
                detailed risk assessment.
              </p>
            </VCard>
            <VCard
              image="images/qii4/DiagnosingVulnerabilities/World Bank Climate Knowledge Portal.png"
              title={
                <p>
                  <strong>Resilience Rating System</strong> <br />
                  World Bank
                </p>
              }
              buttonText="Guidance"
              link="https://blogs.worldbank.org/en/climatechange/building-resilience-in-investment-projects--the-power-of-resilie"
            >
              <p>
                This framework provides insights into projects’ economic
                viability against current and future climate and disaster
                scenarios through a climate risk stress test.
              </p>
            </VCard>
            <VCard
              image="images/qii4/DiagnosingVulnerabilities/Global Infrastructure Risk.png"
              title={
                <p>
                  <strong>
                    Global Infrastructure Risk Model and Resilience Index
                    (GIRI){" "}
                  </strong>{" "}
                  <br />
                  Coalition for Disaster Resilient Infrastructure
                </p>
              }
              buttonText="Tool"
              link="https://giri.unepgrid.ch/"
            >
              <p>
                This is a fully probabilistic risk model to estimate risk for
                infrastructure assets for most geological and climate-related
                hazards.
              </p>
            </VCard>
            <VCard
              image="images/qii4/DiagnosingVulnerabilities/INFORM Climate Change Tool (European Commission).png"
              title={
                <p>
                  <strong>INFORM Climate Change Tool </strong>
                  <br />
                  European Commission
                </p>
              }
              buttonText="Tool"
              link="https://drmkc.jrc.ec.europa.eu/inform-index/INFORM-Climate-Change/INFORM-Climate-Change-Tool"
            >
              <p>
                INFORM Climate Change tool provides insight into the results of
                the climate change risk analysis. It helps the users to easily
                navigate within different scenario combinations and different
                points in time, exploring the potential changes in risk, Hazard
                & Exposure variables, vulnerability gap and population.
              </p>
            </VCard>
          </div> */}
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
