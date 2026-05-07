import React, { useEffect } from "react";
import "./Infrastructure_Institutions.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import Header3 from "../components/Header3";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";
import VCardsPagination from "../components/VCardsPagination";
import { useLocation } from "react-router-dom";

export default function Infrastructure_Institutions() {
  const location = useLocation();
  const STEP1_PAGE_SIZE = 3;
  const step1Cards = [
    {
      rId: 208,
      image:
        "images/qii6/Infrastructure-Institutions/InfraGov-Assessment-Framework.png",
      title: (
        <p>
          Global <br />
          <strong>Infrastructure Governance​</strong> <br />
          Infrastructure Governance Facility​
        </p>
      ),
      buttonText: "Framework",
      link: "https://infrastructuregovern.imf.org/",
      content: (
        <p>
          The Infrastructure Governance framework provides frameworks and tools
          to help countries strengthen legal and regulatory structures, ensuring
          transparent, efficient, and accountable public infrastructure
          investment management.
          {/* <br />
          <br />
          The OECD Infrastructure Toolkit provides practical guidance for
          designing stakeholder engagement plans that are inclusive and
          systematic. */}
        </p>
      ),
    },
  ];

  const step2Cards = [
    {
      rId: 214,
      image:
        "images/qii6/Infrastructure-Institutions/OECDRecommendationonPublicInvestment.png",
      title: (
        <p>
          Global <br />
          <strong>Effective Multi-Level Public Investment​</strong> <br />
          Organisation for Economic Co-operation and Development
        </p>
      ),
      buttonText: "Guidance note",
      link: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2019/08/effective-multi-level-public-investment_4bcedf6d/c3bc625b-en.pdf",
      content: (
        <p>
          This resource provides a comprehensive framework to help governments
          at all levels work together more effectively on public investment. It
          covers 12 principles organized around three pillars: coordination,
          capacities, and framework conditions, addressing the challenges of
          fragmented responsibilities and the need for coherent investment
          strategies.
          <br />
          <br />
          <span className="secound-desc">
            Chapter 2 details practical mechanisms for reinforcing coordination
            across government levels, emphasizing joint investment strategies,
            intergovernmental dialogue, and capacity-building to unify standards
            and promote accountability in public infrastructure investment
            decisions.
          </span>
        </p>
      ),
    },
  ];

  const step3Cards = [
    {
      rId: 215,
      image: "images/qii6/shutterstock_2704307853.jpg",
      title: (
        <p>
          Global <br />
          <strong>Cost Infrastructure Transparency Initiative</strong> <br />
          Infrastructure Transparency Initiative (CoST)
        </p>
      ),
      buttonText: "Guidance note",
      link: "https://infrastructuretransparency.org/wp-content/uploads/2024/03/WIN-COST-IDB_Brief_InfraPlanning_2023_v4_ok.pdf",
      content: (
        <p>
          This is a practical resource for embedding transparency throughout the
          infrastructure planning phase, to tackle corruption and strengthen
          public confidence in infrastructure decision-making processes.
        </p>
      ),
    },
    {
      rId: 220,
      image: "images/qii6/shutterstock_2661513413.jpg",
      title: (
        <p>
          Global <br />
          <strong>Well Spent</strong> <br />
          International Monetary Fund
        </p>
      ),
      buttonText: "Guidance note",
      link: "https://www.elibrary.imf.org/display/book/9781513511818/9781513511818.xml",
      content: (
        <p>
          This 2020 IMF book draws on PIMAs conducted in more than 60 countries
          to address how countries can attain quality infrastructure outcomes
          through better governance. It covers controlling corruption, managing
          fiscal risks, integrating planning and budgeting, and best practices
          in project appraisal and selection.
          <br />
          <br />
          <span className="secound-desc">
            Table 10.3 (Measures and Indicators to Prevent and Detect Corruption
            in Public Infrastructure) provides a comprehensive list of measures
            and indicators designed to identify vulnerabilities and detect
            corruption across the infrastructure investment cycle.
          </span>
        </p>
      ),
    },
  ];

  const step4Cards = [
    {
      rId: 217,
      image:
        "images/qii6/Infrastructure-Institutions/UNEP-Integrated-Approaches-in-Action.png",
      title: (
        <p>
          Global <br />
          <strong>Integrated Approaches in Action</strong> <br /> United Nations
          Environment Programme
        </p>
      ),
      buttonText: "Guidance note",
      link: "https://www.uncclearn.org/wp-content/uploads/2021/12/Session-1b-UNEP_Integrated-Approaches-in-Action.pdf",
      content: (
        <p>
          This showcases integrated approaches to infrastructure planning in
          small island developing states, highlighting how countries can align
          infrastructure investments with climate resilience and sustainable
          development goals.
          <br />
          <br />
          <span className="secound-desc">
            Saint Lucia's National Infrastructure Assessment demonstrates
            integrated long-term planning through cross-sectoral analysis and
            stakeholder engagement to strategically prioritize climate-resilient
            investments supporting national development.
          </span>
        </p>
      ),
    },
    {
      rId: 216,
      image:
        "images/qii6/Infrastructure-Institutions/OECD-IMF-Reference-Note.png",
      title: (
        <p>
          Global <br />
          <strong>Governance of Quality Infrastructure Investment​</strong>{" "}
          <br />
          Organisation for Economic Co-operation and Development and
          International Monetary Fund
        </p>
      ),
      buttonText: "Guidance note",
      link: "https://infrastructuregovern.imf.org/content/dam/PIMA/Knowledge-Hub/Publications/pubdocuments/OECD_IMF_RefNoteGovernanceofQualityInfrastructureInvestment.pdf",
      content: (
        <p>
          This note provides principles for developing strategic infrastructure
          planning frameworks that integrate long-term national priorities with
          project selection.
        </p>
      ),
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      if (location.state?.scrollTo) {
        const el = document.getElementById(location.state.scrollTo);
        el?.scrollIntoView({ behavior: "smooth" });
        navigate(location.pathname, { replace: true, state: null });
      }
    }, 500);
  }, [location]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [
          { path: "/qii6", title: "QII.6 Governance" },
          {
            path: "/Infrastructure-Institutions",
            title: "Infrastructure Institutions",
          },
        ],
      }),
    );
  }, []);
  return (
    <div className="Infrastructure_Institutions">
      <section className="color-light">
        <Header3
          id="qii6-II-section1"
          img="images/qii6/Infrastructure-Institutions/QII6-Infrastructure-Institutions.png"
          title={"Infrastructure Institutions"}
          hideDeskTitle={true}
        >
          <div className="hero-content">
            <div className="header-3-subpages">
              <img
                src="images/UpdatedAssets/Qii6.svg"
                alt="Qii5 logo"
                className="qii-badge"
              />
              <h1 className="header-title desk-title">
                Infrastructure Institutions
              </h1>
            </div>
          </div>
          <div className="subpage-description">
            <p className="light-font">
              Strong institutions are essential for good infrastructure because
              they set clear rules, coordinate efforts, and make sure projects
              are managed openly and efficiently. For many countries,
              strengthening institutions means moving beyond fragmented,
              compliance-driven systems towards an environment where government
              staff are empowered, accountable and incentivized to work across
              boundaries.
            </p>
          </div>
        </Header3>
        <div className="container internal-pages-container">
          <NumSteps num="1" id="qii6-II-section2">
            <strong>Legal and Regulatory Frameworks for Infrastructure </strong>
            <br />
            Strong legal and regulatory frameworks are essential to ensure
            public infrastructure investments follow clear standards and rules
            that maintain integrity, transparency, and accountability. These
            legal instruments must be regularly reviewed and updated to reflect
            best practices, evolving risks, and national development needs.
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <VCardsPagination cardsData={step1Cards} id="qii6-II-section3"/>
         
          <div className="border-dash"></div>
          <NumSteps num="2" id="qii6-II-section4">
            <strong>Coordination Across Government </strong>
            <br />
            Infrastructure is often complex, cutting across sector and
            institutional boundaries. Effective coordination requires structured
            cooperation mechanisms and shared investment priorities.
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <VCardsPagination cardsData={step2Cards} id="qii6-II-section5"/>
          
          <div className="border-dash"></div>
          <NumSteps num="3" id="qii6-II-section6">
            <strong>Transparency and Accountability </strong>
            <br />
            Transparency and accountability are critical for integrity in
            infrastructure planning and execution. Clear disclosure of project
            information, open processes for public scrutiny, and systematic
            monitoring allow stakeholders to detect and address irregularities
            early, reducing opportunities for mismanagement and corruption.
            Independent oversight mechanisms further strengthen trust by
            ensuring decisions and expenditures are subject to continuous
            external review.
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <VCardsPagination cardsData={step3Cards} id="qii6-II-section7"/>
        
          <div className="border-dash"></div>
          <NumSteps num="4" id="qii6-II-section8">
            <strong>Strategic Planning </strong>
            <br />
            Strategic long-term planning aligns infrastructure investments with
            national development goals to ensure that the scarce public
            resources are used where needed most.
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <VCardsPagination cardsData={step4Cards} id="qii6-II-section9"/>
          
        </div>
      </section>
    </div>
  );
}
