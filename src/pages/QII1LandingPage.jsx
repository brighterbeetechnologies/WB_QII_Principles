import React, { useEffect, useState } from "react";
import "./QII1LandingPage.css";
import TextIconCarousal from "../components/TextIconCarousal";
import Header4 from "../components/Header4";
import { Link, useNavigate } from "react-router-dom";
import ResourceLibrary from "./ResourceLibrary";
import { Pagination, ConfigProvider } from "antd";
import TopResourceCard from "../components/TopResourceCard";
import VCardsPagination from "../components/VCardsPagination";
import { useDispatch } from "react-redux";
import Video from "../components/Video";
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
  const STEP_PAGE_SIZE1 = 3;
  const [stepPage, setStepPage] = useState(1);
  const [stepPage1, setStepPage1] = useState(1);

  const PAGE_SIZE = 1;
  const [page, setPage] = useState(1);
  const [currentCard, setCurrentCard] = useState(4);

  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const cards = [
    <div className="ico-text-card-3-container">
      <div className="ico-text-card-3">
        <div className="ico-text-card-3-ico">
          <img src="images/qii1/Vector.svg" alt="" />
        </div>
        <div className="ico-text-card-3-description">
          <div className="ico-text-card-3-title">
            <p>Infrastructure as the Backbone of Jobs and Livelihoods</p>
          </div>
          <p className="ico-text-card-3-desc">
            Infrastructure can create a virtuous economic cycle, from job
            creation during the construction and O&M phases, to boosting the
            industries that support these activities, to ultimately increasing
            productivity, jobs and access to markets through the infrastructure
            services provided.
          </p>
          <p className="ico-text-card-3-link">
            1:{" "}
            <Link
              to="https://documents1.worldbank.org/curated/en/924891596641466361/pdf/Jobs-Umbrella-Multidonor-Trust-Fund-Annual-Report-2019-2020.pdf"
              target="_blank"
              className="link"
            >
              World Bank (2020) Jobs Umbrella MDTF: Annual Report 2019-2020
            </Link>
          </p>
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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPage((prev) => (prev === cards.length ? 1 : prev + 1));
  //   }, 3000); // 3 seconds

  //   return () => clearInterval(interval);
  // }, [cards.length]);

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
        description: (
          <>
            The Eurasia Tunnel, one of the first projects globally to achieve{" "}
            <a
              href="https://www.bluedot-network.org/case-studies/BDN-ZX1J8I-21LT"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Blue Dot Network certification
            </a>
            , is an engineering landmark that connects two continents in just 5
            minutes. Over its first 8 years of operation (2016-2024), the tunnel
            has saved commuters 210 million hours of travel time while improving
            road safety. The project aims to cut fuel consumption by 129,000
            tons and CO<sub>2</sub> emissions by 50,000 tons over its
            operational lifetime.
          </>
        ),
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
            <ul>
              <li>
                <a
                  href="https://www.bluedot-network.org/case-studies/BDN-ZX1J8I-21LT"
                  target="_blank"
                  className="link "
                >
                  Blue Dot Network (n.d.). Eurasia Tunnel
                </a>
                .
              </li>
              <li>
                <a
                  href="https://www.gihub.org/quality-infrastructure-database/case-studies/istanbul-strait-road-tunnel-project-eurasia-tunnel-project/"
                  target="_blank"
                  className="link"
                >
                  Global Infrastructure Hub (2021) Istanbul Strait Road Tunnel
                  Project (“Eurasia Tunnel Project”)
                </a>
                .
              </li>
            </ul>
          </>
        ),
      },
    ],
    1: [
      {
        value: "210M",
        desc: "Hours of travel time saved",
        country: "Delhi Mass Rapid Transport System Phase 2, India​",
        title: "Sustainable Development Objectives",
        description: (
          <>
            Phase 2 of the Delhi Mass Rapid Transport System extended six metro
            lines, more than doubling the total length of the system by adding
            83 km of track and 734 coaches to address growing traffic congestion
            in India's capital. The project was delivered through a partnership
            between the Government of India, the Government of NCT Delhi, the
            Government of Haryana State, and the Delhi Metro Rail Corporation
            (DMRC), with 55% of the project cost financed through a Japanese ODA
            loan.
            <br />
            <br />
            The project contributes to regional economic development and
            improves the urban environment by alleviating congestion and
            reducing vehicle-related air pollution. By providing Delhi’s 17
            million residents with convenient, reliable, and safe public
            transportation, it increases accessibility across the city, boosting
            property values and business activity while reducing private vehicle
            use.
          </>
        ),
      },
      {
        value: "14M",
        desc: "Man-hours",
        country: "India​",
        title: "Jobs and Growth",
        description: (
          <>
            The Delhi Metro has created substantial employment across
            construction and operations. At the time of JICA's 2015 ex-post
            evaluation, DMRC employed 8,628 people directly, with a staffing
            ratio of approximately 40 employees per operational kilometer.
            Today, DMRC employs ~13,000 people.
            <br /> <br />
            Property values within 500 meters of metro corridors have increased
            by 11% annually for residential properties and 18% for commercial
            properties. The project's Economic Internal Rate of Return stands at
            25%.
            <br />
            <br />
            DMRC has also become a center for institutional capacity building,
            establishing India's first metro training institute in 2002, which
            now trains ~8,000 people annually. DMRC provides consulting services
            to other metros including Mumbai, Patna, Dhaka, and Jakarta.
          </>
        ),
      },
      {
        value: "14M",
        desc: "Man-hours",
        country: "India​",
        title: "Co-Benefits of Multiple QII Principles",
        description: (
          <>
            <strong>QII.2 Economic Efficiency</strong>
            <br />
            The project incorporated Life Cycle Cost considerations from the
            outset and ensures adequate maintenance and operation by
            well-qualified employees throughout the system's lifecycle. DMRC has
            developed a diversified revenue model that extends well beyond fare
            box revenue. Total revenue in FY 2014 reached INR 35.6 billion, with
            fare revenue contributing INR 15 billion and other revenue sources
            (advertising, property development, station naming rights, and
            external consulting projects) contributing INR 20.5 billion. Revenue
            from external projects became DMRC's second-largest income source,
            comprising 32% of FY 2014 revenue.
            <br />
            <br />
            The Financial Internal Rate of Return was recalculated at 3.84% at
            the time of ex-post evaluation, with potential for improvement as
            fare revisions are implemented.
            <br />
            <br />
            <strong>QII.3 Environment</strong>
            <br />
            The project is expected to reduce CO<sub>2</sub> emissions by
            approximately 26,550 tons of CO<sub>2</sub> equivalent per year,
            while also cutting air and noise pollution. In a notable
            sustainability innovation, as of April 2019, the Delhi Metro sources
            clean energy from the{" "}
            <a
              href="https://documents1.worldbank.org/curated/en/627561582530270545/pdf/Rewa-Solar-India-Removing-Barriers-to-Scale.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Rewa Ultra Mega Solar Park
            </a>{" "}
            in Madhya Pradesh. Under a 25-year Power Purchase Agreement, 24% of
            Rewa's 750 MW output goes to DMRC, meeting ~60% of the Delhi Metro's
            daytime electricity demand. This arrangement, structured with IFC's
            advisory support, was the first operationalization of India's Open
            Access rules for solar power and received the World Bank Group
            President's Award for Innovation and Excellence.
            <br />
            <br />
            An Environmental Impact Assessment (EIA) Report was prepared
            following JICA Guidelines for Environmental and Social
            Considerations (Category A project). Environmental measures include
            sprinklers, wastewater treatment, excavated earth treatment, and
            noise barriers to conform with India's emissions and environmental
            standards.
            <br />
            <br />
            During operation, measures address air quality, water quality,
            waste, soil contamination, noise, and vibration through septic tank
            installation, compliance with waste management laws (including
            hazardous waste regulations), and grinding of wheels and rails.
            <br />
            <br />
            The Department of Forest and Wildlife, Government of Delhi, will
            plant 158,560 replacement trees in accordance with the Delhi
            Preservation of Trees Act (1994) and Government of India guidelines.
            <br />
            <br />
            <strong>QII.5 Inclusion </strong>
            <br />
            Station buildings and passenger cars are designed for elderly and
            disabled users, featuring elevators, toilets, internal broadcasting,
            Braille blocks, and wheelchair spaces. All front-line staff,
            including station personnel and crew members, receive customer care
            training.
            <br />
            <br />
            The project required no acquisition of private land and no
            resettlement of residents.
            <br />
            <br />
            Safety features for women include women-only cars, priority seating
            for passengers requiring assistance (including women), and CCTV
            cameras in station buildings and trains.
          </>
        ),
      },
      {
        value: "14M",
        desc: "Man-hours",
        country: "India​",
        title: "Digitalization and Technology",
        description: (
          <>
            Every aspect of the Delhi Metro system is monitored: timetables,
            speed, security, traction and electricity, trains, auxiliary
            equipment (air-conditioning and ventilation in underground tunnels),
            and crowd levels at stations.
            <br /> <br />
            Three integrated systems keep the network running: ATP (Automatic
            Train Protection), ATO (Automatic Train Operation), and ATS
            (Automatic Train Supervision). Sensors track train movement through
            track circuits.
          </>
        ),
      },
      {
        value: "14M",
        desc: "Man-hours",
        country: "India​",
        title: "Partnering With the Private Sector",
        description: (
          <>
            Delhi Metro Rail Corporation Ltd. (DMRC) served as project sponsor.
            55% of the project cost was financed through a Japanese ODA loan to
            DMRC, with the remainder provided by the Government of India, the
            Government of NCT Delhi, the Government of Haryana State, and DMRC.
          </>
        ),
      },
      {
        value: "14M",
        desc: "Man-hours",
        country: "India​",
        title: "References",
        description: (
          <>
            <ul>
              <li>
                <a
                  href="pdf/QII Indicators Pilot for G20 IWG_2023.pdf"
                  target="_blank"
                  className="link"
                >
                  IFC (2023). QII Indicators: Results from Pilot Projects and
                  Emerging Lessons.
                </a>
              </li>
              <li>
                <a
                  href="https://www2.jica.go.jp/en/evaluation/pdf/2024_ID-P329_1_s.pdf"
                  target="_blank"
                  className="link"
                >
                  JICA (2025). Ex-Ante Evaluation: Delhi Mass Rapid Transport
                  System Project.
                </a>
              </li>
              <li>
                <a
                  href="https://economictimes.indiatimes.com/defaultinterstitial.cms"
                  target="_blank"
                  className="link"
                >
                  Banerjee, R. (2013). How Delhi Metro manages to be a model of
                  efficiency every day. The Economic Times.
                </a>
              </li>
            </ul>
          </>
        ),
      },
    ],
    2: [
      {
        value: "210M",
        desc: "Hours of travel time saved",
        country:
          "Port Moresby Sewerage System Upgrading Project, Papua New Guinea",
        title: "Sustainable Development Objectives",
        description: (
          <>
            Port Moresby's 67,000 coastal residents had no sewage treatment.
            Untreated waste discharged directly into the sea, destroying coral
            reefs, contaminating fisheries, and driving waterborne disease rates
            to six times the city average.
            <br />
            <br />
            The Port Moresby Sewerage System Upgrading Project, completed in
            January 2020, delivered Papua New Guinea's first coastal sewage
            treatment facility. The project includes a Sewage Treatment Plant in
            Kila Kila capable of treating 18,400 cubic meters of water per day,
            a 13 km trunk sewer, a 15 km branch sewer, and the construction or
            rehabilitation of 13 pumping stations.
            <br />
            <br />
            The project won first prize at the 4th Japan Construction
            International Award, organized by Japan's MLIT to recognize Japanese
            companies demonstrating excellence in quality infrastructure
            investments overseas.
          </>
        ),
      },
      {
        value: "14M",
        desc: "Man-hours",
        country: "Papua New Guinea",
        title: "Jobs and Growth",
        description: (
          <>
            The project's most significant economic impact lies in the
            livelihoods it has restored. Before this project, pollution had
            effectively ended coastal fishing for nearby communities. Today,
            residents near the Joyce Bay treatment plant catch fish and
            shellfish for consumption and sale. Women from low-income villages
            have returned to selling shellfish at local markets, recovering a
            traditional income source that pollution had eliminated.
            <br /> <br />
            The ripple effects extend to tourism and industry. According to
            Papua New Guinea's Investment Promotion Authority, Ela Beach has
            attracted new hotels, restaurants, and apartments since water
            quality improved. Manufacturing and food processing plants have also
            been established near the treatment facility now that odor problems
            have been resolved.
            <br />
            <br />
            Beyond immediate employment during construction, the project
            invested heavily in building local technical capacity. JICA provided
            comprehensive training to utility staff on treatment plant
            operations and network maintenance. Construction contractor Dai
            Nippon proactively hired young civil engineering trainees, creating
            a pipeline of skilled workers for Papua New Guinea's water sector.
            These staff continue to operate the facility today, supported by
            operational manuals and maintenance systems developed through the
            project.
          </>
        ),
      },
      {
        value: "14M",
        desc: "Man-hours",
        country: "Papua New Guinea",
        title: "Co-Benefits of Multiple QII Principles",
        description: (
          <>
            <strong>QII.3 Environment</strong>
            <br />
            Water quality improvements have been transformative. E. coli levels
            dropped from 23-2,400 MPN/100mL before the project to zero by 2021.
            The treatment plant uses ultraviolet disinfection rather than
            chlorine to minimize chemical impact on the marine environment.
            Given the sensitive coral reef ecosystem, the project was classified
            as Category A under JICA's Environmental and Social Consideration
            Guidelines. Ocean outfall installation included coral
            transplantation and one-year settlement monitoring.
            <br />
            <br />
            <strong>QII.5 Inclusion</strong>
            <br />
            The health benefits are measurable: households connected to the
            sewerage system report diarrhea incidence of 27%, compared to 45%
            among unconnected households. A follow-up technical cooperation
            project conducted community education on the importance of household
            connections, hand washing, and proper waste disposal through focus
            group discussions, community meetings, and educational seminars.
            <br />
            <br />
            <strong>QII.6 Governance</strong>
            <br />
            JICA's technical assistance strengthened Water PNG's institutional
            capacity for long-term sustainability. The project developed
            business operation plans, a tariff collection system, and
            standardized operating procedures. Water PNG now submits regular
            environmental monitoring reports to the Conservation and Environment
            Protection Authority under a permit valid through 2043.
          </>
        ),
      },
      {
        value: "210M",
        desc: "Hours of travel time saved",
        country: "Papua New Guinea",
        title: "Digitalization and Technology",
        description: (
          <>
            Sewage water is treated using technologies for monitoring and
            maintenance of the sewer network, along with equipment for the
            activated sludge process and ultraviolet disinfection systems.
            <br />
            <br />
            Advanced Japanese construction methodologies and sludge processing
            technologies keep both construction and maintenance costs low,
            aligned with economic efficiency goals.
          </>
        ),
      },
      {
        value: "210M",
        desc: "Hours of travel time saved",
        country: "Papua New Guinea",
        title: "Partnering With the Private Sector ",
        description: (
          <>
            Local staff training and capacity building was undertaken in
            partnership with private sector technology suppliers.
            <br />
            <br />
            Japanese technology companies provided monitoring and treatment
            equipment for the facility.
          </>
        ),
      },
      {
        value: "210M",
        desc: "Hours of travel time saved",
        country: "Papua New Guinea",
        title: "References",
        description: (
          <>
            <ul>
              <li>
                <a
                  href="https://www.jica.go.jp/english/overseas/png/activities/activity15.html"
                  target="_blank"
                  className="link"
                >
                  JICA (2018). Port Moresby Sewerage System Upgrading Project.
                </a>
              </li>
              <li>
                <a
                  href="https://www.mlit.go.jp/JCIA/content/Japacon_brochure_4th_202306.pdf"
                  target="_blank"
                  className="link"
                >
                  MLIT (2021). Port Moresby Sewerage System Upgrading Project.
                </a>
              </li>
              <li>
                <a
                  href="https://libopac.jica.go.jp/images/report/1000042973.pdf"
                  target="_blank"
                  className="link"
                >
                  JICA (2020). Port Moresby Wastewater Management Improvement
                  Project: Project Completion Report.
                </a>
              </li>
              <li>
                <a
                  href="https://openjicareport.jica.go.jp/pdf/12047692_01.pdf"
                  target="_blank"
                  className="link"
                >
                  IPBC (2011). Detailed Design (Phase 2) on Port Moresby
                  Sewerage System Upgrading Project in the Independent State of
                  Papua New Guinea: Final Report: Part I Design Report.
                </a>
              </li>
            </ul>
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
      description: (
        <>
          The Eurasia Tunnel, one of the first projects globally to achieve{" "}
          <a
            href="https://www.bluedot-network.org/case-studies/BDN-ZX1J8I-21LT"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Blue Dot Network certification
          </a>
          , is an engineering landmark that connects two continents in just 5
          minutes. Over its first 8 years of operation (2016-2024), the tunnel
          has saved commuters 210 million hours of travel time while improving
          road safety. The project aims to cut fuel consumption by 129,000 tons
          and CO<sub>2</sub> emissions by 50,000 tons over its operational
          lifetime.
        </>
      ),
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
      description: (
        <>
          The Eurasia Tunnel, one of the first projects globally to achieve Blue
          Dot Network certification, is an engineering landmark that connects
          two continents in just 5 minutes. Over its first 8 years of operation
          (2016-2024), the tunnel has saved commuters 210 million hours of
          travel time while improving road safety. The project aims to cut fuel
          consumption by 129,000 tons and CO<sub>2</sub> emissions by 50,000
          tons over its operational lifetime.{" "}
        </>
      ),
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

  const content = allData[currentCard]?.[activeTab];

  const step1Cards = [
    {
      image: "images/qii1/Blue-Dot-Network.png",
      title: (
        <p>
          Global <br />
          <strong>The Blue Dot Network</strong>
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
      image: "images/qii3/GreenFinancingforInfrastructure/FAST-Infra.png",
      title: (
        <p>
          Global <br />
          <strong>FAST-Infra</strong>
        </p>
      ),
      buttonText: "",
      link: "https://www.fastinfralabel.org/",
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
          Global <br />
          <strong>
            Compendium of Quality Infrastructure Investment Indicators
          </strong>{" "}
          <br />
          G20
        </p>
      ),
      buttonText: "",
      link: "https://cdn.gihub.org/umbraco/media/4761/compendium-of-qii-indicators.pdf",
      content: (
        <p>
          The G20 (under the Indonesian Presidency in 2022) developed a
          Compendium of Quality Infrastructure Investment Indicators which offer
          a menu of voluntary indicators that can be adapted to different
          country circumstances.{" "}
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
      subtext1: (
        <>
          <Link
            to={
              "https://blogs.worldbank.org/en/arabvoices/iraq-emergency-project-rebuilding-bridges#:~:text=They%20were%20carried%20out%20by%20Iraqi%20government,Group's%20Emergency%20Operation%20for%20Development%20Project%20(EODP)"
            }
            className="link3"
          >
            Blog: Emergency Project Rebuilding Bridges, Roads, Water,
            Wastewater, Municipal services and Livelihoods.{" "}
          </Link>
        </>
      ),
      subtext2: (
        <>
          <Link
            to={
              "https://www.worldbank.org/en/news/press-release/2017/10/31/400-million-for-the-reconstruction-of-mosul-and-newly-liberated-areas-in-iraq#:~:text=On%20October%2031%2C%202017%2C%20the%20World%20Bank,*%20Improve%20education%20quality%20*%20Increase%20employment"
            }
            className="link3"
          >
            Blog: $400 Million for the Reconstruction of Mosul and Newly
            Liberated Areas in Iraq{" "}
          </Link>
        </>
      ),
      subtext3: false,
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
      subtext1: (
        <>
          <Link to={"https://www.gfdrr.org/fr/dominique"} className="link3">
            GFDRR Country Profile{" "}
          </Link>
        </>
      ),
      subtext2: (
        <>
          <Link
            to={
              "https://documents1.worldbank.org/curated/en/676111538364626336/pdf/PAD2765-PUBLIC.pdf"
            }
            target="_blank"
            className="link3"
          >
            https://documents1.worldbank.org/curated/en/ <br />
            676111538364626336/pdf/PAD2765-PUBLIC.pdf{" "}
          </Link>
        </>
      ),
      subtext3: (
        <>
          <Link
            to={
              "https://www.worldbank.org/en/news/feature/2023/09/26/dominica-s-journey-to-become-the-world-s-first-climate-resilient-country"
            }
            target="_blank"
            className="link3"
          >
            Blog: Dominica’s Journey to become the World’s First Climate
            Resilient Country{" "}
          </Link>
        </>
      ),
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
      subtext1: (
        <>
          <Link
            to={
              "https://www.worldbank.org/en/news/feature/2022/07/06/-indonesia-pioneers-irrigation-service-delivery-innovation"
            }
            className="link3"
          >
            Feature: Irrigation Service Delivery Innovation{" "}
          </Link>
        </>
      ),
      subtext2: false,
      subtext3: false,
      type: "Resource",
      paths: "",
      videoUrl: null,
    },
    {
      id: 3,
      image: "images/qii1/Maputo-Data-Driven-Urban-Mobility.png",
      country: "Maputo",
      title: "Data-Driven Urban Mobility",
      subtext1: (
        <>
          <Link
            to={
              "https://blogs.worldbank.org/en/transport/harnessing-technology-and-innovation-modernize-public-transport-our-experience-mozambique"
            }
            className="link3"
          >
            Blog: Modernizing Public Transport Press Release: Urban Transport
            Support{" "}
          </Link>
        </>
      ),
      subtext2: false,
      subtext3: false,
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
      org: "MLIT",
      title: `"Quality Infrastructure” Around the World: Compendium of Good Practices`,
      country: "Japan",
      subtext1: (
        <>
          {" "}
          <Link
            to={"https://www.mlit.go.jp/kokusai/content/001397310.pdf"}
            className="link4"
          >
            (English/Japanese)
          </Link>
        </>
      ),
      subtext2:
        "A flagship report by MLIT, including 48 case studies of Japan-supported infrastructure projects across the world that demonstrate alignment with QII Principles.",
      type: "Resource",
      paths: "https://www.mlit.go.jp/kokusai/content/001397310.pdf",
    },
    {
      id: 1,
      image: "images/qii1/Compendium-of-Quality-Infrastructure-in-Africa.png",
      org: "MLIT",
      title: "Compendium of Quality Infrastructure",
      country: "Africa",
      subtext1: (
        <>
          {" "}
          <Link
            to={"https://www.mlit.go.jp/kokusai/content/001397310.pdf"}
            className="link4"
          >
            (English/Japanese)
          </Link>
        </>
      ),
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
    (stepPage1 - 1) * STEP_PAGE_SIZE1,
    stepPage1 * STEP_PAGE_SIZE1,
  );

  const openVideo = (url, title, width, height) => {
    dispatch(setVideoData({ url, title, width, height }));
    dispatch(setShowVideo(true));
  };

  const data = [
    {
      icon: "images/qii1/Icon1.svg",
      title: "Infrastructure as the Backbone of Jobs and Livelihoods",
      desc: (
        <>
          Infrastructure can create a virtuous economic cycle from job creation
          to market access.
          <br />
          It strengthens human capital by improving access to services,
          mobility, and economic opportunities, enabling greater participation
          and productivity across regions.
        </>
      ),
      linkText: "World Bank (2020) Jobs Umbrella MDTF: Annual Report 2019-2020",
      link: "https://documents1.worldbank.org/curated/en/924891596641466361/pdf/Jobs-Umbrella-Multidonor-Trust-Fund-Annual-Report-2019-2020.pdf",
    },
    {
      icon: "images/qii1/Icon4.svg",
      title: "Co-Benefits of Integrating QII Principles",
      desc: (
        <>
          Beyond its role as an economic driver, infrastructure must align with
          environmental and social objectives.
          <br />
          <br />
          While each QII principle stands on its own, governments should
          consider how multiple principles can be combined within a single
          project. The result is co-benefits that no single approach can achieve
          alone.
        </>
      ),
      linkText:
        "Vagliasindi and Gorgulu (2025). Disentangling the Key Economic Channels through Which Infrastructure Affects Jobs",
      link: "https://openknowledge.worldbank.org/server/api/core/bitstreams/7239ed0b-4cee-43c3-9a87-2470806454d8/content",
    },
    {
      icon: "images/qii1/Icon3.svg",
      title: "Digitalization and Technology in Infrastructure",
      desc: (
        <>
          Digitizing infrastructure services and introducing innovative
          technologies are cross-cutting interventions that amplify QII impacts.
          They enable step-change benefits in governance and planning processes,
          enhance designs and operational efficiency, reduce whole of life
          costs, and attract skilled labor to the sector.
          <br />
          <br />
          This is about “making infrastructure smarter and more connected”, not
          only about digital infrastructure itself.
        </>
      ),
      linkText: false,
      link: false,
    },
    {
      icon: "images/qii1/Icon2.svg",
      title: "Partnering with the Private Sector ",
      desc: (
        <>
          Investment needs for physical infrastructure alone require around 4.5%
          of GDP, or $1.5 trillion annually, in developing countries. For many
          nations, this represents a significant hurdle.
          <br />
          <br />
          Bridging this financing gap while managing rising debt levels and
          budgetary constraints requires bringing together public and private
          capital.
        </>
      ),
      linkText: "World Bank (2025) Foundations for Growth and Jobs",
      link: "https://www.devcommittee.org/content/dam/sites/devcommittee/doc/documents/2025/Final_DC2025-0004.pdf?deliveryName=DM266142",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  // const [fade, setFade] = useState(true);
  const total = data.length;

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex(activeIndex === 0 ? total - 1 : activeIndex - 1);
      setFade(true);
    }, 200);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex(activeIndex === total - 1 ? 0 : activeIndex + 1);
      setFade(true);
    }, 200);
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
          <Header4 img="images/qii1/QII1_Landing_main.png">
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
          </Header4>
        </section>
      </section>
      <section className="color-light">
        <div className="container container-qii1">
          <p className="light-font qii1-sub-text">
            QII 1 serves as the overarching foundation for the QII Principles,
            with the goal to maximize the positive impact of infrastructure and
            inform the application of the remaining principles:
          </p>
          <div className="video-text-cnt">
            <div className="video-text-box">
              <Video
                thumbnail="images/qii1/Indonesia-Transforming.png"
                videoUrl=""
                videoTitle="QII.1 in Action"
                cardTitle={
                  <>
                    <span>QII.1 in Action</span> <br />
                  </>
                }
                description=""
                duration="3 min watch"
              />
            </div>
            <div className="text-cnt-container">
              <div className="ico-text-card-1-wrapper">
                <div
                  className="ico-text-card-3-container"
                  style={{
                    width: `${100 * data.length}%`,
                    transform: `translateX(${-(100 / data.length) * activeIndex}%)`,
                  }}
                >
                  {data.map((d) => {
                    return (
                      <div className={`ico-text-card-3`}>
                        <div className="ico-text-card-3-ico">
                          <img src={d.icon} alt="" />
                        </div>
                        <div className="ico-text-card-3-description">
                          <div className="ico-text-card-3-title">
                            <p>{d.title}</p>
                          </div>
                          <p className="ico-text-card-3-desc">{d.desc}</p>
                          {d.link && d.linkText && (
                            <p className="ico-text-card-3-link">
                              1:{" "}
                              <Link
                                to={d.link}
                                target="_blank"
                                className="link"
                              >
                                {d.linkText}
                              </Link>
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="ico-text-card-1-pagination-wrapper">
                  <button
                    className="ico-text-card-1-nav-btn"
                    onClick={handlePrev}
                  >
                    <span className="ico-text-card-1-arrow-2">&#xe900;</span>
                  </button>
                  <div className="ico-text-card-1-dots">
                    {data.map((_, index) => (
                      <span
                        key={index}
                        className={`ico-text-card-1-dot ${activeIndex === index ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                      />
                    ))}
                  </div>
                  <button
                    className="ico-text-card-1-nav-btn"
                    onClick={handleNext}
                  >
                    <span className="ico-text-card-1-arrow">&#xe900;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="qii1-text-cnt"> */}
        <div className="qii1-further-reading-container">
          {/* <div className="qii1-further-reading-continer-big-1">
            <div className="qii1-further-reading-continer-small">
              <p className="qii1-further-reading">
                <strong>Iraq: Rebuilding Communities After Conflict</strong>
              </p>
              <div className="qii1-further-reading-link-container">
                <p className="qii1-further-reading-link">
                  <Link
                    to={
                      "https://blogs.worldbank.org/en/arabvoices/iraq-emergency-project-rebuilding-bridges#:~:text=They%20were%20carried%20out%20by%20Iraqi%20government,Group%27s%20Emergency%20Operation%20for%20Development%20Project%20(EODP)"
                    }
                    className="link5"
                    target="_blank"
                  >
                    Blog: Emergency Project Rebuilding Bridges, Roads, Water,
                    Wastewater Municipal services and Livelihoods
                  </Link>
                </p>
                <p className="qii1-further-reading-link">
                  <Link
                    to={
                      "https://www.worldbank.org/en/news/press-release/2017/10/31/400-million-for-the-reconstruction-of-mosul-and-newly-liberated-areas-in-iraq#:~:text=On%20October%2031%2C%202017%2C%20the%20World%20Bank,*%20Improve%20education%20quality%20*%20Increase%20employment"
                    }
                    className="link5"
                    target="_blank"
                  >
                    Blog: $400 Million for the Reconstruction of Mosul and Newly
                    Liberated Areas in Irag
                  </Link>
                </p>
              </div>
            </div>
            <div className="qii1-further-reading-continer-small">
              <p className="qii1-further-reading">
                <strong>
                  Dominica: Building Climate Resilience Through Nature-Based
                  Solutions{" "}
                </strong>
              </p>
              <div className="qii1-further-reading-link-container">
                <p className="qii1-further-reading-link">
                  <Link
                    to={"https://www.gfdrr.org/fr/dominique"}
                    className="link5"
                    target="_blank"
                  >
                    GFDRR Country Profile
                  </Link>
                </p>
                <p className="qii1-further-reading-link">
                  <Link
                    to={
                      "https://www.worldbank.org/en/news/feature/2023/09/26/dominica-s-journey-to-become-the-world-s-first-climate-resilient-country"
                    }
                    className="link5"
                    target="_blank"
                  >
                    Blog: Dominica’s Journey to become the World’s First Climate
                    Resilient Country
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="qii1-further-reading-continer-big">
            <div className="qii1-further-reading-continer-small">
              <p className="qii1-further-reading">
                <strong>
                  Indonesia: Transforming Irrigation Performance Through
                  Technology{" "}
                </strong>
              </p>
              <div className="qii1-further-reading-link-container">
                <p className="qii1-further-reading-link">
                  <Link
                    to={
                      "https://www.worldbank.org/en/news/feature/2022/07/06/-indonesia-pioneers-irrigation-service-delivery-innovation"
                    }
                    className="link5"
                    target="_blank"
                  >
                    Feature: Irrigation Service Delivery Innovation
                  </Link>
                </p>
              </div>
            </div>
            <div className="qii1-further-reading-continer-small">
              <p className="qii1-further-reading">
                <strong>Maputo: Data-Driven Urban Mobility </strong>
              </p>
              <div className="qii1-further-reading-link-container">
                <p className="qii1-further-reading-link">
                  <Link
                    to={
                      "https://blogs.worldbank.org/en/transport/harnessing-technology-and-innovation-modernize-public-transport-our-experience-mozambique"
                    }
                    className="link5"
                    target="_blank"
                  >
                    Blog: Modernizing Public Transport
                  </Link>
                </p>
                <p className="qii1-further-reading-link">
                  <Link
                    to={
                      "https://www.worldbank.org/en/news/press-release/2022/08/24/world-bank-supports-urban-transport-in-the-maputo-metropolitan-area"
                    }
                    className="link5"
                    target="_blank"
                  >
                    Press Release: Urban Transport Support
                  </Link>
                </p>
              </div>
            </div>
          </div> */}
          <div className="qii1-further-reading-container-subtitle">
            {" "}
            See the links below for more information on the projects highlighted
            in the video:​ ​
          </div>
          <div className="qii1-further-reading-container-links">
            <ul>
              <li>
                {" "}
                <a
                  href="https://blogs.worldbank.org/en/arabvoices/iraq-emergency-project-rebuilding-bridges#:~:text=They%20were%20carried%20out%20by%20Iraqi%20government,Group%27s%20Emergency%20Operation%20for%20Development%20Project%20(EODP)"
                  target="_blank"
                >
                  Iraq: Rebuilding Communities After Conflict
                </a>
              </li>
              <li>
                <a
                  href="https://www.worldbank.org/en/news/feature/2022/07/06/-indonesia-pioneers-irrigation-service-delivery-innovation"
                  target="_blank"
                >
                  Indonesia: Transforming Irrigation Performance Through
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="https://www.worldbank.org/en/news/feature/2023/09/26/dominica-s-journey-to-become-the-world-s-first-climate-resilient-country"
                  target="_blank"
                >
                  Dominica: Building Climate Resilience Through Nature-Based
                </a>
              </li>
              <li><a
                  href="https://blogs.worldbank.org/en/transport/harnessing-technology-and-innovation-modernize-public-transport-our-experience-mozambique"
                  target="_blank"
                >
                  Maputo: Data-Driven Urban Mobility
                </a></li>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </section>
      <section className="container internal-pages-container color-dark">
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
            principles="QII.3 | QII.5 | QII.6"
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
        {currentCard !== 4 && (
          <div className="card-5">
            <div className="card-5-btn-container">
              {/* {Object.keys(allData[currentCard]).map((tab, i) => (
              
            ))} */}
              {tabs.map((tab, i) => {
                // console.log("activeTab", activeTab);

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
              {/* <div className="card-5-content-circle">
                <p>
                  <strong>
                    {cardsTabsData[currentCard]?.[activeTab].value}
                  </strong>
                </p>
                <p>{cardsTabsData[currentCard]?.[activeTab].desc}</p>
              </div> */}

              <div className="card-5-content-desc">
                {/* <p className="card-5-content-country">
                  {cardsTabsData[currentCard]?.[activeTab].country}
                </p>
                <p className="card-5-content-title">
                  {cardsTabsData[currentCard]?.[activeTab].title}
                </p> */}
                <div className="card-5-content-description">
                  {cardsTabsData[currentCard]?.[activeTab].description}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="container internal-pages-container color-light">
        <h2 className="section-title light-font">
          Key Global Initiatives Promoting QII
        </h2>
        <p className="center-text">
          Several international initiatives have incorporated the QII Principles
          into frameworks to strengthen investment decision-making into quality
          infrastructure.
        </p>
        <VCardsPagination cardsData={step1Cards} />
        {/* <p className="center-text">
          Together, these efforts promote a shared global language for quality,
          resilience, and sustainability in infrastructure investment.
        </p> */}
      </section>
      <section className="container internal-pages-container color-dark">
        <h2 className="section-title light-font">Other References</h2>
        <div className="card-4-grid" role="list">
          {paginatedCards2.map((card) => (
            <QII1_CardBox key={card.id} card={card} />
          ))}
          {otherRefernceCards.length > STEP_PAGE_SIZE1 && (
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
