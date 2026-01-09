import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { principles, setBradcrump } from "../slices/appDataSlice";
import "./Home.css";
import ResourceLibrary from "./ResourceLibrary";
import FAQ from "../components/FAQ";
import { Link } from "react-router-dom";
import SearchBox from "../components/SearchBox";
export default function Home() {
  const principleArray = useSelector(principles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBradcrump({ show: false, dir: [] }));
  }, []);
  return (
    <div className="home color-light">
      <section className="landing_page">
        <div className="circle-bg">
          <img src="images/circle_right.png" />
        </div>
        <img className="landing_page_bg" src="images/landing_image.jpg" />
        <div className="container">
          <div className="content_left">
            <h1>
              <strong>
                How Can We Help You Build Quality Infrastructure Today?
              </strong>
            </h1>
            <p className="light-font ">
              Explore tools, principles, and resources to apply Quality
              Infrastructure Investment (QII) principles to your projects.
            </p>
            <SearchBox></SearchBox>
          </div>
        </div>
      </section>
      <section className="color-dark  principles-page">
        <div className="circle-bg">
          <img src="images/circle_left.png" />
        </div>
        <div className="container">
          <h2 className="section-title light-font">Explore QII Principles</h2>
          <div className="principles-grid" role="list">
            {principleArray.map((p, index) => (
              <article
                className="principle-card"
                key={index}
                role="listitem"
                style={{ backgroundImage: `url(${p.img})` }}
              >
                {" "}
                <Link to={p.path}>
                  <div className="card-link">
                    <div className="card-overlay" />

                    <div className="card-body">
                      <img src={p.img_path} alt={p.title} />
                    </div>

                    <div className="card-arrow">
                      <span className="icon-arrow">&#xe900;</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <div className="bottom-text-1">
            <p>Want to know more about the fundamentals of QII?</p>
            <p>
              <a href="#" target="_blank" className="">
                Click <span className="link">here</span>
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="color-light z-2">
        <ResourceLibrary></ResourceLibrary>
      </section>
      <section className="color-dark faq_page">
        <div className="circle-bg">
          <img src="images/circle_right.png" />
        </div>
        <FAQ></FAQ>
      </section>
    </div>
  );
}
