import React, { useState, useEffect } from "react";
import "./GreenDesignsAndNatureBasedInfrastructure.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import Header3 from "../components/Header3";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";
import VCardsPagination from "../components/VCardsPagination";
// import { updateCardClick } from "../utils/cardRanking";
import { useLocation } from "react-router-dom";

export default function GreenDesignsAndNatureBasedInfrastructure() {
  const location = useLocation();
  const data = [
    {
      title: "CLEAN WATER:",
      icon: "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/clean-water.svg",
      points: [
        "Improve water quality by reducing chemical,",
        "Improve water quality by removing pollutants in wastewater such as solids and pathogens",
      ],
    },
    {
      title: "EROSION CONTROL:",
      icon: "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/EROSION-CONTROL.svg",
      points: [
        "Stabilize steep slopes and degraded areas",
        "Reduce number of landslides in the surrounding environment of infrastructure",
      ],
    },
    {
      title: "FLOOD MANAGEMENT:",
      icon: "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/FLOOD-MANAGEMENT.svg",
      points: [
        "Protect and increase the resilience of communities and assets from flooding",
        "Reduce peak flow (the maximum rate of flow water passing a given point following rainfall)",
      ],
    },
    {
      title: "COASTAL PROTECTION:",
      icon: "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/COASTAL-PROTECTION.svg",
      points: [
        "Protect coastal urban areas and assets from erosion, storm surges, damage from wave energy, and sea level rise.",
      ],
    },
    {
      title: "WATER SECURTY:",
      icon: "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/WATER-SECURTY.svg",
      points: [
        "Improve water retention",
        "Contribute to water supply reliability",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
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

  const STEP1_PAGE_SIZE = 3;
  const step1Cards = [
    {
      rId: 84,
      image:
        "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/Integrating Green and Gray Creating Next Generation Infrastructure.png",
      title: (
        <p>
          Global <br />
          <strong>
            Integrating Green and Gray: Creating Next Generation Infrastructure
          </strong>
          <br />
          World Bank and World Resources Institute
        </p>
      ),
      buttonText: "Report",
      link: "https://openknowledge.worldbank.org/entities/publication/ddda3ed0-096e-59dd-a25d-3de884254eba",
      content: (
        <p>
          Offers an integrated view of “green + grey” infrastructure, presenting
          hybrid, mixed-approach solutions. Contains technical and policy
          insights, design/implementation steps, and case studies. This
          publication aims to guide users through the process of combining grey
          (engineering-first) and nature-based solutions.
        </p>
      ),
    },
    {
      rId: 78,
      image:
        "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/Green Infrastructure - Guide for Water Management.png",
      title: (
        <p>
          Global <br />
          <strong>Green Infrastructure - Guide for Water Management</strong>
          <br />
          UNEP
        </p>
      ),
      // badgeText: "Water",
      buttonText: "Guidance note – Water",
      link: "https://wedocs.unep.org/rest/api/core/bitstreams/979a0cdb-3d3e-4f4a-b899-96c97f412d0d/content",
      content: (
        <p>
          This guide presents technical green infrastructure options—like
          wetlands, permeable pavements, green roofs, and floodplain
          restoration—to manage water, reduce flooding, and support ecosystem
          health. It provides design strategies that integrate natural systems
          with infrastructure for resilient, sustainable water management.
        </p>
      ),
    },
    {
      rId: 85,
      image:
        "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/Green Roads for Water.png",
      title: (
        <p>
          Global <br />
          <strong>Green Roads for Water</strong>
          <br />
          World Bank
        </p>
      ),
      // badgeText: "Transport",
      buttonText: "Guidance note – Transport",
      link: "https://documents1.worldbank.org/curated/en/102951623742853259/pdf/Green-Roads-for-Water-Guidelines-for-Road-Infrastructure-in-Support-of-Water-Management-and-Climate-Resilience.pdf",
      content: (
        <p>
          The Green Roads for Water guide promotes road designs that integrate
          water management and climate resilience, using drainage systems, water
          harvesting, erosion control, and context-specific adaptations. These
          multi-functional roads support transport, flood mitigation, and
          environmental sustainability.
        </p>
      ),
    },
    {
      rId: 86,
      image:
        "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/Green Roads for Water.png",
      title: (
        <p>
          Global <br />
          <strong>Resilient Infrastructure and Buildings Hub</strong>
          <br />
          World Bank
        </p>
      ),
      buttonText: "Report",
      link: "https://worldbankgroup.sharepoint.com/sites/WBSUR/SitePages/PublishingPages/Resilient%20Infrastruc-1746476033225.aspx",
      content: (
        <p>
          A curated landing page that pulls together design briefs and
          practitioner guides across transport, water/wastewater,
          energy/digital, and buildings (e.g., Resilient Water Infrastructure
          Design Brief; Hydropower and Dams—ClimateInformed Design; Disaster and
          ClimateResilient Transport Guidance; Green Data Centers; resilient
          telecom) with direct links to each resource 
        </p>
      ),
    },
    {
      rId: 79,
      image:
        "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/UN Principles for Responsible Investment Integrating Biodiversity Considerations into Infrastructure.png",
      title: (
        <p>
          Global <br />
          <strong>
            UN Principles for Responsible Investment: Integrating Biodiversity
            Considerations into Infrastructure
          </strong>
          <br />
          UN PRI
        </p>
      ),
      buttonText: "Guidance note",
      link: "https://public.unpri.org/download?ac=20180",
      content: (
        <p>
          This guidance from UN PRI helps infrastructure investors and
          developers integrate biodiversity considerations into project planning
          and design. It outlines approaches for assessing biodiversity risks
          and identifying opportunities to enhance natural capital.
        </p>
      ),
    },
  ];

  const step2Cards = [
    {
      rId: 53,
      image: "images/qii4/updated/Futakotamagawa.png",
      title: (
        // <p>
        //   <strong>Japan: Futakotamagawa</strong>
        // </p>
        <p>
          Japan <br />
          <strong>
            Futakotamagawa: Integrating Flood Protection and Urban Renewal
          </strong>{" "}
          <br /> World Bank
        </p>
      ),
      highlight: 1,
      buttonText: "Full Publication​",
      link: "https://documents1.worldbank.org/curated/en/915131601460271575/pdf/Appendix-Case-Studies-in-Integrated-Urban-Flood-Risk-Management-in-Japan.pdf#page=7",
      buttonText2: "Case Study",
      link2: "pdf/QII_4_Case Japan Urban Resilience 1.pdf",
      content: (
        <p>
          Demonstrates how green infrastructure can be integrated with urban
          flood protection to deliver multiple benefits. Futakotamagawa Park
          serves as a natural buffer between Tokyo's Tama River and the city,
          absorbing floodwater while reconnecting the community to the river,
          creating wildlife habitat, and cooling the urban district.
        </p>
      ),
    },
    {
      rId: 57,
      image: "images/qii3/pakistan.png",
      title: (
        <p>
          Pakistan <br />
          <strong>
            The Investment Value of Nature: The Case of Zephyr Power Limited
          </strong>{" "}
          <br />
          Earth Security
        </p>
      ),
      buttonText: "Case Study",
      link: "https://www.earthsecurity.org/news/nature-infrastructure-in-the-balance-sheet-the-case-of-zephyr-power",
      content: (
        <p>
          Demonstrates how mangrove restoration replaced conventional
          engineering for coastal infrastructure protection under a renewable
          energy project. Facing tidal damage to roads, turbine platforms, and
          cables, the project opted for NBS instead of grey infrastructure,
          saving an estimated USD 7 million over 25 years.
        </p>
      ),
    },
    {
      rId: 90,
      image:
        "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/GFDRR Mapping of Nature-Based Solutions Projects.png",
      title: (
        <p>
          Global <br />
          <strong>Mapping of Nature-Based Solutions Projects</strong>
          <br />
          GFDRR
        </p>
      ),
      buttonText: "Report",
      link: "https://www.naturebasedsolutions.org/",
      content: (
        <p>
          This interactive map from the Global Facility for Disaster Reduction
          and Recovery visualizes NBS projects worldwide. Explore project
          locations, types, and implementation details to identify relevant
          precedents.
        </p>
      ),
    },
    {
      rId: 51,
      image: "images/qii3/shutterstock_755940463.jpg",
      title: (
        <p>
          Global <br />
          <strong>
            Catalogue of Nature-Based Solutions for Infrastructure Projects
          </strong>
          <br />
          IFC
        </p>
      ),
      buttonText: "Report",
      link: "https://www.ifc.org/content/dam/ifc/doc/2023/catalogue-of-nature-based-solutions-for-infrastructure-projects.pdf",
      content: (
        <p>
          This catalogue helps to articulate the business case for nature-based
          infrastructure and provides examples of nature-based solutions,
          organized by sector, as inspiration for infrastructure companies and
          project developers.
        </p>
      ),
    },
    {
      rId: 87,
      image: "images/qii3/shutterstock_2201000683.jpg",
      title: (
        <p>
          Global <br />
          <strong>Global Program for Nature-Based Solutions</strong> <br />
          World Bank
        </p>
      ),
      buttonText: "Report",
      link: "https://www.naturebasedsolutions.org/knowledge-hub",
      content: (
        <p>
          This knowledge hub provides detailed and up-to-date guidance, case
          studies, and tools for integrating NBS into infrastructure and urban
          development projects.
        </p>
      ),
    },
    {
      rId: 88,
      image:
        "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/The-Nature-Based-Solutions-Opportunity-Scan.png",
      title: (
        <p>
          Global <br />
          <strong>The Nature-Based Solutions Opportunity Scan</strong>
          <br />
          World Bank
        </p>
      ),
      buttonText: "Report",
      link: "https://openknowledge.worldbank.org/entities/publication/f350c5c0-b17b-4f35-ad29-cb3ddc101958",
      content: (
        <p>
          This report categorizes different families of nature-based solutions
          and maps investment opportunities across sectors. It helps
          practitioners understand associated benefits and identify where NBS
          interventions can be integrated into infrastructure projects.
        </p>
      ),
    },
    {
      rId: 89,
      image:
        "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/Financing-Climate-AdaptationandNature-Based-Infrastructure.png",
      title: (
        <p>
          Global <br />
          <strong>
            Financing Climate Adaptation and Nature Based Infrastructure
          </strong>{" "}
          <br />
          World Bank Group
        </p>
      ),
      buttonText: "Report",
      link: "https://documents1.worldbank.org/curated/en/099050725135521570/pdf/P501013-299da78d-86cc-4f74-a095-cde17655875a.pdfs",
      content: (
        <p>
          The report assesses opportunities and barriers for mobilizing private
          finance and investment into climateadaptation and naturebased
          infrastructure in emerging and developing economies.
        </p>
      ),
    },
    {
      rId: 91,
      image:
        "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/Finding Solutions to Development Challenges in Nature.png",
      title: (
        <p>
          Global <br />
          <strong>Finding Solutions to Development Challenges in Nature</strong>
          <br />
          World Bank Group
        </p>
      ),
      buttonText: "Video",
      link: "https://www.youtube.com/watch?v=XqFihz4k7Kk",
      content: (
        <p>
          What are "nature-based solutions"? This video introduces the concept
          of NBS and explains how natural systems can address development
          challenges while delivering environmental and social benefits.
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
          { path: "/qii3", title: "QII.3 Environment" },
          {
            path: "/GreenDesigns&Nature-BasedInfrastructure",
            title: "Green Designs And Nature Based Infrastructure",
          },
        ],
      }),
    );
  }, []);
  return (
    <div className="GreenDesignsAndNatureBasedInfrastructure">
      <section className="color-light">
        <Header3
        id="qii3-GDNI-section1"
          img="images/qii3/Green-Designs-and-Nature-Based-Infrastructure/shutterstock_2477739245.png"
          title={"Green Designs And Nature Based Infrastructure"}
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
                Green Designs And Nature Based Infrastructure
              </h1>
            </div>
          </div>
          <div className="subpage-description">
            <p className="light-font">
              Green design offers a comprehensive approach to sustainable
              infrastructure, combining resilient engineering approaches with
              ecosystem protection across the project lifecycle. Nature-based
              Solutions (NbS), a subset of green design, harness natural systems
              to deliver services such as flood mitigation and temperature
              regulation. Taken together, these concepts strengthen both
              infrastructure performance and environmental outcomes.
            </p>
          </div>
        </Header3>
        <div className="container internal-pages-container">
          <NumSteps num="1" id="qii3-GDNI-section2">
            <strong>Green Design </strong>
            <br />
            Green design aims to create environmentally responsible and
            resource-efficient infrastructure throughout its lifecycle – from
            siting and design through construction, operation and maintenance.
            This approach minimizes environmental impact by incorporating
            strategies such as sustainable material selection, energy-efficient
            systems, adaptive designs, and the application of green
            technologies. <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <VCardsPagination cardsData={step1Cards} id="qii3-GDNI-section3"/>
          <div className="border-dash"></div>
          <NumSteps num="2" id="qii3-GDNI-section4">
            <strong>Nature-based Infrastructure Solutions </strong>
            <br />
            Nature-based solutions (NbS) are a key subset of green
            infrastructure, leveraging ecosystems to enhance climate resilience,
            reduce disaster risk, and restore environmental health, often
            delivering multiple co-benefits for communities and biodiversity.
            <br></br>
            <br></br>
            Nature-based infrastructure can help deliver:
          </NumSteps>
          <div className="ico-text-card-1-container" id="qii3-GDNI-section4">
            <div className="ico-text-card-1">
              <div className="ico-text-card-1-description">
                <p className="ico-text-card-1-title">CLEAN WATER</p>
                {/* <ul>
                  <li>Improve water quality by reducing chemical,</li>
                  <li>
                  Improve water quality by removing pollutants in wastewater such as solids and pathogens
                  </li>
                </ul> */}
              </div>
              <div className="ico-text-card-1-ico">
                <img
                  src="images/qii3/Green-Designs-and-Nature-Based-Infrastructure/clean-water.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="ico-text-card-1">
              <div className="ico-text-card-1-description">
                <p className="ico-text-card-1-title">EROSION CONTROL</p>
                {/* <ul>
                  <li>Stabilize steep slopes and degraded areas</li>
                  <li>
                    Reduce number of landslides in the surrounding environment of infrastructure"
                  </li>
                </ul> */}
              </div>
              <div className="ico-text-card-1-ico">
                <img
                  src="images/qii3/Green-Designs-and-Nature-Based-Infrastructure/EROSION-CONTROL.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="ico-text-card-1">
              <div className="ico-text-card-1-description">
                <p className="ico-text-card-1-title">FLOOD MANAGEMENT</p>
                {/* <ul>
                  <li>Protect and increase the resilience of communities and assets from flooding</li>
                  <li>
                    Reduce peak flow (the maximum rate of flow water passing a given point following rainfall)
                  </li>
                </ul> */}
              </div>
              <div className="ico-text-card-1-ico">
                <img
                  src="images/qii3/Green-Designs-and-Nature-Based-Infrastructure/FLOOD-MANAGEMENT.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="ico-text-card-1">
              <div className="ico-text-card-1-description">
                <p className="ico-text-card-1-title">COASTAL PROTECTION</p>
                {/* <ul>
                  <li>Protect coastal urban areas and assets from erosion, storm surges, damage from wave energy, and sea level rise.</li>
                </ul> */}
              </div>
              <div className="ico-text-card-1-ico">
                <img
                  src="images/qii3/Green-Designs-and-Nature-Based-Infrastructure/COASTAL-PROTECTION.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="ico-text-card-1">
              <div className="ico-text-card-1-description">
                <p className="ico-text-card-1-title">WATER SECURTY</p>
                {/* <ul>
                  <li>Improve water retention</li>
                  <li>Contribute to water supply reliability</li>
                </ul> */}
              </div>
              <div className="ico-text-card-1-ico">
                <img
                  src="images/qii3/Green-Designs-and-Nature-Based-Infrastructure/WATER-SECURTY.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <VCardsPagination cardsData={step2Cards} id="qii3-GDNI-section6"/>
        </div>
      </section>
    </div>
  );
}
