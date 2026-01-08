import React from 'react';
import './DiagnosingVulnerabilities.css';
import NumSteps from '../components/NUmSteps';
import VCard from '../components/VCard';
import HeaderCarousal from '../components/HeaderCarousal';
import Header3 from '../components/Header3';

export default function DiagnosingVulnerabilities() {
	const slidesData = [
		{
			img: "images/qii4/DiagnosingVulnerabilities/header_bg_1.png",
			description: "The procurement process sets the foundation for the economic efficiency of an infrastructure project. Procurement processes that create incentives to minimize life cycle costs can lead to better value for money and reduce long-term expenses. Conversely, weak procurement practices, such as focusing solely on initial purchase price, can result in higher operational and maintenance costs over the asset's lifespan.",
			title: "Diagnosing Vulnerabilities",
		},
		{
			img: "images/qii4/DiagnosingVulnerabilities/header_bg_2.png",
			description: "The procurement of infrastructure under Public-Private Partnerships (PPPs) can be an effective way to align incentives for cost efficiency over the course of the project. This alignment will be strongest under PPPs that include an extended Operations and Maintenance (O&M) phase and where the revenues of the private sector partner are linked directly to long-term performance.",
			title: "Diagnosing Vulnerabilities",
		},
		{
			img: "images/qii4/DiagnosingVulnerabilities/header_bg_3.png",
			description: "Assessing the vulnerability of infrastructure and the system in which they exist ensures that these systems can withstand, adapt, and recover from shocks. Vulnerability assessments identify the weak points in the system, highlighting areas where exposure to natural disasters and man-made events (such as cyber attacks) present great risks. These assessments help prioritize interventions where they are needed the most, making the best use of public and private investment.",
			title: "Diagnosing Vulnerabilities",
		}
	];
	return (
		<div className='DiagnosingVulnerabilities'>
			<section className='color-light' >
				{/* <div className="hero">
					<img src="images/qii4/Diagnosing_Vulnerabilities.png" alt="" />
					<div className='hero-content'>
						<h3>Diagnosing Vulnerabilities</h3>
						<p>Assessing the vulnerability of infrastructure and the system in which they exist ensures that these systems can withstand, adapt, and recover from shocks. Vulnerability assessments identify the weak points in the system, highlighting areas where exposure to natural disasters and man-made events (such as cyber attacks) present great risks. These assessments help prioritize interventions where they are needed the most, making the best use of public and private investment.</p>
					</div>
				</div> */}
				<HeaderCarousal slidesData={slidesData}></HeaderCarousal>
				<div className="container noPTop">
					<p class="list-title">There are three main components to these analyses, including identify hazards and exposures, evaluating asset and system vulnerabilities, and apply risk-informed decision-making. This will determine how assets and systems may fail under stress and guides investment priorities to strengthen resilience and ensure reliable services.</p>
					<NumSteps num="1"><strong>Hazards and Exposure Assessments</strong> – This involves mapping the full range of natural and man-made threats or hazards that could affect infrastructure—such as floods, droughts, earthquakes, cyberattacks—and understanding where these assets are geographically and how impacted or exposed they are to these threats.</NumSteps>
					<div className="VCard-cnt col2">
						<VCard image="images/qii4/DiagnosingVulnerabilities/card1.png" title={<p><strong>Learning from Mega-disasters: </strong> Japan Case Study</p>} buttonText="Guidance" link="" >
							<p>Section V, Chapters 25–27 of this resource provides detailed guidance for hazard mapping and exposure assessments, covering scenario selection, risk and hazard map development, effective data management, and methods for integrating local knowledge with technical analysis to inform resilient planning and decision-making.</p>
						</VCard>

						<VCard image="images/qii4/DiagnosingVulnerabilities/card2.png" title={<p><strong>World Bank Climate Knowledge Portal</strong></p>} buttonText="Tools" link="" >
							<p>A data source for granular climate risk and scenario projections to inform the vulnerability diagnosis of critical assets.</p>
						</VCard>

						<VCard image="images/qii4/DiagnosingVulnerabilities/card3.png" title={<p><strong>GFDRR ThinkHazard!</strong></p>} buttonText="Guidance" link="" >
							<p>Think Hazard is an online tool that provides rapid, location-specific hazard mapping and exposure assessments for multiple natural hazards, offering practical risk summaries, recommended mitigation actions, and relevant guidance to support risk-informed project planning and resilient decision-making.</p>
						</VCard>

						<VCard image="images/qii4/DiagnosingVulnerabilities/card4.png" title={<p><strong>Geospatial Information Management and Analysis Project for Hazards and Risk Assessment in the Philippines</strong></p>} buttonText="Tools" link="" >
							<p>This online resource provides protocols and platforms to share hazards, exposure and other risk information to help people, communities, local governments, and national agencies prepare and plan how to reduce the risks from natural hazards.</p>
						</VCard>

					</div>
					<div className='border-dash'></div>
					<NumSteps num="2"><strong>Asset and System Vulnerability Assessments </strong> – This involves examining the physical condition, design standards, and interdependencies of infrastructure systems to determine how they might fail or degrade under stress. It also considers institutional and operational weaknesses that limit resilience and recovery.</NumSteps>
					<div className="VCard-cnt col3">

						<VCard image="images/qii4/DiagnosingVulnerabilities/card5.png" title={<p><strong>Climate Impact Assessment Frameworks</strong> (Africa Infrastructure Example)</p>} buttonText="Guidance" link="">
							<p>This resource details consistent, state-of-the-art methods to assess the vulnerability of Africa's power and water infrastructure, analyzing physical condition, design, and operational interdependencies to identify system weaknesses under climate stress and recommending ways to strengthen resilience and adaptive planning.</p>
						</VCard>

						<VCard image="images/qii4/DiagnosingVulnerabilities/card6.png" title={<p><strong>Notre Dame Global Adaptation Initiative: </strong> ND-GAIN Vulnerability Indices</p>} buttonText="Tools" link="" >
							<p>The ND-GAIN Country Index compares countries' vulnerabilities to climate change and other global challenges in combination with its readiness to improve resilience.</p>
						</VCard>

						<VCard image="images/qii4/DiagnosingVulnerabilities/card7.png" title={<p><strong>Vanuatu Post-Disaster Needs Assessment: </strong>Tropical Cyclone Pam</p>} buttonText="Case study" link="" >
							<p>This Post-Disaster Needs Assessment (PDNA) looks at the scale of impact of Tropical Cyclone Pam on key sectors and the economy as a whole. This PDNA formed the basis of a Joint Action Plan prepared by the government of Vanuatu.</p>
						</VCard>
					</div>
					<div className='border-dash'></div>
					<NumSteps num="3"><strong>Risk-informed decision-making </strong> – This involves translating hazard and vulnerability assessments into actionable choices. By quantifying risks in terms of probability and impact, decision-makers can prioritize investments, strengthen standards, and integrate resilience into planning, operations, and policy.</NumSteps>
					<div className="VCard-cnt col3">

						<VCard image="images/qii4/DiagnosingVulnerabilities/card8.png" title={<p><strong>Disaster Risk Profiles </strong>(GFDRR)</p>} buttonText="Guidance" link="">
							<p>This resource details consistent, state-of-the-art methods to assess the vulnerability of Africa's power and water infrastructure, analyzing physical condition, design, and operational interdependencies to identify system weaknesses under climate stress and recommending ways to strengthen resilience and adaptive planning.</p>
						</VCard>

						<VCard image="images/qii4/DiagnosingVulnerabilities/card9.png" title={<p><strong>World Bank </strong> Resilience Rating System</p>} buttonText="Tools" link="">
							<p>The ND-GAIN Country Index compares countries' vulnerabilities to climate change and other global challenges in combination with its readiness to improve resilience.</p>
						</VCard>

						<VCard image="images/qii4/DiagnosingVulnerabilities/card10.png" title={<p><strong>Global Infrastructure Risk Model and Resilience Index </strong> (GIRI) (Coalition for Disaster Resilient Infrastructure)</p>} buttonText="Case study" link="">
							<p>This Post-Disaster Needs Assessment (PDNA) looks at the scale of impact of Tropical Cyclone Pam on key sectors and the economy as a whole. This PDNA formed the basis of a Joint Action Plan prepared by the government of Vanuatu.</p>
						</VCard>

						<VCard image="images/qii4/DiagnosingVulnerabilities/card11.png" title={<p><strong>INFORM Climate Change Tool</strong>(European Commission)</p>} buttonText="Tools" link="">
							<p>INFORM Climate Change tool provides insight into the results of the climate change risk analysis. It helps the users to easily navigate within different scenario combinations and different points in time, exploring the potential changes in risk, Hazard & Exposure variables, vulnerability gap and population.</p>
						</VCard>

						<VCard image="images/qii4/DiagnosingVulnerabilities/card12.png" title={<p><strong>Jamaica Disaster Vulnerability Reduction Project</strong></p>} buttonText="Case study" link="">
							<p>The Disaster Vulnerability Reduction Project aims to strengthen Jamaica’s resilience to disasters and climate risks through four components: technical assistance to improve hazard data and monitoring, risk reduction measures such as retrofitting and coastal protection, a contingent emergency response mechanism to finance recovery after disasters, and project administration.</p>
						</VCard>

						<VCard image="images/qii4/DiagnosingVulnerabilities/card13.png" 
						title={<p><strong>Initial Sea Level Rise Risk Assessment for Nauru </strong> (Chapter 5.6.1)(Pacific Regional Infrastructure Facility)</p>} buttonText="Case study" link="">
							<p>A conceptual sea level rise assessment has been completed for Nauru to assess potential infrastructure risk and vulnerability.</p>
						</VCard>
						
					</div>

				</div>
			</section>
			
		</div>
	);
}
