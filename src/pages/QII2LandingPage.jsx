import React, { useEffect, useState } from "react";
import "./QIILandingPage.css";
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
import CardBox from "../components/CardBox";

export default function QII2LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const textCrData = [
    {
      id: 0,
      icon: "&#xe919;",
      text: "Inadequate government budgets that fail to account for O&M costs, or a lack of funding for operations due to weak tariff/pricing.",
    },
    {
      id: 0,
      icon: "&#xe922;",
      text: "Organizational constraints holding back efficient infrastructure asset management. This can include a lack of skills, accountabilities, and unclear roles and responsibilities.",
    },
    {
      id: 0,
      icon: "&#xe921;",
      text: "The political attractiveness of building new rather than maintaining existing infrastructure. In emerging markets and developing economies (EMDEs), development assistance can also incentivize new projects regimes.",
    },
  ];

  const subPages = [
    {
      id: 0,
      icon: "&#xe919;",
      title: "Governance",
      description:
        "Ensures accountability and institutional capacity for effective LCC implementation.",
      path: "/governance",
    },
    {
      id: 0,
      icon: "&#xe91b;",
      title: "Procurement",
      description:
        "Prioritizes long-term value through quality-based contracts and strategic structuring.",
      path: "/procurement",
    },
    {
      id: 0,
      icon: "&#xe91d;",
      title: "Technical Solutions",
      description:
        "Enhances infrastructure durability and operational performance with resilience-focused strategies.",
      path: "/technicalsolutions",
    },
    {
      id: 0,
      icon: "&#xe918;",
      title: "Cost-recovery",
      description:
        "Sustains assets through tariffs, user fees, and performance-based financing.",
      path: "/costrecovery",
    },
  ];

  const topResources = [
    [
      {
        id: 0,
        paths: "/",
        type: "Case Study",
        title:
          "Fukuoka City: Pioneering Life Cycle Costing For Efficient Water Management",
        principles: 1,
        highlight: true,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti impedit eum commodi molestias veritatis blanditiis earum sequi vitae assumenda! Sequi, quam eum voluptatem ex beatae quae aperiam inventore vitae dicta excepturi! Dignissimos odio repellat, in repellendus asperiores assumenda optio autem corporis voluptas doloremque impedit veniam distinctio ipsam dolores, sint hic!",
        format: 0,
        stage: 1,
        region: 1,
        industry: 2,
        image: "images/resources/01.jpg",
        videoUrl: "./video/FukuokaCaseStudy.mp4",
        videoTitle: "QII 2 in Action",
        topResource: true
      },
      {
        id: 1,
        paths: "/",
        type: "Case Study",
        title:
          "The Ganga Wastewater Program Strengthening Life Cycle Costing Through Public-Private Partnerships",
        principles: 1,
        highlight: true,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti impedit eum commodi molestias veritatis blanditiis earum sequi vitae assumenda! Sequi, quam eum voluptatem ex beatae quae aperiam inventore vitae dicta excepturi! Dignissimos odio repellat, in repellendus asperiores assumenda optio autem corporis voluptas doloremque impedit veniam distinctio ipsam dolores, sint hic!",
        format: 1,
        stage: 2,
        region: 1,
        industry: 2,
        image: "images/resources/02.jpg",
        topResource: true
      },
    ],
  ];
  const openVideo = (url, title, width, height) => {
    dispatch(setVideoData({ url, title, width, height }));
    dispatch(setShowVideo(true));
  };
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [{ path: "/qii2", title: "QII.2 Economic Efficiency" }],
      })
    );
  }, []);
  return (
    <div className="qii2">
      <section className="q2_landing_page color-dark">
        <section className="color-light landingpage-banner">
          <Header3 img="images/UpdatedAssets/QII2_Landing-main.png">
            <div className="langing-page-container">
              <img
                src="images/UpdatedAssets/Qii2.svg"
                alt="landing-page-logo"
                className="landingpage-logo"
              />
              <div className="landingpage-description">
                <p className="light-font">
                  At the heart of QII Principle 2 is the concept of Life-Cycle
                  Costing (LCC), a forward-thinking approach to infrastructure
                  investment. Instead of focusing solely on upfront costs, LCC
                  considers all costs – planning, design, construction,
                  operations, maintenance and eventual disposal – thereby
                  maximizing the efficiency of spending over the entire lifespan
                  of an infrastructure project. ​
                </p>
                {/* <p className="bold-text">
              <strong></strong>
            </p> */}
              </div>
            </div>
          </Header3>
        </section>
        <div className="container">
          <div className="center-header">
            <h1 className="light-font mBottom">
              Building Blocks of Adopting a Life Cycle Costing approach
            </h1>
            <h3 className="light-font">
              Economic Efficiency transforms infrastructure by leveraging
              advanced technologies, prioritizing long-term value, and driving
              policy reforms for smarter procurement and sustainable outcomes.
            </h3>
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
              <img src="images/qii2/videoCover.png" alt="" />
              <div className="vid-cnt">
                <button
                  className="video-play-btn icon-play"
                  onClick={() => {
                    openVideo(
                      "./video/LandingPageVideo.mp4",
                      "Unlocking the Potential of Life Cycle Costing",
                      1920,
                      1080
                    );
                  }}
                >
                  &#xe91e;
                </button>
                <p className="video-title">
                  <strong>Unlocking the Potential of Life Cycle Costing</strong>
                </p>
              </div>
            </div>
            <div className="text-cnt">
              <h1 className="light-font mBottom">
                Why Life Cycle Costing Matters
              </h1>
              <h3 className="light-font sub-text">
                Too often, infrastructure projects fall into the{" "}
                <strong>'Build-Neglect-Rebuild'</strong> trap—leading to
                inefficiencies, higher costs, and wasted resources. These can be
                caused by:
              </h3>
              <TextIconCarousal data={textCrData} />
            </div>
          </div>
        </div>
        <Header3 img="images/qii2/qii2_img2.png">
          <p>
            Incorporating <strong>life cycle costing</strong> into
            infrastructure planning and decision-making helps break the costly
            cycle of short-term thinking. By accounting for the{" "}
            <strong>total cost of service delivery</strong>—including
            operations, maintenance, and eventual decommissioning—governments
            and institutions can make smarter investments that deliver better
            value over time.
          </p>
        </Header3>
      </section>
      <section className="color-dark top_resource_page">
        <div className="center-header">
          <h1 className="light-font mBottom">Top Resources: QII 2</h1>
        </div>
        {/* <div className="container">
          <div className="center-header">
            <h1 className="light-font mBottom">Top Resources: QII 2</h1>
          </div>
          <div className="top-resource-card-cnt">
            <TopResourceCard
              image="images/qii2/Fukuoka.png"
              title={
                <p>
                  Fukuoka City: Pioneering Life Cycle Costing For Efficient
                  Water Management
                </p>
              }
              buttonText="Case Study"
              link="pdf/Fukuoka_city_case_study.pdf"
            ></TopResourceCard>
            <TopResourceCard
              image="images/qii2/Ganga_case_study.png"
              title={
                <p>
                  The Ganga Wastewater Program Strengthening Life Cycle Costing
                  Through Public-Private Partnerships
                </p>
              }
              buttonText="Case Study"
              link="pdf/Ganga_case_study.pdf"
            ></TopResourceCard>
          </div>
        </div> */}
        <div className="container resource_page">
          <div className="resource-carousel-container">
            <div className="resource-carousel-wrapper">
              <div
                className="resource-carousel-track"
                // style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {topResources.map((slide, i) => (
                  <div className="resource-carousel-slide" key={i}>
                    <div className="resource-card-container col-2">
                      {slide.map((card, j) => (
                        <CardBox key={j} card={card}></CardBox>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="color-light z-2">
        <ResourceLibrary subPages={subPages}></ResourceLibrary>
      </section>
    </div>
  );
}
