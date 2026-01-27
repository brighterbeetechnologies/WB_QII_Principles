import React, { useState, useEffect } from "react";
import "./QIILandingPage.css";
import "./QII5LandingPage.css";
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
import ImagewithStatement from "../components/ImagewithStatement";

export default function QII5LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [preSelectedResources, setPreSelectedResources] = useState([
    {
      show: true,
      category: "QII Principle",
      title: "QII.5 Social",
      id: 1,
    },
  ]);
  const textCrData = [
    {
      id: 0,
      icon: "&#xe919;",
      text: "Widening social and economic inequality",
    },
    {
      id: 0,
      icon: "&#xe922;",
      text: "Underutilization of infrastructure",
    },
    {
      id: 0,
      icon: "&#xe921;",
      text: "Erosion of community trust and social stability",
    },
  ];

  const subPages = [
    {
      id: 0,
      icon: "&#xe919;",
      title: "Inclusion through Policies, Standards and Regulation",
      description:
        "Establishing robust laws, policies, and incentives to ensure infrastructure projects prioritize and embed social inclusion throughout their lifecycle",
      path: "/Policies_Standards_Regulation",
    },
    {
      id: 0,
      icon: "&#xe91b;",
      title: "Inclusion in Project Planning and Design",
      description:
        "Applying universal design principles to address the diverse needs of all user groups and promote equitable participation",
      path: "/Project_Planning_Design",
    },
    {
      id: 0,
      icon: "&#xe91d;",
      title: "Inclusive Stakeholder Engagement",
      description:
        "Involving communities and marginalized groups through participatory processes to ensure meaningful input, ownership, and the safeguarding of their interests",
      path: "/Stakeholder_Engagement",
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
        dir: [{ path: "/qii5", title: "QII.5 Social" }],
      }),
    );
  }, []);
  return (
    <div className="qii2">
      <section className="q2_landing_page color-dark">
        <section className="color-light landingpage-banner">
          <Header3 img="images/QII_Landing_images_updated/QII5_Landing_main.png">
            <div className="langing-page-container">
              <img
                src="images/UpdatedAssets/Qii5.svg"
                alt="landing-page-logo"
                className="landingpage-logo"
              />
              <div className="landingpage-description">
                <p className="light-font">
                  Inclusive infrastructure is built to serve everyone,
                  regardless of age, ability, gender, or background. Inclusion
                  matters socially and economically – wide access to
                  electricity, transport, and digital networks fuels
                  productivity and expands opportunities. More users improve
                  financial viability, especially when capital costs are high
                  and marginal costs low (for example, in public transport).{" "}
                  <br />
                  <br /> To fully realize these social and economic benefits,
                  inclusion must be integrated throughout the infrastructure
                  lifecycle starting with policies and regulations, then through
                  planning and design. Stakeholder engagement throughout these
                  early stages, as well as during project delivery, ensures
                  diverse needs are met.{" "}
                </p>
              </div>
            </div>
          </Header3>
        </section>
        <div className="container internal-pages-cards">
          <div className="center-header">
            <h3 className="light-font">
              Making infrastructure inclusive does not need to be expensive.
              Studies indicate that{" "}
              <a
                href="https://inclusiveinfra.gihub.org/action-areas/policy-regulation-and-standards/#Inclusive_Standards_and_Universal_Design"
                target="_blank"
                rel="noopener noreferrer"
                className="blue-link"
              >
                inclusive design adds only 1–2% to upfront costs
              </a>
              - much less than the cost of future retrofits.
            </h3>
          </div>
          <div className="qii5-sub-pages">
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
      <ImagewithStatement
        backgroundImage={"images/qii2/qii2_img2.png"}
        text={
          "When the building blocks are missing, infrastructure falls into a familiar and costly trap."
        }
      />
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
                      "The Importance of Inclusion in Infrastructure",
                      1920,
                      1080,
                    );
                  }}
                >
                  &#xe91e;
                </button>
                <p className="video-title">
                  <strong>The Importance of Inclusion in Infrastructure</strong>
                </p>
              </div>
            </div>
            <div className="text-cnt">
              <h1 className="light-font mBottom">The Costs of Inaction</h1>
              <h3 className="light-font sub-text">
                Neglecting inclusion in infrastructure deepens inequality and
                reduces the long-term benefits of public investments. This can
                play out as:
              </h3>
              <TextIconCarousal data={textCrData} />
            </div>
          </div>
        </div>
      </section>
      <section className="container internal-pages-container color-dark">
        <h3 className="statement-text">
          <strong>Life cycle costing</strong> breaks this cycle. <br />
          <br />
          By accounting for the <strong>total cost of service delivery</strong>,
          governments and institutions can make smarter investments that deliver
          better value over time.
        </h3>
        <h1 className="light-font "></h1>
      </section>
      <section className="qii_video_landing_page color-light">
             <img
               className="qii_video-thumbnail-image"
               src="images/qii4/QII 2 in Action poster.png"
               alt="video thumbnail"
             />
             <div className="qii-video-overlay"></div>
             <div className="qii-video-cnt">
               <button
                 className="video-play-btn icon-play"
                 onClick={() => {
                   openVideo(
                     "./video/FukuokaCaseStudy.mp4",
                     "QII.2 in Action",
                     1920,
                     1080,
                   );
                 }} 
               >
                 &#xe91e;
               </button>
             </div>
             <div className="qii-video-text-cnt">
               <p className="video-title">QII.5 in Action</p>
               <p className="video-desc">
                 Discover how the design of Maputo's Bus Rapid Transit system is transforming public transport in Mozambique’s capital. 
               </p>
               <Link to="/qii2casestudy1">
                 <button className="btn-primary qii2-video-cta">
                   Explore Case Study <span className="icon-arrow">&#xe900;</span>
                 </button>
               </Link>
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
