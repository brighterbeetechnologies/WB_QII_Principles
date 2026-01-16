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
			{ id: 0, title: "SUSTAINABLE GROWTH", img_path: "images/UpdatedAssets/Qii1.png", path: "/qii1" },
			{ id: 1, title: "ECONOMIC EFFICIENCY", img_path: "images/UpdatedAssets/Qii2.png", path: "/qii2" },
			{ id: 2, title: "ENVIRONMENT", img_path: "images/UpdatedAssets/Qii3.png", path: "/qii3" },
			{ id: 3, title: "RESILIENCE", img_path: "images/UpdatedAssets/Qii4.png", path: "/qii4" },
			{ id: 4, title: "SOCIAL", img_path: "images/UpdatedAssets/Qii5.png", path: "/qii5" },
			{ id: 5, title: "GOVERNANCE", img_path: "images/UpdatedAssets/Qii6.png", path: "/qii6" }
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
				"paths": "pdf/Fukuoka_city_case_study.pdf",
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
				"paths": "pdf/Ganga_case_study.pdf",
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
				"id": 1,
				"paths": "",
				"type": "Case Study",
				"title": "Performance-Based Contracts (Pbcs) For Proactive Road Asset Management",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/qii2/Performance_Based.png"
			},
			{
				"id": 1,
				"paths": "https://www.oecd.org/en/publications/life-cycle-costing-in-public-procurement-in-hungary_8d90f627-en.html",
				"type": "Case Study",
				"title": "Netherlands DuboCalc and CO2 Performance Ladder",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/governance/list/01.jpg"
			},
			{
				"id": 1,
				"paths": "pdf/Revised Draft Practice Manual-LCC- with sector specific guidance-15 Oct 2022.docx",
				"type": "Case Study",
				"title": "Bangladesh Combined Cycle Power Plant",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/governance/list/02.jpg"
			},
			{
				"id": 1,
				"paths": "pdf/Infrastructure Data Innovations in Malawi.pdf",
				"type": "Case Study",
				"title": "Malawi Infrastructure Data Innovations",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/governance/list/03.jpg"
			},
			{
				"id": 1,
				"paths": "https://ppp.worldbank.org/library/basic-plan-public-private-partnerships-seoul-korea-development-institute-pimac-kr-2011",
				"type": "Case Study",
				"title": "South Korea Public and Private Infrastructure Investment Management Center (PIMAC)",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/governance/list/04.jpg"
			},
			{
				"id": 1,
				"paths": "pdf/Presentation on LCC Transport Unit_ver.pdf",
				"type": "Case Study",
				"title": "India Tamil Nadu Road Sector Project",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/governance/list/05.jpg"
			},
			{
				"id": 1,
				"paths": "https://ppp.worldbank.org/public-private-partnership/sites/default/files/2022-03/Final-LOW_WB_G20_Report_v4_1JUN_2021.pdf",
				"type": "Resources",
				"title": "Well Maintained: - Economic Benefits from More Reliable and Resilient Infrastructure ",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/governance/resources/01.jpg"
			},
			{
				"id": 1,
				"paths": "https://ppp.worldbank.org/sites/default/files/2024-08/PPP Reference Guide Version 3.pdf",
				"type": "Resources",
				"title": "PPP Reference Guide",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/governance/resources/02.jpg"
			},
			{
				"id": 1,
				"paths": "https://prdrse4all.spc.int/system/files/149856004-infrastructure-maintenance-in-the-pacific-challenging-the-build-neglect-rebuild-paradigm.pdf",
				"type": "Resources",
				"title": "Infrastructure Maintenance in the Pacific",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/governance/resources/03.jpg"
			},
			{
				"id": 1,
				"paths": "https://publications.iadb.org/en/bringing-ppps-sunlight-synergies-now-and-pitfalls-later",
				"type": "Resources",
				"title": "Bringing PPPs into the Sunlight Inter-American Development Bank",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/governance/resources/04.jpg"
			},
			{
				"id": 1,
				"paths": "https://www.ppiaf.org/documents/5629",
				"type": "Case Study",
				"title": "Vietnam Ho Chi Minh City PBCs World Bank",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/procurement/Vietnam.png"
			},
			{
				"id": 1,
				"paths": "",
				"type": "Case Study",
				"title": "India Ganga River Wastewater Program World Bank",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/procurement/IndiaGanga.png"
			},
			{
				"id": 1,
				"paths": "https://www.gihub.org/infrastructure-output-specifications/",
				"type": "Guidance",
				"title": "Reference Guide on Output Specifications for Quality Infrastructure Global Infrastructure Hub",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/procurement/ReferenceGuide.png"
			},
			{
				"id": 1,
				"paths": "https://www.gihub.org/infrastructure-technology-use-cases/case-studies/pre-fabrication-technology-for-modular-construction/",
				"type": "Case Study",
				"title": "Pre-Fabrication Technology for Modular Construction Global Infrastructure Hub",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/procurement/Pre-Fabrication.png"
			},
			{
				"id": 1,
				"paths": "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/522181612428427520/disruptive-technologies-in-public-procurement",
				"type": "Case Study",
				"title": "Disruptive Technologies in Public Procurement World Bank",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/procurement/Disruptive.png"
			},
			{
				"id": 1,
				"paths": "https://www.fhwa.dot.gov/pavement/lcca/010621.pdf",
				"type": "Resources",
				"title": "Life-Cycle Cost Analysis Primer U.S. Department of Transportation - Federal Highway Administration",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/procurement/resources/01.png"
			},
			{
				"id": 1,
				"paths": "https://www.oecd.org/en/publications/building-resilience_354aa2aa-en.html",
				"type": "Resources",
				"title": "New Strategies for Strengthening Infrastructure Resilience and Maintenance Organization for Economic Co-operation and Development",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/procurement/resources/02.png"
			},
			{
				"id": 1,
				"paths": "https://publications.iadb.org/en/bringing-ppps-sunlight-synergies-now-and-pitfalls-later",
				"type": "Resources",
				"title": "Bringing PPPs into the Sunlight Inter-American Development Bank",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/procurement/resources/03.png"
			},
			{
				"id": 1,
				"paths": "https://ppp.worldbank.org/public-private-partnership/sites/default/files/2022-03/Final-LOW_WB_G20_Report_v4_1JUN_2021.pdf",
				"type": "Resources",
				"title": "Well Maintained: Economic Benefits from More Reliable and Resilient Infrastructure World Bank",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/procurement/resources/04.png"
			},
			{
				"id": 1,
				"paths": "https://www.iisd.org/publications/report/life-cycle-costing-sustainable-public-procurement-question-value",
				"type": "Resources",
				"title": "Life-Cycle Costing in Sustainable Public Procurement International Institute for Sustainable Development",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/procurement/resources/05.png"
			},
			{
				"id": 1,
				"paths": "",
				"type": "Resources",
				"title": "Life-Cycle Costing Guidance Note World Bank",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/procurement/resources/06.png"
			},
			{
				"id": 1,
				"paths": "https://blogs.worldbank.org/en/ppps/modular-bridges-climate-resilient-solution-small-bridges-pacific",
				"type": "Case Study",
				"title": "Solomon Islands Climate-Resilient Solution for Small Bridges in the Pacific World Bank",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/technicalSolutions/SolomonIslands.png"
			},
			{
				"id": 1,
				"paths": "https://www.nature.org/content/dam/tnc/nature/en/documents/GCTWF-Business-Case-April-2019.pdf",
				"type": "Case Study",
				"title": "The Nature Conservancy Security The Nature Conservancy",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/technicalSolutions/SouthAfrica.png"
			},
			{
				"id": 1,
				"paths": "https://documents1.worldbank.org/curated/en/099032924175510017/pdf/P1760001ef88ab00a18d18167fe0293af27.pdf",
				"type": "Case Study",
				"title": "Peru Technologies to Increase Observability and Controllability in Real-Time System Operations World Bank",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/technicalSolutions/Peru.png"
			},
			{
				"id": 1,
				"paths": "https://openknowledge.worldbank.org/entities/publication/bbfb9200-de1a-489e-a360-fac68c72d81f",
				"type": "Case Study",
				"title": "Vietnam National Power Transmission Corporation’s Digitalization Journey World Bank",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/technicalSolutions/Vietnam.png"
			},
			{
				"id": 1,
				"paths": "https://infratech.gihub.org/infratech-case-studies/ai-and-deep-learning-for-identifying-pavement-failures-in-latin-american-and-the-caribbean/",
				"type": "Case Study",
				"title": "AI and Deep Learning for Identifying Pavement Failures Global Infrastructure Hub",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/technicalSolutions/AIanddeep.png"
			},
			{
				"id": 1,
				"paths": "https://www.gihub.org/infrastructure-technology-use-cases/case-studies/sensors-and-machine-learning-for-predictive-maintenance/",
				"type": "Case Study",
				"title": "Sensors and Machine Learning for Predictive Maintenance Global Infrastructure Hub",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/technicalSolutions/SensorsAndMachine.png"
			},
			{
				"id": 1,
				"paths": "https://www.infratechportal.org/LandingPage",
				"type": "Resources",
				"title": "InfraTech Portal Asian Infrastructure Investment Bank",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/technicalSolutions/resources/InfratechPortal.png"
			},
			{
				"id": 1,
				"paths": "https://cdn.gihub.org/umbraco/media/3061/world-bank-group-s-reference-note-on-infratech-toolkit.pdf",
				"type": "Resources",
				"title": "InfraTech Policy Toolkit World Bank",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/technicalSolutions/resources/InfraTechPolicyToolkit.png"
			},
			{
				"id": 1,
				"paths": "https://www.ifc.org/content/dam/ifc/doc/2023/catalogue-of-nature-based-solutions-for-infrastructure-projects.pdf",
				"type": "Resources",
				"title": "Nature-Based Solutions for Infrastructure Projects International Finance Corporation",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/technicalSolutions/resources/CatalogueofNature.png"
			},
			{
				"id": 1,
				"paths": "https://globalbim.org/about-us/",
				"type": "Resources",
				"title": "Global BIM Network UK Foreign, Commonwealth and Development Office",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/technicalSolutions/resources/GlobalBIMetwork.png"
			},
			{
				"id": 1,
				"paths": "https://www.oecd.org/en/publications/iea-technology-roadmaps_22182837.html",
				"type": "Resources",
				"title": "IEA Technology Roadmaps International Energy Agency",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/technicalSolutions/resources/IEATechnology.png"
			},
			{
				"id": 1,
				"paths": "https://documents1.worldbank.org/curated/en/470341542225495367/pdf/132059-BRI-PUBLIC-PPP-Stories-Tibar-Bay-Port.pdf",
				"type": "Case Study",
				"title": "Timor-Leste Tibar Bay Port PPP International Finance Corporation",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/costRecovery/Timor-Leste.png"
			},
			{
				"id": 1,
				"paths": "https://documents1.worldbank.org/curated/en/942711467994666687/pdf/103935-REVISED-LW61-fin-logo-OKR.pdf",
				"type": "Case Study",
				"title": "Maldives Facilitating Private Investment in Clean and Affordable Energy World Bank",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/costRecovery/Maldives.png"
			},
			{
				"id": 1,
				"paths": "https://documents1.worldbank.org/curated/en/568291635871410812/pdf/Troubled-Tariffs-Revisiting-Water-Pricing-for-Affordable-and-Sustainable-Water-Services.pdf",
				"type": "Case Study",
				"title": "Report Revisiting Water Pricing for Affordable and Sustainable Water Services World Bank",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/costRecovery/TroubledTariffs.png"
			},
			{
				"id": 1,
				"paths": "https://infrastructuredeliverymodels.gihub.org/case-studies/hyderabad-metro-rail/",
				"type": "Case Study",
				"title": "India Hyderabad Metro Rail Global Infrastructure Hub",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/costRecovery/India.png"
			},
			{
				"id": 1,
				"paths": "https://ppp.worldbank.org/public-private-partnership/Innovative_Revenues_Infrastructure/Table_of_Contents",
				"type": "Guidance",
				"title": "Innovative Revenues for Infrastructure Guidelines World Bank",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/costRecovery/InnovativeRevenues.png"
			},
			{
				"id": 1,
				"paths": "https://www.gfdrr.org/sites/default/files/publication/Land Value Capture.pdf",
				"type": "Guidance",
				"title": "Investment in Infrastructure City Resilience Program, Global Facility for Disaster Reduction and Recovery",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/costRecovery/lvc.png"
			},
			{
				"id": 1,
				"paths": "https://documents1.worldbank.org/curated/en/099325009052225715/pdf/P1773160bfd9f30ed0977607550f60b2651.pdf",
				"type": "Case Study",
				"title": "Argentina Land Value Capture and Infrastructure World Bank",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/costRecovery/Argentina.png"
			},
			{
				"id": 1,
				"paths": "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099050725135521570",
				"type": "Resources",
				"title": "Financing Climate Adaptation and Nature-Based Infrastructure (World Bank)",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/costRecovery/resources/01.png"
			},
			{
				"id": 1,
				"paths": "https://ppp.worldbank.org/public-private-partnership/library/life-cycle-cost-analysis-management-highway-assets",
				"type": "Resources",
				"title": "Life-Cycle Cost Analysis for Management of Highway Assets World Bank",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/costRecovery/resources/02.png"
			},
			{
				"id": 1,
				"paths": "https://ppp.worldbank.org/public-private-partnership/sites/default/files/2020-02/World Bank_Municipal PPP_Module 16_Content.pdf",
				"type": "Resources",
				"title": "Harnessing Land Value Capture Municipal Public-Private Partnership Framework Global Platform for Sustainable Cities",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/costRecovery/resources/03.png"
			},
			{
				"id": 1,
				"paths": "https://thedocs.worldbank.org/en/doc/89d9f9d960bb2870ac1592b041232094-0070012024/original/Monetizing-carbon-credits-in-energy-and-agri-sectors-Agritechnica-May-22-2024.pdf",
				"type": "Resources",
				"title": "Monetization of Carbon Credits Energy and Agriculture Sectors World Bank",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/costRecovery/resources/04.png"
			},
			{
				"id": 1,
				"paths": "https://www.gihub.org/innovative-funding-and-financing/revenue-levers/",
				"type": "Resources",
				"title": "Revenue Levers to Fund Infrastructure Global Infrastructure Hub",
				"principles": 1,
				"format": 1,
				"stage": 2,
				"region": 1,
				"industry": 2,
				"image": "images/costRecovery/resources/05.png"
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
				"paths": "https://thedocs.worldbank.org/en/doc/837721522762050108-0290022018/original/ESFFramework.pdf#page=29&zoom=80",
				"type": "Guidance ",
				"title": "Environmental and Social Framework (ESF) World Bank ",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Quality-Environmental-Standards/Environmental and Social Framework (ESF).png"
			},

			{
				"id": 3,
				"paths": "https://www.ifc.org/en/insights-reports/2012/ifc-performance-standards",
				"type": "Guidance",
				"title": "IFC Performance Standards on Environmental and Social Sustainability",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Quality-Environmental-Standards/IFC Performance Standards on Environmental and Social Sustainability.png"
			},

			{
				"id": 3,
				"paths": "https://www.gihub.org/innovative-funding-and-financing/case-studies/tibar-bay-port/",
				"type": "Case Study",
				"title": "Timor-Leste: Tibar Bay Port",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Quality-Environmental-Standards/Timor-Leste Tibar Bay Port.png"
			},

			{
				"id": 3,
				"paths": "https://www.iso.org/popular-standards.html",
				"type": "Guidance",
				"title": "Infrastructure Standards International Organization for Standardization (ISO) ",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Quality-Environmental-Standards/Infrastructure Standards.png"
			},
			{
				"id": 3,
				"paths": "https://equator-principles.com/",
				"type": "Guidance",
				"title": "Equator Principles",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Quality-Environmental-Standards/Equator Principles.png"
			},
			{
				"id": 3,
				"paths": "https://www.usgbc.org/leed/rating-systems/leed-for-cities",
				"type": "Guidance",
				"title": "LEED for Buildings /n LEED for Cities and Communities ",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Quality-Environmental-Standards/LEED for Buildings.png"
			},
			{
				"id": 3,
				"paths": "https://breeam.com/breeam-infrastructure",
				"type": "Guidance",
				"title": "BREEAM Infrastructure",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Quality-Environmental-Standards/BREEAM Infrastructure.png"
			},
			{
				"id": 3,
				"paths": "https://www.bluedot-network.org/case-studies/BDN-2EA3VG-66FQ?utm_sourcE",
				"type": "Case Study",
				"title": "Blue Dot Network",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Quality-Environmental-Standards/Framework for SDG-Aligned Finance.png"
			},
			{
				"id": 3,
				"paths": "https://www.fastinfralabel.org/",
				"type": "Case Study",
				"title": "FAST Infra",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Quality-Environmental-Standards/Framework for SDG-Aligned Finance.png"
			},
			{
				"id": 3,
				"paths": "https://sdgfinance.undp.org/resource-library/framework-sdg-aligned-finance",
				"type": "Guidance",
				"title": "Framework for SDG-Aligned Finance OECD & UNDP",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Quality-Environmental-Standards/Framework for SDG-Aligned Finance.png"
			},
			
			{
				"id": 3,
				"paths": "https://www.cdri.world/upload/pages/1726999413696320_202203111036infrastructure_standards-building_blocks_for_a_resilient_future_technical_note.pdf?utm_source",
				"type": "Guidance",
				"title": "Infrastructure Standards – Building Blocks for a Resilient Future CDRI", 
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Quality-Environmental-Standards/Framework for SDG-Aligned Finance.png"
			},

			{
				"id": 3,
				"paths": "https://www.unep.org/geo/global-environment-outlook-7",
				"type": "Guidance",
				"title": "Global Environment Outlook (GEO-7) UNEP",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Quality-Environmental-Standards/Framework for SDG-Aligned Finance.png"
			},
			{
				"id": 3,
				"paths": "https://openknowledge.worldbank.org/entities/publication/ddda3ed0-096e-59dd-a25d-3de884254eba",
				"type": "Guidance",
				"title": "Integrating Green and Gray: Creating Next Generation Infrastructur World Bank and World Resources Institute",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/Integrating Green and Gray Creating Next Generation Infrastructure.png"
			},
			{
				"id": 3,
				"paths": "https://wedocs.unep.org/rest/api/core/bitstreams/979a0cdb-3d3e-4f4a-b899-96c97f412d0d/content",
				"type": "Guidance - Water",
				"title": "Green Infrastructure - Guide for Water Management UNEP",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/Green Infrastructure - Guide for Water Management.png"
			},
			{
				"id": 3,
				"paths": "https://documents1.worldbank.org/curated/en/102951623742853259/pdf/Green-Roads-for-Water-Guidelines-for-Road-Infrastructure-in-Support-of-Water-Management-and-Climate-Resilience.pdf",
				"type": "Guidance - Transport",
				"title": "Green Roads for Water World Bank",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/Green Roads for Water.png"
			},
			{
				"id": 3,
				"paths": "https://worldbankgroup.sharepoint.com/sites/WBSUR/SitePages/PublishingPages/Resilient%20Infrastruc-1746476033225.aspx",
				"type": "Guidance",
				"title": "Resilient Infrastructure and Buildings Hub World Bank",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/Resilient Infrastructure and Buildings Hub.png"
			},
			{
				"id": 3,
				"paths": "https://www.unpri.org/infrastructure/integrating-biodiversity-considerations-into-infrastructure/11611.article",
				"type": "Guidance",
				"title": "UN Principles for Responsible Investment: Integrating Biodiversity Considerations into Infrastructure",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/UN Principles for Responsible Investment Integrating Biodiversity Considerations into Infrastructure.png"
			},
			{
				"id": 3,
				"paths": "https://www.ifc.org/content/dam/ifc/doc/2023/catalogue-of-nature-based-solutions-for-infrastructure-projects.pdf",
				"type": "Guidance",
				"title": "IFC Catalogue of Nature-based Solutions for Infrastructure Projects",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": ""
			},
			{
				"id": 3,
				"paths": "https://www.naturebasedsolutions.org/knowledge-hub",
				"type": "Guidance",
				"title": "World Bank Global Program for Nature-Based Solutions",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": ""
			},
			{
				"id": 3,
				"paths": "https://openknowledge.worldbank.org/entities/publication/f350c5c0-b17b-4f35-ad29-cb3ddc101958",
				"type": "Guidance",
				"title": "The Nature-Based Solutions Opportunity Scan",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": ""
			},
			{
				"id": 3,
				"paths": "https://documents1.worldbank.org/curated/en/099050725135521570/pdf/P501013-299da78d-86cc-4f74-a095-cde17655875a.pdf",
				"type": "Guidance",
				"title": "Financing Climate Adaptation and Nature Based Infrastructure",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": ""
			},
			{
				"id": 3,
				"paths": "",
				"type": "Case Study",
				"title": "Pakistan: Zephyr Wind Farm",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": ""
			},
			{
				"id": 3,
				"paths": "",
				"type": "Case Study",
				"title": "Japan: Futakotamagawa",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": ""
			},
			{
				"id": 3,
				"paths": "https://www.naturebasedsolutions.org/",
				"type": "Case Study",
				"title": "GFDRR Mapping of Nature-Based Solutions Projects",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/GFDRR Mapping of Nature-Based Solutions Projects.png"
			},
			{
				"id": 3,
				"paths": "https://www.youtube.com/watch?v=XqFihz4k7Kk",
				"type": "Video",
				"title": "Finding Solutions to Development Challenges in Nature",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/Green-Designs-and-Nature-Based-Infrastructure/Finding Solutions to Development Challenges in Nature.png"
			},
			{
				"id": 3,
				"paths": "https://www.climatebonds.net/expertise/taxonomy/world-taxonomies",
				"type": "Tool",
				"title": "World of TaxonomiesClimate Bonds Initiative Climate Bonds Initiative",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/GreenFinancingforInfrastructure/World of Taxonomies.png"
			},
			{
				"id": 3,
				"paths": "https://finance.ec.europa.eu/sustainable-finance/tools-and-standards/eu-taxonomy-sustainable-activities_en",
				"type": "Tool",
				"title": "EU Taxonomy for Sustainable Activities",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/GreenFinancingforInfrastructure/EU Taxonomy for Sustainable Activities.png"
			},
			{
				"id": 3,
				"paths": "https://finance.ec.europa.eu/sustainable-finance/tools-and-standards/eu-taxonomy-sustainable-activities_en",
				"type": "Tool",
				"title": "FAST-Infra",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/GreenFinancingforInfrastructure/FAST-Infra.png"
			},
			{
				"id": 3,
				"paths": "https://www.climatebonds.net/expertise/taxonomy/world-taxonomies",
				"type": "Guidance",
				"title": "Sector-Specific Criteria Climate Bonds Initiative",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/GreenFinancingforInfrastructure/Sector-Specific Criteria.png"
			},
			{
				"id": 3,
				"paths": "https://www.icmagroup.org/sustainable-finance/the-principles-guidelines-and-handbooks/green-bond-principles-gbp/",
				"type": "Guidance",
				"title": "Green Bond Principles ICMA",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/GreenFinancingforInfrastructure/Green Bond Principles.png"
			},
			{
				"id": 3,
				"paths": "https://greenchecker.eib.org/",
				"type": "Tool",
				"title": "Green Eligibility Checker tool European Investment Bank",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/GreenFinancingforInfrastructure/Green Eligibility Checker tool.png"
			},
			{
				"id": 3,
				"paths": "https://www.gihub.org/innovative-funding-and-financing/case-studies/cape-town-green-bond/",
				"type": "Case Study",
				"title": "South Africa: Cape Town Green Bond",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/GreenFinancingforInfrastructure/South Africa Cape Town Green Bond.png"
			},
			{
				"id": 3,
				"paths": "https://www.gihub.org/innovative-funding-and-financing/case-studies/sustainability-linked-loan-to-improve-water-supply-efficiency-and-resilience/",
				"type": "Case Study",
				"title": "Brazil: Corsan Water Sustainability-Linked Loan",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/GreenFinancingforInfrastructure/Brazil Corsan Water Sustainability-Linked Loan.png"
			},
			{
				"id": 3,
				"paths": "https://www.bcenergy.rs/belgrade-waste-management-ppp-project-becomes-the-first-serbian-project-certified-by-the-gold-standard-organization/",
				"type": "Case Study",
				"title": "Belgrade Waste-to-Energy PPP Carbon Credit Certification",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/qii3/GreenFinancingforInfrastructure/Belgrade Waste-to-Energy PPP Carbon Credit Certification.png"
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