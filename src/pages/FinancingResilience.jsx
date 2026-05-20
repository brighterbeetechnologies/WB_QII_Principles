import React, { useEffect } from "react";
import "./FinancingResilience.css";
import "./ResilientDesignAndOperation.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import Header3 from "../components/Header3";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";
import ResourceLibrary from "./ResourceLibrary";
import { Link } from "react-router-dom";
import VCardsPagination from "../components/VCardsPagination";
import { Popover, Tooltip } from "antd";
import { updateCardClick } from "../utils/cardRanking";
import { useLocation } from "react-router-dom";

export default function FinancingResilience() {
  const location = useLocation();
  const slidesData = [
    {
      img: "images/qii4/FinancingResilience/header_bg_1.png",
      description:
        "The procurement process sets the foundation for the economic efficiency of an infrastructure project. Procurement processes that create incentives to minimize life cycle costs can lead to better value for money and reduce long-term expenses. Conversely, weak procurement practices, such as focusing solely on initial purchase price, can result in higher operational and maintenance costs over the asset's lifespan.",
      title: "Financing Resilience",
    },
    {
      img: "images/qii4/FinancingResilience/header_bg_2.png",
      description:
        "The procurement of infrastructure under Public-Private Partnerships (PPPs) can be an effective way to align incentives for cost efficiency over the course of the project. This alignment will be strongest under PPPs that include an extended Operations and Maintenance (O&M) phase and where the revenues of the private sector partner are linked directly to long-term performance.",
      title: "Financing Resilience",
    },
    {
      img: "images/qii4/FinancingResilience/header_bg_3.png",
      description:
        "Financing resilient infrastructure is constrained by limited resources, weak public policy alignment, lack of data on costs and benefits, and risk perceptions. Public budgets are often overstretched, making it hard to fund resilience measures that require higher upfront costs but yield long-term benefits. Standard screening and appraisal processes seldom capture these benefits, so resilience projects are often undervalued compared to conventional infrastructure.",
      title: "Financing Resilience",
    },
  ];

  const resourceArray = [
    {
      rId: 121,
      id: 0,
      // country: "Global",
      type: "Framework",
      title: "Global: Climate Toolkits for Infrastructure PPPs",
      // org: "World Bank",
      description:
        "This toolkit aims to guide practitioners on incorporating a climate lens into PPPs to enhance climate resilience.",
      img_path:
        "images/qii3/Climate Toolkits for Infrastructure PPPs World Bank.png",
      path: "https://www.worldbank.org/en/topic/sustainableinfrastructurefinance/brief/climate-toolkits-for-infrastructure-ppps",
      target: "_blank",
    },
    {
      rId: 125,
      id: 1,
      // country: "Global",
      type: "Guidance note",
      title:
        "Global: Sub-sectoral Roadmaps to Promote Private Sector Participation in Transport Resilience: Roads, Railways, and Urban Transport",
      // org: "World Bank",
      description:
        "Mobilizing support for resilient transport projects also requires a compelling investment case grounded in measurable targets, cost-benefit analyses, and clearly defined performance indicators. Private sector participation can significantly contribute to this agenda by offering technical expertise,  financing, and lifecycle efficiency, especially when resilience is built into project design and contracts from the outset.  Selecting the right PSP models and funding mechanisms, including green bonds and concessional finance, is key to making projects financially viable and scalable.",
      img_path:
        "images/qii4/FinancingResilience/Sub-sectoral Roadmaps to Promote Private Sector Participation in Transport Resilience Roads, Railways, and Urban Transport.png",
      path: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099050525150011892",
      target: "_blank",
    },
    {
      rId: 150,
      id: 2,
      // country: "Global",
      type: "Report",
      title:
        "Global: G20/OECD Report on Approaches for Financing and Investing in Climate-resilient Infrastructure",
      // org: "Organization for Economic Co-operation and Development",
      description:
        "This report was prepared to inform G20 policy makers about approaches that can be taken to advance financing for climate-resilient infrastructure and was welcomed at the G20 Finance Ministers and Central Bank Governors meeting in July 2024. Organisation for Economic Co-operation and Development",
      img_path:
        "images/qii4/FinancingResilience/G20-OECD Report on approaches for financing and investing in climate-resilient infrastructure.png",
      path: "https://www.oecd.org/en/publications/g20-oecd-report-on-approaches-for-financing-and-investing-in-climate-resilient-infrastructure_8f6d436a-en.html",
      target: "_blank",
    },
    {
      rId: 147,
      id: 3,
      // country: "Global",
      type: "Report",
      title: "Global: Financing for Disaster and Resilient Infrastructure",
      // org: "Coalition for Disaster Resilient Infrastructure",
      description:
        "This report explores the mechanisms that can provide greater incentives for both public and private sector for investment in strengthening resilience.",
      img_path:
        "images/qii4/FinancingResilience/G20-OECD Report on approaches for financing and investing in climate-resilient infrastructure.png",
      path: "https://cdri.world/upload/biennial/CH4.1-CCRI.pdf",
      target: "_blank",
    },
    {
      rId: 229,
      id: 3,
      type: "Guidance note",
      title: "Global: Global Tool for Nature-based Solutions",
      // org: "Coalition for Disaster Resilient Infrastructure",
      description:
        "By providing actionable data to policymakers, financial institutions, and investors, the tool supports integrating NbS into infrastructure planning, mobilizing adaptation investments, and embedding resilience globally.",
      img_path: "images/qii2/Global_Tool_for_Nature-based_Solutions.png",
      path: "https://gca.org/scaling-investments-in-nbs-for-climate-resilient-infra/",
      target: "_blank",
    },
    {
      rId: 230,
      id: 3,
      type: "Case Study",
      title: "Regional: Climate Risks to African Ports",
      // org: "Coalition for Disaster Resilient Infrastructure",
      description:
        "Africa’s ports, through which 90% of its trade flows, are at the frontline of climate risk. Already, $5.3 billion of annual trade is exposed to disruptions. This case study showcases hands-on experience climate-proofing development investments across Africa through the Africa Adaptation Acceleration Program.",
      img_path: "images/qii2/Climate_Risks_to_African_Ports.png",
      path: "https://gca.org/reports/adaptation-insights-ports-climate-risks-to-african-ports-a-trade-corridor-approach-for-resilience-and-adaptation/",
      target: "_blank",
    },
    {
      rId: 231,
      id: 3,
      type: "Report",
      title: "Global: Pathways to scale investments in Nature-based Solutions",
      description: "This is a report on the spatial analytics and financial frameworks to scale nature-based solutions for transport infrastructure resilience globally.",
      img_path: "images/qii2/Pathways.png",
      path: "https://gca.org/reports/adaptation-insights-pathways-to-scale-investments-in-nature-based-solutions-for-climate-adaptation/",
      target: "_blank",
    },
    {
      rId: 232,
      id: 3,
      type: "Blog",
      title: "Regional: Pacific Climate Resilient Transport Program",
      description: "The Pacific Climate Resilient Transport Program is a $338.6 million program which supports governments in six countries in upgrading vital transport infrastructure to make communities more resilient to extreme weather events and climate change.",
      img_path: "images/qii2/PacificClimateResilientTransportProgram.png",
      path: "https://www.worldbank.org/en/news/immersive-story/2024/01/31/building-beyond-tomorrow",
      target: "_blank",
    },
  ];

  const STEP1_PAGE_SIZE = 3;
  const step1Cards = [
    {
      rId: 119,
      image: "images/qii4/FinancingResilience/Climate Bonds Initiative.png",
      title: (
        <p>
          Global <br />
          <strong>Climate Bonds Initiative</strong>
        </p>
      ),
      buttonText: "Framework",
      link: "https://www.climatebonds.net/files/documents/supporting-documents/Climate-Bonds_CBRT-v1-Final-003-User-View_Protected-version2-2-1.xlsx",
      content: (
        <p>
          This spreadsheet provides an extensive list of investments and interim
          screening criteria for resilient investments across a range of
          sectors.
        </p>
      ),
    },
    {
      rId: 117,
      image: "images/qii4/FinancingResilience/EU Taxonomy Compass.png",
      title: (
        <p>
          Cross-Regional <br />
          <strong>EU Taxonomy Compass</strong>
          <br />
          European Commission
        </p>
      ),
      buttonText: "Framework",
      link: "https://ec.europa.eu/sustainable-finance-taxonomy/taxonomy-compass/the-compass",
      content: (
        <p>
          The EU's Taxonomy Regulation establishes six climate and environmental
          objectives in order for an economic activity to qualify as
          environmentally sustainable, and this includes objectives related to
          resilience and adaptation. The EU’s Taxonomy Compass helps users
          better understand the EU Taxonomy in a simple and practical manner.
        </p>
      ),
    },
    {
      rId: 116,
      image: "images/qii4/FinancingResilience/FAST-Infra Label.png",
      title: (
        <p>
          Global <br />
          <strong>FAST-Infra Label</strong>
        </p>
      ),
      buttonText: "Framework",
      link: "https://cdn.prod.website-files.com/64869a932dab4d8c36a88774/68a44d2347380f7f25d23d24_ST01_V2_05.12.2024.pdf",
      content: (
        <p>
          The FAST-Infra Label Framework ensures uniformity and comparability in
          evaluating sustainability performance of infrastructure across the
          global infrastructure finance market. The label aggregates
          international best practices on sustainable infrastructure financing
          from around the world. The criteria for resilience and adaptation can
          be found in page 46.
        </p>
      ),
    },
  ];

  const step2Cards = [
    {
      rId: 107,
      image:
        "images/qii4/FinancingResilience/Philippine Water Revolving Fund.png",
      title: (
        <p>
          Philippines <br />
          <strong>Water Revolving Fund</strong>
          <br />
          World Bank
        </p>
      ),
      buttonText: "Case study",
      link: "https://documents1.worldbank.org/curated/en/651521472032148001/pdf/107979-BRI-P159188-BlendedFinanceCasesPhilippines-PUBLIC.pdf",
      content: (
        <p>
          The PWRF blends Official Development Assistance (ODA) and domestic
          public funds with commercial financing to lower borrowing rates, and
          to market water and sanitation projects to private finance
          institutions (PFIs).
        </p>
      ),
    },
    {
      rId: 109,
      image:
        "images/qii4/FinancingResilience/Philippines Energy Development Corporation (EDC) Green Bond.png",
      title: (
        <p>
          Philippines <br />
          <strong>Energy Development Corporation (EDC) Green Bond</strong>
          <br /> ICSR
        </p>
      ),
      buttonText: "Case study",
      link: "https://sustainability-coalition.org/case-study/philippines-energy-development-corporation/",
      content: (
        <p>
          In 2018, IFC issued the first AAA peso-denominated green bond for $90
          million with a fifteen-year maturity. The bond was intended to support
          EDC with restoration and resilience efforts at the Malitbog plant.
        </p>
      ),
    },
    {
      rId: 110,
      image: "images/qii4/updated/Vida-Manglar-Colombia.png",
      title: (
        <p>
          Colombia <br />
          <strong>Vida Manglar Carbon Project</strong>
          <br /> Conservation International
        </p>
      ),
      buttonText: "Case study",
      link: "https://www.conservation.org/projects/vida-manglar-carbon-project",
      content: (
        <p>
          Coastal protection project that uses blue carbon credits to finance
          the cost of restoring mangrove forests to protect local communities.
        </p>
      ),
    },
    {
      rId: 148,
      image:
        "images/qii4/FinancingResilience/World Bank Financing Climate Adaptation and Nature Based Infrastructure.png",
      title: (
        <p>
          Global <br />
          <strong>
            Financing Climate Adaptation and Nature-Based Infrastructure
          </strong>
          <br />
          World Bank
        </p>
      ),
      buttonText: "Report",
      link: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099050725135521570",
      content: (
        <p>
          This report presents information on 42 global financing facilities, 33
          public funds, and 29 tax measures, offering valuable insights into
          financing transport resilience in developing countries.
        </p>
      ),
    },
    {
      rId: 148,
      image:
        "images/qii4/FinancingResilience/Transport Resilience Financing, Resources and Opportunities.png",
      title: (
        <p>
          Global <br />
          <strong>
            Transport Resilience Financing, Resources and Opportunities
          </strong>
          <br />
          World Bank
        </p>
      ),
      buttonText: "Report",
      link: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/09905052515003218",
      content: (
        <p>
          This report presents information on 42 global financing facilities, 33
          public funds, and 29 tax measures, offering valuable insights into
          financing transport resilience in developing countries.
        </p>
      ),
    },
    {
      rId: 149,
      image: "images/qii4/FinancingResilience/GFDRR Disaster Risk Finance.png",
      title: (
        <p>
          Global <br />
          <strong>Disaster Risk Finance</strong>
          <br />
          GFDRR
        </p>
      ),
      buttonText: "Report",
      link: "https://www.gfdrr.org/en/disaster-risk-finance",
      content: (
        <p>
          GFDRR supports governments in designing financial protection
          strategies and instruments to respond to natural disasters. The
          Disaster Risk Financing and Insurance thematic area provides a
          compendium of case studies and resources in financing solutions for
          better management of disasters and climate shocks.
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
          { path: "/qii4", title: "QII.4 Resilience" },
          {
            path: "/Financing-resilience",
            title: "Financing Resilience",
          },
        ],
      }),
    );
  }, []);
  return (
    <div className="FinancingResilience">
      <section className="color-light">
        <Header3
          id="qii4-FR-section1"
          img="images/qii4/financing_resilience.png"
          title={"Financing Resilience"}
          hideDeskTitle={true}
        >
          <div className="hero-content">
            <div className="header-3-subpages">
              <img
                src="images/UpdatedAssets/Qii4.svg"
                alt="Qii4 logo"
                className="qii-badge"
              />
              <h1 className="header-title desk-title">Financing Resilience</h1>
            </div>
          </div>
          <div className="subpage-description">
            <p className="light-font">
              Financing resilient infrastructure is constrained by limited
              resources, weak public policy alignment, lack of data on costs and
              benefits, and risk perceptions. Public budgets are often
              overstretched, making it hard to fund resilience measures that
              require higher upfront costs but yield long-term benefits.
              Standard screening and appraisal processes seldom capture these
              benefits, so resilience projects are often undervalued compared to
              conventional infrastructure.
            </p>
          </div>
        </Header3>
        <div className="container internal-pages-container">
          <p className="link-text" id="qii4-FR-section2">
            Overcoming these barriers requires embedding resilience into
            infrastructure financing frameworks and deploying innovative
            financing instruments. Systematic risk screening and appraisal can
            also ensure resilience benefits are captured, quantified, and used
            to prioritize investments.
          </p>
          <div className="border-dash"></div>
          <NumSteps num="1" id="qii4-FR-section3">
            <strong>Screening Projects with Sustainability Standards </strong>{" "}
            <br />
            Alongside the vulnerability and risk assessments (outlined within
            the{" "}
            <Link to="/Diagnosing-vulnerabilities" className="cyber-link">
              ‘Diagnosing Vulnerabilities’
            </Link>{" "}
            sub-page of QII.4), projects can also be screened against
            international sustainability and resilience standards. Meeting these
            standards shows investors that a project meets certain ‘sustainable
            and resilient’ criteria, which can unlock new funding sources —
            including from private investors — that are often out of reach for
            these kinds of infrastructure projects.
          </NumSteps>
          <VCardsPagination cardsData={step1Cards} id="qii4-FR-section4" />
          <div className="border-dash"></div>
          <NumSteps num="2" id="qii4-FR-section5">
            <strong>Innovative Financing Instruments </strong>
            <br /> Innovative financing instruments attract private investors by
            lowering risk exposure and improving the predictability and
            stability of cash flows. Instruments can cover the financing needs
            from project preparation through to construction, operation, and
            maintenance, including project preparation facilities, green bonds,
            guarantees, and blended finance structures which shift or share the
            risks between investors and increase the likelihood of achieving
            target returns.
          </NumSteps>
          <VCardsPagination cardsData={step2Cards} id="qii4-FR-section6" />
        </div>
      </section>
      <section className="color-dark" id="qii4-FR-section7">
        <div className="container">
          <h2 className="section-title light-font">
            Further Reading On Financing Resilience
          </h2>
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
                        {/* {p.country && (
                          <>
                            <span>{p.country}</span> <br />
                          </>
                        )} */}
                        {/* <strong>{p.title}</strong> */}
                        <p className="page-resource-type">{p.type}</p>
                        <br />
                        {p.title}
                        {/* {p.org && (
                          <>
                            <br />
                            <span>{p.org}</span>
                          </>
                        )} */}
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
                          {/* {p.country && (
                            <>
                              <span>{p.country}</span> <br />
                            </>
                          )} */}
                          {/* <strong>{p.title}</strong> */}
                          <p className="page-resource-type">{p.type}</p>
                          <br />
                          {p.title}
                          {/* {p.org && (
                            <>
                              <br />
                              <span>{p.org}</span>
                            </>
                          )} */}
                        </div>
                        {/* <div className="page-resource-description">
                          {p.description}
                        </div> */}
                        <Popover
                          content={
                            <div className="resource-popover-content">
                              {p.description}
                            </div>
                          }
                          placement="left"
                          title={false}
                          trigger="click"
                        >
                          <div className="page-resource-description">
                            Read More...
                          </div>
                        </Popover>
                        <div className="page-resource-btn-cnt">
                          {p.target === "_blank" ? (
                            <a
                              className="page-resource-arrow"
                              href={p.path}
                              target={p.target}
                              rel="noopener noreferrer"
                              onClick={(e) => {
                                e.preventDefault();

                                updateCardClick(p.rId);

                                if (p.path) {
                                  window.open(p.path, "_blank");
                                }
                              }}
                            >
                              <span className="icon-arrow">&#xe900;</span>
                            </a>
                          ) : (
                            <Link
                              className="page-resource-arrow"
                              to={p.path}
                              target={p.target}
                              onClick={() => {
                                updateCardClick(p.rId);
                              }}
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
        </div>
      </section>
      {/* <section className="color-dark z-2" id="resourcesSection">
        <ResourceLibrary
          preSelected={[
            {
              show: true,
              category: "QII Principle",
              title: "QII.4 Resilience",
              id: 3,
            },
          ]}
        ></ResourceLibrary>
      </section> */}
    </div>
  );
}
