import React, { useEffect, useState } from "react";
import "./QII1LandingPage.css";
import TextIconCarousal from "../components/TextIconCarousal";
import Header3 from "../components/Header3";
import { Link, useNavigate } from "react-router-dom";
import ResourceLibrary from "./ResourceLibrary";
import { Pagination, ConfigProvider } from "antd";
import TopResourceCard from "../components/TopResourceCard";
import VCardsPagination from "../components/VCardsPagination";
import { useDispatch } from "react-redux";
import {
  setBradcrump,
  setShowVideo,
  setVideoData,
} from "../slices/appDataSlice";
import QII1CaseStudy1 from "./QII1CaseStudy/QII1CaseStudy1";
import QII1_CardBox from "../components/QII1_CardBox";

export default function QII1LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const STEP_PAGE_SIZE = 3;
  const [stepPage, setStepPage] = useState(1);

  const textCrData = [
    {
      id: 0,
      icon: "&#xe919;",
      text: "Reduces costly service interruptions, protecting households and businesses from economic losses.",
    },
    {
      id: 0,
      icon: "&#xe922;",
      text: "Enhances recovery speed after disasters, sustaining reliable access to essential services.",
    },
    {
      id: 0,
      icon: "&#xe921;",
      text: "Lowers long-term maintenance and replacement expenses through better design and risk management.",
    },
  ];

  const step1Cards = [
    {
      image: "images/qii1/Blue-Dot-Network.png",
      title: (
        <p>
          <strong>The Blue Dot Network (BDN)</strong>
        </p>
      ),
      buttonText: "",
      link: "https://www.bluedot-network.org/",
      content: (
        <p>
          The Blue Dot Network is a voluntary, private-sector-focused and
          government-supported certification scheme for infrastructure projects.
          Led by Australia, Japan, Spain, Switzerland, Türkiye, the United
          Kingdom and the United States, the certification system assesses
          infrastructure projects against high standards of transparency,
          sustainability, and developmental impact.
        </p>
      ),
    },
    {
      image: "images/qii1/FAST-Infra.png",
      title: (
        <p>
          <strong>FAST-Infra</strong>
        </p>
      ),
      buttonText: "",
      link: "https://fastinfragroup.org/",
      content: (
        <p>
          The FAST-Infra Label is a globally applicable label for projects
          demonstrating significant positive sustainability performance. The
          FAST-Infra initiative was originally conceived collectively by the
          Climate Policy Initiative (CPI), HSBC, the OECD, the International
          Finance Corporation (IFC) and the World Bank Group’s Global
          Infrastructure Facility (GIF), and integrates QII-aligned criteria
          into its Label to attract private capital to sustainable assets by
          providing consistent evaluation metrics.{" "}
        </p>
      ),
    },
    {
      image:
        "images/qii1/Compendium-of-Quality-Infrastructure-Investment-Indicators.png",
      title: (
        <p>
          <strong>
            Compendium of Quality Infrastructure Investment Indicators
          </strong>{" "}
          <br />
          IFC
        </p>
      ),
      buttonText: "",
      link: "https://cdn.gihub.org/umbraco/media/4761/compendium-of-qii-indicators.pdf",
      content: (
        <p>
          The International Finance Corporation (IFC), through its work for the
          G20 (under the Indonesian Presidency in 2022) developed a Compendium
          of Quality Infrastructure Investment Indicators which offer a menu of
          voluntary indicators that can be adapted to different country
          circumstances.{" "}
        </p>
      ),
    },
  ];

  const furtherReadingCards = [
    {
      id: 1,
      image: "images/qii1/Iraq-Rebuilding-Communities.png",
      org: "Iraq",
      title: "Rebuilding Communities After Conflict",
      subtext1: "Project Appraisal Document",
      subtext2: "",
      type: "Resource",
      paths:
        "https://blogs.worldbank.org/en/arabvoices/iraq-emergency-project-rebuilding-bridges#:~:text=They%20were%20carried%20out%20by%20Iraqi%20government,Group's%20Emergency%20Operation%20for%20Development%20Project%20(EODP)",
      videoUrl: null,
    },
    {
      id: 2,
      image: "images/qii1/Dominica-Building-Climate-Resilience.png",
      org: "Dominica",
      title: "Building Climate Resilience Through Nature-Based Solutions",
      subtext1: "GFDRR Country Profile",
      subtext2: "Project Appraisal Document",
      type: "Resource",
      paths:
        "https://documents1.worldbank.org/curated/en/676111538364626336/pdf/PAD2765-PUBLIC.pdf",
      videoUrl: null,
    },
    {
      id: 3,
      image: "images/qii1/Indonesia-Transforming.png",
      org: "Indonesia",
      title: "Transforming Irrigation Performance Through Technology",
      subtext1: "Blog: Modernizing Public Transport",
      subtext2: "Press Release: Urban Transport Support",
      type: "Resource",
      paths:
        "https://www.worldbank.org/en/news/feature/2022/07/06/-indonesia-pioneers-irrigation-service-delivery-innovation",
      videoUrl: null,
    },
    {
      id: 3,
      image: "images/qii1/Indonesia-Transforming.png",
      org: "Maputo",
      title: "Data-Driven Urban Mobility",
      subtext1: "Blog: Modernizing Public Transport",
      subtext2: "Press Release: Urban Transport Support",
      type: "Resource",
      paths:
        "https://www.worldbank.org/en/news/press-release/2022/08/24/world-bank-supports-urban-transport-in-the-maputo-metropolitan-area",
      videoUrl: null,
    },
  ];

  const otherRefernceCards = [
    {
      id: 1,
      image: "images/qii1/Japan-Quality-Infrastructure.png",
      org: false,
      title: `"Quality Infrastructure” Around the World: Compendium of Good Practices`,
      country: "Japan",
      subtext1: "(English/Japanese)",
      subtext2:
        "A flagship report by MLIT, including 48 case studies of Japan-supported infrastructure projects across the world that demonstrate alignment with QII Principles.",
      type: "Resource",
      paths: "https://www.mlit.go.jp/kokusai/content/001397310.pdf",
    },
    {
      id: 2,
      image: "images/qii1/Compendium-of-Quality-Infrastructure-in-Africa.png",
      org: false,
      title: "Compendium of Quality Infrastructure",
      country: "Africa",
      subtext1: "(English/Japanese)",
      subtext2:
        "An MLIT resource presenting 26 case studies from across Africa, demonstrating how QII principles address the continent's unique infrastructure challenges. ",
      type: "Resource",
      paths: "https://www.mlit.go.jp/kokusai/content/africa_0807_EN.pdf",
    },
  ];

  const paginatedCards = furtherReadingCards.slice(
    (stepPage - 1) * STEP_PAGE_SIZE,
    stepPage * STEP_PAGE_SIZE,
  );

  const paginatedCards2 = otherRefernceCards.slice(
    (stepPage - 1) * STEP_PAGE_SIZE,
    stepPage * STEP_PAGE_SIZE,
  );

  const openVideo = (url, title, width, height) => {
    dispatch(setVideoData({ url, title, width, height }));
    dispatch(setShowVideo(true));
  };

  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [{ path: "/qii1", title: "QII.1 Sustainable Growth" }],
      }),
    );
  }, []);
  return (
    <div className="qii1">
      <section className="q1_landing_page color-dark">
        <section className="color-light landingpage-banner">
          <Header3 img="images/qii1/QII1_Landing_main.png">
            <div className="langing-page-container">
              <img
                src="images/UpdatedAssets/Qii1.svg"
                alt="landing-page-logo"
                className="landingpage-logo"
              />
              <div className="landingpage-description">
                <p className="light-font">
                  Quality infrastructure drives sustainable growth when
                  infrastructure investments create jobs, boost productivity,
                  and connect people to markets.
                </p>
                {/* <p className="bold-text">
                      <strong></strong>
                    </p> */}
              </div>
            </div>
          </Header3>
        </section>
        <section className="container internal-pages-container">
          <p className="light-font sub-text center-text">
            <strong>
              How Quality Infrastructure Drives Sustainable Growth
            </strong>
          </p>
          <div className="ico-text-card-3-container">
            <div className="ico-text-card-3">
              <div className="ico-text-card-3-ico">
                <img src="images/qii1/Icon1.svg" alt="" />
              </div>
              <div className="ico-text-card-3-description">
                <div className="ico-text-card-3-title">
                  <p>
                    Infrastructure as the Backbone of Jobs and Livelihoods
                  </p>
                </div>
                <p className="ico-text-card-3-desc">
                  Infrastructure can create a virtuous economic cycle, from job
                  creation during the construction and OaM phases, to boosting
                  the industries that support these activities, to ultimately
                  increasing productivity, jobs and access to markets through
                  the infrastructure services provided.1
                </p>
                <p className="ico-text-card-3-link">
                  1:{" "}
                  <Link
                    to="https://documents1.worldbank.org/curated/en/924891596641466361/pdf/Jobs-Umbrella-Multidonor-Trust-Fund-Annual-Report-2019-2020.pdf"
                    target="_blank"
                    className="link"
                  >
                    World Bank (2020) Jobs Umbrella MDTF: Annual Report
                    2019-2020{" "}
                  </Link>
                </p>
              </div>
            </div>
            
          </div>
        </section>
      </section>
      <section>
        <QII1CaseStudy1 />
      </section>
      <section className="color-dark FurtherReadingSection">
        <div className="container">
          <h2 className="section-title light-font">Further Reading </h2>
          <div className="qii1-card-grid" role="list">
            {paginatedCards.map((card) => (
              <QII1_CardBox key={card.id} card={card} />
            ))}
          </div>
          {furtherReadingCards.length > STEP_PAGE_SIZE && (
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#00a996",
                  borderRadius: 100,
                  colorBgContainer: "#e5f5fb",
                },
              }}
            >
              <Pagination
                align="center"
                current={stepPage}
                pageSize={STEP_PAGE_SIZE}
                total={furtherReadingCards.length}
                showSizeChanger={false}
                showQuickJumper={false}
                showPrevNextJumpers={false}
                onChange={(page) => setStepPage(page)}
                className="resource-pagination"
              />
            </ConfigProvider>
          )}
        </div>
      </section>
      <section className="container internal-pages-container color-light">
        <p className="center-text">
          <strong>
            The Multiplier Effect: How QII Principles Work Together
          </strong>
        </p>
      </section>
      <section className="container internal-pages-container color-dark">
        <h2 className="section-title light-font">Key References</h2>
        <p className="center-text">
          Several international initiatives have incorporated the QII Principles
          into frameworks to strengthen investment decision-making into quality
          infrastructure.
        </p>
        <VCardsPagination cardsData={step1Cards} />
        <p className="center-text">
          Together, these efforts promote a shared global language for quality,
          resilience, and sustainability in infrastructure investment.
        </p>
      </section>
      <section className="container internal-pages-container color-light">
        <h2 className="section-title light-font">Other References</h2>
        <div className="qii1-card-grid" role="list">
          {paginatedCards2.map((card) => (
            <QII1_CardBox key={card.id} card={card} />
          ))}
          {otherRefernceCards.length > STEP_PAGE_SIZE && (
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#00a996",
                  borderRadius: 100,
                  colorBgContainer: "#e5f5fb",
                },
              }}
            >
              <Pagination
                align="center"
                current={stepPage}
                pageSize={STEP_PAGE_SIZE}
                total={otherRefernceCards.length}
                showSizeChanger={false}
                showQuickJumper={false}
                showPrevNextJumpers={false}
                onChange={(page) => setStepPage(page)}
                className="resource-pagination"
              />
            </ConfigProvider>
          )}
        </div>
      </section>
      {/* <section className="color-light z-2">
        <ResourceLibrary></ResourceLibrary>
      </section> */}
    </div>
  );
}
