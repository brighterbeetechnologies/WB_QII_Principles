import React, { useEffect, useState } from "react";
import "./QIILandingPage.css";
import TextIconCarousal from "../components/TextIconCarousal";
import Header3 from "../components/Header3";
import { Link } from "react-router-dom";
import ResourceLibrary from "./ResourceLibrary";
import TopResourceCard from "../components/TopResourceCard";
import { useDispatch } from "react-redux";
import {
  setBradcrump,
  setShowVideo,
  setVideoData,
} from "../slices/appDataSlice";

export default function QII2LandingPage() {
  const dispatch = useDispatch();
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
        {/* <img className="desk_image" src="images/qii2/header_bg.png" alt="" />
        <img className="mob_image" src="images/qii2/header_bg_mob.png" alt="" /> */}
        {/* <div className="hero-wrapper">
          <img className="desk_image" src="images/qii2/header_bg.png" alt="" />
          <img
            className="mob_image"
            src="images/qii2/header_bg_mob.png"
            alt=""
          />
          <div className="hero-content-overlay"> </div>
          <div className="hero-content">
            <h1 className="light-font">Economic Efficiency</h1>
          </div>
        </div> */}
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
                ></div>
                <h3 className="label-subpage">
                  <strong>{page.title}</strong>
                </h3>
                <label className="page-description">{page.description}</label>
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
      <section className="color-dark ">
        <div className="container">
          <div className="center-header">
            <h1 className="light-font mBottom">Top Resources</h1>
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
              link=""
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
              link=""
            ></TopResourceCard>
            <TopResourceCard
              image="images/qii2/Performance_Based.png"
              title={
                <p>
                  Performance-Based Contracts (Pbcs) For Proactive Road Asset
                  Management
                </p>
              }
              buttonText="Case Study"
              link=""
            ></TopResourceCard>
          </div>
        </div>
      </section>
      <section className="color-light z-2">
        <ResourceLibrary></ResourceLibrary>
      </section>
    </div>
  );
}
