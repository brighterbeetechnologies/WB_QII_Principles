import React, { useEffect } from "react";
import "./Stakeholder_Engagement.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import Header3 from "../components/Header3";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";
import VCardsPagination from "../components/VCardsPagination";
import ListImageText from "../components/ListImageText";
import { useLocation } from "react-router-dom";

export default function Stakeholder_Engagement() {
  const location = useLocation();
  const STEP1_PAGE_SIZE = 3;
  // const step1Cards = [
  //   {
  //     image: "images/qii5/StakeholderEngagement/Maputo.png",
  //     title: (
  //       <p>
  //         <strong>Maputo</strong>
  //       </p>
  //     ),
  //     buttonText: "Case Study",
  //     link: "https://documents1.worldbank.org/curated/en/099812406072316190/pdf/IDU08c1864250b3f704aa5080280e316e675350b.pdf",
  //     content: (
  //       <p>
  //         The use of big data to map mobility patterns helped to ensure a new
  //         bus rapid transit system in Maputo was designed to maximize
  //         accessibility for all socio-economic groups.
  //       </p>
  //     ),
  //   },
  // ];

  const step2Cards = [
    {
      rId: 175,
      image: "images/qii5/Qii5CaseStudy.jpg",
      title: (
        <p>
          Mozambique <br />
          <strong>Investing in Mozambique's Connectivity</strong> <br />
          World Bank
        </p>
      ),
      badgeText: "video",
      buttonText: "View case study summary",
      link: "https://documents1.worldbank.org/curated/en/099812406072316190/pdf/IDU08c1864250b3f704aa5080280e316e675350b.pdf",
      isVideo: true,
      videoUrl: "",
      videoTitle: "Maputo Investing in Mozambique's Connectivity World Bank",
      duration: "3 min watch",
      width: 1920,
      height: 1080,
      buttonText2: "Full Publication",
      link2: "",
      highlight: 1,
      content: (
        <p>
          The use of big data to map mobility patterns helped to ensure a new
          bus rapid transit system in Maputo was designed to maximize
          accessibility for all socio-economic groups.{" "}
        </p>
      ),
    },
    {
      rId: 196,
      image: "images/qii5/shutterstock_2535975537.jpg",
      title: (
        <p>
          Global ​ <br />
          <strong>Gender Equality, Infrastructure and PPPs</strong>
          <br />
          World Bank​
        </p>
      ),
      buttonText: "Report",
      link: "https://ppp.worldbank.org/sites/default/files/2020-09/Gender-and-PPPs_Report_interactive.pdf",
      content: (
        <p>
          This report provides comprehensive guidance on integrating gender
          considerations into public-private partnerships across the project
          lifecycle.
          <br />
          <br />
          <span className="secound-desc">
            The Kumasi Toilet PPP Project in Ghana (box 16, page 35) used a
            willingness-to-pay survey as part of its pre-feasibility study to
            evaluate the financial viability of delivering public toilets
            through a PPP model.
          </span>
        </p>
      ),
    },
    {
      rId: 199,
      image:
        "images/qii5/StakeholderEngagement/Mainstreaming-Gender-in-Infrastructure.png",
      title: (
        <p>
          Global <br />
          <strong>Mainstreaming Gender in Infrastructure</strong>
          <br />
          World Bank​
        </p>
      ),
      buttonText: "Report",
      link: "https://ppp.worldbank.org/public-private-partnership/sites/default/files/2022-04/desk-review-final-063021.pdf",
      content: (
        <p>
          This provides a comprehensive framework for mainstreaming gender
          considerations throughout infrastructure project cycles. It covers
          diagnostics, design, implementation, and monitoring.
          <br />
          <br />
          <span className="secound-desc">
            Figure 7.1 on page 56 maps how different stakeholders (government
            authorities, MDBs, private sector, gender specialists, civil
            society, and affected communities) each hold data-driven
            responsibilities for ensuring gender inclusion at every stage.
          </span>
        </p>
      ),
    },
    {
      rId: 187,
      image: "images/qii5/shutterstock_2528541047.jpg",
      title: (
        <p>
          Global <br />
          <strong>
            Inclusive Infrastructure “Data Collection and Stakeholder
            Identification”
          </strong>
          <br />
          Global Infrastructure Hub
        </p>
      ),
      buttonText: "Guidance note",
      link: "https://inclusiveinfra.gihub.org/action-areas/stakeholder-identification-engagement-and-empowerment",
      content: (
        <p>
          This resource outlines methods for collecting and analyzing
          disaggregated data by gender, age, disability, income, and other
          criteria to identify at-risk stakeholders in infrastructure projects.
        </p>
      ),
    },
  ];

  const step3Cards = [
    {
      rId: 176,
      image: "images/qii5/shutterstock_623620481.jpg",
      title: (
        <p>
          Uganda <br />
          <strong>Stakeholder Engagement Plan</strong>
          <br />
          Republic of Uganda
        </p>
      ),
      buttonText: "Case Study",
      link: "https://finance.go.ug/sites/default/files/reports/Stakeholder-Engagement-Plan-SEP-PIMs-P511206-June-11-2025.pdf",
      content: (
        <p>
          This resource exemplifies best practice in stakeholder engagement for
          large, multi-sectoral projects. It provides a detailed framework for
          identifying stakeholder groups, mapping their interests and influence,
          selecting appropriate engagement methods for each group, and
          establishing grievance mechanisms.
        </p>
      ),
    },
    {
      rId: 174,
      image: "images/qii5/StakeholderEngagement/Hachioji-City-Japan.png",
      title: (
        <p>
          Japan <br />
          <strong>Hachioji City</strong>
          <br />
          Organization for Economic Co-operation and Development
        </p>
      ),
      buttonText: "Case Study",
      link: "https://www.oecd.org/en/publications/providing-local-actors-with-case-studies-evidence-and-solutions-places_eb108047-en/hachioji-city-utilising-3d-city-models-and-augmented-reality-to-enhance-local-public-engagement_ab018d21-en.html",
      content: (
        <p>
          Hachioji City demonstrates how innovative use of 3D city models and
          augmented reality can significantly enhance local public engagement in
          urban planning, ultimately strengthening trust and collaboration
          between the city government and its citizens.
        </p>
      ),
    },
    {
      rId: 173,
      image: "images/qii5/shutterstock_1725363121.jpg",
      title: (
        <p>
          Tajikistan <br />
          <strong>Gender Dimensions of Cross-Border Trade</strong>
          <br /> World Bank
        </p>
      ),
      buttonText: "Case Study",
      link: "https://documents1.worldbank.org/curated/en/099051223071029240/pdf/P1789810e7579c0000b0350d8c4d40ae333.pdf",
      content: (
        <p>
          This World Bank study on Tajikistan’s cross-border trade highlights
          the critical role of community engagement and inclusion, particularly
          of women traders, in official trade processes.
        </p>
      ),
    },
    {
      rId: 189,
      image:
        "images/qii5/StakeholderEngagement/OECD-Infrastructure-Toolkit.png",
      title: (
        <p>
          Global <br />
          <strong>OECD Infrastructure Toolkit</strong> <br />
          Organisation for Economic Co-operation and Development​
        </p>
      ),
      buttonText: "Guidance note",
      link: "https://infrastructure-toolkit.oecd.org/governance/ensure-transparent-systematic-and-effective-stakeholder-participation/",
      content: (
        <p>
          The OECD Infrastructure Toolkit provides practical guidance for
          designing stakeholder engagement plans that are inclusive and
          systematic.
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
            title: "Inclusive Stakeholder Engagement",
          },
        ],
      }),
    );
  }, []);
  return (
    <div className="Policies_Standards_Regulation">
      <section className="color-light">
        <Header3
          id="qii5-SE-section1"
          img="images/qii5/StakeholderEngagement/QII_5_Internal_Page_StakeholderEngagement.png"
          title={"Inclusive Stakeholder Engagement"}
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
                Inclusive Stakeholder Engagement
              </h1>
            </div>
          </div>
          <div className="subpage-description">
            <p className="light-font">
              Inclusive stakeholder engagement ensures that vulnerable and
              underrepresented groups are actively included in every phase of
              infrastructure planning and delivery.
            </p>
          </div>
        </Header3>
        <div className="container internal-pages-container">
          <p className="link-text" id="qii5-SE-section2">
            Inclusive stakeholder engagement begins with an understanding of key
            stakeholder groups and their needs, especially those at risk of
            exclusion or being under-served. The next step is then to develop
            engagement plans that involve these groups in the planning and
            design process.
          </p>
          {/* <VCardsPagination cardsData={step1Cards} /> */}
          {/* <ListImageText
            disableStep={true}
            highlight={1}
            // description={"Netherlands DuboCalc and CO₂ Performance Ladder"}
            disableDescription={true}
            description={""}
            image="images/qii5/Qii5CaseStudy.jpg"
            buttonText="View case study summary"
            link="https://documents1.worldbank.org/curated/en/099812406072316190/pdf/IDU08c1864250b3f704aa5080280e316e675350b.pdf"
            buttonText2="View the full publication​"
            link2=""
            isVideo={true}
            duration={"3 min watch"}
            videoUrl=""
            videoTitle=""
            videoDisable={true}
          >
            <div className="description">
              Maputo <br />
              <strong>Investing in Mozambique's Connectivity</strong> <br />
              World Bank
            </div>
            <p>
              The use of big data to map mobility patterns helped to ensure a
              new bus rapid transit system in Maputo was designed to maximize
              accessibility for all socio-economic groups.{" "}
            </p>
          </ListImageText> */}
          {/* <div className="container internal-pages-container">
            <VCard
              image="images/qii5/StakeholderEngagement/Maputo.png"
              title={
                <p>
                  <strong>Maputo</strong> <br />
                </p>
              }
              buttonText="Case Study"
              link="https://documents1.worldbank.org/curated/en/099812406072316190/pdf/IDU08c1864250b3f704aa5080280e316e675350b.pdf"
            >
              <p>
                The use of big data to map mobility patterns helped to ensure a
                new bus rapid transit system in Maputo was designed to maximize
                accessibility for all socio-economic groups.
              </p>
            </VCard>
          </div> */}
          <div className="border-dash"></div>
          <NumSteps num="1" id="qii5-SE-section3">
            <strong>Characterize Stakeholders Using Data </strong>
            <br />
            Identify which stakeholders may be at risk of exclusion by: <br />
            <ol type="a">
              <li>
                Collecting and analyzing demographic and usage data to segment
                user groups.
              </li>
              <li>
                Understanding and mapping the specific needs, perspectives, and
                barriers faced by vulnerable and underrepresented groups.
              </li>
            </ol>
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <VCardsPagination cardsData={step2Cards} id="qii5-SE-section4"/>
          
          <div className="border-dash"></div>
          <NumSteps num="2" id="qii5-SE-section5">
            <strong>Develop Stakeholder Engagement Plans </strong>
            <br />
            It has long been recognized that good stakeholder engagement is
            fundamental to generating support for, and ultimately usage of,
            public infrastructure. A wide range of materials are available to
            guide project developers in this area.
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <VCardsPagination cardsData={step3Cards} id="qii5-SE-section6"/>
         
        </div>
      </section>
    </div>
  );
}
