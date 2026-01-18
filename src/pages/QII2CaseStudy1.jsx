import React, { useEffect } from "react";
import Header3 from "../components/Header3";
import ListImageText from "../components/ListImageText";
import "./QII2CaseStudy1.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";

export default function QII2CaseStudy1() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [{ path: "/qii2", title: "QII.2 Economic Efficiency" }],
      }),
    );
  }, []);
  return (
    <div className="CaseStudy">
      <section className="color-light">
        {/* <div className="case-wrapper">
            <div className="case-card">
              <img
                  src="images/qii2/Fukuoka_Case-study.png"
                  alt="Fukuoka Water Infrastructure"
                  className="hero-image"
                />
              <div className="hero-overlay">
                <h1>
                    <span>Fukuoka City:</span>
                    <br />
                    Pioneering Life Cycle Costing for
                    <br />
                    Efficient Water Management
                  </h1>

                <div className="hero-overlay">
                  <h1>
                    <span>Fukuoka City:</span>
                    <br />
                    Pioneering Life Cycle Costing for
                    <br />
                    Efficient Water Management
                  </h1>
                </div>
              </div>
              <div className="case-content">
                <h2 className="case-title">CASE SNAPSHOT</h2>

                <div className="case-grid">
                  <div className="case-item">
                    <span className="label">SECTOR</span>
                    <p>Water</p>
                  </div>

                  <div className="case-item">
                    <span className="label">COUNTRY</span>
                    <p>Japan</p>
                  </div>

                  <div className="case-item">
                    <span className="label">TIMELINE</span>
                    <p>1979 – Present</p>
                  </div>

                  <div className="case-item wide">
                    <span className="label">COST</span>
                    <p>
                      Initial investment of ¥32.5 billion ($148.3 million) for
                      the Water Distribution Control Center and leakage
                      reduction program.
                    </p>
                  </div>

                  <div className="case-item wide">
                    <span className="label">RESULT</span>
                    <ul>
                      <li>IRR of 15%, indicating strong investment value.</li>
                      <li>
                        Leakage reduced from <strong>14%</strong> to{" "}
                        <strong>2%</strong>.
                      </li>
                      <li>
                        Lower operational costs and delayed capital expenditure.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="case-study-links">
              <div className="case-actions">
                <button>View case study summary</button>
                <button>View detailed case study</button>
                <button className="outline">View data</button>
              </div>
            </div>
          </div> */}
        <div className="case-wrapper">
          <div className="case-card">
            <div className="case-image-card">
              <img
                src="images/qii2/Fukuoka_Case-study.png"
                alt="Water Infrastructure"
                className="case-bg-image"
              />
              <div className="case-heading">
                <h1>
                  <span>Fukuoka City : </span>Pioneering
                  <br />
                  Life Cycle Costing for
                  <br />
                  Efficient Water Management
                </h1>
              </div>

              <div className="case-content">
                <h2 className="case-title">CASE SNAPSHOT</h2>

                <div className="case-grid">
                  <div className="case-item">
                    <span className="label">SECTOR</span>
                    <p>Water</p>
                  </div>

                  <div className="dash"></div>

                  <div className="case-item">
                    <span className="label">COUNTRY</span>
                    <p>Japan</p>
                  </div>

                  <div className="case-item">
                    <span className="label">TIMELINE</span>
                    <p>1979 – Present</p>
                  </div>

                  <div className="case-item wide">
                    <span className="label">COST</span>
                    <p>
                      Initial investment of ¥32.5 billion ($148.3 million) for
                      the Water Distribution Control Center and leakage
                      reduction program.
                    </p>
                  </div>

                  <div className="case-item wide">
                    <span className="label">RESULT</span>
                    <ul>
                      <li>
                        Internal Rate of Return (IRR) of 15%, demonstrating
                        sound investment decisions.
                      </li>
                      <li>
                        Leakage rate reduced from <strong>14% in 1979 to 2% by
                        mid-2000s</strong>, significantly lowering operational costs and
                        water production needs.
                      </li>
                      <li>
                        Delayed capital expenditures by controlling demand
                        through water reclamation facilities and usage-based
                        tariffs.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
