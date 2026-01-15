import React, { useEffect } from "react";
import "./Procurement.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import Header3 from "../components/Header3";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";

export default function GreenDesignsAndNatureBasedInfrastructure() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [
           
          { path: "/qii3", title: "Environment" },
          {
            path: "/GreenDesigns&Nature-BasedInfrastructure",
            title: "Green Designs And Nature Based Infrastructure",
          },
        ],
      })
    );
  }, []);
  return (
    <div className="procurement">
      <section className="color-light">
        <Header3
          img="images/qii3/Green-Designs-and-Nature-Based-Infrastructure/shutterstock_2477739245.png"
          title="Green Designs And Nature Based Infrastructure"
        >
          <p className="light-font">
            Green design offers a comprehensive approach to sustainable
            infrastructure, combining resilient engineering approaches with
            ecosystem protection across the project lifecycle. Nature-based
            Solutions (NbS), a subset of green design, harness natural systems
            to deliver services such as flood mitigation and temperature
            regulation. Taken together, these concepts strengthen both
            infrastructure performance and environmental outcomes.
          </p>
        </Header3>
        <div className="container noPTop">
          <NumSteps num="1">
            <strong>Green Design </strong>
            <br />
            <br />
            Green design aims to create environmentally responsible and
            resource-efficient infrastructure throughout its lifecycle – from
            siting and design through construction, operation and maintenance.
            This approach minimizes environmental impact by incorporating
            strategies such as sustainable material selection, energy-efficient
            systems, adaptive designs, and the application of green
            technologies. <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <div className="VCard-cnt col3">
            <VCard
              image="images/qii3/Green-Designs-and-Nature-Based-Infrastructure/Integrating Green and Gray Creating Next Generation Infrastructure.png"
              title={
                <p>
                  <strong>
                    Integrating Green and Gray: Creating Next Generation
                    Infrastructure{" "}
                  </strong>{" "}
                  <br></br>World Bank and World Resources Institute
                </p>
              }
              buttonText="Guidance"
              link="https://openknowledge.worldbank.org/entities/publication/ddda3ed0-096e-59dd-a25d-3de884254eba"
            >
              <p>
                Offers an integrated view of “green + grey” infrastructure,
                presenting hybrid, mixed-approach solutions. Contains technical
                and policy insights, design/implementation steps, and case
                studies. This publication aims to guide users through the
                process of combining grey (engineering-first) and nature-based
                solutions.
              </p>
            </VCard>
            <VCard
              image="images/qii3/Green-Designs-and-Nature-Based-Infrastructure/Green Infrastructure - Guide for Water Management.png"
              title={
                <p>
                  <strong>
                    Green Infrastructure - Guide for Water Management{" "}
                  </strong>
                  <br></br>UNEP
                </p>
              }
              buttonText="Guidance - Water"
              link="https://wedocs.unep.org/rest/api/core/bitstreams/979a0cdb-3d3e-4f4a-b899-96c97f412d0d/content"
            >
              <p>
                This guide presents technical green infrastructure options—like
                wetlands, permeable pavements, green roofs, and floodplain
                restoration—to manage water, reduce flooding, and support
                ecosystem health. It provides design strategies that integrate
                natural systems with infrastructure for resilient, sustainable
                water management.{" "}
              </p>
            </VCard>
            <VCard
              image="images/qii3/Green-Designs-and-Nature-Based-Infrastructure/Green Roads for Water.png"
              title={
                <p>
                  <strong>Green Roads for Water </strong> <br></br>World Bank
                </p>
              }
              buttonText="Guidance - Transport"
              link="https://documents1.worldbank.org/curated/en/102951623742853259/pdf/Green-Roads-for-Water-Guidelines-for-Road-Infrastructure-in-Support-of-Water-Management-and-Climate-Resilience.pdf"
            >
              <p>
                The Green Roads for Water guide promotes road designs that
                integrate water management and climate resilience, using
                drainage systems, water harvesting, erosion control, and
                context-specific adaptations. These multi-functional roads
                support transport, flood mitigation, and environmental
                sustainability.{" "}
              </p>
            </VCard>
          </div>
          <div className="VCard-cnt col2">
            <VCard
              image="images/qii3/Green-Designs-and-Nature-Based-Infrastructure/Resilient Infrastructure and Buildings Hub.png"
              title={
                <p>
                  <strong>Resilient Infrastructure and Buildings Hub </strong>
                  <br></br>World Bank
                </p>
              }
              buttonText="Guidance"
              link="https://worldbankgroup.sharepoint.com/sites/WBSUR/SitePages/PublishingPages/Resilient%20Infrastruc-1746476033225.aspx"
            >
              <p>
                A curated landing page that pulls together design briefs and
                practitioner guides across transport, water/wastewater,
                energy/digital, and buildings (e.g., Resilient Water
                Infrastructure Design Brief; Hydropower and Dams—ClimateInformed
                Design; Disaster and ClimateResilient Transport Guidance; Green
                Data Centers; resilient telecom) with direct links to each
                resource {" "}
              </p>
            </VCard>
            <VCard
              image="images/qii3/Green-Designs-and-Nature-Based-Infrastructure/UN Principles for Responsible Investment Integrating Biodiversity Considerations into Infrastructure.png"
              title={
                <p>
                  <strong>
                    UN Principles for Responsible Investment: Integrating
                    Biodiversity Considerations into Infrastructure
                  </strong>
                </p>
              }
              buttonText="Guidance"
              link="https://www.unpri.org/infrastructure/integrating-biodiversity-considerations-into-infrastructure/11611.article"
            >
              <p>
                This guidance from UN PRI helps infrastructure investors and
                developers integrate biodiversity considerations into project
                planning and design. It outlines approaches for assessing
                biodiversity risks and identifying opportunities to enhance
                natural capital.{" "}
              </p>
            </VCard>
          </div>
          <div className="border-dash"></div>
          <NumSteps num="2">
            <strong>Nature-Based Infrastructure Solutions </strong>
            <br />
            <br></br>
            Nature-based solutions (NbS) are a key subset of green
            infrastructure, leveraging ecosystems to enhance climate resilience,
            reduce disaster risk, and restore environmental health, often
            delivering multiple co-benefits for communities and biodiversity.
            <br></br>
            <br></br>
            Nature-based infrastructure can help deliver:
            <span style={{ opacity: "0" }}></span>
          </NumSteps>
          <div className="VCard-cnt col3">
            <VCard
              image=""
              title={
                <p>
                  <strong>
                    IFC Catalogue of Nature-based Solutions for Infrastructure
                    Projects
                  </strong>{" "}
                </p>
              }
              buttonText="Guidance"
              link="https://www.ifc.org/content/dam/ifc/doc/2023/catalogue-of-nature-based-solutions-for-infrastructure-projects.pdf"
            >
              <p>
                This catalogue helps to articulate the business case for
                nature-based infrastructure and provides examples of
                nature-based solutions, organized by sector, as inspiration for
                infrastructure companies and project developers.
              </p>
            </VCard>

            <VCard
              image=""
              title={
                <p>
                  <strong>
                    World Bank Global Program for Nature-Based Solutions
                  </strong>{" "}
                </p>
              }
              buttonText="Guidance"
              link="https://www.naturebasedsolutions.org/knowledge-hub"
            >
              <p>
                This knowledge hub provides detailed and up-to-date guidance,
                case studies, and tools for integrating NBS into infrastructure
                and urban development projects.{" "}
              </p>
            </VCard>

            <VCard
              image=""
              title={
                <p>
                  <strong>The Nature-Based Solutions Opportunity Scan </strong>{" "}
                </p>
              }
              buttonText="Guidance"
              link="https://openknowledge.worldbank.org/entities/publication/f350c5c0-b17b-4f35-ad29-cb3ddc101958"
            >
              <p>
                This report categorizes different families of nature-based
                solutions and maps investment opportunities across sectors. It
                helps practitioners understand associated benefits and identify
                where NBS interventions can be integrated into infrastructure
                projects.{" "}
              </p>
            </VCard>

            <VCard
              image=""
              title={
                <p>
                  <strong>
                    Financing Climate Adaptation and Nature Based Infrastructure
                  </strong>{" "}
                </p>
              }
              buttonText="Guidance"
              link="https://documents1.worldbank.org/curated/en/099050725135521570/pdf/P501013-299da78d-86cc-4f74-a095-cde17655875a.pdf"
            >
              <p>
                The report assesses opportunities and barriers for mobilizing
                private finance and investment into climateadaptation and
                naturebased infrastructure in emerging and developing economies.{" "}
              </p>
            </VCard>

            <VCard
              image=""
              title={
                <p>
                  <strong>Pakistan: Zephyr Wind Farm </strong>{" "}
                </p>
              }
              buttonText="Case Study"
              link=""
            >
              <p>
                Demonstrates how mangrove restoration replaced conventional
                engineering for coastal infrastructure protection under a
                renewable energy project. Facing tidal damage to roads, turbine
                platforms, and cables, the project opted for NBS instead of grey
                infrastructure, saving an estimated USD 7 million over 25 years.{" "}
              </p>
            </VCard>

            <VCard
              image=""
              title={
                <p>
                  <strong>Japan: Futakotamagawa </strong>{" "}
                </p>
              }
              buttonText="Case Study"
              link="https://openknowledge.worldbank.org/entities/publication/db0df170-6101-526e-8fc8-d0e448196fc4"
            >
              <p>
                Demonstrates how green infrastructure can be integrated with
                urban flood protection to deliver multiple benefits.
                Futakotamagawa Park serves as a natural buffer between Tokyo's
                Tama River and the city, absorbing floodwater while reconnecting
                the community to the river, creating wildlife habitat, and
                cooling the urban district.{" "}
              </p>
            </VCard>
          </div>
          <div className="VCard-cnt col2">
            <VCard
              image="images/qii3/Green-Designs-and-Nature-Based-Infrastructure/GFDRR Mapping of Nature-Based Solutions Projects.png"
              title={
                <p>
                  <strong>
                    GFDRR Mapping of Nature-Based Solutions Projects{" "}
                  </strong>{" "}
                </p>
              }
              buttonText="Case Study"
              link="https://www.naturebasedsolutions.org/"
            >
              <p>
                This interactive map from the Global Facility for Disaster
                Reduction and Recovery visualizes NBS projects worldwide.
                Explore project locations, types, and implementation details to
                identify relevant precedents.{" "}
              </p>
            </VCard>

            <VCard
              image="images/qii3/Green-Designs-and-Nature-Based-Infrastructure/Finding Solutions to Development Challenges in Nature.png"
              title={
                <p>
                  <strong>
                    Finding Solutions to Development Challenges in Nature{" "}
                  </strong>{" "}
                </p>
              }
              buttonText="Video"
              link="https://www.youtube.com/watch?v=XqFihz4k7Kk"
            >
              <p>
                What are "nature-based solutions"? This video introduces the
                concept of NBS and explains how natural systems can address
                development challenges while delivering environmental and social
                benefits.{" "}
              </p>
            </VCard>
          </div>
        </div>
      </section>
    </div>
  );
}
