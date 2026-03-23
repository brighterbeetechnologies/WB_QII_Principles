import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Fundamentals_of_QII.css";
import Header3 from "../components/Header3";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";
import { Link } from "react-router-dom";

export default function Fundamentals_of_QII() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [{ path: "/fundamentals_of_qii", title: "Fundamentals of QII" }],
      }),
    );
  }, []);

  const data = [
    {
      icon: "images/fundamentals_of_qii/QII1.svg",
      title:
        "Maximizing the positive impact of infrastructure to achieve sustainable growth and development.",
      desc: " Quality infrastructure creates a virtuous circle through job creation, technology transfer, capacity building, and productivity improvement that crowds in further private investment.",
    },

    {
      icon: "images/fundamentals_of_qii/Qii2.svg",
      title: "Raising economic efficiency in view of life-cycle cost.  ",
      desc: "Quality infrastructure attains value for money by accounting for total costs across planning, design, construction, operation, maintenance, and possible disposal. ",
    },

    {
      icon: "images/fundamentals_of_qii/Qii3.svg",
      title:
        "Integrating environmental considerations in infrastructure investment.  ",
      desc: "Both positive and negative impacts on ecosystems, biodiversity, and climate should be assessed throughout the project life-cycle, with transparent disclosure to all stakeholders. ",
    },

    {
      icon: "images/fundamentals_of_qii/Qii4.svg",
      title: "Building resilience against natural disasters and other risks.",
      desc: "Quality infrastructure ensures long-term adaptability through sound disaster risk management in design, ongoing maintenance, and well-designed risk finance and insurance mechanisms. ",
    },

    {
      icon: "images/principles/Qii_5.png",
      title: "Integrating social considerations in infrastructure investment.",
      desc: "Quality infrastructure is inclusive, enabling economic participation and social inclusion of all through non-discriminatory access, meaningful community consultation, and equal opportunity for workers. ",
    },

    {
      icon: "images/fundamentals_of_qii/Qii6.svg",
      title: "Strengthening infrastructure governance.",
      desc: "Sound governance ensures accountability, transparency, and integrity through open procurement, anti-corruption efforts, debt sustainability considerations, and access to information and data for decision-making. ",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const total = data.length;

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex(activeIndex === 0 ? total - 1 : activeIndex - 1);
      setFade(true);
    }, 200);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex(activeIndex === total - 1 ? 0 : activeIndex + 1);
      setFade(true);
    }, 200);
  };

  return (
    <div className="fundamentals_of_qii">
      <section className="color-dark">
        <div className="fundamentals_of_qii-header">
          <div className="fundamentals_of_qii-header-bg">
            {/* <img src="images/fundamentals_of_qii/QII2_Landing_main.png" alt="" /> */}
          </div>
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
        <p className="what-is-qii-title">
          Infrastructure is a driver of economic growth and prosperity.
        </p>
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
        <h3 className="center-text-qii-generations">
          <strong>THE PATH TO GLOBAL ADOPTION </strong>
        </h3>
        <div className="qii-generations">
          <div className="qii-generation-upper-description-container">
            <div className="timeline-item-text">
              Japan announces the Partnership for Quality Infrastructure,
              establishing quality as a priority for development finance
            </div>
            <div className="timeline-item-text">
              <span style={{ opacity: 0 }}>
                Japan announces the Partnership
              </span>
            </div>
            <div className="timeline-item-text">
              G20 adopts six QII Principles at the Osaka Summit, extending the
              framework to advanced and emerging economies as a voluntary global
              standard
            </div>
            <div className="timeline-item-text">
              <span style={{ opacity: 0 }}>
                Japan announces the Partnership
              </span>
            </div>
            <div className="timeline-item-text">
              The QII Partnership is at the heart of integrating the QII
              principles across World Bank operations and beyond, shaping
              infrastructure investments and strengthening economies,
              communities, and the environment for generations.
            </div>
          </div>
          <div className="qii-generation-timeline-image-container">
            <div className="timeline-item-text-image">
              <img src="images/fundamentals_of_qii/Timeline01.png" alt="" />
              <div className="timeline-circle-1">2015</div>
            </div>
            <div className="timeline-item-text-image">
              <img src="images/fundamentals_of_qii/Timeline02.png" alt="" />
              <div className="timeline-circle-1">2016</div>
            </div>
            <div className="timeline-item-text-image">
              <img src="images/fundamentals_of_qii/Timeline01.png" alt="" />
              <div className="timeline-circle-1">2019</div>
            </div>
            <div className="timeline-item-text-image">
              <img src="images/fundamentals_of_qii/Timeline02.png" alt="" />
              <div className="timeline-circle-1">2021</div>
            </div>
            <div className="timeline-item-text-image">
              <img src="images/fundamentals_of_qii/Timeline01.png" alt="" />
              <div className="timeline-circle-1">Today</div>
            </div>
          </div>
          <div className="qii-generation-bottom-description-container">
            <div className="timeline-item-text">
              <span style={{ opacity: 0 }}>
                Japan announces the Partnership
              </span>
            </div>
            <div className="timeline-item-text">
              G7 leaders endorse principles for quality infrastructure at the
              Ise-Shima Summit; World Bank and Japan establish the QII
              Partnership to put them into practice
            </div>
            <div className="timeline-item-text">
              <span style={{ opacity: 0 }}>
                Japan announces the Partnership
              </span>
            </div>
            <div className="timeline-item-text">
              OECD publishes implementation guidance to help governments
              operationalize QII across the project lifecycle
            </div>
            <div className="timeline-item-text">
              <span style={{ opacity: 0 }}>
                Japan announces the Partnership
              </span>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="qii-generations-mobile">
          <div className="qii-generation-container-mobile">
            <div className="qii-generation-description-mobile-left"></div>
            <div className="qii-generation-image-mobile">
              <img src="images/fundamentals_of_qii/Timeline01.svg" alt="" />
              <div className="timeline-circle-1-mobile">2015</div>
            </div>
            <div className="qii-generation-description-mobile-right">
              Japan announces the Partnership for Quality Infrastructure,
              establishing quality as a priority for development finance
            </div>
          </div>
          <div className="qii-generation-container-mobile">
            <div className="qii-generation-description-mobile-left">
              G7 leaders endorse principles for quality infrastructure at the
              Ise-Shima Summit; World Bank and Japan establish the QII
              Partnership to put them into practice
            </div>
            <div className="qii-generation-image-mobile">
              <img src="images/fundamentals_of_qii/Timeline02.svg" alt="" />
              <div className="timeline-circle-1-mobile">2016</div>
            </div>
            <div className="qii-generation-description-mobile-right"></div>
          </div>
          <div className="qii-generation-container-mobile">
            <div className="qii-generation-description-mobile-left"></div>
            <div className="qii-generation-image-mobile">
              <img src="images/fundamentals_of_qii/Timeline01.svg" alt="" />
              <div className="timeline-circle-1-mobile">2019</div>
            </div>
            <div className="qii-generation-description-mobile-right">
              G20 adopts six QII Principles at the Osaka Summit, extending the
              framework to advanced and emerging economies as a voluntary global
              standard
            </div>
          </div>
          <div className="qii-generation-container-mobile">
            <div className="qii-generation-description-mobile-left">
              OECD publishes implementation guidance to help governments
              operationalize QII across the project lifecycle
            </div>
            <div className="qii-generation-image-mobile">
              <img src="images/fundamentals_of_qii/Timeline02.svg" alt="" />
              <div className="timeline-circle-1-mobile">2021</div>
            </div>
            <div className="qii-generation-description-mobile-right"></div>
          </div>
          <div className="qii-generation-container-mobile">
            <div className="qii-generation-description-mobile-left"></div>
            <div className="qii-generation-image-mobile">
              <img src="images/fundamentals_of_qii/Timeline01.svg" alt="" />
              <div className="timeline-circle-1-mobile">Today</div>
            </div>
            <div className="qii-generation-description-mobile-right">
              The QII Partnership is at the heart of integrating the QII
              principles across World Bank operations and beyond, shaping
              infrastructure investments and strengthening economies,
              communities, and the environment for generations.
            </div>
          </div>
        </div>

        {/* mobile-end */}
        <div className="qii-generation-footer">
          <a
            href="https://documents1.worldbank.org/curated/en/099641102192572864/pdf/IDU197aac9681a3a314073184481b0790ef3da98.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary qii-generation-btn"
          >
            Learn More About QII's Global Reach{" "}
            <span className="icon-arrow">&#xe900;</span>
          </a>
        </div>
      </section>
      <section className="container internal-pages-container color-dark">
        <h3 className="center-text qii-life-cycle">
          <strong>THE GLOBAL INFRASTRUCTURE CHALLENGE</strong>
        </h3>
        <div className="global-infrastructure-section-container">
          <div className="global-infrastructure-section-left">
            <div className="global-infrastructure-section-left-img">
              <img src="images/fundamentals_of_qii/Globe.svg" alt="" />
            </div>
            <div className="global-infrastructure-section-left-title">
              <p className="global-infrastructure-section-left-heading">
                <strong>$106 trillion</strong>
              </p>
              <p>Infrastructure investment needed by 2040</p>
            </div>
            <div className="global-infrastructure-section-left-group-icons">
              <img src="images/fundamentals_of_qii/Icongroup1.png" alt="" />
            </div>
            <div className="global-infrastructure-section-left-description">
              <p>
                <strong>Closing the Gap</strong> <br />
                <br />
                Addressing the global need for new and improved infrastructure
                will require roughly $106 trillion in investment by 2040,
                spanning transportation, energy, digital, social, and other
                critical sectors.
              </p>
            </div>
            <div className="global-infrastructure-section-left-des-link">
              <p className="center-light-text-2">
                Source:{" "}
                <Link
                  to={
                    "https://www.mckinsey.com/industries/infrastructure/our-insights/the-infrastructure-moment"
                  }
                  target="_blank"
                  className="link"
                >
                  McKinsey, The Infrastructure Moment, 2025
                </Link>
              </p>
            </div>
          </div>
          <div className="global-infrastructure-section-right">
            <div className="global-infrastructure-section-right-title">
              <p className="global-infrastructure-section-right-sub-title">
                Up to <strong>50%</strong>
              </p>
              {/* <p>
                <strong>50%</strong>
              </p> */}
              <p className="global-infrastructure-section-right-sub-title">
                Reduction in replacement costs through proper maintenance
              </p>
              <p className="global-infrastructure-section-right-title-1">
                Quality and quantity are complementary:
              </p>
            </div>
            <div className="global-infrastructure-section-left-group-icons-container">
              <div className="global-infrastructure-section-left-group-icons-left">
                <div className="global-infrastructure-section-left-group-icons-img">
                  <img src="images/fundamentals_of_qii/Icongroup2.png" alt="" />
                </div>
                {/* <div className="global-infrastructure-section-left-group-icons-title">
                  <p>
                    <strong>Well-planned, sustainable infrastructure</strong>
                  </p>
                  <p>
                    <strong>Maximizes economic and social returns</strong>
                  </p>
                </div> */}
              </div>
              <div className="global-infrastructure-section-left-group-icons-right">
                <div className="global-infrastructure-section-left-group-icons-img-right">
                  <img src="images/fundamentals_of_qii/Icongroup3.png" alt="" />
                </div>
                {/* <div className="global-infrastructure-section-left-group-icons-title-right">
                  <p>
                    <strong>
                      With poor planning, assets fail early and cost more to
                      maintain
                    </strong>
                  </p>
                  <p>
                    <strong>Exclude those who need services most</strong>
                  </p>
                </div> */}
              </div>
            </div>
            <div className="global-infrastructure-section-right-description">
              <p>
                <strong>Why Quality Matters </strong> <br />
                <br />
                Well-planned, sustainable infrastructure maximizes economic and
                social returns, while poor planning leads to assets that fail
                early, cost more to maintain, and exclude those who need
                services most.
              </p>
            </div>
            <div className="global-infrastructure-section-right-des-link">
              <p className="center-light-text-2">
                Source:{" "}
                <Link
                  to={
                    "https://www.mofa.go.jp/policy/economy/g20_summit/osaka19/pdf/documents/en/annex_01.pdf"
                  }
                  target="_blank"
                  className="link"
                >
                  G20 Principles for Quality Infrastructure Investment,
                  Preamble, 2019
                </Link>
              </p>
            </div>
          </div>
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
        <h3 className="center-text qii-life-cycle">
          <strong>THE LIFE-CYCLE PERSPECTIVE</strong>
        </h3>
        <p className="qii-six-principles-section">
          Quality infrastructure requires thinking beyond construction to
          consider impacts across an asset's entire lifespan.
          <br />
          <br />
          Each of the six QII Principles applies at every stage.
        </p>
        <div className="qii-life-cycle-container-images">
          <img
            src="images/fundamentals_of_qii/11/5.png"
            alt=""
            className="qii-life-cycle-img-5"
          />
          <img
            src="images/fundamentals_of_qii/11/4.png"
            alt=""
            className="qii-life-cycle-img-4"
          />
          <img
            src="images/fundamentals_of_qii/11/3.png"
            alt=""
            className="qii-life-cycle-img-3"
          />
          <img
            src="images/fundamentals_of_qii/11/2.png"
            alt=""
            className="qii-life-cycle-img-2"
          />
          <img
            src="images/fundamentals_of_qii/11/1.png"
            alt=""
            className="qii-life-cycle-img-1"
          />
          <img
            src="images/fundamentals_of_qii/11/1.png"
            alt=""
            style={{ width: "22.4%", opacity: 0, position: "relative" }}
          />
          <p className="qii-life-cycle-img-txt-1">Planning</p>
          <p className="qii-life-cycle-img-txt-2">Design</p>
          <p className="qii-life-cycle-img-txt-3">Construction</p>
          <p className="qii-life-cycle-img-txt-4">Operation</p>
          <p className="qii-life-cycle-img-txt-5">Maintenance</p>
        </div>
        <div className="qii-life-cycle-container-section">
          <div className="qii-life-cycle-container qii-life-cycle-container-1">
            <div className="qii-life-cycle-stage-1-desc">
              Are we assessing long-term costs, environmental impacts, and
              community needs from the start?
            </div>
          </div>
          <div className="qii-life-cycle-container qii-life-cycle-container-1">
            {/* <div className="qii-life-cycle-stage-image qii-life-cycle-stage-img-1">
              <img src="images/fundamentals_of_qii/11/1.png" alt="" />
              <div className="qii-life-cycle-stage-1-title">Planning</div>
            </div> */}
            <div className="qii-life-cycle-stage-1-desc">
              Are we assessing long-term costs, environmental impacts, and
              community needs from the start?
            </div>
          </div>
          <div className="qii-life-cycle-container qii-life-cycle-container-1">
            {/* <div className="qii-life-cycle-stage-image qii-life-cycle-stage-img-1">
              <img src="images/fundamentals_of_qii/11/1.png" alt="" />
              <div className="qii-life-cycle-stage-1-title">Planning</div>
            </div> */}
            <div className="qii-life-cycle-stage-1-desc">
              Are we assessing long-term costs, environmental impacts, and
              community needs from the start?
            </div>
          </div>
          <div className="qii-life-cycle-container qii-life-cycle-container-1">
            {/* <div className="qii-life-cycle-stage-image qii-life-cycle-stage-img-1">
              <img src="images/fundamentals_of_qii/11/1.png" alt="" />
              <div className="qii-life-cycle-stage-1-title">Planning</div>
            </div> */}
            <div className="qii-life-cycle-stage-1-desc">
              Are we assessing long-term costs, environmental impacts, and
              community needs from the start?
            </div>
          </div>
          <div className="qii-life-cycle-container qii-life-cycle-container-5">
            {/* <div className="qii-life-cycle-stage-image qii-life-cycle-stage-img-5">
              <img src="images/fundamentals_of_qii/11/5.png" alt="" />
              <div className="qii-life-cycle-stage-1-title qii-life-cycle-stage-1-title-1">
                Maintenance
              </div>
            </div> */}
            <div className="qii-life-cycle-stage-1-desc">
              Are we preserving value, adapting to changing conditions, and
              extending asset life?
            </div>
          </div>
        </div>

        {/* mobile start */}
        <div className="qii-life-cycle-container-section-mobile">
          <div className="mobile-qii-life-cycle-container mobile-qii-life-cycle-container-1">
            <img
              src="images/fundamentals_of_qii/11/1_mobile.png"
              alt=""
              className="mobile-qii-life-cycle-img-1"
            />
            <p className="qii-life-cycle-img-txt-1-mobile">Planning</p>
            <p className="qii-life-cycle-description-mobile">
              Are we assessing long-term costs, environmental impacts, and
              community needs from the start?
            </p>
          </div>
          <div className="mobile-qii-life-cycle-container mobile-qii-life-cycle-container-2">
            <img
              src="images/fundamentals_of_qii/11/2_mobile.png"
              alt=""
              className="mobile-qii-life-cycle-img-2"
            />
            <p className="qii-life-cycle-img-txt-1-mobile">Design</p>
            <p className="qii-life-cycle-description-mobile">
              Are we building in resilience, accessibility, and operational
              efficiency?
            </p>
          </div>
          <div className="mobile-qii-life-cycle-container mobile-qii-life-cycle-container-3">
            <img
              src="images/fundamentals_of_qii/11/3_mobile.png"
              alt=""
              className="mobile-qii-life-cycle-img-4"
            />
            <p className="qii-life-cycle-img-txt-1-mobile">Construction</p>
            <p className="qii-life-cycle-description-mobile">
              Are we ensuring quality, transparency, and local capacity
              building?
            </p>
          </div>
          <div className="mobile-qii-life-cycle-container mobile-qii-life-cycle-container-4">
            <img
              src="images/fundamentals_of_qii/11/4_mobile.png"
              alt=""
              className="mobile-qii-life-cycle-img-5"
            />
            <p className="qii-life-cycle-img-txt-1-mobile">Operation</p>
            <p className="qii-life-cycle-description-mobile">
              Are we delivering inclusive services while managing costs and
              risks?
            </p>
          </div>
          <div className="mobile-qii-life-cycle-container mobile-qii-life-cycle-container-5">
            <img
              src="images/fundamentals_of_qii/11/5_mobile.png"
              alt=""
              className="mobile-qii-life-cycle-img-6"
            />
            <p className="qii-life-cycle-img-txt-1-mobile qii-life-cycle-img-txt-1-mobile-5">
              Maintenance
            </p>
            <p className="qii-life-cycle-description-mobile">
              Are we preserving value, adapting to changing conditions, and
              extending asset life?
            </p>
          </div>
          {/* <p className="qii-life-cycle-img-txt-1-mobile">Planning</p>
          <p className="qii-life-cycle-img-txt-2-mobile">Design</p>
          <p className="qii-life-cycle-img-txt-3-mobile">Construction</p>
          <p className="qii-life-cycle-img-txt-4-mobile">Operation</p>
          <p className="qii-life-cycle-img-txt-5-mobile">Maintenance</p> */}
          {/* </div> */}

          {/* <div className="qii-life-cycle-container-mobile">
            <div className="qii-life-cycle-stage-image-mobile qii-life-cycle-stage-img-1-mobile">
              <img src="images/fundamentals_of_qii/11/1_mobile.png" alt="" />
              <div className="qii-life-cycle-stage-1-title-mobile">
                Planning
              </div>
            </div>
            <div className="qii-life-cycle-stage-1-desc-mobile">
              Are we assessing long-term costs, environmental impacts, and
              community needs from the start?
            </div>
          </div>
          <div className="qii-life-cycle-container-mobile">
            <div className="qii-life-cycle-stage-image-mobile qii-life-cycle-stage-img-2-mobile">
              <img src="images/fundamentals_of_qii/11/2_mobile.png" alt="" />
              <div className="qii-life-cycle-stage-2-title-mobile">Design</div>
            </div>
            <div className="qii-life-cycle-stage-1-desc-mobile">
              Are we building in resilience, accessibility, and operational
              efficiency?
            </div>
          </div>
          <div className="qii-life-cycle-container-mobile">
            <div className="qii-life-cycle-stage-image-mobile qii-life-cycle-stage-img-2-mobile">
              <img src="images/fundamentals_of_qii/11/3_mobile.png" alt="" />
              <div className="qii-life-cycle-stage-3-title-mobile">
                Construction
              </div>
            </div>
            <div className="qii-life-cycle-stage-1-desc-mobile">
              Are we ensuring quality, transparency, and local capacity
              building?
            </div>
          </div>
          <div className="qii-life-cycle-container-mobile">
            <div className="qii-life-cycle-stage-image-mobile qii-life-cycle-stage-img-2-mobile">
              <img src="images/fundamentals_of_qii/11/4_mobile.png" alt="" />
              <div className="qii-life-cycle-stage-4-title-mobile">
                Operation
              </div>
            </div>
            <div className="qii-life-cycle-stage-1-desc-mobile">
              Are we delivering inclusive services while managing costs and
              risks?
            </div>
          </div>
          <div className="qii-life-cycle-container-mobile">
            <div className="qii-life-cycle-stage-image-mobile qii-life-cycle-stage-img-2-mobile">
              <img src="images/fundamentals_of_qii/11/5_mobile.png" alt="" />
              <div className="qii-life-cycle-stage-5-title-mobile">
                Maintenance
              </div>
            </div>
            <div className="qii-life-cycle-stage-1-desc-mobile">
              Are we preserving value, adapting to changing conditions, and
              extending asset life?
            </div>
          </div> */}
        </div>
        {/* mobile end */}
      </section>
      <section className="container internal-pages-container color-dark">
        <h3 className="center-text qii-six-principles">
          <strong>THE SIX QII PRINCIPLES</strong>
        </h3>
        <p className="qii-six-principles-section">
          Endorsed by G20 Finance Ministers on June 9, 2019, and by Leaders at
          the G20 Osaka Summit on June 29, 2019. These six voluntary and
          non-binding QII Principles reflect the G20’s common strategic
          direction and aspiration for quality infrastructure investment.
        </p>
        <div
          className={`qii-six-principles-section-curosal ${fade ? "fade-in" : "fade-out"}`}
        >
          <div className="qii-six-principles-section-curosal-img">
            <img src={data[activeIndex].icon} alt="" />
          </div>
          <div className="qii-six-principles-section-curosal-description">
            <p className="qii-six-principles-section-curosal-title">
              <strong>{data[activeIndex].title}</strong>
            </p>
            <p className="qii-six-principles-section-curosal-desc">
              {data[activeIndex].desc}
            </p>
          </div>
        </div>
        <div className="qii-six-principles-section-pagination-wrapper">
          <button
            className="qii-six-principles-section-nav-btn"
            onClick={handlePrev}
          >
            <span className="qii-six-principles-section-arrow-2">&#xe900;</span>
          </button>
          <div className="qii-six-principles-section-dots">
            {data.map((_, index) => (
              <span
                key={index}
                className={`qii-six-principles-section-dot ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <button
            className="qii-six-principles-section-nav-btn"
            onClick={handleNext}
          >
            <span className="qii-six-principles-section-arrow">&#xe900;</span>
          </button>
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
          <button
            className="btn-primary qii-generation-btn"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/", {
                state: {
                  scrollTo: "priciple-sections",
                },
              });
            }}
          >
            Explore QII Principles <span className="icon-arrow">&#xe900;</span>
          </button>
        </div>
      </section>
    </div>
  );
}
