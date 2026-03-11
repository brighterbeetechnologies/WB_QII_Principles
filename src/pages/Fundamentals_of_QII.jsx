import React, { useEffect } from "react";
import "./Fundamentals_of_QII.css";
import Header3 from "../components/Header3";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";

export default function Fundamentals_of_QII() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [{ path: "/fundamentals_of_qii", title: "Fundamentals of QII" }],
      }),
    );
  }, []);
  return (
    <div className="fundamentals_of_qii">
      <section className="color-dark">
        <div className="fundamentals_of_qii-header">
          <div className="fundamentals_of_qii-header-bg"></div>
          <div className="fundamentals_of_qii-header-title">
            <h1>Quality Infrastructure Investment</h1>
            <p>Transforming how the world delivers infrastructure</p>
          </div>
        </div>
      </section>
      <section className="what-is-qii-section color-dark">
        <h3 className="center-text">
          <strong>WHAT IS QII</strong>
        </h3>
        <p className="what-is-qii-description">
          The G20 Principles for Quality Infrastructure Investment are a set of
          voluntary, non-binding principles that reflect the G20's common
          strategic direction and aspiration for quality infrastructure
          investment.
          <br />
          <br />
          The QII Partnership is a collaboration between the World Bank and the
          Government of Japan focused on advancing green, resilient, and
          inclusive development through World Bank infrastructure projects.
          <br />
          <br />
          Priorities include increasing quality in procurement, economic
          efficiency in view of life-cycle cost, and strengthened standards for
          resilience, inclusion, and governance.
        </p>
      </section>
      <section className="container internal-pages-container color-light">
        <div className="qii-generations">
          <div className="qii-timeline">
            <div className="timeline-item-title-1">
              <p className="timeline-item-title-2-para-1">
                Japan announces the Partnership for Quality Infrastructure,
                establishing quality as a priority for development finance
              </p>
              <img
                className="blue-curve-img-1"
                src="images/fundamentals_of_qii/Timeline01.png"
                alt=""
              />
              <div className="timeline-circle-1">2015</div>
            </div>
            <div className="timeline-item-title-1">
              <p className="timeline-item-title-2-para-2">
                G7 leaders endorse principles for quality infrastructure at the
                Ise-Shima Summit; World Bank and Japan establish the QII
                Partnership to put them into practice
              </p>
              <img
                className="dark-blue-curve-img-1"
                src="images/fundamentals_of_qii/Timeline02.png"
                alt=""
              />
              <div className="timeline-circle-2">2016</div>
            </div>
            <div className="timeline-item-title-1">
              <p className="timeline-item-title-2-para-3">
                G20 adopts six QII Principles at the Osaka Summit, extending the
                framework to advanced and emerging economies as a voluntary
                global standard
              </p>
              <img
                className="blue-curve-img-1"
                src="images/fundamentals_of_qii/Timeline01.png"
                alt=""
              />
              <div className="timeline-circle-3">2019</div>
            </div>
            <div className="timeline-item-title-1">
              <p className="timeline-item-title-2-para-4">
                OECD publishes implementation guidance to help governments
                operationalize QII across the project lifecycle
              </p>
              <img
                className="dark-blue-curve-img-1"
                src="images/fundamentals_of_qii/Timeline02.png"
                alt=""
              />
              <div className="timeline-circle-4">2021</div>
            </div>
            <div className="timeline-item-title-1">
              <p className="timeline-item-title-2-para-5">
                The QII Partnership is at the heart of integrating the QII
                principles across World Bank operations and beyond, shaping
                infrastructure investments and strengthening economies,
                communities, and the environment for generations.
              </p>
              <img
                className="blue-curve-img-1"
                src="images/fundamentals_of_qii/Timeline01.png"
                alt=""
              />
              <div className="timeline-circle-5">Today</div>
            </div>
          </div>
        </div>
        <div className="qii-generation-footer">
          <button className="btn-primary qii-generation-btn">
            Learn More About Qii's Global Reach{" "}
            <span className="icon-arrow">&#xe900;</span>
          </button>
        </div>
      </section>
      <section className="color-light">
        <div className="image-text-container">
          <div className="image-text-container-desc">
            <p>
              <strong>$74 Billion in World Bank Operations</strong>
            </p>
            <p>
              The QII Partnership has backed $7 billion in World Bank
              infrastructure operations, with close to 350 interventions across
              93 countries and $85 million in total commitment as of FY25.
            </p>
          </div>
          <div className="image-text-container-imag">
            <img
              src="images/fundamentals_of_qii/shutterstock_2492762449.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="container internal-pages-container color-light">
        <h3 className="center-text">
          <strong>EXPLORE THE PRINCIPLES IN DEPTH</strong>
        </h3>
        <p className="fundamentals_of_qii-footer-section">
          Learn how each principle translates into practical guidance for
          infrastructure investment.
        </p>
        <div className="qii-generation-footer">
          <button className="btn-primary qii-generation-btn">
            Explore QII Principles{" "}
            <span className="icon-arrow">&#xe900;</span>
          </button>
        </div>
      </section>
    </div>
  );
}
