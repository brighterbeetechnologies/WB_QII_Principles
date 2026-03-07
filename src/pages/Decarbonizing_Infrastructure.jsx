import React, { useEffect } from "react";
import "./Decarbonizing_Infrastructure.css";
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

export default function Decarbonizing_Infrastructure() {
  const resourceArray = [
    {
      id: 0,
      country: "Global",
      title: "Greenhouse Gas Protocol",
      subTitle: false,
      description:
        "A widely used international accounting standard for greenhouse gas emissions, developed by WRI and WBCSD. Provides comprehensive global standardized frameworks to measure and manage GHG emissions, with sector-specific and country-specific calculation tools for private and public sector operations, value chains, and mitigation actions.",
      img_path:
        "images/qii3/Decarbonizing-Infrastructure/Greenhouse-Gas-Protocol.png",
      path: "https://ghgprotocol.org/",
    },

    {
      id: 1,
      country: "Global",
      title: "Whole Life Carbon Assessment Standard",
      subTitle: "RICS",
      description:
        "Professional standard from the Royal Institution of Chartered Surveyors for measuring carbon emissions across the entire lifecycle of built assets, from raw material extraction through construction, operation, and end of life.",
      img_path:
        "images/qii3/Decarbonizing-Infrastructure/RICS-Whole-Life-Carbon-Assessment-Standard.png",
      path: "https://www.rics.org/profession-standards/rics-standards-and-guidance/sector-standards/construction-standards/whole-life-carbon-assessment/whole-life-carbon-assessment-implementation-guides-and-supporting-documents",
    },

    {
      id: 2,
      country: "Global",
      title: "Reducing Infrastructure Climate Risk Through Technology Measures",
      subTitle: "EDHEC Climate Institute",
      description:
        "Guidance on developing decarbonization roadmaps for infrastructure owners and investors. The initiative identifies and evaluates over 100 decarbonization and climate resilience strategies across 101 infrastructure asset subclasses, resulting in more than 1,800 unique asset-strategy applications. Each strategy is assessed for effectiveness and hazard protection level (for physical risks).",
      img_path:
        "images/qii3/Decarbonizing-Infrastructure/Reducing-Infrastructure-Climate-Risk-Through-Technology-Measures.png",
      path: "https://climateinstitute.edhec.edu/climatech-project",
    },
  ];

  const STEP1_PAGE_SIZE = 3;
  const step1Cards = [
    {
      image:
        "images/qii3/QII3/Decarbonizing_Infrastructure/Climate_Change_Development.png",
      title: (
        <p>
          Global <br />
          <strong>Climate Change and Development Reports</strong> <br />
          World Bank
        </p>
      ),
      buttonText: "Report",
      link: "https://www.worldbank.org/en/publication/country-climate-development-reports#:~:text=The%20World%20Bank%20Group's%20Country,contributions%20and%20long%2Dterm%20strategies.",
      content: (
        <p>
          Country level diagnostics that identify the development pathways to
          achieve NDCs and Long-Term Strategies.
        </p>
      ),
    },
    {
      image:
        "images/qii3/QII3/Decarbonizing_Infrastructure/Net_Zero_by_2050.png",
      title: (
        <p>
          Global <br />
          <strong>Net Zero by 2050</strong> <br />
          International Energy Agency
        </p>
      ),
      buttonText: "Report",
      link: "https://www.iea.org/reports/net-zero-by-2050#overview",
      content: (
        <p>
          Pathways to net zero by 2050 for several infrastructure sectors,
          including the transport, electricity, buildings, and industry sectors.
        </p>
      ),
    },
    {
      image:
        "images/qii3/QII3/Decarbonizing_Infrastructure/Infrastructure_Transition_Pathways.png",
      title: (
        <p>
          Global <br />
          <strong>Infrastructure Transition Pathways</strong> <br />
          Global Infrastructure Hub
        </p>
      ),
      buttonText: "Data",
      link: "https://infrastructure-transition.gihub.org/data/",
      content: (
        <p>
          The GI Hub has analysed more than 250 infrastructure plans across the
          G20 to understand how countries are investing in infrastructure to
          address climate change.
        </p>
      ),
    },
  ];

  const step2Cards = [
    {
      image:
        "images/qii3/QII3/Decarbonizing_Infrastructure/Rewa_Ultra_Mega_Solar_Project.png",
      title: (
        <p>
          India <br />
          <strong>Rewa Ultra Mega Solar Project</strong> <br />
          IFC
        </p>
      ),
      badgeText: "Energy",
      buttonText: "Case Study",
      link: "https://www.ifc.org/content/dam/ifc/doc/mgrt/scaling-infra-india-08.pdf",
      buttonText2: "Watch Video",
      link2: "https://www.youtube.com/watch?v=nTDXDHXwwT0",
      content: (
        <p>
          One of the world's largest single-site solar projects, demonstrating
          how innovative payment security mechanisms can de-risk investment
          while achieving record-low tariffs. A model for scaling renewable
          energy through well-structured PPPs.
        </p>
      ),
    },
    {
      image:
        "images/qii3/QII3/Decarbonizing_Infrastructure/New_Technologies_Powering_The_Energy_Transition.png",
      title: (
        <p>
          Philippines <br />
          <strong>New Technologies Powering the Energy Transition in Asia and the Pacific</strong>
          <br />
          IFC
        </p>
      ),
      badgeText: "Energy",
      buttonText: "Case Study",
      link: "https://www.ifc.org/en/stories/2024/new-technologies-powering-the-energy-transition-in-eap",
      content: (
        <p>
          Emerging technologies, especially battery energy storage systems and
          green hydrogen, are accelerating the energy transition across Asia and
          the Pacific. This article looks at the Philippines’ first hybrid 120MW
          solar farm co-located with a 40MW battery system that powers about
          40,000 homes and avoids ~110,000 tons of CO₂ annually.
        </p>
      ),
    },
    {
      image:
        "images/qii3/QII3/Decarbonizing_Infrastructure/Cairo_Alexandria_Trade_Logistics_Development.png",
      title: (
        <p>
          Egypt <br />
          <strong>
            Cairo Alexandria Trade Logistics Development Project
          </strong>{" "}
          <br />
          World Bank
        </p>
      ),
      badgeText: "Transport",
      buttonText: "Case Study",
      link: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099325009122236722",
      content: (
        <p>
          A $1 billion project to decarbonize freight transport between
          Alexandria's ports and Cairo through a new rail bypass and upgraded
          signaling, electrification, and track.
        </p>
      ),
    },
    {
      image:
        "images/qii3/Climate Toolkits for Infrastructure PPPs World Bank.png",
      title: (
        <p>
          Global <br />
          <strong>Climate Toolkits for Infrastructure PPPs</strong> <br />
          World Bank
        </p>
      ),
      badgeText: "Project level",
      buttonText: "Framework",
      link: "https://documents1.worldbank.org/curated/en/099120004052270615/pdf/P1746330d584ff0210a9670dcf49a5becb0.pdf",
      content: (
        <p>
          This toolkit provides guidance on the integration of GHG emissions
          analysis and decarbonization options into the design of Public Private
          Partnerships (PPPs) across a range of infrastructure sectors.
        </p>
      ),
    },
    {
      image:
        "images/qii3/QII3/Decarbonizing_Infrastructure/Net_Zero_by_2050.png",
      title: (
        <p>
          Global <br />
          <strong>Net Zero by 2050</strong> <br />
          International Energy Agency
        </p>
      ),
      badgeText: "Energy",
      buttonText: "Report",
      limk: "https://www.iea.org/reports/net-zero-by-2050#overview",
      content: (
        <p>
          Pathways to net zero by 2050 for several infrastructure sectors,
          including the transport, electricity, buildings, and industry sectors.
        </p>
      ),
    },
    {
      image:
        "images/qii3/QII3/Decarbonizing_Infrastructure/Investigating_Life_Cycle.png",
      title: (
        <p>
          Global <br />
          <strong>
            Investigating Life Cycle Carbon Emission Impact of Road Investments
          </strong>
          <br />
          Asian Development Bank
        </p>
      ),
      badgeText: "Transport",
      buttonText: "Guidance note",
      link: "https://www.adb.org/sites/default/files/publication/1089246/carbon-emission-road-investments.pdf",
      content: (
        <p>
          A tool that can inform Avoid–Shift–Improve (ASI) measures to reduce
          emissions and can be used to support the planning and design of road
          projects and programs – from construction to rehabilitation and with
          consideration of raw material and supply chain activities.
        </p>
      ),
    },
    {
      image:
        "images/qii3/QII3/Decarbonizing_Infrastructure/Building_Green_Sustainable_Construction.png",
      title: (
        <p>
          Global <br />
          <strong>
            Building Green: Sustainable Construction in Emerging Markets
          </strong>{" "}
          <br />
          IFC
        </p>
      ),
      buttonText: "Guidance note",
      link: "https://www.ifc.org/content/dam/ifc/doc/2023/building-green-sustainable-construction-in-emerging-markets.pdf",
      content: <p>Guide to decarbonizing construction value chains.</p>,
    },
  ];

  // const step3Cards = [
  //   {
  //     image:
  //       "images/qii3/Decarbonizing-Infrastructure/Greenhouse-Gas-Protocol.png",
  //     title: (
  //       <p>
  //         <strong>Greenhouse Gas Protocol</strong>
  //       </p>
  //     ),
  //     buttonText: "Tool",
  //     link: "https://ghgprotocol.org/",
  //     content: (
  //       <p>
  //         A widely used international accounting standard for greenhouse gas
  //         emissions, developed by WRI and WBCSD. Provides comprehensive global
  //         standardized frameworks to measure and manage GHG emissions, with
  //         sector-specific and country-specific calculation tools for private and
  //         public sector operations, value chains, and mitigation actions.
  //       </p>
  //     ),
  //   },
  //   {
  //     image:
  //       "images/qii3/Decarbonizing-Infrastructure/RICS-Whole-Life-Carbon-Assessment-Standard.png",
  //     title: (
  //       <p>
  //         <strong>RICS Whole Life Carbon Assessment Standard</strong>
  //       </p>
  //     ),
  //     buttonText: "Tool",
  //     link: "https://www.rics.org/profession-standards/rics-standards-and-guidance/sector-standards/construction-standards/whole-life-carbon-assessment/whole-life-carbon-assessment-implementation-guides-and-supporting-documents",
  //     content: (
  //       <p>
  //         Professional standard from the Royal Institution of Chartered
  //         Surveyors for measuring carbon emissions across the entire lifecycle
  //         of built assets, from raw material extraction through construction,
  //         operation, and end of life.
  //       </p>
  //     ),
  //   },
  //   {
  //     image:
  //       "images/qii3/Decarbonizing-Infrastructure/Reducing-Infrastructure-Climate-Risk-Through-Technology-Measures.png",
  //     title: (
  //       <p>
  //         <strong>
  //           Reducing Infrastructure Climate Risk Through Technology Measures
  //         </strong>{" "}
  //         <br />
  //         EDHEC Climate Institute
  //       </p>
  //     ),
  //     buttonText: "Guidance – Multi-sector",
  //     link: "https://climateinstitute.edhec.edu/climatech-project",
  //     content: (
  //       <p>
  //         Guidance on developing decarbonization roadmaps for infrastructure
  //         owners and investors. The initiative identifies and evaluates over 100
  //         decarbonization and climate resilience strategies across 101
  //         infrastructure asset subclasses, resulting in more than 1,800 unique
  //         asset-strategy applications. Each strategy is assessed for
  //         effectiveness and hazard protection level (for physical risks).
  //       </p>
  //     ),
  //   },
  // ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [
          { path: "/qii3", title: "QII.3 Environment" },
          {
            path: "/DecarbonizingInfrastructure",
            title: "Decarbonizing Infrastructure",
          },
        ],
      }),
    );
  }, []);
  return (
    <div className="DecarbonizingInfrastructure">
      <section className="color-light">
        <Header3
          img="images/qii3/Quality-Environmental-Standards/shutterstock_2477739245.png"
          title={"Decarbonizing Infrastructure"}
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
                Decarbonizing Infrastructure
              </h1>
            </div>
          </div>
          <div className="subpage-description">
            <p className="light-font">
              Renewable energy that powers metro systems. Waste facilities that
              generate clean electricity. Buildings designed for net-zero
              operations.
            </p>
          </div>
        </Header3>
        <section className="Decarbonizing-Infrastructure-section">
          <h3 className="center-text">
            Global greenhouse gas emissions by sector and end use, 2021​
          </h3>
          <div className="Decarbonizing-Infrastructure-container">
            <div className="Decarbonizing-Infrastructure-img">
              <img src="images/qii3/Graph.svg" alt="" />
              <div className="image-content">
                <h2>75.7%</h2>
                <p>ENERGY</p>
              </div>
            </div>
            <div className="Decarbonizing-Infrastructure-description">
              <p>
                <strong>
                  Decarbonizing infrastructure requires a transformational shift
                </strong>{" "}
                from infrastructure as the major source of emissions into a
                driver of climate solutions.
              </p>
            </div>
          </div>
          <div className="Decarbonizing-Infrastructure-des-container">
            <div className="Decarbonizing-Infrastructure-des-container-1">
              <div className="color-rectangle-dark-blue"></div>
              <div className="color-rectangle-info">
                Electricity & Heat <strong>29.7%</strong>
              </div>
            </div>
            <div className="Decarbonizing-Infrastructure-des-container-1">
              <div className="color-rectangle-1"></div>
              <div className="color-rectangle-info">
                Transportation <strong>13.7%</strong>
              </div>
            </div>
            <div className="Decarbonizing-Infrastructure-des-container-1">
              <div className="color-rectangle-2"></div>
              <div className="color-rectangle-info">
                Manufacturing & Construction <strong>12.7%</strong>
              </div>
            </div>
            <div className="Decarbonizing-Infrastructure-des-container-1">
              <div className="color-rectangle-3"></div>
              <div className="color-rectangle-info">
                Buildings <strong>6.6%</strong>
              </div>
            </div>
          </div>
          <p className="center-light-text">
            Infrastructure-related energy use accounts for over{" "}
            <strong>62%</strong> of all global emissions.
          </p>
          <p className="center-light-text-2">
            Source:{" "}
            <Link to={"https://www.wri.org/data/world-greenhouse-gas-emissions-sector-2021-sunburst-chart"} target="_blank" className="link">
              Climate Watch, World Resources Institute (2021)
            </Link>
          </p>
        </section>
        <div className="container internal-pages-container color-dark">
          <NumSteps num="1">
            <strong>Decarbonization Strategies</strong>
            <br />
            At a national level, decarbonization begins with understanding where
            emissions are concentrated. The World Bank’s Climate Change and
            Development Reports (CCDRs) can help identify which sectors
            contribute most to emissions and prioritize actions for GHG
            reduction alongside broader development goals.{" "}
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <VCardsPagination cardsData={step1Cards} />
          {/* <div className="VCard-cnt col3">
            <VCard
              image="images/qii3/QII3/Decarbonizing_Infrastructure/Climate_Change_Development.png"
              title={
                <p>
                  <strong>Climate Change and Development Reports</strong>{" "}
                  <br></br>World Bank
                </p>
              }
              buttonText="Guidance"
              link="https://www.worldbank.org/en/publication/country-climate-development-reports#:~:text=The%20World%20Bank%20Group's%20Country,contributions%20and%20long%2Dterm%20strategies."
            >
              <p>
                Country level diagnostics that identify the development pathways
                to achieve NDCs and Long-Term Strategies.
              </p>
            </VCard>
            <VCard
              image="images/qii3/QII3/Decarbonizing_Infrastructure/Net_Zero_by_2050.png"
              title={
                <p>
                  <strong>Net Zero by 2050</strong>
                  <br />
                  International Energy Agency (IEA)
                </p>
              }
              buttonText="Guidance"
              link="https://www.iea.org/reports/net-zero-by-2050#overview"
            >
              <p>
                Pathways to net zero by 2050 for several infrastructure sectors,
                including the transport, electricity, buildings, and industry
                sectors.{" "}
              </p>
            </VCard>
            <VCard
              image="images/qii3/QII3/Decarbonizing_Infrastructure/Infrastructure_Transition_Pathways.png"
              title={
                <p>
                  <strong>Infrastructure Transition Pathways </strong>
                  <br />
                  Global Infrastructure Hub
                </p>
              }
              buttonText="Data"
              link="https://infrastructure-transition.gihub.org/data/"
            >
              <p>
                The GI Hub has analysed more than 250 infrastructure plans
                across the G20 to understand how countries are investing in
                infrastructure to address climate change.{" "}
              </p>
            </VCard>
          </div> */}
        </div>
        <div className="container internal-pages-container color-light">
          <NumSteps num="2">
            <strong>Decarbonization Solutions</strong>
            <br />
            Decarbonization will take on very different forms across different
            sectors, and technology will play a key role.
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          {/* <div className="ico-text-card-2-container">
            <div className="ico-text-card-2">
              <div className="ico-text-card-2-ico">
                <img src="images/qii3/icon/energy.svg" alt="" />
              </div>
              <p className="ico-text-card-2-title mTop">Energy</p>
              <p className="ico-text-card-2-description mTop">
                Key decarbonization approaches include replacing fossil fuel
                generation with renewables, greening transmission networks, and
                enabling on-site renewable generation for buildings and
                industry.
              </p>
            </div>
            <div className="ico-text-card-2">
              <div className="ico-text-card-2-ico">
                <img src="images/qii3/icon/transport.svg" alt="" />
              </div>
              <p className="ico-text-card-2-title mTop">Transport</p>
              <p className="ico-text-card-2-description mTop">
                Electric charging points and hydrogen fuelling stations are
                critical enablers of vehicle decarbonization, while emissions
                from road construction can be reduced in many ways, including
                reducing materials consumption, and reuse and recycling of
                materials from old roadways.
              </p>
            </div>
          </div> */}
          {/* <div className="ico-text-card-2-info">
            <p>
              At a sector or project level, the{" "}
              <strong>Avoid-Shift-Improve (ASI) framework </strong>
              provides a useful hierarchy.
            </p>
          </div> */}
          {/* <div className="ico-text-card-2-infographics">
            <img
              className="desk-img"
              src="images/qii3/QII3/Landing/Infographic.png"
              alt=""
            />
            <img
              className="mobile-img"
              src="images/qii3/QII3/Landing/mobile_infographic.png"
              alt=""
            />
            <p className="ico-text-card-2-infographics-p1">
              Avoid unnecessary emissions
            </p>
            <p className="ico-text-card-2-infographics-p2">
              Shift to lower-carbon alternatives
            </p>
            <p className="ico-text-card-2-infographics-p3">
              Improve efficiency of remaining systems
            </p>
          </div> */}
          <h2 className="center-text">SECTOR EXAMPLE</h2>
          <div className="ico-text-card-4-container">
            <div className="ico-text-card-4">
              <div className="ico-text-card-4-ico">
                <img
                  src="images/qii3/icon/energy.svg"
                  alt=""
                  className="energy-icon"
                />
                <p className="ico-text-card-4-title">Energy</p>
              </div>
              <div className="ico-text-card-4-description">
                <p>
                  Key decarbonization approaches include replacing fossil fuel
                  generation with renewables, greening transmission networks,
                  and enabling on-site renewable generation for buildings and
                  industry.
                </p>
              </div>
            </div>
            <div className="ico-text-card-4">
              <div className="ico-text-card-4-ico">
                <img
                  src="images/qii3/icon/transport.svg"
                  alt=""
                  className="transport-icon"
                />
                <p className="ico-text-card-4-title">Transport</p>
              </div>
              <div className="ico-text-card-4-description">
                <p>
                  Electric charging points and hydrogen fuelling stations are
                  critical enablers of vehicle decarbonization, while emissions
                  from road construction can be reduced in many ways, including
                  reducing materials consumption, and reuse and recycling of
                  materials from old roadways.
                </p>
              </div>
            </div>
          </div>
          <div className="ico-text-card-5-container">
            <div className="ico-text-card-5">
              <p>
                At a sector or project level, the{" "}
                <Link
                  to={
                    "https://www.transformative-mobility.org/wp-content/uploads/2023/03/ASI_TUMI_SUTP_iNUA_No-9_April-2019-Mykme0.pdf"
                  }
                  target="_blank"
                  className="link"
                >
                  Avoid-Shift-Improve (ASI) framework 
                </Link>{" "}
                provides a useful hierarchy.
              </p>
            </div>
            <div className="ico-text-card-5-flow">
              <div className="ico-text-card-5-infographics">
                <div className="ico-text-card-5-infographics-letter">
                  <p>A</p>
                </div>
                <div className="ico-text-card-5-infographics-letter-info">
                  <p className="ico-text-card-5-infographics-letter-info-title">
                    Avoid
                  </p>
                  <p>unnecessary emissions</p>
                </div>
              </div>
              <span className="ico-text-card-5-arrow">›</span>
              <div className="ico-text-card-5-infographics">
                <div className="ico-text-card-5-infographics-letter">
                  <p>S</p>
                </div>
                <div className="ico-text-card-5-infographics-letter-info">
                  <p className="ico-text-card-5-infographics-letter-info-title">
                    Shift
                  </p>
                  <p> to lower-carbon alternatives</p>
                </div>
              </div>
              <span className="ico-text-card-5-arrow">›</span>
              <div className="ico-text-card-5-infographics">
                <div className="ico-text-card-5-infographics-letter">
                  <p>I</p>
                </div>
                <div className="ico-text-card-5-infographics-letter-info">
                  <p className="ico-text-card-5-infographics-letter-info-title">
                    Improve
                  </p>
                  <p> efficiency of remaining systems</p>
                </div>
              </div>
            </div>
          </div>
          <VCardsPagination cardsData={step2Cards} />
          {/* <div className="VCard-cnt col3">
            <VCard
              image="images/qii3/QII3/Decarbonizing_Infrastructure/Rewa_Ultra_Mega_Solar_Project.png"
              title={
                <p>
                  <strong>Rewa Ultra Mega Solar Project, India</strong> <br />
                </p>
              }
              buttonText="Case Study"
              link="https://www.ifc.org/content/dam/ifc/doc/mgrt/scaling-infra-india-08.pdfs"
              buttonText2="Watch video"
              link2="https://www.youtube.com/watch?v=nTDXDHXwwT0"
              highlight={2}
            >
              <p>
                One of the world's largest single-site solar projects,
                demonstrating how innovative payment security mechanisms can
                de-risk investment while achieving record-low tariffs. A model
                for scaling renewable energy through well-structured PPPs.
              </p>
            </VCard>
            <VCard
              image="images/qii3/QII3/Decarbonizing_Infrastructure/New_Technologies_Powering_The_Energy_Transition.png"
              title={
                <p>
                  <strong>
                    New Technologies Powering the Energy Transition in Asia and
                    the Pacific
                  </strong>{" "}
                </p>
              }
              buttonText="Case Study – Energy"
              link="https://www.ifc.org/en/stories/2024/new-technologies-powering-the-energy-transition-in-eap"
            >
              <p>
                Emerging technologies, especially battery energy storage systems
                and green hydrogen, are accelerating the energy transition
                across Asia and the Pacific. This article looks at the
                Philippines’ first hybrid 120MW solar farm co-located with a
                40MW battery system that powers about 40,000 homes and avoids
                ~110,000 tons of CO₂ annually.
              </p>
            </VCard>
            <VCard
              image="images/qii3/QII3/Decarbonizing_Infrastructure/Cairo_Alexandria_Trade_Logistics_Development.png"
              title={
                <p>
                  <strong>
                    Cairo Alexandria Trade Logistics Development Project, Egypt
                  </strong>{" "}
                  <br />
                  Asian Development Bank (ADB)
                </p>
              }
              buttonText="Case Study – Transport"
              link="https://www.adb.org/sites/default/files/publication/1089246/carbon-emission-road-investments.pdf"
            >
              <p>
                A $1 billion project to decarbonize freight transport between
                Alexandria's ports and Cairo through a new rail bypass and
                upgraded signaling, electrification, and track.
              </p>
            </VCard>
            <VCard
              image="images/qii3/QII3/Decarbonizing_Infrastructure/Climate_Toolkits_for_Infrastructure_PPPs.png"
              title={
                <p>
                  <strong>Climate Toolkits for Infrastructure PPPs </strong>{" "}
                  <br />
                  World Bank
                </p>
              }
              buttonText="Guidance – Project level"
              link="https://documents1.worldbank.org/curated/en/099120004052270615/pdf/P1746330d584ff0210a9670dcf49a5becb0.pdf"
            >
              <p>
                This toolkit provides guidance on the integration of GHG
                emissions analysis and decarbonization options into the design
                of Public Private Partnerships (PPPs) across a range of
                infrastructure sectors.
              </p>
            </VCard>
            <VCard
              image="images/qii3/QII3/Decarbonizing_Infrastructure/Net_Zero_by_2050.png"
              title={
                <p>
                  <strong>Net Zero by 2050 </strong> <br />
                  International Energy Agency (IEA)
                </p>
              }
              buttonText="Guidance – Energy"
              link="https://www.iea.org/reports/net-zero-by-2050#overview"
            >
              <p>
                Pathways to net zero by 2050 for several infrastructure sectors,
                including the transport, electricity, buildings, and industry
                sectors.{" "}
              </p>
            </VCard>
            <VCard
              image="images/qii3/QII3/Decarbonizing_Infrastructure/Investigating_Life_Cycle.png"
              title={
                <p>
                  <strong>
                    Investigating Life Cycle Carbon Emission Impact of Road
                    Investments
                  </strong>{" "}
                  Asian Development Bank (ADB)
                </p>
              }
              buttonText="Guidance"
              link="https://www.adb.org/sites/default/files/publication/1089246/carbon-emission-road-investments.pdf"
            >
              <p>
                A tool that can inform Avoid–Shift–Improve (ASI) measures to
                reduce emissions and can be used to support the planning and
                design of road projects and programs – from construction to
                rehabilitation and with consideration of raw material and supply
                chain activities.
              </p>
            </VCard>
            <VCard
              image="images/qii3/QII3/Decarbonizing_Infrastructure/Building_Green_Sustainable_Construction.png"
              title={
                <p>
                  <strong>
                    Building Green: Sustainable Construction in Emerging Markets
                  </strong>{" "}
                  <br />
                  IFC
                </p>
              }
              buttonText="Guidance – Buildings"
              link="https://www.ifc.org/content/dam/ifc/doc/2023/building-green-sustainable-construction-in-emerging-markets.pdf"
            >
              <p>Guide to decarbonizing construction value chains.</p>
            </VCard>
          </div> */}
        </div>
        {/* <section className="color-dark noPTop">
          <div className="container internal-pages-container">
            <h2 className="section-title">Further Reading on Decarbonizing Infrastructure</h2>
            <div className="section-title noPTop">
              If you’d like to dive deeper, these resources provide detailed
              methodologies, frameworks, and tracking tools relevant to
              infrastructure decarbonization.
            </div>
            <VCardsPagination cardsData={step3Cards} /> */}
        {/* <div className="VCard-cnt col3">
              <VCard
                image="images/qii3/Decarbonizing-Infrastructure/Greenhouse-Gas-Protocol.png"
                title={
                  <p>
                    <strong>Greenhouse Gas Protocol</strong>{" "}
                  </p>
                }
                buttonText="Tool"
                link="https://ghgprotocol.org/"
              >
                <p>
                  A widely used international accounting standard for greenhouse
                  gas emissions, developed by WRI and WBCSD. Provides
                  comprehensive global standardized frameworks to measure and
                  manage GHG emissions, with sector-specific and
                  country-specific calculation tools for private and public
                  sector operations, value chains, and mitigation actions.
                </p>
              </VCard>

              <VCard
                image="images/qii3/Decarbonizing-Infrastructure/RICS-Whole-Life-Carbon-Assessment-Standard.png"
                title={
                  <p>
                    <strong>
                      RICS Whole Life Carbon Assessment Standard
                    </strong>{" "}
                  </p>
                }
                buttonText="Tool"
                link="https://www.rics.org/profession-standards/rics-standards-and-guidance/sector-standards/construction-standards/whole-life-carbon-assessment/whole-life-carbon-assessment-implementation-guides-and-supporting-documents"
              >
                <p>
                  Professional standard from the Royal Institution of Chartered
                  Surveyors for measuring carbon emissions across the entire
                  lifecycle of built assets, from raw material extraction
                  through construction, operation, and end of life.
                </p>
              </VCard>
              <VCard
                image="images/qii3/Decarbonizing-Infrastructure/Reducing-Infrastructure-Climate-Risk-Through-Technology-Measures.png"
                title={
                  <p>
                    <strong>
                      Reducing Infrastructure Climate Risk Through Technology
                      Measures
                    </strong>{" "}
                    <br /> EDHEC Climate Institute
                  </p>
                }
                buttonText="Guidance – Multi-sector"
                link="https://climateinstitute.edhec.edu/climatech-project"
              >
                <p>
                  Guidance on developing decarbonization roadmaps for
                  infrastructure owners and investors. The initiative identifies
                  and evaluates over 100 decarbonization and climate resilience
                  strategies across 101 infrastructure asset subclasses,
                  resulting in more than 1,800 unique asset-strategy
                  applications. Each strategy is assessed for effectiveness and
                  hazard protection level (for physical risks).
                </p>
              </VCard>
            </div> */}
        {/* </div>
        </section> */}
        <section className="color-dark">
          <div className="container internal-pages-container">
            <h2 className="section-title light-font">
              Further Reading on Decarbonizing Infrastructure
            </h2>
            <div className="section-title noPTop">
              If you’d like to dive deeper, these resources provide detailed
              methodologies, frameworks, and tracking tools relevant to
              infrastructure decarbonization.
            </div>
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
                        {p.country && (
                          <>
                            <br />
                            <span>{p.country}</span>
                          </>
                        )}
                        <strong>{p.title}</strong>
                        {p.org && (
                          <>
                            <br />
                            <span>{p.org}</span>
                          </>
                        )}
                        {p.subTitle && (
                          <>
                            <br />
                            <span>{p.subTitle}</span>
                          </>
                        )}
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
                          {p.country && (
                          <>
                            <span>{p.country}</span>
                            <br />
                          </>
                        )}
                          <strong>{p.title}</strong>
                          {p.org && (
                          <>
                            <span>{p.org}</span>
                            <br />
                          </>
                        )}
                          {p.subTitle && (
                            <>
                              <br />
                              <span>{p.subTitle}</span>
                            </>
                          )}
                        </div>
                        <div className="page-resource-description">
                          {p.description}
                        </div>
                        {/* <Popover
                        content={p.description}
                        title={p.title}
                        trigger="click"
                      >
                        <div className="page-resource-description">
                          Read More...
                        </div>
                      </Popover> */}
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
      </section>
    </div>
  );
}
