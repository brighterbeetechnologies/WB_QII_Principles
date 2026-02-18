import React, { useEffect, useState } from "react";
import "./QII1LandingPage.css";
import TextIconCarousal from "../components/TextIconCarousal";
import Header3 from "../components/Header3";
import { Link, useNavigate } from "react-router-dom";
import ResourceLibrary from "./ResourceLibrary";
import { Pagination, ConfigProvider } from "antd";
import TopResourceCard from "../components/TopResourceCard";
import VCardsPagination from "../components/VCardsPagination";
import { useDispatch } from "react-redux";
import {
  setBradcrump,
  setShowVideo,
  setVideoData,
} from "../slices/appDataSlice";
import QII1CaseStudy1 from "./QII1CaseStudy/QII1CaseStudy1";
import QII1_CardBox from "../components/QII1_CardBox";
import QIIVCard from "../components/QIIVCard";

export default function QII1LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const STEP_PAGE_SIZE = 3;
  const [stepPage, setStepPage] = useState(1);

  const PAGE_SIZE = 1;
  const [page, setPage] = useState(1);
  const [currentCard, setCurrentCard] = useState(0);

  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const cards = [
    <div className="ico-text-card-3-container">
      <div className="ico-text-card-3">
        <div className="ico-text-card-3-ico">
          <img src="images/qii1/Icon1.svg" alt="" />
        </div>
        <div className="ico-text-card-3-description">
          <div className="ico-text-card-3-title">
            <p>Infrastructure as the Backbone of Jobs and Livelihoods</p>
          </div>
          <p className="ico-text-card-3-desc">
            Infrastructure can create a virtuous economic cycle, from job
            creation during the construction and OaM phases, to boosting the
            industries that support these activities.
          </p>
          <p className="ico-text-card-3-link">
            1:{" "}
            <Link
              to="https://documents1.worldbank.org/curated/en/924891596641466361/pdf/Jobs-Umbrella-Multidonor-Trust-Fund-Annual-Report-2019-2020.pdf"
              target="_blank"
              className="link"
            >
              World Bank (2020) Jobs Umbrella MDTF
            </Link>
          </p>
          {/* <span style={{ opacity: 0 }}>
            While each QII principle stands on its own, governments should
            consider how multiple principles can be combined within a single
            project. The result is co-benefits that no single approach can
            achieve alone.While each QII principle stands on its own,
            governments should consider how multiple principles can be combined
            within a single project.
          </span> */}
        </div>
      </div>
    </div>,

    <div className="ico-text-card-3-container">
      <div className="ico-text-card-3">
        <div className="ico-text-card-3-ico">
          <img src="images/qii1/Icon4.svg" alt="" />
        </div>
        <div className="ico-text-card-3-description">
          <div className="ico-text-card-3-title">
            <p>Co-Benefits of Integrating QII Principles</p>
          </div>
          <p className="ico-text-card-3-desc">
            Beyond its role as an economic driver, infrastructure must align
            with environmental and social objectives.
            <br />
            <br />
            While each QII principle stands on its own, governments should
            consider how multiple principles can be combined within a single
            project. The result is co-benefits that no single approach can
            achieve alone.
          </p>
          <p className="ico-text-card-3-link">
            1:{" "}
            <Link
              to="https://openknowledge.worldbank.org/server/api/core/bitstreams/7239ed0b-4cee-43c3-9a87-2470806454d8/content"
              target="_blank"
              className="link"
            >
              Vagliasindi and Gorgulu (2025). Disentangling the Key Economic
              Channels through Which Infrastructure Affects Jobs
            </Link>
          </p>
        </div>
      </div>
    </div>,

    <div className="ico-text-card-3-container">
      <div className="ico-text-card-3">
        <div className="ico-text-card-3-ico">
          <img src="images/qii1/Icon3.svg" alt="" />
        </div>
        <div className="ico-text-card-3-description">
          <div className="ico-text-card-3-title">
            <p>Digitalization and Technology in Infrastructure </p>
          </div>
          <p className="ico-text-card-3-desc">
            Digitizing infrastructure services and introducing innovative
            technologies are cross-cutting interventions that amplify QII
            impacts. They enable step-change benefits in governance and planning
            processes, enhance designs and operational efficiency, reduce whole
            of life costs, and attract skilled labor to the sector.
            <br />
            <br />
            This is about “making infrastructure smarter and more connected”,
            not only about digital infrastructure itself.
          </p>
          <p className="ico-text-card-3-link">
            {" "}
            <Link to="" target="_blank" className="link"></Link>
          </p>
          {/* <span style={{ opacity: 0 }}>
            While each QII principle stands on its own, governments should{" "}</span> */}
        </div>
      </div>
    </div>,

    <div className="ico-text-card-3-container">
      <div className="ico-text-card-3">
        <div className="ico-text-card-3-ico">
          <img src="images/qii1/Icon2.svg" alt="" />
        </div>
        <div className="ico-text-card-3-description">
          <div className="ico-text-card-3-title">
            <p>Partnering with the Private Sector </p>
          </div>
          <p className="ico-text-card-3-desc">
            Investment needs for physical infrastructure alone require around
            4.5% of GDP, or $1.5 trillion annually, in developing countries. For
            many nations, this represents a significant hurdle.
            <br />
            <br />
            Bridging this financing gap while managing rising debt levels and
            budgetary constraints requires bringing together public and private
            capital.
          </p>
          <p className="ico-text-card-3-link">
            1:{" "}
            <Link
              to="https://www.devcommittee.org/content/dam/sites/devcommittee/doc/documents/2025/Final_DC2025-0004.pdf?deliveryName=DM266142"
              target="_blank"
              className="link"
            >
              World Bank (2025) Foundations for Growth and Jobs
            </Link>
          </p>
        </div>
      </div>
    </div>,
  ];

  const tabs = [
    "Sustainable Development Objectives",
    "Jobs and Growth",
    "Co-Benefits of Multiple QII Principles",
    "Digitalization and Technology",
    "Partnering With the Private Sector",
    "References",
  ];

  const cardsTabsData = {
    0: [
      {
        value: "210M",
        desc: "Hours of travel time saved",
        country: "Eurasia Tunnel, Türkiye",
        title: "Sustainable Development Objectives",
        description:
          "The Eurasia Tunnel, one of the first projects globally to achieve Blue Dot Network certification, is an engineering landmark that connects two continents in just 5 minutes. Over its first 8 years of operation (2016-2024), the tunnel has saved commuters 210 million hours of travel time while improving road safety.  The project aims to cut fuel consumption by 129,000 tons and CO2 emissions by 50,000 tons over its operational lifetime. ",
      },
      {
        value: "14M",
        desc: "Man-hours",
        country: "Türkiye",
        title: "Jobs and Growth",
        description: (
          <>
            The tunnel has had a major positive impact on jobs and economic
            growth in Türkiye, creating thousands of jobs during construction
            and operations while generating significant annual savings in time,
            fuel, and accident costs. By drastically reducing travel times
            across Istanbul, the tunnel has improved urban mobility, supported
            productivity, and contributed hundreds of millions of dollars in
            economic benefits each year.
            <br /> <br />
            Construction was completed in 14 million man-hours, employing over
            12,000 workers, of whom 84% were hired locally. Over the first 8
            years of operation, the project has delivered $2 billion in economic
            benefits. It is expected to contribute $1.7 billion to Gross Value
            Added, generate $364 million in additional tax revenues, and create
            53,734 jobs between 2013 and 2042. Of the total economic impact,
            $4.1 billion comes from productivity savings and $1.6 billion from
            externalities.
          </>
        ),
      },
      {
        value: "14M",
        desc: "Man-hours",
        country: "Türkiye",
        title: "Co-Benefits of Multiple QII Principles",
        description: (
          <>
            <strong>QII.2 Economic Efficiency</strong>
            <br />
            Life Cycle Cost estimates were developed at the preparation stage
            and incorporated into the financial model to enhance long-term
            economic efficiency. Predictive maintenance is applied using
            mathematical modelling to detect and diagnose faults in electric
            motors for ventilation and connected equipment, improving control
            over equipment performance and reducing breakdowns.
            <br />
            <br />
            <strong>QII.3 Environment</strong>
            <br />
            By reducing travel times, the project reduces fuel consumption by
            30,000 tons and emissions by 13,000 tons. An Environmental and
            Social Management Plan, prepared in November 2012, describes
            mitigation measures to minimize possible negative impacts on the
            climate and surrounding environment. For example, a detailed tree
            survey documented the species, age, height, and condition of all
            trees, with at least one-to-one replacement where felling was
            required.
            <br />
            <br />
            <strong>QII.4 Resilience</strong>
            <br />
            The tunnel features seismic-resistant engineering suited to
            Istanbul's earthquake risk. Two seismic joints provide 3-dimensional
            flexibility in case of an earthquake. The tunnel entrance was
            elevated to E.L.+ 6m, and discharge pumps were installed at the
            entrance and exit with total capacity sized for tsunami risk.
          </>
        ),
      },
      {
        value: "14M",
        desc: "Man-hours",
        country: "Türkiye",
        title: "Digitalization and Technology",
        description: (
          <>
            The tunnel features advanced engineering technologies.
            Seismic-resistant design incorporates two seismic rings into the
            tunnel structure, ensuring durability and safety in high-seismic
            activity zones and establishing a global benchmark for deep-sea
            tunnel engineering.
            <br />
            <br />
            Smart ventilation fans adjust based on real-time air quality sensor
            data, achieving up to 80% daily energy savings while maintaining
            optimal air conditions. This innovation was recognized with the
            "Maintenance and Renewal Method" award by New Civil Engineers in
            2018.
            <br />
            <br />
            The Pacemaker Lighting system improves traffic efficiency by 8.5%,
            reduces congestion by 53%, and decreases exhaust emissions by 12%.
            This feature, patented in Türkiye, earned the "Innovation in Tunnel
            Systems" award from New Civil Engineers in 2021.
          </>
        ),
      },
      {
        value: "14M",
        desc: "Man-hours",
        country: "Türkiye",
        title: "Partnering With the Private Sector",
        description:
          "The project is privately financed, with a Minimum Revenue Guarantee (MRG) mechanism ensuring stable revenues for investors. Since opening in December 2016, the tunnel has demonstrated strong traffic demand, with toll revenues exceeding the MRG level as of Q4 2023. The tunnel was developed under a PPP Build-Operate-Transfer (BOT) model, financed and operated by a private consortium. The $1.245 billion financing package comprised approximately $285 million in equity from a Turkish-Korean joint venture and $960 million in senior debt from multilateral development banks, export credit agencies, and commercial lenders from Europe, Asia, and Turkey.",
      },
      {
        value: "14M",
        desc: "Man-hours",
        country: "",
        title: "References",
        description: (
          <>
            <li>
              <ul>
                <a
                  href="https://www.bluedot-network.org/case-studies/BDN-ZX1J8I-21LT"
                  target="_blank"
                  className="link"
                >
                  Blue Dot Network (n.d.). Eurasia Tunnel.
                </a>
              </ul>
              <ul>
                <a
                  href="https://www.gihub.org/quality-infrastructure-database/case-studies/istanbul-strait-road-tunnel-project-eurasia-tunnel-project/"
                  target="_blank"
                  className="link"
                >
                  Global Infrastructure Hub (2021) Istanbul Strait Road Tunnel
                  Project (“Eurasia Tunnel Project”).
                </a>
              </ul>
            </li>
          </>
        ),
      },
    ],
    1: [
      {
        value: "210M",
        desc: "Hours of travel time saved",
        country: "Eurasia Tunnel, Türkiye",
        title: "Sustainable Development Objectives",
        description:
          "Card 2 - The Eurasia Tunnel, one of the first projects globally to achieve Blue Dot Network certification, is an engineering landmark that connects two continents in just 5 minutes. Over its first 8 years of operation (2016-2024), the tunnel has saved commuters 210 million hours of travel time while improving road safety.  The project aims to cut fuel consumption by 129,000 tons and CO2 emissions by 50,000 tons over its operational lifetime. ",
      },
      {
        value: "14M",
        desc: "Man-hours",
        country: "Türkiye",
        title: "Jobs and Growth",
        description: (
          <>
            The tunnel has had a major positive impact on jobs and economic
            growth in Türkiye, creating thousands of jobs during construction
            and operations while generating significant annual savings in time,
            fuel, and accident costs. By drastically reducing travel times
            across Istanbul, the tunnel has improved urban mobility, supported
            productivity, and contributed hundreds of millions of dollars in
            economic benefits each year.
            <br /> <br />
            Construction was completed in 14 million man-hours, employing over
            12,000 workers, of whom 84% were hired locally. Over the first 8
            years of operation, the project has delivered $2 billion in economic
            benefits. It is expected to contribute $1.7 billion to Gross Value
            Added, generate $364 million in additional tax revenues, and create
            53,734 jobs between 2013 and 2042. Of the total economic impact,
            $4.1 billion comes from productivity savings and $1.6 billion from
            externalities.
          </>
        ),
      },
      {
        value: "14M",
        desc: "Man-hours",
        country: "Türkiye",
        title: "Co-Benefits of Multiple QII Principles",
        description: (
          <>
            <strong>QII.2 Economic Efficiency</strong>
            <br />
            Life Cycle Cost estimates were developed at the preparation stage
            and incorporated into the financial model to enhance long-term
            economic efficiency. Predictive maintenance is applied using
            mathematical modelling to detect and diagnose faults in electric
            motors for ventilation and connected equipment, improving control
            over equipment performance and reducing breakdowns.
            <br />
            <br />
            <strong>QII.3 Environment</strong>
            <br />
            By reducing travel times, the project reduces fuel consumption by
            30,000 tons and emissions by 13,000 tons. An Environmental and
            Social Management Plan, prepared in November 2012, describes
            mitigation measures to minimize possible negative impacts on the
            climate and surrounding environment. For example, a detailed tree
            survey documented the species, age, height, and condition of all
            trees, with at least one-to-one replacement where felling was
            required.
            <br />
            <br />
            <strong>QII.4 Resilience</strong>
            <br />
            The tunnel features seismic-resistant engineering suited to
            Istanbul's earthquake risk. Two seismic joints provide 3-dimensional
            flexibility in case of an earthquake. The tunnel entrance was
            elevated to E.L.+ 6m, and discharge pumps were installed at the
            entrance and exit with total capacity sized for tsunami risk.
          </>
        ),
      },
    ],
    2: [
      {
        value: "210M",
        desc: "Hours of travel time saved",
        country: "Eurasia Tunnel, Türkiye",
        title: "Sustainable Development Objectives",
        description:
          "Card 3 - The Eurasia Tunnel, one of the first projects globally to achieve Blue Dot Network certification, is an engineering landmark that connects two continents in just 5 minutes. Over its first 8 years of operation (2016-2024), the tunnel has saved commuters 210 million hours of travel time while improving road safety.  The project aims to cut fuel consumption by 129,000 tons and CO2 emissions by 50,000 tons over its operational lifetime. ",
      },
      {
        value: "14M",
        desc: "Man-hours",
        country: "Türkiye",
        title: "Jobs and Growth",
        description: (
          <>
            The tunnel has had a major positive impact on jobs and economic
            growth in Türkiye, creating thousands of jobs during construction
            and operations while generating significant annual savings in time,
            fuel, and accident costs. By drastically reducing travel times
            across Istanbul, the tunnel has improved urban mobility, supported
            productivity, and contributed hundreds of millions of dollars in
            economic benefits each year.
            <br /> <br />
            Construction was completed in 14 million man-hours, employing over
            12,000 workers, of whom 84% were hired locally. Over the first 8
            years of operation, the project has delivered $2 billion in economic
            benefits. It is expected to contribute $1.7 billion to Gross Value
            Added, generate $364 million in additional tax revenues, and create
            53,734 jobs between 2013 and 2042. Of the total economic impact,
            $4.1 billion comes from productivity savings and $1.6 billion from
            externalities.
          </>
        ),
      },
      {
        value: "14M",
        desc: "Man-hours",
        country: "Türkiye",
        title: "Co-Benefits of Multiple QII Principles",
        description: (
          <>
            <strong>QII.2 Economic Efficiency</strong>
            <br />
            Life Cycle Cost estimates were developed at the preparation stage
            and incorporated into the financial model to enhance long-term
            economic efficiency. Predictive maintenance is applied using
            mathematical modelling to detect and diagnose faults in electric
            motors for ventilation and connected equipment, improving control
            over equipment performance and reducing breakdowns.
            <br />
            <br />
            <strong>QII.3 Environment</strong>
            <br />
            By reducing travel times, the project reduces fuel consumption by
            30,000 tons and emissions by 13,000 tons. An Environmental and
            Social Management Plan, prepared in November 2012, describes
            mitigation measures to minimize possible negative impacts on the
            climate and surrounding environment. For example, a detailed tree
            survey documented the species, age, height, and condition of all
            trees, with at least one-to-one replacement where felling was
            required.
            <br />
            <br />
            <strong>QII.4 Resilience</strong>
            <br />
            The tunnel features seismic-resistant engineering suited to
            Istanbul's earthquake risk. Two seismic joints provide 3-dimensional
            flexibility in case of an earthquake. The tunnel entrance was
            elevated to E.L.+ 6m, and discharge pumps were installed at the
            entrance and exit with total capacity sized for tsunami risk.
          </>
        ),
      },
    ],
  };

  const tabData1 = {
    "Sustainable Development Objectives": {
      value: "210M",
      desc: "Hours of travel time saved",
      country: "Eurasia Tunnel, Türkiye",
      title: "Sustainable Development Objectives",
      description:
        "The Eurasia Tunnel, one of the first projects globally to achieve Blue Dot Network certification, is an engineering landmark that connects two continents in just 5 minutes. Over its first 8 years of operation (2016-2024), the tunnel has saved commuters 210 million hours of travel time while improving road safety.  The project aims to cut fuel consumption by 129,000 tons and CO2 emissions by 50,000 tons over its operational lifetime. ",
    },
    "Jobs and Growth": {
      value: "14M",
      desc: "Man-hours",
      country: "Türkiye",
      title: "Jobs and Growth",
      description: (
        <>
          The tunnel has had a major positive impact on jobs and economic growth
          in Türkiye, creating thousands of jobs during construction and
          operations while generating significant annual savings in time, fuel,
          and accident costs. By drastically reducing travel times across
          Istanbul, the tunnel has improved urban mobility, supported
          productivity, and contributed hundreds of millions of dollars in
          economic benefits each year.
          <br /> <br />
          Construction was completed in 14 million man-hours, employing over
          12,000 workers, of whom 84% were hired locally. Over the first 8 years
          of operation, the project has delivered $2 billion in economic
          benefits. It is expected to contribute $1.7 billion to Gross Value
          Added, generate $364 million in additional tax revenues, and create
          53,734 jobs between 2013 and 2042. Of the total economic impact, $4.1
          billion comes from productivity savings and $1.6 billion from
          externalities.
        </>
      ),
    },
    "Co-Benefits of Multiple QII Principles": {
      value: "14M",
      desc: "Man-hours",
      country: "Türkiye",
      title: "Co-Benefits of Multiple QII Principles",
      description: (
        <>
          <strong>QII.2 Economic Efficiency</strong>
          <br />
          Life Cycle Cost estimates were developed at the preparation stage and
          incorporated into the financial model to enhance long-term economic
          efficiency. Predictive maintenance is applied using mathematical
          modelling to detect and diagnose faults in electric motors for
          ventilation and connected equipment, improving control over equipment
          performance and reducing breakdowns.
          <br />
          <br />
          <strong>QII.3 Environment</strong>
          <br />
          By reducing travel times, the project reduces fuel consumption by
          30,000 tons and emissions by 13,000 tons. An Environmental and Social
          Management Plan, prepared in November 2012, describes mitigation
          measures to minimize possible negative impacts on the climate and
          surrounding environment. For example, a detailed tree survey
          documented the species, age, height, and condition of all trees, with
          at least one-to-one replacement where felling was required.
          <br />
          <br />
          <strong>QII.4 Resilience</strong>
          <br />
          The tunnel features seismic-resistant engineering suited to Istanbul's
          earthquake risk. Two seismic joints provide 3-dimensional flexibility
          in case of an earthquake. The tunnel entrance was elevated to E.L.+
          6m, and discharge pumps were installed at the entrance and exit with
          total capacity sized for tsunami risk.
        </>
      ),
    },
    References: {
      value: "12",
      desc: "Global references",
      country: "Global",
      title: "References",
      description: "Recognized by multiple international organizations.",
    },
  };
  const tabData2 = {
    "Sustainable Development Objectives": {
      value: "210M",
      desc: "Hours of travel time saved",
      country: "Eurasia Tunnel, Türkiye",
      title: "Sustainable Development Objectives",
      description:
        "The Eurasia Tunnel, one of the first projects globally to achieve Blue Dot Network certification, is an engineering landmark that connects two continents in just 5 minutes. Over its first 8 years of operation (2016-2024), the tunnel has saved commuters 210 million hours of travel time while improving road safety.  The project aims to cut fuel consumption by 129,000 tons and CO2 emissions by 50,000 tons over its operational lifetime. ",
    },
  };
  const tabData3 = {
    "Sustainable Development Objectives": {
      value: "210M",
      desc: "Hours of travel time saved",
      country: "Eurasia Tunnel, Türkiye",
      title: "Sustainable Development Objectives",
      description:
        "The Eurasia Tunnel, one of the first projects globally to achieve Blue Dot Network certification, is an engineering landmark that connects two continents in just 5 minutes. Over its first 8 years of operation (2016-2024), the tunnel has saved commuters 210 million hours of travel time while improving road safety.  The project aims to cut fuel consumption by 129,000 tons and CO2 emissions by 50,000 tons over its operational lifetime. ",
    },
  };

  const allData = [tabData1, tabData2, tabData3];

  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState(true);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // if (tab === activeTab) return;
    // setFade(false);
    // setTimeout(() => {
    //   setFade(true);
    // }, 300);
  };

  const content = allData[currentCard][activeTab];

  const step1Cards = [
    {
      image: "images/qii1/Blue-Dot-Network.png",
      title: (
        <p>
          <strong>The Blue Dot Network (BDN)</strong>
        </p>
      ),
      buttonText: "",
      link: "https://www.bluedot-network.org/",
      content: (
        <p>
          The Blue Dot Network is a voluntary, private-sector-focused and
          government-supported certification scheme for infrastructure projects.
          Led by Australia, Japan, Spain, Switzerland, Türkiye, the United
          Kingdom and the United States, the certification system assesses
          infrastructure projects against high standards of transparency,
          sustainability, and developmental impact.
        </p>
      ),
    },
    {
      image: "images/qii1/FAST-Infra.png",
      title: (
        <p>
          <strong>FAST-Infra</strong>
        </p>
      ),
      buttonText: "",
      link: "https://fastinfragroup.org/",
      content: (
        <p>
          The FAST-Infra Label is a globally applicable label for projects
          demonstrating significant positive sustainability performance. The
          FAST-Infra initiative was originally conceived collectively by the
          Climate Policy Initiative (CPI), HSBC, the OECD, the International
          Finance Corporation (IFC) and the World Bank Group’s Global
          Infrastructure Facility (GIF), and integrates QII-aligned criteria
          into its Label to attract private capital to sustainable assets by
          providing consistent evaluation metrics.{" "}
        </p>
      ),
    },
    {
      image:
        "images/qii1/Compendium-of-Quality-Infrastructure-Investment-Indicators.png",
      title: (
        <p>
          <strong>
            Compendium of Quality Infrastructure Investment Indicators
          </strong>{" "}
          <br />
          IFC
        </p>
      ),
      buttonText: "",
      link: "https://cdn.gihub.org/umbraco/media/4761/compendium-of-qii-indicators.pdf",
      content: (
        <p>
          The International Finance Corporation (IFC), through its work for the
          G20 (under the Indonesian Presidency in 2022) developed a Compendium
          of Quality Infrastructure Investment Indicators which offer a menu of
          voluntary indicators that can be adapted to different country
          circumstances.{" "}
        </p>
      ),
    },
  ];

  const furtherReadingCards = [
    {
      id: 1,
      image: "images/qii1/Iraq-Rebuilding-Communities.png",
      country: "Iraq",
      title: "Rebuilding Communities After Conflict",
      subtext1: "Project Appraisal Document",
      subtext2: "",
      type: "Resource",
      paths:
        "https://blogs.worldbank.org/en/arabvoices/iraq-emergency-project-rebuilding-bridges#:~:text=They%20were%20carried%20out%20by%20Iraqi%20government,Group's%20Emergency%20Operation%20for%20Development%20Project%20(EODP)",
      videoUrl: null,
    },
    {
      id: 2,
      image: "images/qii1/Dominica-Building-Climate-Resilience.png",
      country: "Dominica",
      title: "Building Climate Resilience Through Nature-Based Solutions",
      subtext1: "GFDRR Country Profile",
      subtext2: "Project Appraisal Document",
      type: "Resource",
      paths:
        "https://documents1.worldbank.org/curated/en/676111538364626336/pdf/PAD2765-PUBLIC.pdf",
      videoUrl: null,
    },
    {
      id: 3,
      image: "images/qii1/Indonesia-Transforming.png",
      country: "Indonesia",
      title: "Transforming Irrigation Performance Through Technology",
      subtext1: "Blog: Modernizing Public Transport",
      subtext2: "Press Release: Urban Transport Support",
      type: "Resource",
      paths:
        "https://www.worldbank.org/en/news/feature/2022/07/06/-indonesia-pioneers-irrigation-service-delivery-innovation",
      videoUrl: null,
    },
    {
      id: 3,
      image: "images/qii1/Maputo-Data-Driven-Urban-Mobility.png",
      country: "Maputo",
      title: "Data-Driven Urban Mobility",
      subtext1: "Blog: Modernizing Public Transport",
      subtext2: "Press Release: Urban Transport Support",
      type: "Resource",
      paths:
        "https://www.worldbank.org/en/news/press-release/2022/08/24/world-bank-supports-urban-transport-in-the-maputo-metropolitan-area",
      videoUrl: null,
    },
  ];

  const otherRefernceCards = [
    {
      id: 0,
      image: "images/qii1/Japan-Quality-Infrastructure.png",
      org: false,
      title: `"Quality Infrastructure” Around the World: Compendium of Good Practices`,
      country: "Japan",
      subtext1: "(English/Japanese)",
      subtext2:
        "A flagship report by MLIT, including 48 case studies of Japan-supported infrastructure projects across the world that demonstrate alignment with QII Principles.",
      type: "Resource",
      paths: "https://www.mlit.go.jp/kokusai/content/001397310.pdf",
    },
    {
      id: 1,
      image: "images/qii1/Compendium-of-Quality-Infrastructure-in-Africa.png",
      org: false,
      title: "Compendium of Quality Infrastructure",
      country: "Africa",
      subtext1: "(English/Japanese)",
      subtext2: (
        <>
          An MLIT resource presenting 26 case studies from across Africa,
          demonstrating how QII principles address the continent's unique
          infrastructure challenges.
        </>
      ),
      type: "Resource",
      paths: "https://www.mlit.go.jp/kokusai/content/africa_0807_EN.pdf",
    },
  ];

  const paginatedCards = furtherReadingCards.slice(
    (stepPage - 1) * STEP_PAGE_SIZE,
    stepPage * STEP_PAGE_SIZE,
  );

  const paginatedCards2 = otherRefernceCards.slice(
    (stepPage - 1) * STEP_PAGE_SIZE,
    stepPage * STEP_PAGE_SIZE,
  );

  const openVideo = (url, title, width, height) => {
    dispatch(setVideoData({ url, title, width, height }));
    dispatch(setShowVideo(true));
  };

  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [{ path: "/qii1", title: "QII.1 Sustainable Growth" }],
      }),
    );
  }, []);
  return (
    <div className="qii1">
      <section className="q1_landing_page color-dark">
        <section className="color-light landingpage-banner">
          <Header3 img="images/qii1/QII1_Landing_main.png">
            <div className="langing-page-container">
              <img
                src="images/UpdatedAssets/Qii1.svg"
                alt="landing-page-logo"
                className="landingpage-logo"
              />
              <div className="landingpage-description">
                <p className="light-font">
                  Quality infrastructure drives sustainable growth when
                  infrastructure investments create jobs, boost productivity,
                  and connect people to markets.
                </p>
                {/* <p className="bold-text">
                      <strong></strong>
                    </p> */}
              </div>
            </div>
          </Header3>
        </section>
        <section className="container internal-pages-container">
          <p className="light-font sub-text center-text title-text">
            <strong>
              How Quality Infrastructure Drives Sustainable Growth
            </strong>
          </p>

          {/* <div className="ico-text-card-3-container">
            <div className="ico-text-card-3">
              <div className="ico-text-card-3-ico">
                <img src="images/qii1/Icon1.svg" alt="" />
              </div>
              <div className="ico-text-card-3-description">
                <div className="ico-text-card-3-title">
                  <p>
                    Infrastructure as the Backbone of Jobs and Livelihoods
                  </p>
                </div>
                <p className="ico-text-card-3-desc">
                  Infrastructure can create a virtuous economic cycle, from job
                  creation during the construction and OaM phases, to boosting
                  the industries that support these activities, to ultimately
                  increasing productivity, jobs and access to markets through
                  the infrastructure services provided.1
                </p>
                <p className="ico-text-card-3-link">
                  1:{" "}
                  <Link
                    to="https://documents1.worldbank.org/curated/en/924891596641466361/pdf/Jobs-Umbrella-Multidonor-Trust-Fund-Annual-Report-2019-2020.pdf"
                    target="_blank"
                    className="link"
                  >
                    World Bank (2020) Jobs Umbrella MDTF: Annual Report
                    2019-2020{" "}
                  </Link>
                </p>
              </div>
            </div>
            
          </div> */}
          <div key={page} className="page-animate">
            {cards.slice(start, end)}
          </div>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#00a996",
                borderRadius: 100,
                colorBgContainer: "#e5f5fb",
              },
            }}
          >
            <Pagination
              align="center"
              current={page}
              pageSize={1}
              total={cards.length}
              showSizeChanger={false}
              showQuickJumper={false}
              showPrevNextJumpers={false}
              onChange={(p) => setPage(p)}
              className="resource-pagination"
            />
          </ConfigProvider>
        </section>
      </section>
      <section>
        <QII1CaseStudy1 />
      </section>
      <section className="color-dark FurtherReadingSection">
        <div className="container">
          <h2 className="section-title light-font">Further Reading </h2>
          <div className="card-4-grid" role="list">
            {paginatedCards.map((card) => (
              <QII1_CardBox key={card.id} card={card} />
            ))}
          </div>
          {furtherReadingCards.length > STEP_PAGE_SIZE && (
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#00a996",
                  borderRadius: 100,
                  colorBgContainer: "#e5f5fb",
                },
              }}
            >
              <Pagination
                align="center"
                current={stepPage}
                pageSize={STEP_PAGE_SIZE}
                total={furtherReadingCards.length}
                showSizeChanger={false}
                showQuickJumper={false}
                showPrevNextJumpers={false}
                onChange={(page) => setStepPage(page)}
                className="resource-pagination"
              />
            </ConfigProvider>
          )}
        </div>
      </section>
      <section className="container internal-pages-container color-light">
        <p className="center-text">
          <strong>
            The Multiplier Effect: How QII Principles Work Together
          </strong>
        </p>
        <div className="VCard-cnt col3">
          <QIIVCard
            image="images/qii1/Eurasia_Tunnel.png"
            title={
              <p>
                Türkiye <br />
                <strong>Eurasia Tunnel</strong>
              </p>
            }
            principles="QII.2 | QII.3 | QII.4 | QII.5 | QII.6"
            link=""
            index={0}
            setCurrentCard={setCurrentCard}
            currentCard={currentCard}
          >
            <p>
              $2 billion in economic benefits over 8 years, with 53,000+ jobs
              expected by 2042, by connecting two continents in 5 minutes.
            </p>
          </QIIVCard>
          <QIIVCard
            image="images/qii1/Delhi-Mass-Rapid-Transport-System-Phase-2.png"
            title={
              <p>
                India <br />
                <strong>Delhi Mass Rapid Transport System Phase 2</strong>
              </p>
            }
            principles="QII.2 | QII.3 | QII.5 "
            link="/not-given"
            index={1}
            setCurrentCard={setCurrentCard}
            currentCard={currentCard}
          >
            <p>
              83 km of new metro serving 17 million residents, designed for
              accessibility, safety, and cleaner air.
            </p>
          </QIIVCard>
          <QIIVCard
            image="images/qii1/Port-Moresby-Sewerage-System-Upgrading-Project.png"
            title={
              <p>
                Papua New Guinea <br />
                <strong>Port Moresby Sewerage System Upgrading Project</strong>
              </p>
            }
            principles="QII.1 | QII.2 | QII.3 | QII.5 | QII.6"
            link="/not-given"
            index={2}
            setCurrentCard={setCurrentCard}
            currentCard={currentCard}
          >
            <p>
              Protecting coastal livelihoods and marine ecosystems while
              building local technical capacity through Japanese partnership
            </p>
          </QIIVCard>
        </div>
        {/* <div className="card-5">
          <div className="card-5-btn-container">
            <button className="card-5-btn">
              Sustainable Development Objectives
            </button>
            <button className="card-5-btn">Jobs and Growth</button>
            <button className="card-5-btn">
              Co-Benefits of Multiple QII Principles
            </button>
            <button className="card-5-btn">
              Partnering With the Private Sector
            </button>
            <button className="card-5-btn">
              Digitalization and Technology
            </button>
            <button className="card-5-btn">
              Partnering With the Private Sector
            </button>
            <button className="card-5-btn">References</button>
          </div>
          <div className="card-5-content">
            <div className="card-5-content-circle">
              <p>
                <strong>210M</strong>
              </p>
              <p>Hours of travel time saved</p>
            </div>
            <div className="card-5-content-desc">
              <p className="card-5-content-country">Eurasia Tunnel, Türkiye</p>
              <p className="card-5-content-title">
                Sustainable Development Objectives
              </p>
              <p className="card-5-content-description">
                The Eurasia Tunnel, one of the first projects globally to
                achieve Blue Dot Network certification, is an engineering
                landmark that connects two continents in just 5 minutes. Over
                its first 8 years of operation (2016-2024), the tunnel has saved
                commuters 210 million hours of travel time while improving road
                safety. The project aims to cut fuel consumption by 129,000 tons
                and CO2 emissions by 50,000 tons over its operational lifetime.
              </p>
            </div>
          </div>
        </div> */}
        <div className="card-5">
          <div className="card-5-btn-container">
            {/* {Object.keys(allData[currentCard]).map((tab, i) => (
              
            ))} */}
            {tabs.map((tab, i) => {
              console.log("activeTab", activeTab);

              return (
                <button
                  key={tab}
                  className={`card-5-btn ${activeTab == i ? "card-5-btn-active" : ""}`}
                  onClick={() => handleTabClick(i)}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className={`card-5-content ${fade ? "fade-in" : "fade-out"}`}>
            <div className="card-5-content-circle">
              <p>
                <strong>{cardsTabsData[currentCard][activeTab].value}</strong>
              </p>
              <p>{cardsTabsData[currentCard][activeTab].desc}</p>
            </div>

            <div className="card-5-content-desc">
              <p className="card-5-content-country">
                {cardsTabsData[currentCard][activeTab].country}
              </p>
              <p className="card-5-content-title">
                {cardsTabsData[currentCard][activeTab].title}
              </p>
              <p className="card-5-content-description">
                {cardsTabsData[currentCard][activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container internal-pages-container color-dark">
        <h2 className="section-title light-font">Key References</h2>
        <p className="center-text">
          Several international initiatives have incorporated the QII Principles
          into frameworks to strengthen investment decision-making into quality
          infrastructure.
        </p>
        <VCardsPagination cardsData={step1Cards} />
        <p className="center-text">
          Together, these efforts promote a shared global language for quality,
          resilience, and sustainability in infrastructure investment.
        </p>
      </section>
      <section className="container internal-pages-container color-light">
        <h2 className="section-title light-font">Other References</h2>
        <div className="card-4-grid" role="list">
          {paginatedCards2.map((card) => (
            <QII1_CardBox key={card.id} card={card} />
          ))}
          {otherRefernceCards.length > STEP_PAGE_SIZE && (
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#00a996",
                  borderRadius: 100,
                  colorBgContainer: "#e5f5fb",
                },
              }}
            >
              <Pagination
                align="center"
                current={stepPage}
                pageSize={STEP_PAGE_SIZE}
                total={otherRefernceCards.length}
                showSizeChanger={false}
                showQuickJumper={false}
                showPrevNextJumpers={false}
                onChange={(page) => setStepPage(page)}
                className="resource-pagination"
              />
            </ConfigProvider>
          )}
        </div>
      </section>
      {/* <section className="color-light z-2">
        <ResourceLibrary></ResourceLibrary>
      </section> */}
    </div>
  );
}
