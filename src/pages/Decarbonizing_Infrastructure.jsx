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

export default function Decarbonizing_Infrastructure() {
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
              {/* Quality environmental standards are the foundation of good
            infrastructure project development. They are also a requirement for
            project developers seeking to attract credible investors. */}
            </p>
          </div>
        </Header3>
        <section className="Decarbonizing-Infrastructure-section">
          <div className="noPTop Decarbonizing-Infrastructure-container">
            <div className="Decarbonizing-Infrastructure-img">
              <img src="images/qii3/Group 362590.png" alt="" />
            </div>
            <div className="Decarbonizing-Infrastructure-description">
              <div className="Decarbonizing-Infrastructure-title">
                <h2>
                  <strong>Decarbonizing Infrastructure</strong>
                </h2>
              </div>
              <div className="Decarbonizing-Infrastructure-details color-dark">
                <div className="Decarbonizing-Infrastructure-details-subtitle">
                  <p>
                    <strong>
                      Global greenhouse gas emissions by sector and end use,
                      2021
                    </strong>
                  </p>
                </div>
                <div className="Decarbonizing-Infrastructure-details-subtitle-details">
                  <p>
                    Renpwable energy that powers metro systems. Waste facilities
                    that generate clean electricity. Buildings designed for
                    net-zero operations. <br /> <br />
                    Decarbonizing infrastructure requires a transformational
                    shift from infrastructure as the major source of emissions
                    into a driver of climate solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container internal-pages-container color-dark">
          <NumSteps num="1">
            <strong>Decarbonization Strategies</strong>
            <br />
            <br />
            At a national level, decarbonization begins with understanding where
            emissions are concentrated. The World Bank’s Climate Change and
            Development Reports (CCDRs) can help identify which sectors
            contribute most to emissions and prioritize actions for GHG
            reduction alongside broader development goals.{" "}
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <div className="VCard-cnt col3">
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
          </div>
          <div className="border-dash"></div>
          <NumSteps num="2">
            <strong>Decarbonization Solutions</strong>
            <br />
            <br></br>
            Decarbonization will take on very different forms across different
            sectors, and technology will play a key role.
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <div className="ico-text-card-2-container">
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
          </div>
          <div className="ico-text-card-2-info">
            <p>
              At a sector or project level, the <strong>Avoid-Shift-Improve (ASI) framework </strong>
               provides a useful hierarchy.
            </p>
          </div>
          <div className="ico-text-card-2-infographics">
            <img className="desk-img"src="images/qii3/QII3/Landing/Infographic.png" alt="" />
            <img className="mobile-img" src="images/qii3/QII3/Landing/mobile_infographic.png" alt="" />
            <p className="ico-text-card-2-infographics-p1">Avoid unnecessary emissions</p>
            <p className="ico-text-card-2-infographics-p2">Shift to lower-carbon alternatives</p>
            <p className="ico-text-card-2-infographics-p3">Improve efficiency of remaining systems</p>
          </div>
          <div className="VCard-cnt col3">
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
          </div>
        </div>
      </section>
    </div>
  );
}
