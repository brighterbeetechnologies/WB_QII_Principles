import React, { useEffect } from "react";
import "./Policies_Standards_Regulation.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import Header3 from "../components/Header3";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";
import VCardsPagination from "../components/VCardsPagination";
import { useLocation } from "react-router-dom";

export default function Policies_Standards_Regulation() {
  const location = useLocation();
  const STEP1_PAGE_SIZE = 3;
  const step1Cards = [
    {
      rId: 197,
      image: "images/qii5/PoliciesandRegulation/To-Have-and-Have-Not.png",
      title: (
        <p>
          Global <br />
          <strong>
            To Have and Have Not – How to Bridge the Gap in Opportunities
          </strong>{" "}
          <br />
          Organisation for Economic Co-operation and Development​
        </p>
      ),
      buttonText: "Report",
      link: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/09/to-have-and-have-not-how-to-bridge-the-gap-in-opportunities_f642138a/dec143ad-en.pdf",
      content: (
        <p>
          This OECD report examines disparities in opportunities across
          societies and provides evidence-based policy recommendations for
          closing gaps. <br />
          <br />
          <span className="secound-desc">
            Section 4, page 122 has an evidence-based framework for setting
            clear inclusivity strategies and goals within policy and regulation.
          </span>
        </p>
      ),
    },
    {
      rId: 183,
      image:
        "images/qii5/PoliciesandRegulation/Asian-Development-Bank(ADB)—Gender-Equality-and-Social-Inclusion.png",
      title: (
        <p>
          Cross-Regional <br />
          <strong>
            Gender Equality and Social Inclusion (GESI) Guidance for
            Infrastructure
          </strong>
          <br />
          Asian Development Bank
        </p>
      ),
      buttonText: "Guidance note",
      link: "https://www.adb.org/sites/default/files/publication/945851/gesi-analysis-adb-cps-south-asia-guidance-note.pdf?utm_source",
      content: (
        <p>
          This guidance note contains a detailed methodology for integrating
          robust GESI strategies and objectives into country policies,
          standards, and regulatory frameworks.
          <br />
          <br />
          <span className="secound-desc">
            Most relevant are chapters II to IV, focusing on actionable
            frameworks, diagnostic processes, and evaluation procedures.
          </span>
        </p>
      ),
    },
    {
      rId: 168,
      image: "images/qii5/shutterstock_2528902161.jpg",
      title: (
        <p>
          Global <br />
          <strong>
            JICA Thematic Guidelines for Inclusive Development, including
            Universal Design
          </strong>
          <br />
          JICA
        </p>
      ),
      buttonText: "Guidance note",
      link: "https://www.jica.go.jp/Resource/english/our_work/thematic_issues/social/c8h0vm00005znamu-att/guideline_social_01.pdf",
      content: (
        <p>
          The JICA Thematic Guidelines on Disability and Development provide a
          comprehensive framework for mainstreaming disability inclusion across
          all development activities and sectors.
        </p>
      ),
    },
    {
      rId: 184,
      image:
        "images/qii5/PoliciesandRegulation/Gender-Inclusive-Urban-Planning-Design.png",
      title: (
        <p>
          Global <br />
          <strong>
            Handbook for Gender-Inclusive Urban Planning and Design
          </strong>{" "}
          <br /> World Bank ​
        </p>
      ),
      buttonText: "Guidance note",
      link: "https://openknowledge.worldbank.org/entities/publication/63c07ff8-cd1e-52c0-9441-005b9aa22bcf",
      content: (
        <p>
          This World Bank handbook provides a comprehensive framework for
          integrating gender considerations into urban planning and design
          processes. It covers the full spectrum from policy development to
          implementation.
          <br />
          <br />
          <span className="secound-desc">
            Page 57 outlines core principles that guide gender-inclusive
            planning, providing a foundation for institutionalizing inclusion
            into every aspect of urban planning, making projects equitable and
            responsive to the full range of community needs.
          </span>
        </p>
      ),
    },
    {
      rId: 182,
      image:
        "images/qii5/PoliciesandRegulation/Mainstreaming-Gender-in-Infrastructure–Gender-Action-Plan.png",
      title: (
        <p>
          Global <br />
          <strong>Mainstreaming Gender in Infrastructure: Desk Review</strong>
          <br /> World Bank
        </p>
      ),
      buttonText: "Guidance note",
      link: "https://ppp.worldbank.org/public-private-partnership/sites/default/files/2022-04/desk-review-final-063021.pdf",
      content: (
        <p>
          This provides a comprehensive framework for mainstreaming gender
          considerations throughout infrastructure project cycles. It addresses
          practical challenges in collecting gender-disaggregated data and
          developing gender action plans.
          <br />
          <br />
          <span className="secound-desc">
            Page 37 offers a snapshot of the challenges in collecting primary
            data for gender gap analysis, including how women's perspectives may
            be sidelined due to household responsibilities or patriarchal norms.
          </span>
        </p>
      ),
    },
  ];

  const step2Cards = [
    {
      rId: 169,
      image: "images/qii5/shutterstock_2337776975.jpg",
      title: (
        <p>
          Global <br />
          <strong>She Drives Change</strong> <br />
          World Bank ​
        </p>
      ),
      buttonText: "Report",
      link: "https://openknowledge.worldbank.org/entities/publication/b77e5771-7dfa-46bd-8d53-8e284f124c07",
      content: (
        <p>
          This World Bank publication compiles case studies demonstrating how
          transport sector interventions can advance gender equality.
          <br />
          <br />
          <span className="secound-desc">
            Case study 16 is an example of how employment restrictions in
            Azerbaijan were overcome by policy and regulatory adjustments,
            conducting awareness campaigns, and including employer engagement to
            create enabling conditions for women drivers.
          </span>
        </p>
      ),
    },
    {
      rId: 193,
      image:
        "images/qii5/PoliciesandRegulation/Environmental-and-Social-Framework.png",
      title: (
        <p>
          Global <br />
          <strong>Environmental and Social Framework</strong> <br />
          World Bank ​
        </p>
      ),
      buttonText: "Framework",
      link: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/383011492423734099/the-world-bank-environmental-and-social-framework",
      content: (
        <p>
          This framework provides essential guidance for integrating grievance
          procedures and relevant mechanisms in projects through a comprehensive
          set of standards and requirements.
        </p>
      ),
    },
    {
      rId: 185,
      image:
        "images/qii5/PoliciesandRegulation/Inclusive-Infrastructure –Policy-Regulation&Standards.png",
      title: (
        <p>
          Global <br />
          <strong>
            Inclusive Infrastructure – Policy, Regulation & Standards
          </strong>{" "}
          <br />
          GI Hub​
        </p>
      ),
      buttonText: "Guidance note",
      link: "https://inclusiveinfra.gihub.org/action-areas/policy-regulation-and-standards/",
      content: (
        <p>
          The GI Hub's Inclusive Infrastructure resource provides actionable
          principles for applying inclusive standards and Universal Design in
          project planning and procurement.
        </p>
      ),
    },
    {
      rId: 172,
      image: "images/qii5/PoliciesandRegulation/EU-Accessibility-Act(2019).png",
      title: (
        <p>
          Cross-Regional <br />
          <strong>EU Accessibility Act (2019)</strong>
          <br />
          The National Archives
        </p>
      ),
      buttonText: "Case study",
      link: "https://www.legislation.gov.uk/eudr/2019/882",
      content: (
        <p>
          Directive (EU) 2019/882 creates enforceable accessibility standards
          for transport, ICT, and public services in the EU.
        </p>
      ),
    },
    {
      rId: 195,
      image:
        "images/qii5/PoliciesandRegulation/Americans-with-Disabilities.png",
      title: (
        <p>
          Global <br />
          <strong>
            Americans with Disabilities Act (ADA) Standards for Accessible
            Design
          </strong>
          <br />
          U.S. Department of Justice
          <br />
        </p>
      ),
      buttonText: "Framework",
      link: "https://www.ada.gov/law-and-regs/design-standards/2010-stds/",
      content: (
        <p>
          The 2010 ADA Standards for Accessible Design set enforceable
          accessibility criteria for buildings and public spaces in the United
          States and are frequently used as a reference for global
          infrastructure projects seeking to ensure inclusive, barrier-free
          environments for all users.
        </p>
      ),
    },
    {
      rId: 202,
      image:
        "images/qii5/PoliciesandRegulation/Advancing-universal-design-in-urban-planning.png",
      title: (
        <p>
          Japan <br />
          <strong>
            Advancing Universal Design in Urban Planning
          </strong> <br /> World Bank
        </p>
      ),
      buttonText: "Blog",
      link: "https://blogs.worldbank.org/en/ppps/japan-and-world-bank-advancing-universal-design-urban-planning",
      content: (
        <p>
          Japan and the World Bank are collaborating to advance universal design
          and disability inclusion in urban planning, leveraging Japan’s
          expertise in accessible infrastructure and the QII Partnership’s
          global strategies.
        </p>
      ),
    },
  ];

  const step3Cards = [
    {
      rId: 194,
      image: "images/qii5/PoliciesandRegulation/FAST-Infra-Label.png",
      title: (
        <p>
          Global <br />
          <strong>FAST-Infra Sustainable Infrastructure Label</strong>
        </p>
      ),
      buttonText: "Framework",
      link: "https://www.fastinfralabel.org/",
      content: (
        <p>
          A globally applicable certification for infrastructure projects
          demonstrating significant positive sustainability performance across
          environmental, social, governance, and resilience dimensions. The
          label helps project developers communicate sustainability credentials
          to investors and supports due diligence processes.
        </p>
      ),
    },
    {
      rId: 192,
      image: "images/qii5/PoliciesandRegulation/Blue-Dot-Network.png",
      title: (
        <p>
          Global <br />
          <strong>Blue Dot Network</strong>
        </p>
      ),
      buttonText: "Framework",
      link: "https://www.bluedot-network.org/",
      content: (
        <p>
          A multilateral certification framework for quality infrastructure
          projects which consolidates over 80 international standards including
          the G20 Principles for Quality Infrastructure Investment and IFC
          Performance Standards.
        </p>
      ),
    },
    {
      rId: 186,
      image: "images/qii5/shutterstock_2478900781.jpg",
      title: (
        <p>
          Global <br />
          <strong>
            OECD Principles for Private Sector Participation in Infrastructure
          </strong>{" "}
          <br />
          Organisation for Economic Co-operation and Development​
        </p>
      ),
      buttonText: "Guidance note",
      link: "https://www.oecd.org/en/publications/oecd-principles-for-private-sector-participation-in-infrastructure_9789264034105-en.html",
      content: (
        <p>
          These OECD principles help governments work with private-sector
          partners to finance and deliver infrastructure projects in transport,
          water, power, and telecommunications. The principles address the
          public interest, and provide guidance on regulatory frameworks,
          transparency, and stakeholder engagement that support inclusive
          outcomes.
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
          id="qii5-PSR-section1"
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
        </Header3>
        <div className="container internal-pages-container">
          <p className="link-text" id="qii5-PSR-section2">
            Regulations should require compliance with universal design
            standards, continuous monitoring, inclusive stakeholder engagement,
            and the adaptation of policies to emerging needs and technologies,
            ensuring genuine equitable access and opportunity at every stage.
          </p>
          <div className="border-dash"></div>
          <NumSteps num="1" id="qii5-PSR-section3">
            <strong>Setting Clear Inclusivity Strategies and Goals </strong>
            <br />
            Authorities should specify clear targets for gender, disability,
            age, or other identified gaps, then require every sector and project
            to integrate these goals into funding, design, and monitoring.{" "}
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <VCardsPagination cardsData={step1Cards} id="qii5-PSR-section4"/>
         
          <div className="border-dash"></div>
          <NumSteps num="2" id="qii5-PSR-section5">
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
          <VCardsPagination cardsData={step2Cards} id="qii5-PSR-section6"/>
         
          <div className="border-dash"></div>
          <NumSteps num="3" id="qii5-PSR-section7">
            <strong>
              Meeting International Best Practice Standards for Inclusion to
              Attract Investment
            </strong>
            <br />
            Private investors and institutional financiers are increasingly
            looking for projects with clear ESG (Environmental, Social, and
            Governance) credentials. Meeting social standards signals that a
            project is socially responsible, reduces community risk, and is
            likely to have smoother implementation, all of which lower perceived
            risk.
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <VCardsPagination cardsData={step3Cards} id="qii5-PSR-section8"/>
         
        </div>
      </section>
    </div>
  );
}
