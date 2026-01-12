import { createSlice } from "@reduxjs/toolkit";

export const appDataSlice = createSlice({
	name: "appData",
	initialState: {
		isOverlay: false,
		breadCrump:{
			show: false,
			dir: []
		},
		isVideo: false,
		videoData: { url: "", title: "", width: 1920, height: 1080 },
		principles: [
			{ id: 0, title: "SUSTAINABLE GROWTH", img_path: "images/QII-1.jpg", path: "/qii1" },
			{ id: 1, title: "ECONOMIC EFFICIENCY", img_path: "images/QII-2-1.jpg", path: "/qii2" },
			{ id: 2, title: "ENVIRONMENT", img_path: "images/QII-3-1.jpg", path: "/qii3" },
			{ id: 3, title: "RESILIENCE", img_path: "images/QII-4.jpg", path: "/qii4" },
			{ id: 4, title: "SOCIAL", img_path: "images/QII-5.jpg", path: "/qii5" },
			{ id: 5, title: "GOVERNANCE", img_path: "images/QII-6.jpg", path: "/qii6" }
		],

		industry: [
			{ id: 0, title: "Public-Private Partnerships (Ppps)" },
			{ id: 1, title: "Engineering And Design" },
			{ id: 2, title: "Transport And Logistics" },
			{ id: 3, title: "Energy And Climate" },
			{ id: 4, title: "Urban Development" },
			{ id: 5, title: "Water And Sanitation" }
		],
		region: [
			{ id: 0, title: "Africa" },
			{ id: 1, title: "East Asia" },
			{ id: 2, title: "South Asia" },
			{ id: 3, title: "Europe (Including Türkiye)" },
			{ id: 4, title: "Eurasia (Russia And Central Asia)" },
			{ id: 5, title: "Latin America" },
			{ id: 6, title: "North America" },
			{ id: 7, title: "Middle East" }
		],
		stage: [
			{ id: 0, title: "Initiation" },
			{ id: 1, title: "Planning" },
			{ id: 2, title: "Execution" },
			{ id: 3, title: "Monitoring And Control" },
			{ id: 4, title: "Closure" }
		],
		format: [
			{ id: 0, title: "Video" },
			{ id: 1, title: "Case Study Pdf's" },
			{ id: 2, title: "Dataset" },
			{ id: 3, title: "Data Showcase" },
			{ id: 4, title: "Detailed Reports" },
			{ id: 5, title: "Framework" },
			{ id: 6, title: "Infographic" },
			{ id: 7, title: "Learning Path" },
			{ id: 8, title: "Policy Brief" },
			{ id: 9, title: "Presentation" },
			{ id: 10, title: "Scenarios/Decision Tree" }
		],

		learningPath: [
			{
				"id": 0,
				"paths": "",
				"type": "Case Study",
				"title": "Fukuoka City: Pioneering Life Cycle Costing For Efficient Water Management",
				"principles": 1,
				"format": 0,
				"stage": 1,
				"region": 1,
				"industry": 2,
				"image": "images/resources/01.jpg",
				"videoUrl": "./video/FukuokaCaseStudy.mp4",
				"videoTitle": "QII 2 in Action"
			}, 
			{
				"id": 1,
				"paths": "",
				"type": "Case Study",
				"title": "The Ganga Wastewater Program Strengthening Life Cycle Costing Through Public-Private Partnerships",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/resources/02.jpg"
			},
			{
				"id": 2,
				"paths": "",
				"type": "Case Study",
				"title": "Performance-Based Contracts (PBCs) for Proactive Road Asset Management",
				"principles": 0,
				"format": 2,
				"stage": 1,
				"region": 1,
				"industry": 3,
				"image": "images/resources/03.jpg"
			},

			{
				"id": 3,
				"paths": "https://thedocs.worldbank.org/en/doc/837721522762050108-0290022018/original/ESFFramework.pdf#page=29&zoom=80",
				"type": "Programs",
				"title": "Environmental and Social Framework World Bank (2017)",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Environmental and Social Framework World Bank (2017).png"
			},

			{
				"id": 3,
				"paths": "https://documents1.worldbank.org/curated/en/099120004052270615/pdf/P1746330d584ff0210a9670dcf49a5becb0.pdf",
				"type": "Programs",
				"title": "Climate Toolkits for Infrastructure PPPs World Bank",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Climate Toolkits for Infrastructure PPPs World Bank.png"
			},

			{
				"id": 3,
				"paths": "https://www.ifc.org/en/insights-reports/2012/ifc-performance-standards",
				"type": "Programs",
				"title": "IFC Performance Standards on Environmental and Social Sustainability",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/IFC Performance Standards on Environmental and Social Sustainability.png"
			},

			{
				"id": 3,
				"paths": "https://doi.org/10.1787/a74a45b0-en",
				"type": "Programs",
				"title": "Infrastructure for a Climate-Resilient Future OECD (2024)",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Infrastructure for a Climate Resilient Future OECD (2024).png"
			},
			{
				"id": 3,
				"paths": "",
				"type": "",
				"title": "",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": ""
			},
			
			{
				"id": 5,
				"paths": "./pdf/PPP Reference Guide Version 3.pdf",
				"type": "Practical Reference Guide",
				"title": "Public-Private Partnerships Reference Guide ",

				"principles": 4,
				"format": 3,
				"stage": 3,
				"region": 0,
				"industry": 0,
				"image": "images/resources/06.jpg"
			},
			{
				"id": 2,
				"paths": "",
				"type": "Case Study",
				"title": "Performance-Based Contracts (PBCs) for Proactive Road Asset Management",

				"principles": 0,
				"format": 2,
				"stage": 1,
				"region": 2,
				"industry": 4,
				"image": "images/resources/03.jpg"
			},
			{
				"id": 3,
				"paths": "",
				"type": "",
				"title": "",

				"principles": 2,
				"format": 3,
				"stage": 1,
				"region": 1,
				"industry": 4,
				"image": ""
			},
			{
				"id": 5,
				"paths": "./pdf/PPP Reference Guide Version 3.pdf",
				"type": "Practical Reference Guide",
				"title": "Public-Private Partnerships Reference Guide",

				"principles": 4,
				"format": 4,
				"stage": 1,
				"region": 1,
				"industry": 5,
				"image": "images/resources/06.jpg"
			},
			{
				"id": 2,
				"paths": "",
				"type": "Case Study",
				"title": "Performance-Based Contracts (PBCs) for Proactive Road Asset Management",

				"principles": 0,
				"format": 5,
				"stage": 1,
				"region": 4,
				"industry": 1,
				"image": "images/resources/03.jpg"
			},

			{
				"id": 5,
				"paths": "./pdf/PPP Reference Guide Version 3.pdf",
				"type": "Practical Reference Guide",
				"title": "Public-Private Partnerships Reference Guide ",

				"principles": 4,
				"format": 4,
				"stage": 3,
				"region": 1,
				"industry": 1,
				"image": "images/resources/06.jpg"
			},
			{
				"id": 2,
				"paths": "",
				"type": "Case Study",
				"title": "Performance-Based Contracts (PBCs) for Proactive Road Asset Management",

				"principles": 0,
				"format": 4,
				"stage": 3,
				"region": 1,
				"industry": 1,
				"image": "images/resources/03.jpg"
			},

			{
				"id": 4,
				"paths": "./pdf/Life Cycle Cost Analysis Primer.pdf",
				"type": "Technical Primer",
				"title": "Life Cycle Cost Analysis Primer",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},
			{
				"id": 4,
				"paths": "https://openknowledge.worldbank.org/entities/publication/db0df170-6101-526e-8fc8-d0e448196fc4 ",
				"type": "Guidance ",
				"title": "Learning from Mega-disasters: Japan Case Study ",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},
			{
				"id": 4,
				"paths": "https://climateknowledgeportal.worldbank.org/ ",
				"type": "Tools ",
				"title": "World Bank Climate Knowledge Portal",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},
			{
				"id": 4,
				"paths": "https://thinkhazard.org/en/",
				"type": "Tools ",
				"title": "GFDRR ThinkHazard!",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},
			{
				"id": 4,
				"paths": "https://georisk.gov.ph/",
				"type": "Case study  ",
				"title": "Geospatial Information Management and Analysis Project for Hazards and Risk Assessment in the Philippines",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},
			{
				"id": 4,
				"paths": "https://openknowledge.worldbank.org/handle/10986/21875",
				"type": "Guidance",
				"title": "Climate Impact Assessment Frameworks (Africa Infrastructure Example) ",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},
			{
				"id": 4,
				"paths": "https://gain.nd.edu/our-work/country-index/rankings/",
				"type": "Tools",
				"title": "Notre Dame Global Adaptation Initiative: ND-GAIN Vulnerability Indices",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},
			{
				"id": 4,
				"paths": "https://www.gfdrr.org/sites/default/files/publication/pda-2015-vanuatu.pdf",
				"type": "Case study",
				"title": "Vanuatu Post-Disaster Needs Assessment: Tropical Cyclone Pam",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},
			{
				"id": 4,
				"paths": "https://www.gfdrr.org/en/disaster-risk-profiles",
				"type": "Guidance",
				"title": "Disaster Risk Profiles (GFDRR)",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://blogs.worldbank.org/en/climatechange/building-resilience-in-investment-projects--the-power-of-resilie",
				"type": "Guidance",
				"title": "World Bank Resilience Rating System ",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://giri.unepgrid.ch/",
				"type": "Tools",
				"title": "Global Infrastructure Risk Model and Resilience Index (GIRI) (Coalition for Disaster Resilient Infrastructure)",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://drmkc.jrc.ec.europa.eu/inform-index/INFORM-Climate-Change/INFORM-Climate-Change-Tool",
				"type": "Tools",
				"title": "INFORM Climate Change Tool (European Commission)",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.worldbank.org/en/news/feature/2025/07/17/jamaica-how-investments-in-disaster-resilience-helped-protect-communities",
				"type": "Case study",
				"title": "Jamaica Disaster Vulnerability Reduction Project",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.theprif.org/sites/theprif.org/files/documents/PRIF_SLR-Report_DigitalV2.pdf",
				"type": "Case study",
				"title": "Initial Sea Level Rise Risk Assessment for Nauru (Chapter 5.6.1)",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.gfdrr.org/en/publication/building-code-checklist-structural-resilience",
				"type": "Guidance",
				"title": "Building Code Checklist for Structural Resilience",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://ec.europa.eu/sustainable-finance-taxonomy/taxonomy-compass/the-compass",
				"type": "Guidance",
				"title": "EU Taxonomy Compass",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://cdn.prod.website-files.com/64869a932dab4d8c36a88774/68a44d2347380f7f25d23d24_ST01_V2_05.12.2024.pdf",
				"type": "Guidance",
				"title": "FAST-Infra Label",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://openknowledge.worldbank.org/entities/publication/6f69f235-edf6-40b9-9a4b-5efad46630aa",
				"type": "Report",
				"title": "A Global Assessment of Building Codes: Current Status and Evolving Needs to Promote Resilient, Green and Inclusive Buildings",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.preventionweb.net/publication/building-regulations-sub-saharan-africa-status-review-building-regulatory-environment",
				"type": "Report",
				"title": "Building regulations in Sub-Saharan Africa: A status review of the building regulatory environment",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.worldbank.org/en/topic/disasterriskmanagement/publication/stronger-building-codes-for-a-safer-more-resilient-future",
				"type": "Blog",
				"title": "Stronger Building Codes for a Safer, More Resilient Future",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.gfdrr.org/en/publication/building-regulatory-capacity-assessment-brca-20-methodology",
				"type": "Guidance",
				"title": "Building Regulatory Capacity Assessment",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.worldbank.org/en/news/press-release/2025/07/10/building-resilient-afe-infrastructure-protecting-access-connectivity-and-communities",
				"type": "Case Study",
				"title": "Modular Bridges in Madagascar",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://openknowledge.worldbank.org/entities/publication/c33e226c-2fbb-5e11-8c21-7b711ecbc725",
				"type": "Tool",
				"title": "World Bank: A Catalogue of Nature-Based Solutions for Urban Resilience ",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.ifc.org/content/dam/ifc/doc/2023/catalogue-of-nature-based-solutions-for-infrastructure-projects.pdf",
				"type": "Tool",
				"title": "IFC Catalogue of Nature-Based Solutions for Infrastructure Projects ",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://openknowledge.worldbank.org/entities/publication/c33e226c-2fbb-5e11-8c21-7b711ecbc725",
				"type": "Report",
				"title": "A Catalogue of Nature-Based Solutions for Urban Resilience",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://infratech.gihub.org/infratech-case-studies/ai-and-deep-learning-for-identifying-pavement-failures-in-latin-american-and-the-caribbean",
				"type": "Case study",
				"title": "IADB: AI and deep learning for identifying pavement failures",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.oecd.org/content/dam/oecd/en/publications/reports/2019/04/digital-security-and-resilience-in-critical-infrastructure-and-essential-services_5593c149/a7097901-en.pdf",
				"type": "Report",
				"title": "Digital Security and Resilience in Critical Infrastructure and Essential Services",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/12/digital-public-infrastructure-for-digital-governments_11fe17d9/ff525dc8-en.pdf",
				"type": "Report",
				"title": "Digital Public Infrastructure for Digital Governments",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://ppp.worldbank.org/sites/default/files/2022-04/IPFResiliencedrmhubtokyo.pdf",
				"type": "Report",
				"title": "Incorporating Resilience into Infrastructure Prioritization: Application to Japan's Road Transport Sector",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.gfdrr.org/en/publication/building-back-better",
				"type": "Report",
				"title": "Building Back Better",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.nist.gov/publications/functional-recovery-lifeline-infrastructure-system-services",
				"type": "Publication",
				"title": "Functional Recovery of Lifeline Infrastructure System Services",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://infrastructure-toolkit.oecd.org/governance/strengthen-critical-infrastructure-resilience/",
				"type": "Tool",
				"title": "OECD Infrastructure Toolkit: Strengthening Critical Infrastructure Resilience",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.oecd.org/content/dam/oecd/en/publications/reports/2021/11/building-resilience_6b655137/354aa2aa-en.pdf",
				"type": "Policy Paper",
				"title": "Building Resilience: New Strategies for Strengthening Infrastructure Resilience and Maintenance",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.climatebonds.net/files/documents/supporting-documents/Climate-Bonds_CBRT-v1-Final-003-User-View_Protected-version2-2-1.xlsx",
				"type": "Tool",
				"title": "Climate Bonds Initiative",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://ec.europa.eu/sustainable-finance-taxonomy/taxonomy-compass/the-compass",
				"type": "Guidance",
				"title": "EU Taxonomy Compass",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://cdn.prod.website-files.com/64869a932dab4d8c36a88774/68a44d2347380f7f25d23d24_ST01_V2_05.12.2024.pdf",
				"type": "Guidance",
				"title": "FAST-Infra Label",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.gfdrr.org/en/feature-story/assessing-benefits-and-costs-nature-based-solutions",
				"type": "Guidance",
				"title": "Assessing the Benefits and Costs of Nature-Based Solutions for Climate Resilience: A Guideline for Project Developers (GFDRR)",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.gfdrr.org/sites/default/files/publication/Learning%20from%20Megadisasters%20%20Lessons%20from%20the%20Great%20East%20Japan%20Earthquake.pdf",
				"type": "Guidance",
				"title": "Chapter 28: Measuring the Cost-Effectiveness of Various Disaster Risk Management Measures ",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099032625173042760",
				"type": "Guidance",
				"title": "Disaster and Climate-Resilient Transport Guidance Note",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.iigcc.org/hubfs/2025%20resources%20upload/Physical%20Climate%20Risk%20Appraisal%20Methodology%202.0%20IIGCC%202025.pdf",
				"type": "Tool",
				"title": "Physical Climate Risk Appraisal Methodology (PCRAM) 2.0 (Institutional Investors Group on Climate Change (IIGCC) ",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.iisd.org/savi/",
				"type": "Tool",
				"title": "Sustainable Asset Valuation (SAVi)",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.nature.org/content/dam/tnc/nature/en/documents/GCTWF-Business-Case-April-2019.pdf",
				"type": "Case study",
				"title": "Greater Cape Town Water Fund: Business Case",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://nbi.iisd.org/report/savi-forest-restoration-brantas-river-basin-indonesia/",
				"type": "Case study",
				"title": "Sustainable Asset Valuation (SAVi) of Forest Restoration in the Brantas River Basin, Indonesia",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099050725135521570",
				"type": "Report",
				"title": "World Bank Financing Climate Adaptation and Nature-Based Infrastructure ",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099050525150032182",
				"type": "Report",
				"title": "World Bank Transport Resilience Financing, Resources and Opportunities ",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.gfdrr.org/en/disaster-risk-finance",
				"type": "Resource",
				"title": "GFDRR Disaster Risk Finance ",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://documents1.worldbank.org/curated/en/651521472032148001/pdf/107979-BRI-P159188-BlendedFinanceCasesPhilippines-PUBLIC.pdf",
				"type": "Case study",
				"title": "Philippine Water Revolving Fund",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://sustainability-coalition.org/case-study/philippines-energy-development-corporation/",
				"type": "Case study",
				"title": "Philippines Energy Development Corporation (EDC) Green Bond",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.conservation.org/projects/vida-manglar-carbon-project",
				"type": "Case study",
				"title": "Vida Manglar Carbon Project in Colombia",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.worldbank.org/en/topic/sustainableinfrastructurefinance/brief/climate-toolkits-for-infrastructure-ppps",
				"type": "Tool",
				"title": "World Bank - Climate Toolkits for Infrastructure PPPs",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099050525150011892",
				"type": "Tool",
				"title": "World Bank Sub-sectoral Roadmaps to Promote Private Sector Participation in Transport Resilience: Roads, Railways, and Urban Transport ",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.gfdrr.org/en/disaster-risk-finance",
				"type": "Resource",
				"title": "GFDRR Disaster Risk Finance ",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://cdri.world/upload/biennial/CH4.1-CCRI.pdf",
				"type": "Report",
				"title": "Financing for Disaster and Resilient Infrastructure (Coalition for Disaster Resilient Infrastructure) ",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.oecd.org/en/publications/g20-oecd-report-on-approaches-for-financing-and-investing-in-climate-resilient-infrastructure_8f6d436a-en.html",
				"type": "Report",
				"title": "G20/OECD Report on approaches for financing and investing in climate-resilient infrastructure",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "Cybersecurity Assessment Toolkit for Smart Cities",
				"type": "Guidance",
				"title": "Cybersecurity Assessment Toolkit for Smart Cities",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.ncsc.gov.uk/collection/cyber-assessment-framework/introduction-to-caf#section_1",
				"type": "Guidance",
				"title": "UK: The Cyber Assessment Framework (CAF) (National Cyber Security Center, UK)",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://documents1.worldbank.org/curated/en/099062623085028392/pdf/P17263707c36b702309f7303dbb7266e1cf.pdf",
				"type": "Guidance",
				"title": "Sectoral Cybersecurity Maturity Model (World Bank)",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://documentsinternal.worldbank.org/Search/34392134",
				"type": "Report",
				"title": "Cybersecurity Economics for Emerging Markets (World Bank)",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://documents1.worldbank.org/curated/en/099111623162584046/pdf/P17785201f69be0150909902c3a7202107e.pdf",
				"type": "Case study",
				"title": "Ghana: A case study in strengthening cyber resilience (World Bank)",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.cisa.gov/sites/default/files/2023-04/cybersecurity-best-practices-for-smart-cities_508.pdf",
				"type": "Guidance",
				"title": "Cybersecurity best practice for smart cities (CISA)",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},

			{
				"id": 4,
				"paths": "https://www.cyber.gc.ca/en/guidance/introduction-cyber-threat-environment",
				"type": "Guidance",
				"title": "Canada: the cyber threat environment",

				"principles": 3,
				"format": 5,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/05.jpg"
			},


			{
				"id": 5,
				"paths": "./pdf/PPP Reference Guide Version 3.pdf",
				"type": "Practical Reference Guide",
				"title": "Public-Private Partnerships Reference Guide ",

				"principles": 4,
				"format": 5,
				"stage": 5,
				"region": 1,
				"industry": 1,
				"image": "images/resources/06.jpg"
			},
			{
				"id": 2,
				"paths": "",
				"type": "Case Study",
				"title": "Performance-Based Contracts (PBCs) for Proactive Road Asset Management",

				"principles": 0,
				"format": 5,
				"stage": 5,
				"region": 1,
				"industry": 1,
				"image": "images/resources/03.jpg"
			},
			
			{
				"id": 5,
				"paths": "./pdf/PPP Reference Guide Version 3.pdf",
				"type": "Practical Reference Guide",
				"title": "Public-Private Partnerships Reference Guide ",

				"principles": 5,
				"format": 1,
				"stage": 1,
				"region": 1,
				"industry": 1,
				"image": "images/resources/06.jpg"
			}
		],
		faq: [
			{
				question: "What is the QII Reference Guide?",
				answer: "The QII Reference Guide is an interactive platform designed to help stakeholders understand and apply the G20 Principles for Quality Infrastructure Investment. It provides tools, case studies, and resources to support sustainable and efficient infrastructure development.",
			},
			{
				question: "Who is the QII Reference Guide for?",
				answer: "It is designed for policymakers, investors, and stakeholders involved in infrastructure planning and development.",
			},
			{
				question: "How do I get started with the QII Reference Guide?",
				answer: "You can get started by accessing the guide online, exploring the tools, and reviewing the case studies provided.",
			},
			{
				question: "Who do I contact if I encounter issues or need additional support?",
				answer: "Please reach out to the QII Reference Guide support team through the contact page or provided email.",
			},
		]
	},
	reducers: {
		setCurrentPath: (state, action) => {
			state.currentPath = action.payload;
		},
		setBradcrump: (state, action) => {
			state.breadCrump = action.payload;
		},
		setOverlay: (state, action) => {
			state.isOverlay = action.payload;
		},
		setShowVideo: (state, action) => {
			state.isVideo = action.payload;
		},
		setVideoData: (state, action) => {
			state.videoData.height = action.payload.height;
			state.videoData.url = action.payload.url;
			state.videoData.width = action.payload.url;
			state.videoData.title = action.payload.title;
		}
	}
});

export const breadCrump = (state) => state.appData.breadCrump;
export const principles = (state) => state.appData.principles;
export const isOverlay = (state) => state.appData.isOverlay;
export const isVideo = (state) => state.appData.isVideo;
export const getVideo = (state) => state.appData.videoData;
export const { setCurrentPath, setOverlay, setShowVideo, setVideoData, setBradcrump } = appDataSlice.actions;
export default appDataSlice.reducer;