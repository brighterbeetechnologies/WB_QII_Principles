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
      <section className="color-light">
        <div className="fundamentals_of_qii-header">
          <div className="fundamentals_of_qii-header-bg"></div>
          <div className="fundamentals_of_qii-header-title">
            <h1>Quality Infrastructure Investment</h1>
            <p>Transforming how the world delivers infrastructure</p>
          </div>
        </div>
      </section>
      <section className="what-is-qii-section color-dark">
        <h3 className="center-text">WHAT IS QII</h3>
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
              <p>Japan announces the Partnership for Quality Infrastructure.</p>
              <img
                className="blue-curve-img-1"
                src="images/fundamentals_of_qii/Path 7066.svg"
                alt=""
              />
              <div className="timeline-circle">2015</div>
            </div>
          </div>

          {/* <img className="blue-curve-img-1" src="images/fundamentals_of_qii/Path 7066.svg" alt="" />
          <img className="dark-blue-curve-img-2" src="images/fundamentals_of_qii/Path 7069.svg" alt="" />
          <img className="blue-curve-img-3" src="images/fundamentals_of_qii/Path 7066.svg" alt="" />
          <img className="dark-blue-curve-img-4" src="images/fundamentals_of_qii/Path 7069.svg" alt="" />
          <img className="blue-curve-img-5" src="images/fundamentals_of_qii/Path 7066.svg" alt="" /> */}
        </div>
      </section>
      <section className="container internal-pages-container color-dark"></section>
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
            <img src="images/qii2/video_bg.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
