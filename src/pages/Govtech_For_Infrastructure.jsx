import React, { useEffect } from "react";
import "./Govtech_For_Infrastructure.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import Header3 from "../components/Header3";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";
import VCardsPagination from "../components/VCardsPagination";

export default function Govtech_For_Infrastructure() {
  const STEP1_PAGE_SIZE = 3;
  const step1Cards = [
    {
      image:
        "images/qii6/Govtech_For_Infrastructure/Public-Transport-Demand.png",
      title: (
        <p>Multi-country <br />
          <strong>
            Public Transport Demand Forecasting Regional Platform for the Post COVID-19 Era
          </strong> <br />World Bank
        </p>
      ),
      buttonText: "Case Study",
      link: "",
      // highlight: 2,
      content: <p>With co-funding from the QII Partnership and the Mobility and Logistics Multidonor Trust Fund (MOLO), this project developed a replicable methodology for monitoring travel demand patterns using big data from mobile devices. The approach was demonstrated in Bogota, Buenos Aires, and Medellin, supporting transport authorities in leveraging new data sources to inform public transport planning and infrastructure investment decisions. </p>,
    },
    {
      image:
        "images/qii6/Govtech_For_Infrastructure/Global-Infrastructure-Indicators-Dashboard.png",
      title: (
        <p>
          <strong>Global Infrastructure Indicators Dashboard</strong> <br />
          World Bank
        </p>
      ),
      buttonText: "Tool",
      link: "https://data.worldbank.org/",
      content: (
        <p>
          Open access portal providing internationally comparable development
          indicators across transport, energy, water, digital connectivity, etc.
          You can explore data by country, visualize trends, and benchmark
          infrastructure performance using the DataBank analysis tool.
        </p>
      ),
    },
  ];

  const step2Cards = [
    {
      image: "images/qii6/Govtech_For_Infrastructure/IndonesiaOneMapPolicy.png",
      title: (
        <p>Indonesia<br />
          <strong>One Map Policy</strong> 
        </p>
      ),
      buttonText: "Case Study",
      link: "https://www.opengovpartnership.org/wp-content/uploads/2017/05/case-study_Indonesia_One-Map-Policy_0.pdf",
      content: (
        <p>
          National geospatial platform consolidating land-use data from 19
          government agencies across all 34 provinces into a single unified
          database. Launched in 2018 to resolve overlapping claims and
          fragmented information that had long impeded sustainable development,
          infrastructure planning, and land governance.
        </p>
      ),
    },
    {
      image:
        "images/qii6/Govtech_For_Infrastructure/Japan-Association-for-Smart-Cities-inASEAN.png",
      title: (
        <p>
          <strong>Japan Association for Smart Cities in ASEAN</strong>
        </p>
      ),
      buttonText: "Guidance",
      link: "https://www.jasca2021.jp/",
      content: (
        <p>
          Platform facilitating public-private cooperation between Japan and
          ASEAN countries on smart city development. Provides access to Japanese
          smart city technologies across infrastructure maintenance, disaster
          prevention, and urban planning, alongside the Smart JAMP cooperative
          framework and ASEAN Smart City Planning Guidebook.
        </p>
      ),
    },
    {
      image:
        "images/qii6/Govtech_For_Infrastructure/GovTech-Maturity-Index-Data-Dashboard.png",
      title: (
        <p>
          <strong>GovTech Maturity Index (GTMI) Data Dashboard</strong> <br />World Bank
        </p>
      ),
      buttonText: "Tool",
      link: "https://www.worldbank.org/en/data/interactive/2022/10/21/govtech-maturity-index-gtmi-data-dashboard",
      content: (
        <p>
          Interactive dashboard presenting digital governance data for 198
          economies, enabling users to explore GovTech maturity across
          countries, track progress, and inform next steps on GovTech agendas.
          Also provides access to the World Bank's database of 1,450+ digital
          governance projects funded since 1995.
        </p>
      ),
    },
  ];

  const step3Cards = [
    {
      image:
        "images/qii6/Govtech_For_Infrastructure/QIIGrantSupportingSustainable.png",
      title: (
        <p>Albania <br />
          <strong>
            ​Innovations to Accelerate Inclusive and High Impact Public Services
          </strong> <br /> World Bank
        </p>
      ),
      buttonText: "Case Study",
      link: "pdf/Albania Innovations_Results Story_March 2024.pdf",
      content: <p>With support from the World Bank and the QII Partnership, Albania is advancing a GovTech paradigm that pairs public administration reform with digital technologies to transform service delivery. Today, 95% of central government services are available online through the e-Albania portal, serving over 3 million registered users, alongside 216 Education Smart Labs and strengthened digital inclusion measures for vulnerable populations.​</p>,
    },
    {
      image: "images/qii6/Govtech_For_Infrastructure/Albania.png",
      title: (
        <p>Kosovo<br />
          <strong>Supporting Sustainable Digital Infrastructure through Innovation</strong>
        </p>
      ),
      buttonText: "Case Study",
      link: "https://www.worldbank.org/en/news/press-release/2023/09/28/world-bank-and-kosovo-sign-agreement-to-support-digital-governance-for-service-delivery",
      content: <p>This QII grant provides advisory and analytical support for ICT infrastructure management to underpin the Government of Kosovo's digital transformation of public services. The grant complements the World Bank's Strengthening Digital Governance for Service Delivery project, which targets improved system interoperability, an upgraded e-Kosova platform, and citizen-centric service delivery organized around life events.​</p>,
    },
    {
      image:
        "images/qii6/shutterstock_2370519757.jpg",
      title: (
        <p>
          <strong>
           Digital Public Infrastructure for Digital Governments​
          </strong> <br />
          Organisation for Economic Co-operation and Development 
        </p>
      ),
      buttonText: "Guidance",
      link: "https://www.oecd.org/en/publications/digital-public-infrastructure-for-digital-governments_ff525dc8-en.html",
      content: (
        <p>
          Policy paper defining digital public infrastructure as shared digital
          systems that are secure and interoperable, supporting inclusive
          delivery of public and private services.
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
          { path: "/qii6", title: "QII.6 Governance" },
          {
            path: "/govtech-for-infrastructure",
            title: "Govtech for Infrastructure",
          },
        ],
      }),
    );
  }, []);
  return (
    <div className="Govtech_For_Infrastructure">
      <section className="color-light">
        <Header3
          img="images/qii6/Govtech_For_Infrastructure/QII6-GovTech-for-Infrastructure.png"
          title={"GovTech for Infrastructure"}
          hideDeskTitle={true}
        >
          <div className="hero-content">
            <div className="header-3-subpages">
              <img
                src="images/UpdatedAssets/Qii6.svg"
                alt="Qii5 logo"
                className="qii-badge"
              />
              <h1 className="header-title desk-title">
                GovTech for Infrastructure
              </h1>
            </div>
          </div>
          <div className="subpage-description">
            <p className="light-font">
              Digital technologies are reshaping how governments plan, deliver,
              and oversee infrastructure. GovTech solutions enhance access to
              data for smarter investment decisions, enable stronger
              coordination across agencies, and drive greater transparency
              throughout the infrastructure project lifecycle.
            </p>
          </div>
        </Header3>
        <div className="container internal-pages-container">
          {/* <p className="link-text"></p> */}
          {/* <h1 className="link-text"></h1> */}
          <NumSteps num="1">
            <strong>Data Collection for Informed Decision Making </strong>
            <br />
            Quality infrastructure investment starts with quality data. Digital
            tools for collecting, standardizing, and analyzing infrastructure
            information enable governments to identify gaps, prioritize
            investments, and direct resources toward projects with the greatest
            impact.
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <VCardsPagination cardsData={step1Cards} />
          {/* <div className="VCard-cnt col-2">
            <VCard
              image="images/qii6/Govtech_For_Infrastructure/Public-Transport-Demand.png"
              title={
                <p>
                  <strong>
                    Public Transport Demand Forecasting Regional Platform: New
                    Technology for Better Investment Decision-making
                  </strong>
                  <br />
                </p>
              }
              buttonText="Case Study"
              link="/not-given"
            >
              <p>TBD</p>
            </VCard>
            <VCard
              image="images/qii6/Govtech_For_Infrastructure/Global-Infrastructure-Indicators-Dashboard.png"
              title={
                <p>
                  <strong>Global Infrastructure Indicators Dashboard</strong>
                  <br />
                  (World Bank)
                </p>
              }
              buttonText="Tool"
              link="https://data.worldbank.org/"
            >
              <p>
                Open access portal providing internationally comparable
                development indicators across transport, energy, water, digital
                connectivity, etc. You can explore data by country, visualize
                trends, and benchmark infrastructure performance using the
                DataBank analysis tool.
              </p>
            </VCard>
          </div> */}
          <div className="border-dash"></div>
          <NumSteps num="2">
            <strong>
              Digital Platforms for Data Management, Monitoring, and
              Transparency{" "}
            </strong>
            <br />
            Integrated digital platforms consolidate infrastructure information
            across agencies and sectors, enabling real-time project monitoring,
            performance tracking, and public disclosure that strengthens
            accountability.
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <VCardsPagination cardsData={step2Cards} />
          {/* <div className="VCard-cnt col3">
            <VCard
              image="images/qii6/Govtech_For_Infrastructure/IndonesiaOneMapPolicy.png"
              title={
                <p>
                  <strong>Indonesia: One Map Policy</strong>
                </p>
              }
              buttonText="Case study"
              link="https://www.opengovpartnership.org/wp-content/uploads/2017/05/case-study_Indonesia_One-Map-Policy_0.pdf"
            >
              <p>
                National geospatial platform consolidating land-use data from 19
                government agencies across all 34 provinces into a single
                unified database. Launched in 2018 to resolve overlapping claims
                and fragmented information that had long impeded sustainable
                development, infrastructure planning, and land governance.
              </p>
            </VCard>
            <VCard
              image="images/qii6/Govtech_For_Infrastructure/Japan-Association-for-Smart-Cities-inASEAN.png"
              title={
                <p>
                  <strong>Japan-Association-for-Smart-Cities-inASEAN</strong>
                </p>
              }
              buttonText="Guidance"
              link="https://www.jasca2021.jp/"
            >
              <p>
                Platform facilitating public-private cooperation between Japan
                and ASEAN countries on smart city development. Provides access
                to Japanese smart city technologies across infrastructure
                maintenance, disaster prevention, and urban planning, alongside
                the Smart JAMP cooperative framework and ASEAN Smart City
                Planning Guidebook.
              </p>
            </VCard>
            <VCard
              image="images/qii6/Govtech_For_Infrastructure/GovTech-Maturity-Index-Data-Dashboard.png"
              title={
                <p>
                  <strong>GovTech Maturity Index (GTMI) Data Dashboard</strong>
                  <br />
                  World BanK
                </p>
              }
              buttonText="Tool"
              link="https://www.worldbank.org/en/data/interactive/2022/10/21/govtech-maturity-index-gtmi-data-dashboard"
            >
              <p>
                Interactive dashboard presenting digital governance data for 198
                economies, enabling users to explore GovTech maturity across
                countries, track progress, and inform next steps on GovTech
                agendas. Also provides access to the World Bank's database of
                1,450+ digital governance projects funded since 1995.
              </p>
            </VCard>
          </div> */}
          <div className="border-dash"></div>
          <NumSteps num="3">
            <strong>
              Ensuring Interoperability Across Governance Levels and
              Sectors{" "}
            </strong>
            <br />
            Effective digital governance requires systems that communicate
            seamlessly across ministries, agencies, and levels of government,
            ensuring data flows between planning, procurement, implementation,
            and oversight functions.
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <VCardsPagination cardsData={step3Cards} />
          {/* <div className="VCard-cnt col3">
            <VCard
              image="images/qii6/Govtech_For_Infrastructure/OECD-Digital-Public-Infrastructure-for-Digital-Governments.png"
              title={
                <p>
                  <strong>
                    OECD: Digital Public Infrastructure for Digital Governments
                    (2024)
                  </strong>
                </p>
              }
              buttonText="Guidance"
              link="https://www.oecd.org/en/publications/digital-public-infrastructure-for-digital-governments_ff525dc8-en.html"
            >
              <p>
                Policy paper defining digital public infrastructure as shared
                digital systems that are secure and interoperable, supporting
                inclusive delivery of public and private services.
              </p>
            </VCard>
            <VCard
              image="images/qii6/Govtech_For_Infrastructure/QIIGrantSupportingSustainable.png"
              title={
                <p>
                  <strong>
                    QII Grant: Supporting Sustainable Digital Infrastructure
                    through Innovation in Kosovo
                  </strong>
                </p>
              }
              buttonText="Case Study"
              link="https://kryeministri.rks-gov.net/en/news/launch-of-the-digital-governance-strengthening-project-for-service-delivery/"
            >
              <p>TBD</p>
            </VCard>
            <VCard
              image="images/qii6/Govtech_For_Infrastructure/Albania.png"
              title={
                <p>
                  <strong>Albania: GovTech Program (Phases 1 and 2)</strong>
                </p>
              }
              buttonText="Case Study"
              link="/not-given"
            >
              <p>TBD</p>
            </VCard>
          </div> */}
        </div>
      </section>
    </div>
  );
}
