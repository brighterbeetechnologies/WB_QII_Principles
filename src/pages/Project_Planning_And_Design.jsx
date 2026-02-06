import React, { useEffect } from "react";
import "./Project_Planning_And_Design.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import Header3 from "../components/Header3";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";

export default function Project_Planning_And_Design() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [
          { path: "/qii5", title: "QII.5 Social" },
          {
            path: "/Project_Planning_And_Design",
            title: "Inclusion in Project Planning and Design",
          },
        ],
      }),
    );
  }, []);
  return (
    <div className="Policies_Standards_Regulation">
      <section className="color-light">
        <Header3
          img="images/qii5/ProjectPlanningandDesign/Cost-recovery-internal-landing-main.png"
          title={"Inclusion in Project Planning and Design"}
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
                Inclusion in Project Planning and Design
              </h1>
            </div>
          </div>
          <div className="subpage-description">
            <p className="light-font">
              The project planning and design stage is where the goal of
              inclusive infrastructure is translated into practical reality.
              This requires integrating inclusive objectives into design
              specifications and procurement processes.
            </p>
          </div>
        </Header3>
        <div className="container internal-pages-container">
          {/* <p className="link-text">
          </p> */}
          <NumSteps num="1">
            <strong>Enhance procurement strategies and processes  </strong>
            <br />
            Design procurement documents that mandate contractors and
            consultants to show proven experience with inclusion, and weight
            evaluation criteria towards bidders offering credible plans for
            gender balance, accessibility, or service to vulnerable groups. By
            integrating social and gender requirements into technical and
            financial proposals, and conducting bidder briefings on inclusivity
            expectations, project owners ensure selection favors those with
            commitment and capacity to deliver equitable solutions.{" "}
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <div className="VCard-cnt col3">
            <VCard
              image="images/qii5/ProjectPlanningandDesign/Mainstreaming-Gender-in-Public-Procurement.png"
              title={
                <p>
                  <strong>Procurement Rated Criteria</strong> <br />
                  World Bank
                </p>
              }
              buttonText="Guidance"
              link="https://www.worldbank.org/en/programs/project-procurement/framework/rated-criteria"
            >
              <p>
                The “Rated Criteria” approach ensures that procurement goes
                beyond price alone, making it mandatory to consider factors like
                value, quality, sustainability, and social outcomes—such as
                inclusion.
              </p>
            </VCard>
            <VCard
              image="images/qii5/ProjectPlanningandDesign/Mainstreaming-Gender-in-Public-Procurement.png"
              title={
                <p>
                  <strong>Mainstreaming Gender in Public Procurement </strong>
                </p>
              }
              buttonText="Guidance"
              link="https://blogs.worldbank.org/en/governance/mainstreaming-gender-public-procurement"
            >
              <p>
                This is an account of how traditional approaches are transformed
                by actively addressing systemic barriers faced by women and
                women-led enterprises throughout the supply chain.
              </p>
            </VCard>
            <VCard
              image="images/qii5/ProjectPlanningandDesign/UK-Green-Cities-Infrastructure-(ICED)-facility.png"
              title={
                <p>
                  <strong>
                    UK Green Cities & Infrastructure (ICED) facility{" "}
                  </strong>
                </p>
              }
              buttonText="Guidance"
              link="https://ukgreencitiesandinfrastructure.org/resource/inclusivity-in-procurement/"
            >
              <p>
                This guidance note outlines how inclusivity can be embedded into
                procurement strategies and processes throughout the project
                cycle of multilateral development bank initiatives.{" "}
              </p>
            </VCard>
            <VCard
              image="images/qii5/ProjectPlanningandDesign/albania.png"
              title={
                <p>
                  <strong>Albania</strong>
                </p>
              }
              buttonText="Case Study "
              link="https://projects.worldbank.org/en/projects-operations/project-detail/P160594"
            >
              <p>
                In the Albania Gender Equality in Access to Economic
                Opportunities project, standard bidding documents for tenders
                above a certain threshold were updated to require firms to
                explicitly declare their adherence to principles of
                non-discrimination and equal pay for equal work.
              </p>
            </VCard>
          </div>
          <div className="border-dash"></div>
          <NumSteps num="2">
            <strong>Embed inclusivity into contracts </strong>
            <br />
            Inclusion must move from procurement intent into binding
            obligations. Contracts should include clear clauses that specify
            measurable inclusion objectives, such as minimum numbers or
            percentages for target groups, accessibility milestones, and
            penalties or incentives for compliance. These clauses should cover
            both process (who is hired, who is consulted) and outcomes (who
            benefits, who accesses).
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <div className="VCard-cnt col3">
            <VCard
              image="images/qii5/ProjectPlanningandDesign/Gender-Equality-Infrastructure-and-PPPs.png"
              title={
                <p>
                  <strong>Gender Equality, Infrastructure and PPPs</strong>
                </p>
              }
              buttonText="Guidance"
              link="https://ppp.worldbank.org/sites/default/files/2020-09/Gender-and-PPPs_Report_interactive.pdf"
            >
              <p>
                This is a resource explaining how PPP contracts should include
                clear, measurable indicators, making clauses binding, with
                reporting and performance obligations linked to outcomes.
                <br />
                <br />
                PPP Project Stages Three and Four: Drafting the Contract and
                Managing the Transaction, pg 37
              </p>
            </VCard>

            <VCard
              image="images/qii5/ProjectPlanningandDesign/World-Bank-Bidding-Documents-Contractual-Provisions-for-Inclusion.png"
              title={
                <p>
                  <strong>
                    Bidding Documents and Contractual Provisions for Inclusion
                  </strong>{" "}
                  <br />
                  World Bank
                </p>
              }
              buttonText="Guidance"
              link="https://ppp.worldbank.org/sub-national-ppp/bidding-documents-and-contractual-provisions-regarding-inclusion-smes-ppps?utm"
            >
              <p>
                This resource demonstrates how inclusivity can be explicitly
                embedded into public-private partnership contracts and bidding
                documents.{" "}
              </p>
            </VCard>

            <VCard
              image="images/qii5/ProjectPlanningandDesign/Responsible-Contracting-Project-(RCP)-Toolkit.png"
              title={
                <p>
                  <strong>
                    Responsible Contracting Project (RCP) Toolkit
                  </strong>{" "}
                </p>
              }
              buttonText="Tools"
              link="https://www.responsiblecontracting.org/"
            >
              <p>
                The RCP provides a comprehensive toolkit for embedding social
                and environmental responsibility into infrastructure contracts.
                It offers model contract clauses and implementation resources to
                operationalize a shared-responsibility approach.
              </p>
            </VCard>
          </div>
          <div className="border-dash"></div>
          <NumSteps num="3">
            <strong>Apply inclusive design standards </strong>
            <br />
            Inclusive design means anticipating the diverse needs of women,
            persons with disabilities, older persons, and other vulnerable
            groups, and building flexibility into infrastructure methods and
            materials. Cascading these standards through all design deliverables
            ensures that inclusion is visible in the finished asset, not just in
            planning documents.
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <div className="VCard-cnt col3">
            <VCard
              image="images/qii5/ProjectPlanningandDesign/ISO-Building-Construction-Accessibility.png"
              title={
                <p>
                  <strong>
                    ISO 21542:2021 – Building Construction: Accessibility and
                    Usability of the Built Environment
                  </strong>
                </p>
              }
              buttonText="Guidance"
              link="https://www.iso.org/obp/ui/en/#iso:std:iso:21542:ed-2:v1:en"
            >
              <p>
                The ISO 21542 standard serves as a critical benchmark for
                applying inclusive design standards in infrastructure projects.
                It is the leading international technical standard for
                accessibility and universal design in buildings and
                infrastructure.
              </p>
            </VCard>

            <VCard
              image="images/qii5/ProjectPlanningandDesign/Silver-Hues.png"
              title={
                <p>
                  <strong>Silver Hues</strong> <br />
                </p>
              }
              buttonText="Guidance"
              link="https://www.bluedot-network.org/"
            >
              <p>
                This report has cross-sectoral policy guidance and practical
                strategies for cities aiming to create urban environments that
                are accessible, safe, and inclusive for older populations as the
                world’s cities face rapid demographic aging.{" "}
              </p>
            </VCard>

            <VCard
              image="images/qii5/ProjectPlanningandDesign/Incorporating-Universal-Accessibility-into-Infrastructure-Planning-and-Design-in-Vietnam.png"
              title={
                <p>
                  <strong>
                    Incorporating Universal Accessibility into Infrastructure
                    Planning and Design in Vietnam
                  </strong>{" "}
                </p>
              }
              buttonText="Case Study"
              link="https://documents1.worldbank.org/curated/en/099709403182442691/pdf/IDU167ac529a1d8a3145ce1b8de1c832f1eaf6e1.pdf"
            >
              <p>
                This case from Vietnam highlights the integration of universal
                accessibility and inclusive design in urban infrastructure. With
                support from the World Bank and Japanese experts, the project
                embedded accessibility measures from the outset, providing
                technical input, localized guidelines, and capacity-building for
                city officials.
              </p>
            </VCard>
            <VCard
              image="images/qii5/ProjectPlanningandDesign/Mainstreaming-Universal-Accessibility.png"
              title={
                <p>
                  <strong>
                    Mainstreaming Universal Accessibility in the built environment projects in Senegal
                  </strong>{" "}
                </p>
              }
              buttonText="Case Study"
              link="https://documents1.worldbank.org/curated/en/099050124115630064/pdf/P174991178ad6700e1bb681a5c82382b140.pdf"
            >
              <p>
                This engagement brief offers a practical stakeholder training
                and capacity-building framework.
              </p>
            </VCard>
          </div>
        </div>
      </section>
    </div>
  );
}
