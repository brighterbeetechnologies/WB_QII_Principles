import React, { useState } from "react";
import "./QIILandingPage.css";
import "./QII4LandingPage.css";
import TextIconCarousal from "../components/TextIconCarousal";
import Header3 from "../components/Header3";
import { Link, useNavigate } from "react-router-dom";
import ResourceLibrary from "./ResourceLibrary";
import TopResourceCard from "../components/TopResourceCard";
import { useDispatch } from "react-redux";
import { setShowVideo, setVideoData } from "../slices/appDataSlice";

export default function QII5LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const subPages = [
    {
      id: 0,
      icon: "&#xe919;",
      title: "Diagnosing vulnerabilities",
      description:
        "Systematically assessing infrastructure risks and weaknesses to prioritize targeted, effective resilience measures",
      path: "/Diagnosing-vulnerabilities",
    },
    {
      id: 0,
      icon: "&#xe91b;",
      title: "Resilient design and operation",
      description:
        "Integrating climate-smart and adaptive practices into infrastructure planning, construction, and management to ensure long-term reliability",
      path: "/Resilient-design&operation",
    },
    {
      id: 0,
      icon: "&#xe91d;",
      title: "Financing resilience",
      description:
        "Mobilizing dedicated and sustainable funding sources to support resilient infrastructure investments and ongoing risk management",
      path: "/Financing-resilience",
    },
    {
      id: 0,
      icon: "&#xe918;",
      title: "Managing cybersecurity risks",
      description:
        "Implementing robust safeguards and protocols to protect critical infrastructure from digital threats and service interruptions",
      path: "/Managing-cyber-security-risks",
    },
  ];
  const openVideo = (url, title, width, height) => {
    dispatch(setVideoData({ url, title, width, height }));
    dispatch(setShowVideo(true));
  };
  return (
    <div className="qii2">
      <section className="q2_landing_page color-dark">
        <img
          className="desk_image"
          src="images/qii4/QII2_Landing_main.png"
          alt=""
        />
        <img
          className="mob_image"
          src="images/qii4/QII2_Landing_main.png"
          alt=""
        />
        <div className="container">
          <p className="header-text">
            Resilience in infrastructure refers to the capacity to withstand,
            adapt to, and recover from disruptions—whether caused by natural
            disasters, climate change, or human-made risks. Resilience ensures
            reliable infrastructure service delivery and reduces the economic
            disruptions caused by extreme events. Resilience can be especially
            important in low- and middle-income countries which can lack the
            system redundancies and emergency response capacity needed in
            disaster situations.
          </p>
          <div className="header-items-cnt">
            <div className="header-item">
              <div className="icon-item">&#xe91c;</div>
              <label className="item-label">
                <strong>Diagnosing vulnerabilities</strong>
              </label>
            </div>
            <div className="devider"></div>
            <div className="header-item">
              <div className="icon-item">&#xe917;</div>
              <label className="item-label">
                <strong>Resilient design and operation</strong>
              </label>
            </div>
            <div className="devider"></div>
            <div className="header-item">
              <div className="icon-item">&#xe91a;</div>
              <label className="item-label">
                <strong>Financing resilience</strong>
              </label>
            </div>
            <div className="devider"></div>
            <div className="header-item">
              <div className="icon-item">&#xe91a;</div>
              <label className="item-label">
                <strong>Managing cybersecurity risks</strong>
              </label>
            </div>
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
                  <strong>
                    Unlocking The Urgent Need for Resilient Infrastructure
                  </strong>
                </p>
              </div>
            </div>
            <div className="text-cnt">
              <h1 className="light-font mBottom">
                The Benefits of Resilience in Infrastructure
              </h1>
              <h3 className="light-font sub-text">
                Resilient infrastructure strengthens society's capacity to cope
                with shocks and disruptions, unlocking enduring economic,
                social, and operational advantages. Resilience:
              </h3>
              <TextIconCarousal data={textCrData} />
            </div>
          </div>
        </div>
        <Header3 img="images/qii4/QII2_Landing_image2.png">
          <p>
            Resilience is more than a safeguard—it's a foundational principle
            for infrastructure that must withstand, adapt to, and recover from
            shocks to ensure uninterrupted service, especially in rapidly
            changing and vulnerable environments.
          </p>
        </Header3>
      </section>
      <section className="color-light">
        <div className="container">
          <div className="center-header">
            <h1 className="light-font mBottom">
              To turn the principle of 'Resilience' into practice, we focus on
              four key actionable aspects:
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
      <section className="q4_landing_page color-dark">
        <div className="container">
          <div className="qii4-video-card">
            <img
              className="desk_image"
              src="images/qii4/QII 2 in Action poster.png"
              alt=""
            />
            <img
              className="mob_image"
              src="images/qii4/QII 2 in Action poster.png"
              alt=""
            />
            {/* <button
					className="qii4-play-btn"
					onClick={() =>
					openVideo(
						"",
						"QII 4 in Action",
						1920,
						1080
					)
					}
				>
					&#9658;
				</button> */}
            <div className="vid-cnt qii4-vid-cnt">
              <button
                className="video-play-btn icon-play"
                onClick={() => {
                  openVideo(
                    "./video/LandingPageVideo.mp4",
                    "QII 4 in Action",
                    1920,
                    1080
                  );
                }}
              >
                &#xe91e;
              </button>
            </div>
            <div className="qii4-video-overlay">
              <p className="qii4-video-title">QII 4 in Action</p>

              <p className="qii4-video-desc">
                The Solomon Islands' adoption of prefabricated modular bridges
                demonstrates an efficient, climate-resilient solution for
                strengthening vital transport infrastructure in the Pacific.
              </p>

              <button className="qii4-video-cta">Explore Case Studies →</button>
            </div>
          </div>
        </div>
      </section>

      <section className="color-dark ">
        <div className="container">
          <div className="center-header">
            <h1 className="light-font mBottom">Top Resources</h1>
          </div>
          <div className="top-resource-card-cnt-qii4">
            <TopResourceCard
              image="images/qii4/Fukuoka image.png"
              title={<p>World Bank Tokyo Disaster Risk Management (DRM) Hub</p>}
              buttonText="Programs"
              link=""
            ></TopResourceCard>
            <TopResourceCard
              image="images/qii4/Ganga-case-study-image.png"
              title={<p>Global Facility For Disaster Reduction And Recovery</p>}
              buttonText="Programs"
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
