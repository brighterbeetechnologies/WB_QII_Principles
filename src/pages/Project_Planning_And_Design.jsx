import React, { useEffect } from "react";
import "./Project_Planning_And_Design.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import Header3 from "../components/Header3";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";
import VCardsPagination from "../components/VCardsPagination";
import { useLocation } from "react-router-dom";

export default function Project_Planning_And_Design() {
  const location = useLocation();
  const STEP1_PAGE_SIZE = 3;
  const step1Cards = [
    {
      rId: 170,
      image: "images/qii5/shutterstock_2401273073.jpg",
      title: (
        <p>
          Albania <br />
          <strong>
            Gender Equality in Access to Economic Opportunities DPF
          </strong>
          <br />
          World Bank
        </p>
      ),
      buttonText: "Case Study",
      link: "https://projects.worldbank.org/en/projects-operations/project-detail/P160594",
      content: (
        <p>
          In the Albania Gender Equality in Access to Economic Opportunities
          project, standard bidding documents for tenders above a certain
          threshold were updated to require firms to explicitly declare their
          adherence to principles of non-discrimination and equal pay for equal
          work.
        </p>
      ),
    },
    {
      rId: 166,
      image: "images/qii5/shutterstock_2698330999.jpg",
      title: (
        <p>
          Global <br />
          <strong>Project Procurement: Rated Criteria</strong> <br />
          World Bank
        </p>
      ),
      buttonText: "Framework",
      link: "https://www.worldbank.org/en/about/rated-criteria",
      content: (
        <p>
          The “Rated Criteria” approach ensures that procurement goes beyond
          price alone, making it mandatory to consider factors like value,
          quality, sustainability, and social outcomes—such as inclusion.
        </p>
      ),
    },
    {
      rId: 201,
      image:
        "images/qii5/ProjectPlanningandDesign/Mainstreaming-Gender-in-Public-Procurement.png",
      title: (
        <p>
          Global <br />
          <strong>Mainstreaming Gender in Public Procurement</strong> <br />
          World Bank
        </p>
      ),
      buttonText: "Blog",
      link: "https://blogs.worldbank.org/en/governance/mainstreaming-gender-public-procurement",
      content: (
        <p>
          This is an account of how traditional approaches are transformed by
          actively addressing systemic barriers faced by women and women-led
          enterprises throughout the supply chain.
        </p>
      ),
    },
    {
      rId: 181,
      image:
        "images/qii5/ProjectPlanningandDesign/UK-Green-Cities-Infrastructure-(ICED)-facility.png",
      title: (
        <p>
          United Kingdom <br />
          <strong>UK Green Cities & Infrastructure (ICED) facility</strong>
          <br /> The Centre of Expertise
        </p>
      ),
      buttonText: "Guidance Note",
      link: "https://ukgreencitiesandinfrastructure.org/resource/inclusivity-in-procurement/",
      content: (
        <p>
          This guidance note outlines how inclusivity can be embedded into
          procurement strategies and processes throughout the project cycle of
          multilateral development bank initiatives.
        </p>
      ),
    },
  ];

  const step2Cards = [
    {
      rId: 198,
      image: "images/qii5/shutterstock_2535975537.jpg",
      title: (
        <p>
          Global <br />
          <strong>Gender Equality, Infrastructure and PPPs</strong>
          <br />
          World Bank​
        </p>
      ),
      buttonText: "Report",
      link: "https://ppp.worldbank.org/sites/default/files/2020-09/Gender-and-PPPs_Report_interactive.pdf",
      content: (
        <p>
          This is a resource explaining how PPP contracts should include clear,
          measurable indicators, making clauses binding, with reporting and
          performance obligations linked to outcomes.
          <br />
          <br />
          <span className="secound-desc">
            PPP Project Stages Three and Four: Drafting the Contract and
            Managing the Transaction, pg 37
          </span>
        </p>
      ),
    },
    {
      rId: 167,
      image:
        "images/qii5/ProjectPlanningandDesign/World-Bank-Bidding-Documents-Contractual-Provisions-for-Inclusion.png",
      title: (
        <p>
          Global <br />
          <strong>
            Bidding Documents and Contractual Provisions for Inclusion
          </strong>{" "}
          <br />
          World Bank
        </p>
      ),
      buttonText: "Guidance Note",
      link: "https://ppp.worldbank.org/sub-national-ppp/bidding-documents-and-contractual-provisions-regarding-inclusion-smes-ppps?utm",
      content: (
        <p>
          This resource demonstrates how inclusivity can be explicitly embedded
          into public-private partnership contracts and bidding documents.
        </p>
      ),
    },
    {
      rId: 191,
      image: "images/qii5/shutterstock_2476215753.jpg",
      title: (
        <p>
          Global <br />
          <strong>Responsible Contracting Project Toolkit</strong>
        </p>
      ),
      buttonText: "Framework",
      link: "https://www.responsiblecontracting.org/",
      content: (
        <p>
          The RCP provides a comprehensive toolkit for embedding social and
          environmental responsibility into infrastructure contracts. It offers
          model contract clauses and implementation resources to operationalize
          a shared-responsibility approach.
        </p>
      ),
    },
  ];

  const step3Cards = [
    {
      rId: 177,
      image: "images/qii5/shutterstock_2665469265.jpg",
      title: (
        <p>
          Vietnam <br />
          <strong>
            Incorporating Universal Accessibility into Infrastructure Planning
            and Design​
          </strong>{" "}
          <br />
          World Bank​
        </p>
      ),
      highlight: 1,
      buttonText: "Case Study",
      link: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099010626090013789",
      content: (
        <p>
          This highlights the integration of universal accessibility and
          inclusive design in urban infrastructure. With support from the World
          Bank and Japanese experts, the projects embedded accessibility
          measures from the outset, providing technical input, localized
          guidelines, and capacity-building for city officials.
        </p>
      ),
    },
    {
      rId: 171,
      image: "images/qii5/shutterstock_2346783481.jpg",
      title: (
        <p>
          Senegal​ <br />
          <strong>
            Mainstreaming Universal Accessibility in the Built Environment
            Projects​
          </strong>
          <br />
          World Bank​
        </p>
      ),
      buttonText: "Case Study",
      highlight: 1,
      link: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099010626090013789",
      content: (
        <p>
          This engagement brief offers a practical stakeholder training and
          capacity-building framework.
        </p>
      ),
    },
    {
      rId: 190,
      image:
        "images/qii5/ProjectPlanningandDesign/ISO-Building-Construction-Accessibility.png",
      title: (
        <p>
          Global <br />
          <strong>
            ISO 21542:2021 – Building Construction: Accessibility and Usability
            of the Built Environment
          </strong>
          <br />
          International Organization for Standardization
        </p>
      ),
      buttonText: "Framework",
      link: "https://www.iso.org/obp/ui/en/#iso:std:iso:21542:ed-2:v1:en",
      content: (
        <p>
          The ISO 21542 standard serves as a critical benchmark for applying
          inclusive design standards in infrastructure projects. It is the
          leading international technical standard for accessibility and
          universal design in buildings and infrastructure.
        </p>
      ),
    },
    {
      rId: 188,
      image: "images/qii5/silver-huess-1.png",
      title: (
        <p>
          Global <br />
          <strong>Silver Hues</strong>
          <br />
          World Bank​
        </p>
      ),
      buttonText: "Guidance Note",
      link: "https://openknowledge.worldbank.org/handle/10986/37259",
      content: (
        <p>
          This report has cross-sectoral policy guidance and practical
          strategies for cities aiming to create urban environments that are
          accessible, safe, and inclusive for older populations as the world’s
          cities face rapid demographic aging.
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
          { path: "/qii5", title: "QII.5 Inclusion" },
          {
            path: "/Project_Planning_And_Design",
            title: "Inclusion in Project Design",
          },
        ],
      }),
    );
  }, []);
  return (
    <div className="Policies_Standards_Regulation">
      <section className="color-light">
        <Header3
          id="qii5-PPD-section1"
          img="images/qii5/ProjectPlanningandDesign/Cost-recovery-internal-landing-main.png"
          title={"Inclusion in Project Design"}
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
                Inclusion in Project Design
              </h1>
            </div>
          </div>
          <div className="subpage-description">
            <p className="light-font">
              The project planning and design stage is where the goal of
              inclusive infrastructure is translated into practical reality.
              This requires integrating inclusivity objectives into design
              specifications and procurement processes.
            </p>
          </div>
        </Header3>
        <div className="container internal-pages-container">
          <NumSteps num="1" id="qii5-PPD-section2">
            <strong>Enhance Procurement Strategies and Processes </strong>
            <br />
            By integrating social and gender requirements into technical and
            financial proposals, and conducting bidder briefings on inclusivity
            expectations, project owners ensure selection favors those with
            commitment and capacity to deliver equitable solutions.{" "}
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <VCardsPagination cardsData={step1Cards} id="qii5-PPD-section3"/>
          
          <div className="border-dash"></div>
          <NumSteps num="2" id="qii5-PPD-section4">
            <strong>Embed Inclusivity into Contracts </strong>
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
          <VCardsPagination cardsData={step2Cards} id="qii5-PPD-section5"/>
         
          <div className="border-dash"></div>
          <NumSteps num="3" id="qii5-PPD-section6">
            <strong>Apply Inclusive Design Standards </strong>
            <br />
            Inclusive design means anticipating the diverse needs of women,
            persons with disabilities, older persons, and other vulnerable
            groups, and building flexibility into infrastructure methods and
            materials. Cascading these standards through all design deliverables
            ensures that inclusion is visible in the finished asset, not just in
            planning documents.
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <VCardsPagination cardsData={step3Cards} id="qii5-PPD-section7"/>
         
        </div>
      </section>
    </div>
  );
}
