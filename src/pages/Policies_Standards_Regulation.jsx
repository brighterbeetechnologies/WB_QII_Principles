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
          { path: "/qii5", title: "QII.5 Social" },
          {
            path: "/Policies_Standards_Regulation",
            title: "Inclusion through Policies, Standards and Regulation",
          },
        ],
      }),
    );
  }, []);
  return (
    <div className="Policies_Standards_Regulation">
      <section className="color-light">
        <Header3
          img="images/qii5/PoliciesandRegulation/QII_5_InternalPage_PoliciesandRegulation.png"
          title={"Inclusion through Policies, Standards and Regulation"}
          hideDeskTitle={true}
        >
          <div className="hero-content">
            <div className="header-3-subpages">
              <img
                src="images/UpdatedAssets/Qii5.svg"
                alt="Qii5 logo"
                className="qii-badge"
              />
              <h1 className="header-title desk-title">
                Inclusion through Policies, Standards and Regulation
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
            Regulations should require compliance with universal design
            standards, continuous monitoring, inclusive stakeholder engagement,
            and the adaptation of policies to emerging needs and technologies,
            ensuring genuine equitable access and opportunity at every stage.
          </p>
          <NumSteps num="1">
            <strong>Setting clear inclusivity strategies and goals –</strong>
            <br />
            Authorities should specify clear targets for gender, disability,
            age, or other identified gaps, then require every sector and project
            to integrate these goals into funding, design, and monitoring.{" "}
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <div className="VCard-cnt col3">
            <VCard
              image="images/qii5/PoliciesandRegulation/To-Have-and-Have-Not.png"
              title={
                <p>
                  <strong>
                    To Have and Have Not – How to Bridge the Gap in
                    Opportunities
                  </strong>{" "}
                </p>
              }
              buttonText="Tools"
              link="https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/09/to-have-and-have-not-how-to-bridge-the-gap-in-opportunities_f642138a/dec143ad-en.pdf"
            >
              <p>
                This OECD report examines disparities in opportunities across
                societies and provides evidence-based policy recommendations for
                closing gaps.
                <br />
                <br />
                Section 4, page 122 has an evidence-based framework for setting
                clear inclusivity strategies and goals within policy and
                regulation.
              </p>
            </VCard>
            <VCard
              image="images/qii5/PoliciesandRegulation/Asian-Development-Bank(ADB)—Gender-Equality-and-Social-Inclusion.png"
              title={
                <p>
                  <strong>
                    Gender Equality and Social Inclusion (GESI) Guidance for
                    Infrastructure{" "}
                  </strong>
                  <br />
                  Asian Development Bank (ADB)
                </p>
              }
              buttonText="Tools"
              link="https://www.adb.org/sites/default/files/publication/945851/gesi-analysis-adb-cps-south-asia-guidance-note.pdf?utm_source"
            >
              <p>
                The JICA Thematic Guidelines on Disability and Development
                provide a comprehensive framework for mainstreaming disability
                inclusion across all development activities and sectors. <br />
                <br />
                Most relevant are chapters II to IV, focusing on actionable
                frameworks, diagnostic processes, and evaluation procedures.
              </p>
            </VCard>
            <VCard
              image="images/qii5/PoliciesandRegulation/JICA-Thematic-Guidelines-for-Inclusive-Development-including-Universal-Design.png"
              title={
                <p>
                  <strong>
                    JICA Thematic Guidelines for Inclusive Development,
                    including Universal Design{" "}
                  </strong>
                </p>
              }
              buttonText="Guidance "
              link="https://www.jica.go.jp/Resource/english/our_work/thematic_issues/social/c8h0vm00005znamu-att/guideline_social_01.pdf"
            >
              <p>
                The JICA Thematic Guidelines on Disability and Development
                provide a comprehensive framework for mainstreaming disability
                inclusion across all development activities and sectors.{" "}
              </p>
            </VCard>
            <VCard
              image="images/qii5/PoliciesandRegulation/Gender-Inclusive-Urban-Planning-Design.png"
              title={
                <p>
                  <strong>Gender-Inclusive Urban Planning Design</strong>
                </p>
              }
              buttonText="Guidance"
              link="https://openknowledge.worldbank.org/entities/publication/63c07ff8-cd1e-52c0-9441-005b9aa22bcf"
            >
              <p>
                This World Bank handbook provides a comprehensive framework for
                integrating gender considerations into urban planning and design
                processes. It covers the full spectrum from policy development
                to implementation.
                <br />
                <br />
                Page 37 offers a snapshot of the challenges in collecting
                primary data for gender gap analysis, including how women's
                perspectives may be sidelined due to household responsibilities
                or patriarchal norms.
              </p>
            </VCard>

            <VCard
              image="images/qii5/PoliciesandRegulation/Mainstreaming-Gender-in-Infrastructure–Gender-Action-Plan.png"
              title={
                <p>
                  <strong>
                    Mainstreaming Gender in Infrastructure – Gender Action Plan
                  </strong>
                </p>
              }
              buttonText="Guidance"
              link="https://ppp.worldbank.org/public-private-partnership/sites/default/files/2022-04/desk-review-final-063021.pdf"
            >
              <p>
                This provides a comprehensive framework for mainstreaming gender
                considerations throughout infrastructure project cycles. It
                addresses practical challenges in collecting
                gender-disaggregated data and developing gender action plans.
                <br />
                <br />
                Page 37 offers a snapshot of the challenges in collecting
                primary data for gender gap analysis, including how women's
                perspectives may be sidelined due to household responsibilities
                or patriarchal norms.
              </p>
            </VCard>
          </div>
          <div className="border-dash"></div>
          <NumSteps num="2">
            <strong>
              Strengthening Governance to Enforce Inclusivity Standards
            </strong>
            <br />
            Once clear inclusion targets have been set, these should be
            integrated as requirements within national regulations, sector
            technical codes, and procurement systems. Dedicated authorities must
            oversee inclusion compliance at all project stages and make
            reporting mandatory. Legal tools can be leveraged to mandate audits
            and corrective action.
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <div className="VCard-cnt col3">
            <VCard
              image="images/qii5/PoliciesandRegulation/Environmental-and-Social-Framework.png"
              title={
                <p>
                  <strong>Environmental and Social Framework</strong>
                </p>
              }
              buttonText="Tools"
              link="https://documents.worldbank.org/en/publication/documents-reports/documentdetail/383011492423734099/the-world-bank-environmental-and-social-framework"
            >
              <p>
                This framework provides essential guidance for integrating
                grievance procedures and relevant mechanisms in projects through
                a comprehensive set of standards and requirements.
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
