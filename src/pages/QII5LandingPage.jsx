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
      id: 4,
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

  const resourceArray = [
    {
      id: 0,
      title:
        "Universal Design Principles - Convention on the Rights of Persons with Disabilities (CRPD) Article 9 ",
      country: false,
      org: false,
      description:
        "Foundation for international accessibility standards referenced throughout World Bank global policy and operational documents. Its mandates shape the development, adoption, and monitoring of accessibility norms and standards worldwide.",
      img_path: "images/qii2/Ganga_case_study.png",
      path: "https://social.desa.un.org/issues/disability/crpd/article-9-accessibility",
      target: "_self",
    },
    {
      id: 1,
      title: "PPP Gender Toolkit",
      country: false,
      org: "World Bank",
      description:
        "A comprehensive resource designed to guide the mainstreaming of gender considerations throughout the lifecycle of infrastructure projects delivered via Public-Private Partnerships (PPPs).",
      img_path: "images/governance/list/01.jpg",
      path: "https://thedocs.worldbank.org/en/doc/61714f214ed04bcd6e9623ad0e215897-0400012021/related/10050-PPP-Gender-Toolkit-1.pdf",
      target: "_blank",
    },
    {
      id: 2,
      title: "Inclusive Infrastructure Toolkit",
      country: false,
      org: "World Bank / GI Hub ",
      description:
        "A practical, evidence-based framework for developing infrastructure that advances social inclusivity. It outlines six key action areas and detailed practices to maximize infrastructure’s impact on reducing inequality and promoting shared prosperity, illustrated by real-life international examples. ",
      img_path: "images/governance/list/01.jpg",
      path: "https://inclusiveinfra.gihub.org/action-areas/policy-regulation-and-standards/",
      target: "_blank",
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
            Discover how the design of Maputo's Bus Rapid Transit system is
            transforming public transport in Mozambique’s capital.
          </p>
          <Link to="/qii2casestudy1">
            <button className="btn-primary qii2-video-cta">
              Explore Case Study <span className="icon-arrow">&#xe900;</span>
            </button>
          </Link>
        </div>
      </section>
      <section className="color-dark">
        <div className="container">
          <h2 className="section-title light-font">QII.5 Case Studies</h2>
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
                        {p.country && (
                          <>
                            <span>{p.country}</span> <br />
                          </>
                        )}
                        <strong>{p.title}</strong>
                        {p.org && (
                          <>
                            <br />
                            <span>{p.org}</span>
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
                              <span>{p.country}</span> <br />
                            </>
                          )}
                          <strong>{p.title}</strong>
                          {p.org && (
                            <>
                              <br />
                              <span>{p.org}</span>
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
                setPreSelectedResources([
                  {
                    show: true,
                    category: "QII Principle",
                    title: "QII.5 Social",
                    id: 4,
                  },
                  {
                    show: true,
                    category: "Media Type",
                    title: "Case Study",
                    id: 1,
                  },
                ]);
              }}
              // disabled
            >
              View All <span className="icon-arrow">&#xe900;</span>
            </button>
          </div>
        </div>
      </section>
      <section className="color-light z-2" id="resourcesSection">
        <ResourceLibrary
          subPages={subPages}
          preSelected={preSelectedResources}
        ></ResourceLibrary>
      </section>
    </div>
  );
}
