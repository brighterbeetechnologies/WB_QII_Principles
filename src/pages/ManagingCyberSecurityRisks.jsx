import React from 'react';
import './ManagingCyberSecurityRisks.css';
import NumSteps from '../components/NUmSteps';
import VCard from '../components/VCard';
import HeaderCarousal from '../components/HeaderCarousal';

export default function ManagingCyberSecurityRisks() {
    const slidesData = [
		{
			img: "images/qii4/ManagingCyberSecurityRisks/header_bg_1.png",
			description: "The procurement process sets the foundation for the economic efficiency of an infrastructure project. Procurement processes that create incentives to minimize life cycle costs can lead to better value for money and reduce long-term expenses. Conversely, weak procurement practices, such as focusing solely on initial purchase price, can result in higher operational and maintenance costs over the asset's lifespan.",
			title: "Managing Cybersecurity Risks",
		},
		{
			img: "images/qii4/ManagingCyberSecurityRisks/header_bg_2.png",
			description: "The procurement of infrastructure under Public-Private Partnerships (PPPs) can be an effective way to align incentives for cost efficiency over the course of the project. This alignment will be strongest under PPPs that include an extended Operations and Maintenance (O&M) phase and where the revenues of the private sector partner are linked directly to long-term performance.",
			title: "Managing Cybersecurity Risks",
		},
		{
			img: "images/qii4/ManagingCyberSecurityRisks/header_bg_3.png",
			description: "As economies and societies become increasingly digital, cybersecurity risks are rising in tandem. Essential infrastructure services—such as energy and transport networks—now rely on interconnected digital systems and technologies that increase their exposure to cyber threats.",
            description1: "Strengthening cybersecurity is therefore fundamental to infrastructure resilience. The QII Partnership is at the forefront of integrating cybersecurity into infrastructure design and investment, working with governments and partners to assess risks, build capacity, and mainstream cyber resilience to ensure that critical infrastructure systems remain safe, trusted, and future-ready.",
			title: "Managing Cybersecurity Risks",
		}
	];
    return (
        <div className='ManagingCyberSecurityRisks'>
            <section className='color-light' >
                <HeaderCarousal slidesData={slidesData}></HeaderCarousal>
                <div className="container noPTop">
                    <p className="list-title">The following resources provide more details on the key interventions needed to systematically build cybersecurity into infrastructure planning, design and operations:</p>
                    <NumSteps num="1"><strong>Building a foundation for cybersecurity: </strong>  This includes assessing cybersecurity maturity, developing strategies and legal frameworks, establishing cybersecurity governance structures, and strengthening institutions for implementation.</NumSteps>
                    
                    <div className="VCard-cnt col3">
                        <VCard image="images/qii4/FinancingResilience/card1.png" title={<p><strong>Cybersecurity Assessment Toolkit for Smart Cities</strong></p>} buttonText="Tool" link="" >
                            <p>The Cybersecurity Assessment Toolkit guides countries and sectors to assess, strengthen, and mainstream cyber resilience in critical infrastructure.</p>
                        </VCard>
                
                        <VCard image="images/qii4/FinancingResilience/card2.png" title={<p><strong>UK: The Cyber Assessment Framework </strong>(CAF) (National Cyber Security Center, UK)</p>} buttonText="Guidance" link="" >
                            <p>This Cyber Assessment Framework (CAF) provides a systematic approach to assessing cyber risks and how they are being managed by the UK National Cyber Security Center.</p>
                        </VCard>

                        <VCard image="images/qii4/FinancingResilience/card3.png" title={<p><strong>Sectoral Cybersecurity Maturity Model </strong>(World Bank)</p>} buttonText="Guidance" link="" >
                            <p>The Sectoral Cybersecurity Maturity Model evaluates cybersecurity maturity and provides actionable recommendations to strengthen cyber resilience, address vulnerabilities, and guide investment and policy decisions.</p>
                        </VCard>
                    </div>
                    <div className="VCard-cnt col2">
                        <VCard image="images/qii4/FinancingResilience/card4.png" title={<p><strong>Cybersecurity Economics for Emerging Markets </strong>(World Bank)</p>} buttonText="Report" link="" >
                            <p>This report explores global cybersecurity threats and their impacts; the market failures that hinder responses; and proposes strategies, policies, and governance efforts to foster innovation and sustainability amid change and uncertainty. See page 87 onwards for a specific discussion on infrastructure.</p>
                        </VCard>
                
                        <VCard image="images/qii4/FinancingResilience/card5.png" title={<p><strong>Ghana: A case study in strengthening cyber resilience </strong>(World Bank)</p>} buttonText="Case study" link="" >
                            <p>The case of Ghana demonstrates that forward-looking investments and policy initiatives based on international best-practices can go a long way in boosting cybersecurity capacity in developing countries.</p>
                        </VCard>
                    </div>
                    
                    <div className='border-dash'></div>
                    <NumSteps num="2"><strong>Implementing cyber security in practice: </strong>  This involves evaluating critical cybersecurity risks and putting practical measures in place to manage and lower these risks.</NumSteps>

                    <div className="VCard-cnt col2">
                        <VCard image="images/qii4/FinancingResilience/card4.png" title={<p><strong>Cybersecurity best practice for smart cities </strong>(CISA)</p>} buttonText="Guidance" link="" >
                            <p>This document aims to guide the design, implementation, and use of studies to value the benefits and costs of Nature-Based Solutions (NBS) for climate resilience projects.</p>
                        </VCard>
                
                        <VCard image="images/qii4/FinancingResilience/card5.png" title={<p><strong>Canada: the cyber threat environment</strong></p>} buttonText="Guidance" link="" >
                            <p>Cost-effectiveness analysis and cost-benefit analysis of DRM projects have been widely implemented both at national and local levels in Japan. This resource covers the different procedures for such analysis, according to the type of project, the funds, and the governing entity responsible particularly in parts V and VI.</p>
                        </VCard>
                    </div>
                </div>
            </section>
            
        </div>
    );
}
