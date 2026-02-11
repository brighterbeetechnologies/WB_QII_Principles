import React, { useEffect } from "react";
import "./Public_Investment_And_Asset_Management.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import Header3 from "../components/Header3";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";
import VCardsPagination from "../components/VCardsPagination";

export default function Public_Investment_And_Asset_Management() {
  const STEP1_PAGE_SIZE = 3;
  const step1Cards = [
    {
      image: "images/qii6/Public_Investment_And_Asset_Management/WellSpent.png",
      title: (
        <p>
          <strong>Well Spent</strong>
        </p>
      ),
      buttonText: "Guidance",
      link: "https://www.sipotra.it/wp-content/uploads/2020/09/WELL-SPENT-How-Strong-Infrastructure-Governance-Can-End-Waste-in-Public-Investment.pdf",
      content: <p>
        This 2020 IMF book draws on PIMAs conducted in more than 60 countries to address how countries can attain quality infrastructure outcomes through better governance. It covers controlling corruption, managing fiscal risks, integrating planning and budgeting, project appraisal and selection, and maintaining public assets.
        <br /><br />
        <span className="secound-desc">
        Chapters 11 (Fiscal Risks in Infrastructure) and 12 (Integrating Infrastructure Planning and Budgeting) examine fiscal risk identification and mitigation strategies for infrastructure projects, and outline methods for integrating infrastructure planning with budgetary processes to ensure fiscal sustainability and alignment between investment decisions and available resources. 
        </span>
      </p>,
    },
    {
      image: "images/qii6/Public_Investment_And_Asset_Management/IMF-PIMA.png",
      title: (
        <p>
          <strong>IMF PIMA</strong>
        </p>
      ),
      buttonText: "Guidance",
      link: "https://www.elibrary.imf.org/display/book/9781513571829/CH006.xml",
      content: <p>The IMF’s Public Investment Management Assessment (PIMA) provides a comprehensive framework to evaluate the strength of public investment management institutions, helping governments identify weaknesses and prioritize reforms.</p>,
    },
  ];

  const step2Cards = [
    {
      image: "images/qii6/Public_Investment_And_Asset_Management/OECD-Implementation-Handbook-for-Quality-Infrastructure-Investment.png",
      title: (
        <p>
          <strong>OECD Implementation Handbook for Quality Infrastructure Investment</strong>
        </p>
      ),
      buttonText: "Guidance",
      link: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2021/07/oecd-implementation-handbook-for-quality-infrastructure-investment_b9131199/479131b2-en.pdf",
      content: <p>This handbook provides practical guidance on implementing quality infrastructure principles throughout the project lifecycle, emphasizing integrated planning, stakeholder engagement, environmental and social considerations, and governance mechanisms that support sustainable infrastructure outcomes.</p>,
    },
    {
      image: "images/qii6/Public_Investment_And_Asset_Management/InfraGov-Assessment-Framework.png",
      title: (
        <p>
          <strong>InfraGov Assessment Framework</strong>
        </p>
      ),
      buttonText: "Guidance",
      link: "https://thedocs.worldbank.org/en/doc/96550c14d62154355b6edc367d4d7f33-0080012021/original/Infrastructure-Governance-Assessment-Framework-December-2020.pdf",
      content: <p>
        InfraGov is a diagnostic framework developed by the World Bank to help countries optimize infrastructure investments by assessing governance across the project lifecycle, cross-cutting principles, and service delivery.
        <br /><br /><span className="secound-desc">
        Dimension 6 (Infrastructure procurement and contract management systems) assesses the effectiveness of procurement frameworks and contract management practices, examining transparency, competition, risk allocation, and monitoring systems that ensure infrastructure projects are delivered efficiently and contractors meet performance obligations.
      </span></p>,
    },
    {
      image: "images/qii6/Public_Investment_And_Asset_Management/OECD-Getting-Infrastructure-Right.png",
      title: (
        <p>
          <strong>OECD Getting Infrastructure Right</strong>
        </p>
      ),
      buttonText: "Guidance",
      link: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2017/03/getting-infrastructure-right_g1g77a22/9789264272453-en.pdf",
      content: <p>This 2017 report, based on a survey of 27 countries, provides an overview of current practices in infrastructure governance and presents practical tools to help policy makers better manage infrastructure across its full lifecycle. It addresses challenges from technical and budgetary concerns to delivery and governance issues.
        <br /><br />
        
        “Infrastructure procurement and the choice of the delivery modality” – page 52 and “Performance throughout the life cycle” pages – 76-77 analyze procurement strategy selection based on project characteristics and capacity, and emphasize the importance of performance monitoring, maintenance planning, and asset management systems to maximize infrastructure value over its operational lifespan.
      </p>,
    },
    {
      image: "images/qii6/Public_Investment_And_Asset_Management/WellSpent.png",
      title: (
        <p>
          <strong>Well Spent</strong>
        </p>
      ),
      buttonText: "Guidance",
      link: "https://www.sipotra.it/wp-content/uploads/2020/09/WELL-SPENT-How-Strong-Infrastructure-Governance-Can-End-Waste-in-Public-Investment.pdf",
      content: <p>This 2020 IMF book draws on PIMAs conducted in more than 60 countries to address how countries can attain quality infrastructure outcomes through better governance, with dedicated chapters on maintenance and asset management.
        <br /><br />
        Chapter 14 (Maintaining and Managing Public Infrastructure Assets) addresses the critical need for systematic asset management and maintenance planning, highlighting how neglect of routine maintenance accelerates asset deterioration, increases long-term costs, and undermines the benefits of infrastructure investments.
      </p>,
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [
          { path: "/qii6", title: "QII.6 Governance" },
          {
            path: "/Public-Investment-And-Asset-Management",
            title: "Public Investment and Asset Management",
          },
        ],
      }),
    );
  }, []);
  return (
    <div className="Public-Investment-And-Asset-Management">
      <section className="color-light">
        <Header3
          img="images/qii6/Public_Investment_And_Asset_Management/Public_Investment_And_Asset_Management.png"
          title={"Public Investment and Asset Management"}
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
                Public Investment and Asset Management
              </h1>
            </div>
          </div>
          <div className="subpage-description">
            <p className="light-font">
              Public Investment Management (PIM) refers to the systems and
              processes governments use to plan, select, and oversee public
              infrastructure projects. Public asset management (PAM) refers to
              the strategic and systematic process by which governments oversee,
              maintain, and optimize the use of public assets. Strengthening PIM
              and PAM leads to greater efficiency in resource allocation, asset
              utilization and long-term value to society.
            </p>
          </div>
        </Header3>
        <div className="container internal-pages-container">
          {/* <p className="link-text"></p> */}
          {/* <h1 className="link-text"></h1> */}
          <NumSteps num="1">
            <strong>Public Investment Management (PIM) </strong>
            <br />
            Effective public investment management requires systematic
            application of financial and fiscal sustainability tools to assess
            project affordability, demonstrate value for money, mobilize private
            capital where appropriate, and manage risks throughout the
            investment decision-making process.
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <VCardsPagination cardsData={step1Cards} />
          {/* <div className="VCard-cnt col-2">
            <VCard
              image="images/qii6/Public_Investment_And_Asset_Management/WellSpent.png"
              title={
                <p>
                  <strong>Well Spent</strong>
                  <br />
                </p>
              }
              buttonText="Guidance"
              link="https://www.sipotra.it/wp-content/uploads/2020/09/WELL-SPENT-How-Strong-Infrastructure-Governance-Can-End-Waste-in-Public-Investment.pdf"
            >
              <p>
                This 2020 IMF book draws on PIMAs conducted in more than 60
                countries to address how countries can attain quality
                infrastructure outcomes through better governance. It covers
                controlling corruption, managing fiscal risks, integrating
                planning and budgeting, project appraisal and selection, and
                maintaining public assets.
                <br />
                <br />
                This 2020 IMF book draws on PIMAs conducted in more than 60
                countries to address how countries can attain quality
                infrastructure outcomes through better governance. It covers
                controlling corruption, managing fiscal risks, integrating
                planning and budgeting, project appraisal and selection, and
                maintaining public assets.
              </p>
            </VCard>
            <VCard
              image="images/qii6/Public_Investment_And_Asset_Management/IMF-PIMA.png"
              title={
                <p>
                  <strong>IMF PIMA</strong>
                </p>
              }
              buttonText="Guidance"
              link="https://www.elibrary.imf.org/display/book/9781513571829/CH006.xml"
            >
              <p>
                The IMF’s Public Investment Management Assessment (PIMA)
                provides a comprehensive framework to evaluate the strength of
                public investment management institutions, helping governments
                identify weaknesses and prioritize reforms.
              </p>
            </VCard>
          </div> */}
          <div className="border-dash"></div>
          <NumSteps num="2">
            <strong>Public Asset Management (PAM) </strong>
            <br />
            Comprehensive lifecycle management ensures infrastructure assets
            deliver sustained performance, optimize whole-life costs, and
            maintain service quality through systematic monitoring, contract
            management, and preventive maintenance strategies.
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <VCardsPagination cardsData={step2Cards} />
          {/* <div className="VCard-cnt col3">
            <VCard
              image="images/qii6/Public_Investment_And_Asset_Management/OECD-Implementation-Handbook-for-Quality-Infrastructure-Investment.png"
              title={
                <p>
                  <strong>
                    OECD Implementation Handbook for Quality Infrastructure
                    Investment
                  </strong>
                </p>
              }
              buttonText="Guidance"
              link="https://www.oecd.org/content/dam/oecd/en/publications/reports/2021/07/oecd-implementation-handbook-for-quality-infrastructure-investment_b9131199/479131b2-en.pdf"
            >
              <p>
                This handbook provides practical guidance on implementing
                quality infrastructure principles throughout the project
                lifecycle, emphasizing integrated planning, stakeholder
                engagement, environmental and social considerations, and
                governance mechanisms that support sustainable infrastructure
                outcomes.
              </p>
            </VCard>
            <VCard
              image="images/qii6/Public_Investment_And_Asset_Management/InfraGov-Assessment-Framework.png"
              title={
                <p>
                  <strong>InfraGov Assessment Framework</strong>
                </p>
              }
              buttonText="Guidance"
              link="https://thedocs.worldbank.org/en/doc/96550c14d62154355b6edc367d4d7f33-0080012021/original/Infrastructure-Governance-Assessment-Framework-December-2020.pdf"
            >
              <p>
                InfraGov is a diagnostic framework developed by the World Bank
                to help countries optimize infrastructure investments by
                assessing governance across the project lifecycle, cross-cutting
                principles, and service delivery.
                <br />
                <br />
                Dimension 6 (Infrastructure procurement and contract management
                systems) assesses the effectiveness of procurement frameworks
                and contract management practices, examining transparency,
                competition, risk allocation, and monitoring systems that ensure
                infrastructure projects are delivered efficiently and
                contractors meet performance obligations.
              </p>
            </VCard>
            <VCard
              image="images/qii6/Public_Investment_And_Asset_Management/OECD-Getting-Infrastructure-Right.png"
              title={
                <p>
                  <strong>OECD Getting Infrastructure Right</strong>
                </p>
              }
              buttonText="Guidance"
              link="https://www.oecd.org/content/dam/oecd/en/publications/reports/2017/03/getting-infrastructure-right_g1g77a22/9789264272453-en.pdf"
            >
              <p>
                This 2017 report, based on a survey of 27 countries, provides an
                overview of current practices in infrastructure governance and
                presents practical tools to help policy makers better manage
                infrastructure across its full lifecycle. It addresses
                challenges from technical and budgetary concerns to delivery and
                governance issues.
                <br />
                <br />
                “Infrastructure procurement and the choice of the delivery
                modality” – page 52 and “Performance throughout the life cycle”
                pages – 76-77 analyze procurement strategy selection based on
                project characteristics and capacity, and emphasize the
                importance of performance monitoring, maintenance planning, and
                asset management systems to maximize infrastructure value over
                its operational lifespan.
              </p>
            </VCard>
            <VCard
              image="images/qii6/Public_Investment_And_Asset_Management/WellSpent.png"
              title={
                <p>
                  <strong>Well Spent</strong>
                </p>
              }
              buttonText="Guidance"
              link="https://www.sipotra.it/wp-content/uploads/2020/09/WELL-SPENT-How-Strong-Infrastructure-Governance-Can-End-Waste-in-Public-Investment.pdf"
            >
              <p>
                This 2020 IMF book draws on PIMAs conducted in more than 60
                countries to address how countries can attain quality
                infrastructure outcomes through better governance, with
                dedicated chapters on maintenance and asset management.
                <br />
                <br />
                Chapter 14 (Maintaining and Managing Public Infrastructure
                Assets) addresses the critical need for systematic asset
                management and maintenance planning, highlighting how neglect of
                routine maintenance accelerates asset deterioration, increases
                long-term costs, and undermines the benefits of infrastructure
                investments.
              </p>
            </VCard>
          </div> */}
        </div>
      </section>
    </div>
  );
}
