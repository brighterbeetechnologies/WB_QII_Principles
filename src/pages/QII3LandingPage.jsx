import React, { useEffect, useState } from "react";
import "./QIILandingPage.css";
import "./QII4LandingPage.css";
import "./QII3LandingPage.css";
import TextIconCarousal from "../components/TextIconCarousal";
import Header3 from "../components/Header3";
import { Link, useNavigate } from "react-router-dom";
import ResourceLibrary from "./ResourceLibrary";
import TopResourceCard from "../components/TopResourceCard";
import { useDispatch } from "react-redux";
import {
  setBradcrump,
  setShowVideo,
  setVideoData,
} from "../slices/appDataSlice";

export default function QII3LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const textCrData = [
    {
      id: 0,
      icon: "&#xe919;",
      text: (
        <>
          <strong>Lock in carbon-intensive pathways</strong> through decisions
          made at the planning and design stages, with emissions persisting
          across decades of operation.
        </>
      ),
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

  const subPages = [
    {
      id: 0,
      icon: "&#xe919;",
      title: "Quality Environmental Standards",
      description: "",
      path: "/QualityEnvironmentalStandards",
    },
    {
      id: 0,
      icon: "&#xe91b;",
      title: "Decarbonizing Infrastructure",
      description: "",
      path: "/DecarbonizingInfrastructure",
    },
    {
      id: 0,
      icon: "&#xe91d;",
      title: "Green Designs and Nature-Based Infrastructure",
      description: "",
      path: "/GreenDesigns&Nature-BasedInfrastructure",
    },
    {
      id: 0,
      icon: "&#xe918;",
      title: "Green Financing for Infrastructure",
      description: "",
      path: "/GreenFinancingforInfrastructure",
    },
  ];

  const resourceArray = [
    {
      id: 0,
      title: "Environmental and Social Framework World Bank (2017)",
      description:
        "This framework provides a replicable approach for integrating E&S considerations into infrastructure projects through ten standards, ensuring sustainable and responsible infrastructure development across the project lifecycle. ",
      img_path:
        "images/qii3/Environmental and Social Framework World Bank (2017).png",
      path: "https://thedocs.worldbank.org/en/doc/837721522762050108-0290022018/original/ESFFramework.pdf#page=29&zoom=80",
      target: "_self",
    },
    {
      id: 1,
      title:
        "Climate Toolkits for Infrastructure PPPs World Bank",
      description:
        "This toolkit offers practical, step-by-step guidance to integrate climate mitigation and adaptation measures into infrastructure PPPs, helping structure bankable projects that align with climate policies, assess climate risks, and incorporate climate solutions that are technically and financially feasible.",
      img_path: "images/qii3/Climate Toolkits for Infrastructure PPPs World Bank.png",
      path: "https://documents1.worldbank.org/curated/en/099120004052270615/pdf/P1746330d584ff0210a9670dcf49a5becb0.pdf",
      target: "_blank",
    },
    {
      id: 2,
      title: "IFC Performance Standards on Environmental and Social Sustainability",
      description:
        "These standards provide a globally recognized framework to identify and manage E&S risks in infrastructure investments, covering a range of key environmental topics including resource efficiency, pollution prevention, and biodiversity conservation.",
      img_path: "images/qii3/IFC Performance Standards on Environmental and Social Sustainability.png",
      path: "https://www.ifc.org/en/insights-reports/2012/ifc-performance-standards",
      target: "_blank",
    },
    {
      id: 3,
      title: "Infrastructure for a Climate-Resilient Future OECD (2024)",
      description:
        "This report provides evidence-based strategies for building climate-resilient infrastructure systems, covering adaptation planning, financing mechanisms, nature-based solutions, and governance frameworks.",
      img_path: "images/qii3/Infrastructure for a Climate Resilient Future OECD (2024).png",
      path: "https://doi.org/10.1787/a74a45b0-en",
      target: "_blank",
    },
  ];

  const openVideo = (url, title, width, height) => {
    dispatch(setVideoData({ url, title, width, height }));
    dispatch(setShowVideo(true));
  };
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [{ path: "/qii3", title: "Environment" }],
      }),
    );
  }, []);
  return (
    <div className="qii2">
      <section className="q2_landing_page color-dark">
        {/* <img
          className="desk_image"
          src="images/qii3/QII3_Landing main.png"
          alt=""
        />
        <img
          className="mob_image"
          src="images/qii4/QII2_Landing_main.png"
          alt=""
        /> */}
        <div className="hero-wrapper">
          <img
            className="desk_image"
            src="images/qii3/QII3_Landing main.png"
            alt=""
          />
          <img
            className="mob_image"
            src="images/qii3/QII3_Landing main.png"
            alt=""
          />
          <div className="hero-content">
            <h1 className="light-font">Environment</h1>
          </div>
        </div>
        <div className="container">
          <div className="center-header">
            <h1 className="light-font mBottom">
              Pathways to Integrating Environmental Value
            </h1>
          </div>
          <div className="sub-pages">
            {subPages.map((page, i) => (
              <div className="subpage-cnt" key={i}>
                <div
                  className="icon-subpage"
                  dangerouslySetInnerHTML={{ __html: page.icon }}
                  onClick={() => navigate(page.path)}
                ></div>
                <h3
                  className="label-subpage"
                  onClick={() => navigate(page.path)}
                >
                  <strong>{page.title}</strong>
                </h3>
                <label
                  className="page-description"
                  onClick={() => navigate(page.path)}
                >
                  {page.description}
                </label>
                <Link to={page.path}>
                  <div className="arrow-btn icon-arrow">&#xe900;</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="color-light">
        <div className="container ">
          <div className="video-text-cnt">
            <div className="video-text-box">
              <img src="images/qii3/Video1_thumbnail.png" alt="" />
              <div className="vid-cnt">
                <button
                  className="video-play-btn icon-play"
                  onClick={() => {
                    openVideo(
                      "./video/LandingPageVideo.mp4",
                      "The Environmental Challenge and Opportunity",
                      1920,
                      1080,
                    );
                  }}
                >
                  &#xe91e;
                </button>
                <p className="video-title">
                  <strong></strong>
                </p>
              </div>
            </div>
            <div className="text-cnt">
              <h1 className="light-font mBottom">
                Infrastructure's Environmental Footprint
              </h1>
              <h3 className="light-font sub-text">
                Infrastructure shapes environmental outcomes for generations.
                Without intentional action, projects can:
              </h3>
              <TextIconCarousal data={textCrData} />
            </div>
          </div>
        </div>
        <Header3 img="images/qii3/shutterstock_708204115.png">
          <p>
            By accounting for climate impacts, biodiversity risks, and ecosystem
            services from project conception through delivery, infrastructure
            becomes a driver of environmental regeneration rather than
            degradation.
          </p>
        </Header3>
      </section>
      <section className="q4_landing_page color-dark">
        <div className="container">
          <div className="qii4-video-card">
            <img
              className="desk_image"
              src="images/qii3/Highlight_video_thumbnail.png"
              alt=""
            />
            <img
              className="mob_image"
              src="images/qii3/Highlight_video_thumbnail.png"
              alt=""
            />
            <div className="vid-cnt qii4-vid-cnt">
              <button
                className="video-play-btn icon-play"
                onClick={() => {
                  openVideo(
                    "./video/LandingPageVideo.mp4",
                    "Lessons from Success Stories ",
                    1920,
                    1080,
                  );
                }}
              >
                &#xe91e;
              </button>
            </div>
            <div className="qii4-video-overlay">
              <p className="qii4-video-title">Lessons from Success Stories</p>
              <p className="qii4-video-desc">
                How Belgrade transformed decades of waste into clean energy,
                pioneering a new model for sustainable infrastructure in
                emerging markets.
              </p>

              <button className="qii4-video-cta">Explore Case Studies →</button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="color-dark ">
        <div className="container">
          <div className="center-header">
            <h1 className="light-font mBottom">Top Resources</h1>
          </div>
          <div className="top-resource-card-cnt-qii4">
            <TopResourceCard
              image="images/qii3/Environmental and Social Framework World Bank (2017).png"
              title={
                <p>Environmental and Social Framework World Bank (2017) </p>
              }
              buttonText="Programs"
              link="https://thedocs.worldbank.org/en/doc/837721522762050108-0290022018/original/ESFFramework.pdf#page=29&zoom=80"
            ></TopResourceCard>
            <TopResourceCard
              image="images/qii3/Climate Toolkits for Infrastructure PPPs World Bank.png"
              title={
                <p>Climate Toolkits for Infrastructure PPPs World Bank </p>
              }
              buttonText="Programs"
              link="https://documents1.worldbank.org/curated/en/099120004052270615/pdf/P1746330d584ff0210a9670dcf49a5becb0.pdf"
            ></TopResourceCard>
            <TopResourceCard
              image="images/qii3/IFC Performance Standards on Environmental and Social Sustainability.png"
              title={
                <p>
                  IFC Performance Standards on Environmental and Social Sustainability{" "}
                </p>
              }
              buttonText="Programs"
              link="https://www.ifc.org/en/insights-reports/2012/ifc-performance-standards"
            ></TopResourceCard>
            <TopResourceCard
              image="images/qii3/Infrastructure for a Climate Resilient Future OECD (2024).png"
              title={
                <p>
                  Infrastructure for a Climate-Resilient Future OECD (2024){" "}
                </p>
              }
              buttonText="Programs"
              link="https://doi.org/10.1787/a74a45b0-en"
            ></TopResourceCard>
          </div>
        </div>
      </section> */}
      <section className="color-dark">
        <div className="container">
          <h2 className="section-title light-font">QII.3 Case Studies</h2>
          <div className="page-resource-grid" role="list">
            {resourceArray.map((p, index) => {
              return (
                <article
                  className="page-resource-card"
                  key={index}
                  role="listitem"
                  style={{ backgroundImage: `url(${p.img})` }}
                >
                  <div className="page-resource-link">
                    <div className="page-resource-body">
                      <div className="page-resource-title title-small">
                        {p.title}
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
                          {p.title}
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
                          {p.target === "_blank" ? (
                            <a
                              className="page-resource-arrow"
                              href={p.path}
                              target={p.target}
                            >
                              <span className="icon-arrow">&#xe900;</span>
                            </a>
                          ) : (
                            <Link
                              className="page-resource-arrow"
                              to={p.path}
                              target={p.target}
                            >
                              <span className="icon-arrow">&#xe900;</span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="view-all-btn-container">
            <button
              className="btn-primary qii2-video-cta"
              onClick={() => {
                const el = document.getElementById("resourcesSection");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View All <span className="icon-arrow">&#xe900;</span>
            </button>
          </div>
        </div>
      </section>
      <section className="color-light z-2">
        <ResourceLibrary subPages={subPages}></ResourceLibrary>
      </section>
    </div>
  );
}
