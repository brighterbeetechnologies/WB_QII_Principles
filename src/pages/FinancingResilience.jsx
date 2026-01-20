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

export default function FinancingResilience() {
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
          img="images/qii4/financing_resilience.png"
          title={"Financing Resilience"}
          hideDeskTitle={true}
        >
          <div className="hero-content">
            <div className="header-3-subpages">
              <img
                src="images/UpdatedAssets/Qii2.svg"
                alt="Qii2 logo"
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
        {/* <HeaderCarousal slidesData={slidesData}></HeaderCarousal> */}
        <div className="container noPTop">
          <p className="list-title">
            Overcoming these barriers requires embedding resilience into
            infrastructure financing frameworks and deploying innovative
            financing instruments. Systematic risk screening and appraisal can
            also ensure resilience benefits are captured, quantified, and used
            to prioritize investments.
          </p>
          <NumSteps num="1">
            <strong>Screening projects with sustainability standards –</strong>{" "}
            Alongside the vulnerability and risk assessments (outlined within
            the ‘Diagnosing Vulnerabilities’ sub-page of QII.4), projects can
            also be screened against international sustainability and resilience
            standards. Meeting these standards shows investors that a project
            meets certain ‘sustainable and resilient’ criteria, which can unlock
            new funding sources—including from private investors—that are often
            out of reach for these kinds of infrastructure projects.
          </NumSteps>
          <p>
            *The below list highlights references, which aggregate global best
            practices across multiple sectors. For a deeper dive into the topic,
            please refer to the ‘Resilient Design and Operations’ sub-page.
          </p>
          <div className="VCard-cnt col3">
            <VCard
              image="images/qii4/FinancingResilience/Climate Bonds Initiative.png"
              title={
                <p>
                  <strong>Climate Bonds Initiative</strong>
                </p>
              }
              buttonText="Tool"
              link="https://www.climatebonds.net/files/documents/supporting-documents/Climate-Bonds_CBRT-v1-Final-003-User-View_Protected-version2-2-1.xlsx"
            >
              <p>
                This spreadsheet provides an extensive list of investments and
                interim screening criteria for resilient investments across a
                range of sectors.
              </p>
            </VCard>

            <VCard
              image="images/qii4/FinancingResilience/EU Taxonomy Compass.png"
              title={
                <p>
                  <strong>EU Taxonomy Compass</strong>
                </p>
              }
              buttonText="Guidance"
              link="https://ec.europa.eu/sustainable-finance-taxonomy/taxonomy-compass/the-compass"
            >
              <p>
                The EU's Taxonomy Regulation establishes six climate and
                environmental objectives in order for an economic activity to
                qualify as environmentally sustainable, and this includes
                objectives related to resilience and adaptation. The EU’s
                Taxonomy Compass helps users better understand the EU Taxonomy
                in a simple and practical manner.
              </p>
            </VCard>

            <VCard
              image="images/qii4/FinancingResilience/FAST-Infra Label.png"
              title={
                <p>
                  <strong>FAST-Infra Label</strong>
                </p>
              }
              buttonText="Guidance"
              link="https://cdn.prod.website-files.com/64869a932dab4d8c36a88774/68a44d2347380f7f25d23d24_ST01_V2_05.12.2024.pdf"
            >
              <p>
                The FAST-Infra Label Framework ensures uniformity and
                comparability in evaluating sustainability performance of
                infrastructure across the global infrastructure finance market.
                The label aggregates international best practices on sustainable
                infrastructure financing from around the world. The criteria for
                resilience and adaptation can be found in page 46.
              </p>
            </VCard>
          </div>

          <div className="border-dash"></div>
          <NumSteps num="2">
            <strong>Valuing resilience through life cycle costing -</strong>{" "}
            Infrastructure should be assessed on its full life-cycle costs, not
            just upfront spending. In particular, by factoring in the cost of
            long-term climate and disaster risks, decision-makers can see how an
            upfront investment in resilience today can avoid large repair and
            replacement costs in the future.
          </NumSteps>

          <div className="VCard-cnt col3">
            <VCard
              image="images/qii4/FinancingResilience/Assessing the Benefits and Costs of Nature-Based Solutions for Climate Resilience A Guideline for Project Developers (GFDRR).png"
              title={
                <p>
                  <strong>
                    Assessing the Benefits and Costs of Nature-Based Solutions
                    for Climate Resilience: A Guideline for Project Developers
                    (GFDRR)
                  </strong>
                </p>
              }
              buttonText="Guidance"
              link="https://www.gfdrr.org/en/feature-story/assessing-benefits-and-costs-nature-based-solutions"
            >
              <p>
                This document aims to guide the design, implementation, and use
                of studies to value the benefits and costs of Nature-Based
                Solutions (NBS) for climate resilience projects.
              </p>
            </VCard>

            <VCard
              image="images/qii4/FinancingResilience/Learning from Mega-disasters Japan Case Study.png"
              title={
                <p>
                  <strong>
                    Chapter 28: Measuring the Cost-Effectiveness of Various
                    Disaster Risk Management Measures{" "}
                  </strong>
                </p>
              }
              buttonText="Guidance"
              link="https://www.gfdrr.org/sites/default/files/publication/Learning%20from%20Megadisasters%20%20Lessons%20from%20the%20Great%20East%20Japan%20Earthquake.pdf"
            >
              <p>
                Cost-effectiveness analysis and cost-benefit analysis of DRM
                projects have been widely implemented both at national and local
                levels in Japan. This resource covers the different procedures
                for such analysis, according to the type of project, the funds,
                and the governing entity responsible particularly in parts V and
                VI.
              </p>
            </VCard>

            <VCard
              image="images/qii4/FinancingResilience/Disaster and Climate-Resilient Transport Guidance Note.png"
              title={
                <p>
                  <strong>
                    Disaster and Climate-Resilient Transport Guidance Note{" "}
                  </strong>{" "}
                </p>
              }
              buttonText="Guidance"
              link="https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099032625173042760"
            >
              <p>
                To effectively address climate risks on transportation system
                functionality, considering a more comprehensive approach is
                essential. The World Bank therefore developed the life-cycle
                approach, i.e. a five-pillar approach, to enable climate
                resilience in every phase of the transport infrastructure life
                cycle: system planning and financing to assess risks and guide
                investments, engineering, and design to develop cost-effective
                adaptation solutions, operations and maintenance to facilitate
                proactive monitoring and climate-smart upkeep, contingency
                planning to strengthen emergency response, and institutional
                capacity and coordination to enhance cross-sector collaboration
                (overview of 5 pillars on page 5).
              </p>
            </VCard>

            <VCard
              image="images/qii4/FinancingResilience/Physical Climate Risk Appraisal Methodology.png"
              title={
                <p>
                  <strong>
                    Physical Climate Risk Appraisal Methodology (PCRAM)
                    2.0:{" "}
                  </strong>
                  Institutional Investors Group on Climate Change (IIGCC){" "}
                </p>
              }
              buttonText="Tool"
              link="https://www.iigcc.org/hubfs/2025%20resources%20upload/Physical%20Climate%20Risk%20Appraisal%20Methodology%202.0%20IIGCC%202025.pdf"
            >
              <p>
                The PCRAM methodology combines insights from climate science,
                engineering, and finance to support a public or private sector
                user to incorporate physical climate risk considerations into
                asset appraisal.
              </p>
            </VCard>

            <VCard
              image="images/qii4/FinancingResilience/Sustainable Asset Valuation (SAVi).png"
              title={
                <p>
                  <strong>Sustainable Asset Valuation</strong> (SAVi){" "}
                </p>
              }
              buttonText="Tool"
              link="https://www.iisd.org/savi/"
            >
              <p>
                SAVi is a decision-support tool that helps policy-makers and
                investors understand the true costs of infrastructure across its
                full life cycle, including risks often missed in traditional
                valuations. By combining system dynamics and project finance
                modelling, SAVi captures environmental, social, economic, and
                governance risks, and even calculates the dollar value of
                externalities.
              </p>
            </VCard>

            <VCard
              image="images/qii4/FinancingResilience/Greater Cape Town Water Fund Business Case.png"
              title={
                <p>
                  <strong>Greater Cape Town Water Fund : </strong>Business Case
                </p>
              }
              buttonText="Case Study"
              link="https://www.nature.org/content/dam/tnc/nature/en/documents/GCTWF-Business-Case-April-2019.pdf"
            >
              <p>
                This business case puts forward the lifecycle costs and benefits
                of ecological infrastructure restoration as a critical solution
                to enhance water security in the Western Cape Water Supply
                System (WCWSS).
              </p>
            </VCard>
          </div>
          <div className="VCard-cnt col3">
            <VCard
              image="images/qii4/FinancingResilience/Sustainable Asset Valuation (SAVi) of Forest Restoration in the Brantas River Basin, Indonesia.png"
              title={
                <p>
                  <strong>
                    Sustainable Asset Valuation (SAVi) of Forest Restoration in
                    the Brantas River Basin, Indonesia{" "}
                  </strong>
                </p>
              }
              buttonText="Case Study"
              link="https://nbi.iisd.org/report/savi-forest-restoration-brantas-river-basin-indonesia/"
            >
              <p>
                This report presents a SAVi assessment that quantifies the
                ecosystem services and economic impacts of the planned
                reforestation and water retention wells in the Brantas River
                basin in Indonesia.
              </p>
            </VCard>
          </div>

          <div className="border-dash"></div>
          <NumSteps num="3">
            <strong>Innovative Financing Instruments - </strong> Innovative
            financing instruments attract private investors by lowering risk
            exposure and improving the predictability and stability of cash
            flows. Instruments can cover the financing needs from project
            preparation through to construction, operation, and maintenance,
            including project preparation facilities, green bonds, guarantees,
            and blended finance structures which shift or share the risks
            between investors and increase the likelihood of achieving target
            returns.
          </NumSteps>
          <div className="VCard-cnt col3">
            <VCard
              image="images/qii4/FinancingResilience/World Bank Financing Climate Adaptation and Nature Based Infrastructure.png"
              title={
                <p>
                  <strong>
                    World Bank Financing Climate Adaptation and Nature-Based
                    Infrastructure
                  </strong>
                </p>
              }
              buttonText="Report"
              link="https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099050725135521570"
            >
              <p>
                This report assesses opportunities to increase private sector
                participation and financing for climate adaptation and
                nature-based infrastructure in Emerging and Developing Economies
                (EMDEs).
              </p>
            </VCard>

            <VCard
              image="images/qii4/FinancingResilience/Transport Resilience Financing, Resources and Opportunities.png"
              title={
                <p>
                  <strong>
                    World Bank Transport Resilience Financing, Resources and
                    Opportunities
                  </strong>
                </p>
              }
              buttonText="Report"
              link="https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099050525150032182"
            >
              <p>
                This report presents information on 42 global financing
                facilities, 33 public funds, and 29 tax measures, offering
                valuable insights into financing transport resilience in
                developing countries.
              </p>
            </VCard>

            <VCard
              image="images/qii4/FinancingResilience/GFDRR Disaster Risk Finance.png"
              title={
                <p>
                  <strong>GFDRR Disaster Risk Finance</strong>
                </p>
              }
              buttonText="Resource"
              link="https://www.gfdrr.org/en/disaster-risk-finance"
            >
              <p>
                GFDRR supports governments in designing financial protection
                strategies and instruments to respond to natural disasters. The
                Disaster Risk Financing and Insurance thematic area provides a
                compendium of case studies and resources in financing solutions
                for better management of disasters and climate shocks.
              </p>
            </VCard>

            <VCard
              image="images/qii4/FinancingResilience/Philippine Water Revolving Fund.png"
              title={
                <p>
                  <strong>Philippine Water Revolving Fund</strong>
                </p>
              }
              buttonText="Case study"
              link="https://documents1.worldbank.org/curated/en/651521472032148001/pdf/107979-BRI-P159188-BlendedFinanceCasesPhilippines-PUBLIC.pdf"
            >
              <p>
                The PWRF blends Official Development Assistance (ODA) and
                domestic public funds with commercial financing to lower
                borrowing rates, and to market water and sanitation projects to
                private finance institutions (PFIs).
              </p>
            </VCard>

            <VCard
              image="images/qii4/FinancingResilience/Philippines Energy Development Corporation (EDC) Green Bond.png"
              title={
                <p>
                  <strong>
                    Philippines Energy Development Corporation (EDC) Green Bond
                  </strong>
                </p>
              }
              buttonText="Case study"
              link="https://sustainability-coalition.org/case-study/philippines-energy-development-corporation/"
            >
              <p>
                In 2018, IFC issued the first AAA peso-denominated green bond
                for $90 million with a fifteen-year maturity. The bond was
                intended to support EDC with restoration and resilience efforts
                at the Malitbog plant.
              </p>
            </VCard>

            <VCard
              image="images/qii4/FinancingResilience/Vida Manglar Carbon Project in Colombia.png"
              title={
                <p>
                  <strong>Vida Manglar Carbon Project in Colombia</strong>
                </p>
              }
              buttonText="Case study"
              link="https://www.conservation.org/projects/vida-manglar-carbon-project"
            >
              <p>
                Coastal protection project that uses blue carbon credits to
                finance the cost of restoring mangrove forests to protect local
                communities.
              </p>
            </VCard>
          </div>
          <h4 className="sub-section-title">General references</h4>
          <div className="VCard-cnt col3">
            <VCard
              image="images/qii4/FinancingResilience/World Bank - Climate Toolkits for Infrastructure PPPs.png"
              title={
                <p>
                  <strong>
                    World Bank - Climate Toolkits for Infrastructure PPPs
                  </strong>
                </p>
              }
              buttonText="Tool"
              link="https://www.worldbank.org/en/topic/sustainableinfrastructurefinance/brief/climate-toolkits-for-infrastructure-ppps"
            >
              <p>
                This toolkit aims to guide practitioners on incorporating a
                climate lens into PPPs to enhance climate resilience.
              </p>
            </VCard>

            <VCard
              image="images/qii4/FinancingResilience/Sub-sectoral Roadmaps to Promote Private Sector Participation in Transport Resilience Roads, Railways, and Urban Transport.png"
              title={
                <p>
                  <strong>
                    World Bank Sub-sectoral Roadmaps to Promote Private Sector
                    Participation in Transport Resilience:{" "}
                  </strong>{" "}
                  Roads, Railways, and Urban Transport
                </p>
              }
              buttonText="Tool"
              link="https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099050525150011892"
            >
              <p>
                Mobilizing support for resilient transport projects also
                requires a compelling investment case grounded in measurable
                targets, cost-benefit analyses, and clearly defined performance
                indicators. Private sector participation can significantly
                contribute to this agenda by offering technical expertise,
                financing, and lifecycle efficiency, especially when resilience
                is built into project design and contracts from the outset.
                Selecting the right PSP models and funding mechanisms, including
                green bonds and concessional finance, is key to making projects
                financially viable and scalable.
              </p>
            </VCard>
            <VCard
              image="images/qii4/FinancingResilience/GFDRR Disaster Risk Finance.png"
              title={
                <p>
                  <strong>GFDRR Disaster Risk Finance</strong>
                </p>
              }
              buttonText="Resource"
              link="https://www.gfdrr.org/en/disaster-risk-finance"
            >
              <p>
                GFDRR supports governments in designing financial protection
                strategies and instruments to respond to natural disasters. The
                Disaster Risk Financing and Insurance thematic area provides a
                compendium of case studies and resources in financing solutions
                for better management of disasters and climate shocks.
              </p>
            </VCard>

            {/* <VCard
              image="images/qii4/FinancingResilience/GFDRR Disaster Risk Finance.png"
              title={
                <p>
                  <strong>GFDRR Disaster Risk Finance</strong>
                </p>
              }
              buttonText="Resource"
              link="https://www.gfdrr.org/en/disaster-risk-finance"
            >
              <p>
                GFDRR supports governments in designing financial protection
                strategies and instruments to respond to natural disasters. The
                Disaster Risk Financing and Insurance thematic area provides a
                compendium of case studies and resources in financing solutions
                for better management of disasters and climate shocks.
              </p>
            </VCard> */}
          </div>
          <div className="VCard-cnt col3">
            <VCard
              image="images/qii4/FinancingResilience/G20-OECD Report on approaches for financing and investing in climate-resilient infrastructure.png"
              title={
                <p>
                  <strong>
                    G20/OECD Report on approaches for financing and investing in
                    climate-resilient infrastructure
                  </strong>
                </p>
              }
              buttonText="Report"
              link="https://www.oecd.org/en/publications/g20-oecd-report-on-approaches-for-financing-and-investing-in-climate-resilient-infrastructure_8f6d436a-en.html"
            >
              <p>
                This report was prepared to inform G20 policy makers about
                approaches that can be taken to advance financing for
                climate-resilient infrastructure and was welcomed at the G20
                Finance Ministers and Central Bank Governors meeting in July
                2024.
              </p>
            </VCard>
            <VCard
              // image=""
              image="images/qii4/FinancingResilience/G20-OECD Report on approaches for financing and investing in climate-resilient infrastructure.png"
              title={
                <p>
                  <strong>
                    Financing for Disaster and Resilient Infrastructure
                  </strong>
                  (Coalition for Disaster Resilient Infrastructure)
                </p>
              }
              buttonText="Report"
              link="https://cdri.world/upload/biennial/CH4.1-CCRI.pdf"
            >
              <p>
                This report explores the mechanisms that can provide greater
                incentives for both public and private sector for investment in
                strengthening resilience.
              </p>
            </VCard>
          </div>
        </div>
      </section>
      <section className="color-dark z-2" id="resourcesSection">
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
      </section>
    </div>
  );
}
