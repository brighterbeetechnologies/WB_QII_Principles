import React, { useEffect } from "react";
import "./Policies_Standards_Regulation.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import Header3 from "../components/Header3";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";
import VCardsPagination from "../components/VCardsPagination";

export default function Policies_Standards_Regulation() {
  const STEP1_PAGE_SIZE = 3;
  const step1Cards = [
    {
      image: "images/qii5/PoliciesandRegulation/To-Have-and-Have-Not.png",
      title: (
        <p>Multi-country <br />
          <strong>To Have and Have Not – How to Bridge the Gap in Opportunities</strong>
        </p>
      ),
      buttonText: "Tool",
      link: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/09/to-have-and-have-not-how-to-bridge-the-gap-in-opportunities_f642138a/dec143ad-en.pdf",
      content: <p>This OECD report examines disparities in opportunities across societies and provides evidence-based policy recommendations for closing gaps.
        <br /><br />
        Section 4, page 122 has an evidence-based framework for setting clear inclusivity strategies and goals within policy and regulation.
      </p>,
    },
    {
      image: "images/qii5/PoliciesandRegulation/Asian-Development-Bank(ADB)—Gender-Equality-and-Social-Inclusion.png",
      title: (
        <p>Multi-country <br />
          <strong>Gender Equality and Social Inclusion (GESI) Guidance for Infrastructure</strong>
          <br />Asian Development Bank (ADB)
        </p>
      ),
      buttonText: "Tool",
      link: "https://www.adb.org/sites/default/files/publication/945851/gesi-analysis-adb-cps-south-asia-guidance-note.pdf?utm_source",
      content: <p>This guidance note contains a detailed methodology for integrating robust GESI strategies and objectives into country policies, standards, and regulatory frameworks.  
        <br /><br />
        Most relevant are chapters II to IV, focusing on actionable frameworks, diagnostic processes, and evaluation procedures.
      </p>,
    },
    {
      image: "images/qii5/PoliciesandRegulation/JICA-Thematic-Guidelines-for-Inclusive-Development-including-Universal-Design.png",
      title: (
        <p>Multi-country <br />
          <strong>JICA Thematic Guidelines for Inclusive Development, including Universal Design</strong>
        </p>
      ),
      buttonText: "Guidance",
      link: "https://www.jica.go.jp/Resource/english/our_work/thematic_issues/social/c8h0vm00005znamu-att/guideline_social_01.pdf",
      content: <p>The JICA Thematic Guidelines on Disability and Development provide a comprehensive framework for mainstreaming disability inclusion across all development activities and sectors.</p>,
    },
    {
      image: "images/qii5/PoliciesandRegulation/Gender-Inclusive-Urban-Planning-Design.png",
      title: (
        <p>Multi-country <br />
          <strong>Gender-Inclusive Urban Planning Design</strong>
        </p>
      ),
      buttonText: "Guidance",
      link: "https://openknowledge.worldbank.org/entities/publication/63c07ff8-cd1e-52c0-9441-005b9aa22bcf",
      content: <p>This World Bank handbook provides a comprehensive framework for integrating gender considerations into urban planning and design processes. It covers the full spectrum from policy development to implementation.
        <br /><br />
        Page 57 outlines core principles that guide gender-inclusive planning, providing a foundation for institutionalizing inclusion into every aspect of urban planning, making projects equitable and responsive to the full range of community needs. 
      </p>
    },
    {
      image: "images/qii5/PoliciesandRegulation/Mainstreaming-Gender-in-Infrastructure–Gender-Action-Plan.png",
      title: (
        <p>Multi-country <br />
          <strong>Gender Action Plan</strong>
        </p>
      ),
      buttonText: "Guidance",
      link: "https://ppp.worldbank.org/public-private-partnership/sites/default/files/2022-04/desk-review-final-063021.pdf",
      content: <p>
        This provides a comprehensive framework for mainstreaming gender considerations throughout infrastructure project cycles. It addresses practical challenges in collecting gender-disaggregated data and developing gender action plans.
        <br /><br />
        Page 37 offers a snapshot of the challenges in collecting primary data for gender gap analysis, including how women's perspectives may be sidelined due to household responsibilities or patriarchal norms.
      </p>,
    },
  ];

  const step2Cards = [
    {
      image: "images/qii5/PoliciesandRegulation/She-Drives-Change.png",
      title: (
        <p>Multi-country <br />
          <strong>She Drives Change</strong>
        </p>
      ),
      buttonText: "Case Study",
      link: "https://openknowledge.worldbank.org/entities/publication/b77e5771-7dfa-46bd-8d53-8e284f124c07",
      content: <p>This World Bank publication compiles case studies demonstrating how transport sector interventions can advance gender equality.
        <br /><br />Case study 16 is an example of how employment restrictions in Azerbaijan were overcome by policy and regulatory adjustments, conducting awareness campaigns, and including employer engagement to create enabling conditions for women drivers.
      </p>,
    },
    {
      image: "images/qii5/PoliciesandRegulation/Environmental-and-Social-Framework.png",
      title: (
        <p>Multi-country <br />
          <strong>Environmental and Social Framework</strong>
        </p>
      ),
      buttonText: "Tool",
      link: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/383011492423734099/the-world-bank-environmental-and-social-framework",
      content: <p>This framework provides essential guidance for integrating grievance procedures and relevant mechanisms in projects through a comprehensive set of standards and requirements.</p>,
    },
    {
      image: "images/qii5/PoliciesandRegulation/Inclusive-Infrastructure –Policy-Regulation&Standards.png",
      title: (
        <p>Multi-country <br />
          <strong>Inclusive Infrastructure – Policy, Regulation & Standards</strong>
        </p>
      ),
      buttonText: "Tool",
      link: "https://inclusiveinfra.gihub.org/action-areas/policy-regulation-and-standards/",
      content: <p>The GI Hub's Inclusive Infrastructure resource provides actionable principles for applying inclusive standards and Universal Design in project planning and procurement.</p>,
    },
    {
      image: "images/qii5/PoliciesandRegulation/EU-Accessibility-Act(2019).png",
      title: (
        <p>Multi-country <br />
          <strong>EU Accessibility Act (2019)</strong>
        </p>
      ),
      buttonText: "Guidance",
      link: "https://www.legislation.gov.uk/eudr/2019/882",
      content: <p>Directive (EU) 2019/882 creates enforceable accessibility standards for transport, ICT, and public services in the EU.</p>,
    },
    {
      image: "images/qii5/PoliciesandRegulation/Americans-with-Disabilities.png",
      title: (
        <p>Multi-country <br />
          <strong>Americans with Disabilities Act (ADA) Standards for Accessible Design</strong>
          <br />
        </p>
      ),
      buttonText: "Guidance",
      link: "https://www.ada.gov/law-and-regs/design-standards/2010-stds/",
      content: <p>The 2010 ADA Standards for Accessible Design set enforceable accessibility criteria for buildings and public spaces in the United States and are frequently used as a reference for global infrastructure projects seeking to ensure inclusive, barrier-free environments for all users.</p>,
    },
    {
      image: "images/qii5/PoliciesandRegulation/Advancing-universal-design-in-urban-planning.png",
      title: (
        <p>Multi-country <br />
          <strong>Advancing universal design in urban planning</strong> <br /> Japan and the World Bank 
        </p>
      ),
      buttonText: "Guidance",
      link: "https://blogs.worldbank.org/en/ppps/japan-and-world-bank-advancing-universal-design-urban-planning",
      content: <p>Japan and the World Bank are collaborating to advance universal design and disability inclusion in urban planning, leveraging Japan’s expertise in accessible infrastructure and the QII Partnership’s global strategies.</p>,
    },
  ];

  const step3Cards = [
    {
      image: "images/qii5/PoliciesandRegulation/FAST-Infra-Label.png",
      title: (
        <p>Multi-country <br />
          <strong>FAST-Infra Sustainable Infrastructure Label</strong>
        </p>
      ),
      buttonText: "Tool",
      link: "https://www.fastinfralabel.org/",
      content: <p>A globally applicable certification for infrastructure projects demonstrating significant positive sustainability performance across environmental, social, governance, and resilience dimensions. The label helps project developers communicate sustainability credentials to investors and supports due diligence processes.</p>,
    },
    {
      image: "images/qii5/PoliciesandRegulation/Blue-Dot-Network.png",
      title: (
        <p>Multi-country <br />
          <strong>Blue Dot Network</strong>
        </p>
      ),
      buttonText: "Tool",
      link: "https://www.bluedot-network.org/",
      content: <p>A multilateral certification framework for quality infrastructure projects which consolidates over 80 international standards including the G20 Principles for Quality Infrastructure Investment and IFC Performance Standards.</p>,
    },
    {
      image: "images/qii5/PoliciesandRegulation/OECD-Principles.png",
      title: (
        <p>Multi-country <br />
          <strong>OECD Principles for Private Sector Participation in Infrastructure</strong>
        </p>
      ),
      buttonText: "Guidance",
      link: "https://www.oecd.org/en/publications/oecd-principles-for-private-sector-participation-in-infrastructure_9789264034105-en.html",
      content: <p>These OECD principles help governments work with private-sector partners to finance and deliver infrastructure projects in transport, water, power, and telecommunications. The principles address the public interest, and provide guidance on regulatory frameworks, transparency, and stakeholder engagement that support inclusive outcomes.</p>,
    },
  ];

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
              Policies, standards, and regulations are the foundation for
              inclusive infrastructure.
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
          <div className="border-dash"></div>
          <NumSteps num="1">
            <strong>Setting Clear Inclusivity Strategies and Goals </strong>
            <br />
            Authorities should specify clear targets for gender, disability,
            age, or other identified gaps, then require every sector and project
            to integrate these goals into funding, design, and monitoring.{" "}
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <VCardsPagination cardsData={step1Cards} />
          {/* <div className="VCard-cnt col3">
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
              buttonText="Tool"
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
              buttonText="Tool"
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
              buttonText="Guidance"
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
          </div> */}
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
          <VCardsPagination cardsData={step2Cards} />
          {/* <div className="VCard-cnt col3">
            <VCard
              image="images/qii5/PoliciesandRegulation/Environmental-and-Social-Framework.png"
              title={
                <p>
                  <strong>Environmental and Social Framework</strong>
                </p>
              }
              buttonText="Tool"
              link="https://documents.worldbank.org/en/publication/documents-reports/documentdetail/383011492423734099/the-world-bank-environmental-and-social-framework"
            >
              <p>
                This framework provides essential guidance for integrating
                grievance procedures and relevant mechanisms in projects through
                a comprehensive set of standards and requirements.
              </p>
            </VCard>

            <VCard
              image="images/qii5/PoliciesandRegulation/Inclusive-Infrastructure –Policy-Regulation&Standards.png"
              title={
                <p>
                  <strong>
                    Inclusive Infrastructure – Policy, Regulation & Standards
                  </strong>{" "}
                  <br />
                </p>
              }
              buttonText="Tool"
              link="https://inclusiveinfra.gihub.org/action-areas/policy-regulation-and-standards/"
            >
              <p>
                The GI Hub's Inclusive Infrastructure resource provides
                actionable principles for applying inclusive standards and
                Universal Design in project planning and procurement.{" "}
              </p>
            </VCard>

            <VCard
              image="images/qii5/PoliciesandRegulation/EU-Accessibility-Act(2019).png"
              title={
                <p>
                  <strong>EU Accessibility Act (2019)</strong>{" "}
                </p>
              }
              buttonText="Guidance"
              link="https://www.legislation.gov.uk/eudr/2019/882"
            >
              <p>
                Directive (EU) 2019/882 creates enforceable accessibility
                standards for transport, ICT, and public services in the EU.
              </p>
            </VCard>
            <VCard
              image="images/qii5/PoliciesandRegulation/Americans-with-Disabilities.png"
              title={
                <p>
                  <strong>
                    Americans with Disabilities Act (ADA) Standards for
                    Accessible Design
                  </strong>{" "}
                </p>
              }
              buttonText="Guidance"
              link="https://www.ada.gov/law-and-regs/design-standards/2010-stds/"
            >
              <p>
                The 2010 ADA Standards for Accessible Design set enforceable
                accessibility criteria for buildings and public spaces in the
                United States and are frequently used as a reference for global
                infrastructure projects seeking to ensure inclusive,
                barrier-free environments for all users.
              </p>
            </VCard>
            <VCard
              image="images/qii5/PoliciesandRegulation/Advancing-universal-design-in-urban-planning.png"
              title={
                <p>
                  <strong>
                    Japan and the World Bank: Advancing universal design in
                    urban planning{" "}
                  </strong>{" "}
                  <br />
                </p>
              }
              buttonText="Guidance"
              link="https://blogs.worldbank.org/en/ppps/japan-and-world-bank-advancing-universal-design-urban-planning"
            >
              <p>
                Japan and the World Bank are collaborating to advance universal
                design and disability inclusion in urban planning, leveraging
                Japan’s expertise in accessible infrastructure and the QII
                Partnership’s global strategies.
              </p>
            </VCard>
            <VCard
              image="images/qii5/PoliciesandRegulation/She-Drives-Change.png"
              title={
                <p>
                  <strong>She Drives Change</strong>{" "}
                </p>
              }
              buttonText="Case study"
              link="https://openknowledge.worldbank.org/entities/publication/b77e5771-7dfa-46bd-8d53-8e284f124c07"
            >
              <p>
                This World Bank publication compiles case studies demonstrating
                how transport sector interventions can advance gender equality.
                <br /> <br />
                Case study 16 is an example of how employment restrictions in
                Azerbaijan were overcome by policy and regulatory adjustments,
                conducting awareness campaigns, and including employer
                engagement to create enabling conditions for women drivers.
              </p>
            </VCard>
          </div> */}
          <div className="border-dash"></div>
          <NumSteps num="3">
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
          <VCardsPagination cardsData={step3Cards} />
          {/* <div className="VCard-cnt col3">
            <VCard
              image="images/qii5/PoliciesandRegulation/FAST-Infra-Label.png"
              title={
                <p>
                  <strong>FAST-Infra Sustainable Infrastructure Label</strong>
                </p>
              }
              buttonText="Tool"
              link="https://www.fastinfralabel.org/"
            >
              <p>
                A globally applicable certification for infrastructure projects
                demonstrating significant positive sustainability performance
                across environmental, social, governance, and resilience
                dimensions. The label helps project developers communicate
                sustainability credentials to investors and supports due
                diligence processes.
              </p>
            </VCard>

            <VCard
              image="images/qii5/PoliciesandRegulation/Blue-Dot-Network.png"
              title={
                <p>
                  <strong>Blue Dot Network</strong> <br />
                </p>
              }
              buttonText="Tool"
              link="https://www.bluedot-network.org/"
            >
              <p>
                A multilateral certification framework for quality
                infrastructure projects which consolidates over 80 international
                standards including the G20 Principles for Quality
                Infrastructure Investment and IFC Performance Standards.{" "}
              </p>
            </VCard>

            <VCard
              image="images/qii5/PoliciesandRegulation/OECD-Principles.png"
              title={
                <p>
                  <strong>
                    OECD Principles for Private Sector Participation in
                    Infrastructure
                  </strong>{" "}
                </p>
              }
              buttonText="Guidance"
              link="https://www.oecd.org/en/publications/oecd-principles-for-private-sector-participation-in-infrastructure_9789264034105-en.html"
            >
              <p>
                These OECD principles help governments work with private-sector
                partners to finance and deliver infrastructure projects in
                transport, water, power, and telecommunications. The principles
                address the public interest, and provide guidance on regulatory
                frameworks, transparency, and stakeholder engagement that
                support inclusive outcomes.
              </p>
            </VCard>
          </div> */}
        </div>
      </section>
    </div>
  );
}
