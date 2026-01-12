import React, { useEffect } from "react";
import "./QualityEnvironmentalStandards.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import { Link } from "react-router-dom";
import Header3 from "../components/Header3";
import ResourceLibrary from "./ResourceLibrary";
import TopResourceCard from "../components/TopResourceCard";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";

export default function QualityEnvironmentalStandards() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [
          { path: "/", title: "Home" },
          { path: "/qii3", title: "Environment" },
          {
            path: "/QualityEnvironmentalStandards",
            title: "Quality Environmental Standards",
          },
        ],
      })
    );
  }, []);
  return (
    <div className="procurement">
      <section className="color-light">
        <Header3
          img="images/qii3/Quality-Environmental-Standards/shutterstock_2477739245.png"
          title="Quality Environmental Standards"
        >
          <p className="light-font">
            Quality environmental standards are the foundation of good
            infrastructure project development. They are also a requirement for
            project developers seeking to attract credible investors.
          </p>
        </Header3>
        <div className="container noPTop">
          <div className="link-text">
            <strong>
              Applying Global Best Practices for Environmental and Social
              Safeguards
            </strong>
            <br />
            <br />
            Recognized environmental and social standards establish the basic
            requirements that quality infrastructure developers must meet
            throughout an infrastructure investment's lifecycle.
            <br />
            <br />
            The{" "}
            <strong>
              World Bank Environmental and Social Framework (ESF) and the IFC
              Performance Standards (PS)
            </strong>{" "}
            exemplify such standards and provide a strong Standards (PS)
            exemplify such standards and provide a strong foundation for
            applying international environmental and social best practices to
            infrastructure design and delivery.
          </div>

          <div className="VCard-cnt col3">
            <VCard
              image="images/qii3/Quality-Environmental-Standards/Environmental and Social Framework (ESF).png"
              title={
                <p>
                  <strong>Environmental and Social Framework (ESF)</strong>{" "}
                  World Bank
                </p>
              }
              buttonText="Guidance"
              link="https://thedocs.worldbank.org/en/doc/837721522762050108-0290022018/original/ESFFramework.pdf#page=29&zoom=80"
            >
              <p>
                This framework guides project level environmental and social
                management. The ESF helps to identify what risks must be managed
                (e.g., pollution, biodiversity loss, community health and
                safety, climate hazards) and provides an approach for addressing
                these risks through ten standards that integrate E&S
                considerations into infrastructure projects.
              </p>
            </VCard>

            <VCard
              image="images/qii3/Quality-Environmental-Standards/IFC Performance Standards on Environmental and Social Sustainability.png"
              title={
                <p>
                  <strong>
                    IFC Performance Standards on Environmental and Social
                    Sustainability
                  </strong>
                </p>
              }
              buttonText="Guidance"
              link="https://www.ifc.org/en/insights-reports/2012/ifc-performance-standards"
            >
              <p>
                The eight IFC Performance Standards establish minimum
                requirements that project developers must meet to be eligible
                for financing and provide reference information on technical
                limits, design approaches, monitoring metrics, and mitigation
                practices to do so. These standards are used by development
                finance institutions and private investors worldwide, ensuring
                that finance is only channeled to projects with strong
                environmental fundamentals.{" "}
              </p>
            </VCard>

            <VCard
              image="images/qii3/Quality-Environmental-Standards/Timor-Leste Tibar Bay Port.png"
              title={
                <p>
                  <strong>Timor-Leste: Tibar Bay Port </strong>
                </p>
              }
              buttonText="Case Study"
              link="https://www.gihub.org/innovative-funding-and-financing/case-studies/tibar-bay-port/"
            >
              <p>
                This project demonstrates application of the IFC Performance
                Standards, which gained recognition for rigorous environmental
                and social scoping that led to key operational improvements such
                as reducing congestion and enhancing trade efficiency.
              </p>
            </VCard>
          </div>
          <div className="border-dash"></div>
          <div className="link-text">
            <p>
              A range of other internationally recognized frameworks and
              best-practice standards can also help guide quality design. The
              table below presents a representative, non-exhaustive list of
              these standards and systems.
            </p>
          </div>
          <div className="VCard-cnt col3">
            <VCard
              image="images/qii3/Quality-Environmental-Standards/Infrastructure Standards.png"
              title={
                <p>
                  <strong>Infrastructure Standards</strong> International
                  Organization for Standardization (ISO)
                </p>
              }
              buttonText="Guidance"
              link="https://www.iso.org/popular-standards.html"
            >
              <p>
                These engineering standards are widely referenced in sustainable
                infrastructure guidance provided by organizations such as the
                World Bank, IFC, and OECD for and are recognized internationally
                as good practice for environmental, social, and
                climate-resilient design. Below are examples of codes relevant
                to quality infrastructure.
                <ul>
                  <li>
                    <strong>ISO 14001 </strong> – Environmental management
                    systems
                  </li>
                  <li>
                    <strong>ISO 37101 / 37120 </strong> –Sustainable cities and
                    communities / indicators for city services and quality of
                    life
                  </li>
                  <li>
                    <strong>ISO 21930 / 21931 </strong> – Sustainability of
                    construction works and building products 
                  </li>
                  <li>
                    <strong>ISO 14064 </strong> – Greenhouse gas accounting 
                  </li>
                </ul>
              </p>
            </VCard>

            <VCard
              image="images/qii3/Quality-Environmental-Standards/Equator Principles.png"
              title={
                <p>
                  <strong>Equator Principles </strong>{" "}
                </p>
              }
              buttonText="Guidance"
              link="https://equator-principles.com/"
            >
              <p>
                A risk management framework adopted by financial institutions
                for environmental and social risks in project finance globally.
                The framework includes ten major principles, providing a minimum
                standard for due diligence and monitoring. Financial
                institutions that have adopted the Equator Principles cover most
                international project finance debt.{" "}
              </p>
            </VCard>

            <VCard
              image="images/qii3/Quality-Environmental-Standards/LEED for Buildings.png"
              title={
                <p>
                  <strong>
                    LEED for Buildings LEED for Cities and Communities
                  </strong>{" "}
                </p>
              }
              buttonText="Guidance"
              link="https://www.usgbc.org/leed/rating-systems/leed-for-cities"
            >
              <p>
                LEED provides certification standards for sustainable building
                design. LEED for Cities and Communities extends this framework
                beyond buildings to advance sustainable development at city and
                community scale, providing local leaders, developers and
                practitioners with a sustainability framework aligned with the
                UN Sustainable Development Goals.
              </p>
            </VCard>
            <div className="VCard-cnt col1">
              <VCard
                image="images/qii3/Quality-Environmental-Standards/BREEAM Infrastructure.png"
                title={
                  <p>
                    <strong>BREEAM Infrastructure</strong>{" "}
                  </p>
                }
                buttonText="Guidance"
                link="https://breeam.com/breeam-infrastructure"
              >
                <p>
                  BREEAM evaluates infrastructure projects against
                  sustainability criteria, including energy, water, materials,
                  biodiversity, resilience, and social value, and provides a
                  rating (Pass, Good, Very Good, Excellent, Outstanding). It
                  draws on existing standards, regulations, and best practices
                  to define its criteria.{" "}
                </p>
              </VCard>
            </div>
          </div>
        </div>
      </section>

      <section className="color-dark ">
        <div className="container">
          <div className="center-header">
            <div className="link-text">
              Quality environmental standards can also increase the
              attractiveness of projects to potential investors. Financial
              institutions increasingly use internationally recognized standards
              as benchmarks to assess and manage risk in project finance.
              Projects that integrate these standards demonstrate reduced risk
              profiles and improved long-term viability. Moreover, they can
              qualify for certification by initiatives such as{" "}
              <strong>Blue Dot Network</strong>
              and <strong>Fast Infra</strong>, making them more attractive to
              investors.
            </div>
          </div>
          <div className="top-resource-card-cnt-qii4">
            <TopResourceCard
              image=""
              title={<p>Blue Dot Network </p>}
              buttonText=""
              link="https://www.bluedot-network.org/case-studies/BDN-2EA3VG-66FQ?utm_sourcE"
            ></TopResourceCard>
            <TopResourceCard
              image=""
              title={<p>FAST Infra </p>}
              buttonText=""
              link="https://www.fastinfralabel.org/"
            ></TopResourceCard>
          </div>
        </div>
      </section>
      <section className="color-light">
        <div className="link-text">
          <strong>
            Additional Framing Documentation on the importance of Quality
            Standards
          </strong>
        </div>
        <div className="VCard-cnt col3">
          <VCard
            image="images/qii3/Quality-Environmental-Standards/Framework for SDG-Aligned Finance.png"
            title={
              <p>
                <strong>Framework for SDG-Aligned Finance </strong> OECD & UNDP
              </p>
            }
            buttonText="Guidance"
            link="https://sdgfinance.undp.org/resource-library/framework-sdg-aligned-finance"
          >
            <p>
              Explains how sustainability and risk management standards increase
              capital access. Demonstrates that incorporating environmental,
              social, and governance considerations into investment decisions
              enhances project bankability and attractiveness to investors while
              aligning finance with Sustainable Development Goals.{" "}
            </p>
          </VCard>

          <VCard
            image="images/qii3/Quality-Environmental-Standards/Framework for SDG-Aligned Finance.png"
            title={
              <p>
                <strong>
                  Infrastructure Standards – Building Blocks for a Resilient
                  Future{" "}
                </strong>{" "}
                CDRI
              </p>
            }
            buttonText="Guidance"
            link=""
          >
            <p>
              The Coalition for Disaster Resilient Infrastructure has developed
              a technical note, which maps out the need for resilience oriented
              standards across the infrastructure lifecycle, and identifies the
              principles that infrastructure standards should embed (robustness,
              redundancy, flexibility, recovery capacity, good governance,
              etc.).
            </p>
          </VCard>

          <VCard
            image="images/qii3/Quality-Environmental-Standards/Framework for SDG-Aligned Finance.png"
            title={
              <p>
                <strong>Global Environment Outlook (GEO-7) </strong> UNEP
              </p>
            }
            buttonText="Guidance"
            link=""
          >
            <p>
              {" "}
              To provide global evidence on natural capital losses and policy
              pathways for mitigation through better standards.
            </p>
          </VCard>
        </div>
        <div className="link-text">
          The incorporation of environmental standards requires a robust
          <strong> governance framework</strong> that mandates these standards
          be met. For more on the development of strong governance practices
          that support and require environmental considerations in
          infrastructure planning and development, please navigate to{" "}
          <Link to="/qii6">
            <strong>QII 6: Governance</strong>
          </Link>.
        </div>
      </section>
    </div>
  );
}
