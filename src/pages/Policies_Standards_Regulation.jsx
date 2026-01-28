import React, { useEffect } from "react";
import "./Procurement.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import Header3 from "../components/Header3";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";

export default function Policies_Standards_Regulation() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [
          { path: "/qii3", title: "QII.3 Environment" },
          {
            path: "/Policies_Standards_Regulation",
            title: "Green Financing for Infrastructure",
          },
        ],
      }),
    );
  }, []);
  return (
    <div className="procurement">
      <section className="color-light">
        <Header3
          img="images/qii3/GreenFinancingforInfrastructure/shutterstock_2477739245.png"
          title={"Green Financing for Infrastructure"}
          hideDeskTitle={true}
        >
          <div className="hero-content">
            <div className="header-3-subpages">
              <img
                src="images/UpdatedAssets/Qii3.svg"
                alt="Qii2 logo"
                className="qii-badge"
              />
              <h1 className="header-title desk-title">
                Green Financing for Infrastructure
              </h1>
            </div>
          </div>
          <div className="subpage-description">
            <p className="light-font">
              How do we incentivize infrastructure projects that generate
              positive environmental impacts when those benefits often fall
              outside the project's revenue stream? Green finance solutions,
              spanning sustainable investment and carbon finance, help rebalance
              this equation by channeling capital toward projects that deliver
              measurable environmental gains.
            </p>
          </div>
        </Header3>
        <div className="container internal-pages-container">
          <p className="link-text">
            <strong>Sustainable Infrastructure Finance</strong>
            <br />
            <br />
            Sustainable investment directs capital toward infrastructure that
            delivers long-term environmental and social benefits alongside
            financial returns, using tools such as green bonds,
            sustainability-linked loans, and climate-aligned investment funds.
            <br />
            <br />
            To access green finance, project developers much first understand
            how their project can deliver measurable environmental benefits, and
            how these benefits can qualify the project for different forms of
            green finance. Access to such finance will be determined not just by
            the nature of the project, but also the availability of green
            finance instruments in the specific country or region.
          </p>
          <NumSteps num="1">
            <strong>Define and Meet Eligibility for Green Finance</strong>
            <br />
            <br />
            Sustainable finance taxonomies set common definitions for what
            counts as green or sustainable investments. They help prioritize
            projects that genuinely meet sustainability criteria and reduce the
            risk of greenwashing. Over the past decade, numerous taxonomies have
            emerged at national, regional, and international levels to guide
            sustainable investment decisions.{" "}
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <div className="VCard-cnt col3">
            <VCard
              image="images/qii3/GreenFinancingforInfrastructure/World of Taxonomies.png"
              title={
                <p>
                  <strong>World of TaxonomiesClimate Bonds Initiative </strong>{" "}
                  <br></br>Climate Bonds Initiative
                </p>
              }
              buttonText="Tool"
              link="https://www.climatebonds.net/expertise/taxonomy/world-taxonomies"
            >
              <p>
                There are numerous green and sustainable finance taxonomies in
                use or under development at national, regional, and
                international levels. This tool allows users to navigate through
                these taxonomies from a single source.
              </p>
            </VCard>
            <VCard
              image="images/qii3/GreenFinancingforInfrastructure/EU Taxonomy for Sustainable Activities.png"
              title={
                <p>
                  <strong>EU Taxonomy for Sustainable Activities </strong>
                </p>
              }
              buttonText="Tool"
              link="https://finance.ec.europa.eu/sustainable-finance/tools-and-standards/eu-taxonomy-sustainable-activities_en"
            >
              <p>
                This taxonomy provides a common definition of economic
                activities that can be considered environmentally sustainable.
                It helps to scale up sustainable investment and protects
                investors from greenwashing.{" "}
              </p>
            </VCard>
            <VCard
              image="images/qii3/GreenFinancingforInfrastructure/FAST-Infra.png"
              title={
                <p>
                  <strong>FAST-Infra</strong>
                </p>
              }
              buttonText="Tool"
              link="https://finance.ec.europa.eu/sustainable-finance/tools-and-standards/eu-taxonomy-sustainable-activities_en"
            >
              <p>
                This is a harmonized framework that aggregates various
                sustainable finance taxonomies to create a certification label
                specifically for infrastructure investments.{" "}
              </p>
            </VCard>
            <VCard
              image="images/qii3/GreenFinancingforInfrastructure/Sector-Specific Criteria.png"
              title={
                <p>
                  <strong>Sector-Specific Criteria</strong> <br></br>Climate
                  Bonds Initiative
                </p>
              }
              buttonText="Guidance"
              link="https://www.climatebonds.net/expertise/taxonomy/world-taxonomies"
            >
              <p>
                The Climate Bonds Initiative (CBI) develops sector-specific
                criteria that provide climate benchmarks across a range of
                infrastructure sectors to define projects eligible for climate
                finance.
              </p>
            </VCard>
          </div>
          <div className="border-dash"></div>
          <NumSteps num="2">
            <strong>Identify Green Financing Instruments</strong>
            <br />
            <br></br>
            Green bonds, sustainability-linked loans, and carbon credit schemes
            are just some examples of financing instruments which direct capital
            towards projects with clear environmental benefits. Such instruments
            are intended to incentivize the development of environmentally
            sustainable projects and are typically guided by green finance
            taxonomies (as above). The availability of different green financing
            sources will vary according to many factors, including the country
            or region of the project, the sector, and the nature of the
            environmental benefits, and therefore will require further
            context-specific exploration.
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <div className="VCard-cnt col3">
            <VCard
              image="images/qii3/GreenFinancingforInfrastructure/Green Bond Principles.png"
              title={
                <p>
                  <strong>Green Bond Principles</strong> <br />
                  ICMA
                </p>
              }
              buttonText="Guidance"
              link="https://www.icmagroup.org/sustainable-finance/the-principles-guidelines-and-handbooks/green-bond-principles-gbp/"
            >
              <p>
                These principles outline international best practices when
                issuing green bonds including the eligible use of proceeds,
                project evaluation and selection, management of proceeds, and
                reporting requirements.
              </p>
            </VCard>

            <VCard
              image="images/qii3/GreenFinancingforInfrastructure/Green Eligibility Checker tool.png"
              title={
                <p>
                  <strong>Green Eligibility Checker tool</strong> <br />
                  European Investment Bank
                </p>
              }
              buttonText="Tool"
              link="https://greenchecker.eib.org/"
            >
              <p>
                Developed by the European Investment Bank, this tool helps
                project developers to assess the compliance of projects with the
                EIB's green eligibility criteria. While focused on Europe, the
                tool has also been expanded to be of relevance to countries
                across North Africa and the Middle East.{" "}
              </p>
            </VCard>

            <VCard
              image="images/qii3/GreenFinancingforInfrastructure/South Africa Cape Town Green Bond.png"
              title={
                <p>
                  <strong>South Africa: Cape Town Green Bond</strong>{" "}
                </p>
              }
              buttonText="Case Study"
              link="https://www.gihub.org/innovative-funding-and-financing/case-studies/cape-town-green-bond/"
            >
              <p>
                Illustrates how green bond certification builds investor
                confidence in climate-aligned municipal infrastructure. In 2017,
                amid severe drought, Cape Town issued a ZAR 1 billion (~US$75
                million) Green Bond, the first in South Africa to receive CBI
                accreditation and the first to earn an “Excellent” rating from
                the rating agency Moody’s. Proceeds funded electric buses,
                energy-efficient buildings, water resilience initiatives, and
                coastal protection.
              </p>
            </VCard>
            <VCard
              image="images/qii3/GreenFinancingforInfrastructure/Brazil Corsan Water Sustainability-Linked Loan.png"
              title={
                <p>
                  <strong>
                    Brazil: Corsan Water Sustainability-Linked Loan
                  </strong>{" "}
                </p>
              }
              buttonText="Case Study"
              link="https://www.gihub.org/innovative-funding-and-financing/case-studies/sustainability-linked-loan-to-improve-water-supply-efficiency-and-resilience/"
            >
              <p>
                Demonstrates how sustainability-linked financing can drive
                efficiency improvements in state utilities. IFC provided a US$
                83 million loan to Corsan, the main water utility in Rio Grande
                do Sul state, to replace obsolete pumps and hydrometers. The
                loan was structured in a way that the interest rate would be
                reduced if Corsan met pre-agreed reductions in water losses.
              </p>
            </VCard>
            <VCard
              image="images/qii3/GreenFinancingforInfrastructure/Belgrade Waste-to-Energy PPP Carbon Credit Certification.png"
              title={
                <p>
                  <strong>
                    Belgrade Waste-to-Energy PPP Carbon Credit Certification
                  </strong>{" "}
                </p>
              }
              buttonText="Case Study"
              link="https://www.bcenergy.rs/belgrade-waste-management-ppp-project-becomes-the-first-serbian-project-certified-by-the-gold-standard-organization/"
            >
              <p>
                This project was the first project in Serbia certified by Gold
                Standard Carbon Credit Certification. This was achieved by
                modernizing waste treatment infrastructure – going from an open
                dump emitting 90 million tons of CO₂ equivalent over the last 45
                years – to a sanitary landfill with biogas collection and
                leachate treatment, which reduced 210,000 tons of CO₂e per year.
              </p>
            </VCard>
          </div>
        </div>
      </section>
    </div>
  );
}
