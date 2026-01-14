import React, { useEffect } from "react";
import "./ManagingCyberSecurityRisks.css";
import "./ResilientDesignAndOperation.css";
import NumSteps from "../components/NUmSteps";
import VCard from "../components/VCard";
import HeaderCarousal from "../components/HeaderCarousal";
import Header3 from "../components/Header3";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";

export default function ManagingCyberSecurityRisks() {
  const slidesData = [
    {
      img: "images/qii4/ManagingCyberSecurityRisks/header_bg_1.png",
      description:
        "The procurement process sets the foundation for the economic efficiency of an infrastructure project. Procurement processes that create incentives to minimize life cycle costs can lead to better value for money and reduce long-term expenses. Conversely, weak procurement practices, such as focusing solely on initial purchase price, can result in higher operational and maintenance costs over the asset's lifespan.",
      title: "Managing Cybersecurity Risks",
    },
    {
      img: "images/qii4/ManagingCyberSecurityRisks/header_bg_2.png",
      description:
        "The procurement of infrastructure under Public-Private Partnerships (PPPs) can be an effective way to align incentives for cost efficiency over the course of the project. This alignment will be strongest under PPPs that include an extended Operations and Maintenance (O&M) phase and where the revenues of the private sector partner are linked directly to long-term performance.",
      title: "Managing Cybersecurity Risks",
    },
    {
      img: "images/qii4/ManagingCyberSecurityRisks/header_bg_3.png",
      description:
        "As economies and societies become increasingly digital, cybersecurity risks are rising in tandem. Essential infrastructure services—such as energy and transport networks—now rely on interconnected digital systems and technologies that increase their exposure to cyber threats.",
      description1:
        "Strengthening cybersecurity is therefore fundamental to infrastructure resilience. The QII Partnership is at the forefront of integrating cybersecurity into infrastructure design and investment, working with governments and partners to assess risks, build capacity, and mainstream cyber resilience to ensure that critical infrastructure systems remain safe, trusted, and future-ready.",
      title: "Managing Cybersecurity Risks",
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [
          { path: "/", title: "Home" },
          { path: "/qii4", title: "QII.4 Resilience" },
          {
            path: "/Managing-cyber-security-risks",
            title: "Managing Cybersecurity Risks",
          },
        ],
      })
    );
  }, []);
  return (
    <div className="ManagingCyberSecurityRisks ResilientDesignAndOperation">
      <section className="color-light">
        <Header3
          img="images/qii4/cybersecurity.png"
          title="Managing Cybersecurity Risks"
        >
          <p className="light-font">
            As economies and societies become increasingly digital,
            cybersecurity risks are rising in tandem. Essential infrastructure
            services—such as energy and transport networks—now rely on
            interconnected digital systems and technologies that increase their
            exposure to cyber threats.
            <br />
            <br />
            Strengthening cybersecurity is therefore fundamental to
            infrastructure resilience. The QII Partnership is at the forefront
            of integrating cybersecurity into infrastructure design and
            investment, working with governments and partners to assess risks,
            build capacity, and mainstream cyber resilience to ensure that
            critical infrastructure systems remain safe, trusted, and
            future-ready.
          </p>
        </Header3>
        {/* <HeaderCarousal slidesData={slidesData}></HeaderCarousal> */}
        <div className="container noPTop">
          <p className="list-title">
            The following resources provide more details on the key
            interventions needed to systematically build cybersecurity into
            infrastructure planning, design and operations:
          </p>
          <NumSteps num="1">
            <strong>Building a foundation for cybersecurity: </strong> This
            includes assessing cybersecurity maturity, developing strategies and
            legal frameworks, establishing cybersecurity governance structures,
            and strengthening institutions for implementation.
          </NumSteps>

          <div className="VCard-cnt col3">
            <VCard
              image="images/qii4/ManagingCyberSecurityRisks/Cybersecurity Assessment Toolkit for Smart Cities.png"
              title={
                <p>
                  <strong>
                    Cybersecurity Assessment Toolkit for Smart Cities
                  </strong>
                </p>
              }
              buttonText="Guidance"
              link="pdf/130324 GLOBAL_Cybersecurity tookit_Jessica Carolina Grisanti_rev.pdf"
            >
              <p>
                The Cybersecurity Assessment Toolkit guides countries and
                sectors to assess, strengthen, and mainstream cyber resilience
                in critical infrastructure.
              </p>
            </VCard>

            <VCard
              image="images/qii4/ManagingCyberSecurityRisks/UK The Cyber Assessment Framework (CAF) (National Cyber.png"
              title={
                <p>
                  <strong>UK: The Cyber Assessment Framework </strong>(CAF)
                  (National Cyber Security Center, UK)
                </p>
              }
              buttonText="Guidance"
              link="https://www.ncsc.gov.uk/collection/cyber-assessment-framework/introduction-to-caf#section_1"
            >
              <p>
                This Cyber Assessment Framework (CAF) provides a systematic
                approach to assessing cyber risks and how they are being managed
                by the UK National Cyber Security Center.
              </p>
            </VCard>

            <VCard
              image="images/qii4/ManagingCyberSecurityRisks/Sectoral Cybersecurity Maturity Model (World Bank).png"
              title={
                <p>
                  <strong>Sectoral Cybersecurity Maturity Model </strong>(World
                  Bank)
                </p>
              }
              buttonText="Guidance"
              link="https://documents1.worldbank.org/curated/en/099062623085028392/pdf/P17263707c36b702309f7303dbb7266e1cf.pdf"
            >
              <p>
                The Sectoral Cybersecurity Maturity Model evaluates
                cybersecurity maturity and provides actionable recommendations
                to strengthen cyber resilience, address vulnerabilities, and
                guide investment and policy decisions.
              </p>
            </VCard>
          </div>
          <div className="VCard-cnt col2">
            <VCard
              image="images/qii4/ManagingCyberSecurityRisks/Cybersecurity Economics for Emerging Markets (World Bank).png"
              title={
                <p>
                  <strong>Cybersecurity Economics for Emerging Markets </strong>
                  (World Bank)
                </p>
              }
              buttonText="Report"
              link="https://documentsinternal.worldbank.org/Search/34392134"
            >
              <p>
                This report explores global cybersecurity threats and their
                impacts; the market failures that hinder responses; and proposes
                strategies, policies, and governance efforts to foster
                innovation and sustainability amid change and uncertainty. See
                page 87 onwards for a specific discussion on infrastructure.
              </p>
            </VCard>

            <VCard
              image="images/qii4/ManagingCyberSecurityRisks/Ghana A case study in strengthening cyber resilience (World Bank).png"
              title={
                <p>
                  <strong>
                    Ghana: A case study in strengthening cyber resilience{" "}
                  </strong>
                  (World Bank)
                </p>
              }
              buttonText="Case study"
              link="https://documents1.worldbank.org/curated/en/099111623162584046/pdf/P17785201f69be0150909902c3a7202107e.pdf"
            >
              <p>
                The case of Ghana demonstrates that forward-looking investments
                and policy initiatives based on international best-practices can
                go a long way in boosting cybersecurity capacity in developing
                countries.
              </p>
            </VCard>
          </div>

          <div className="border-dash"></div>
          <NumSteps num="2">
            <strong>Implementing cyber security in practice: </strong> This
            involves evaluating critical cybersecurity risks and putting
            practical measures in place to manage and lower these risks.
          </NumSteps>

          <div className="VCard-cnt col2">
            <VCard
              image="images/qii4/ManagingCyberSecurityRisks/Cybersecurity best practice for smart cities (CISA).png"
              title={
                <p>
                  <strong>Cybersecurity best practice for smart cities </strong>
                  (CISA)
                </p>
              }
              buttonText="Guidance"
              link="https://www.cisa.gov/sites/default/files/2023-04/cybersecurity-best-practices-for-smart-cities_508.pdf"
            >
              <p>
                This guidance note provides an overview of best practices to manage cybersecurity risks and ensure the safe and secure operation of infrastructure systems, protection of citizens’ private data, and security of sensitive government and business data.  
              </p>
            </VCard>

            <VCard
              image="images/qii4/ManagingCyberSecurityRisks/Canada the cyber threat environment.png"
              title={
                <p>
                  <strong>Canada: the cyber threat environment</strong>
                </p>
              }
              buttonText="Guidance"
              link="https://www.cyber.gc.ca/en/guidance/introduction-cyber-threat-environment"
            >
              <p>
                This document provides a useful introduction to the nature of cybersecurity threats and the motivations and strategies of malicious actors. 
              </p>
            </VCard>
          </div>
        </div>
      </section>
    </div>
  );
}
