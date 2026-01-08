import { createSlice } from "@reduxjs/toolkit";

export const appDataSlice = createSlice({
	name: "appData",
	initialState: {
		isOverlay: false,
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
			}, {
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
				"paths": "./pdf/Beyond the Gap.pdf",
				"type": "Research Report",
				"title": "Beyond the Gap: How Countries Can Afford the Infrastructure They Need While Protecting the Planet",
				"principles": 2,
				"format": 2,
				"stage": 2,
				"region": 1,
				"industry": 3,
				"image": "images/resources/04.jpg"
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
				"paths": "./pdf/Beyond the Gap.pdf",
				"type": "Research Report",
				"title": "Beyond the Gap: How Countries Can Afford the Infrastructure They Need While Protecting the Planet",

				"principles": 2,
				"format": 3,
				"stage": 1,
				"region": 1,
				"industry": 4,
				"image": "images/resources/04.jpg"
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
				"id": 3,
				"paths": "./pdf/Beyond the Gap.pdf",
				"type": "Research Report",
				"title": "Beyond the Gap: How Countries Can Afford the Infrastructure They Need While Protecting the Planet",

				"principles": 2,
				"format": 3,
				"stage": 2,
				"region": 1,
				"industry": 1,
				"image": "images/resources/04.jpg"
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
				"id": 3,
				"paths": "./pdf/Beyond the Gap.pdf",
				"type": "Research Report",
				"title": "Beyond the Gap: How Countries Can Afford the Infrastructure They Need While Protecting the Planet",

				"principles": 2,
				"format": 4,
				"stage": 4,
				"region": 1,
				"industry": 1,
				"image": "images/resources/04.jpg"
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
				"id": 3,
				"paths": "./pdf/Beyond the Gap.pdf",
				"type": "Research Report",
				"title": "Beyond the Gap: How Countries Can Afford the Infrastructure They Need While Protecting the Planet",

				"principles": 2,
				"format": 5,
				"stage": 6,
				"region": 1,
				"industry": 1,
				"image": "images/resources/04.jpg"
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

export const principles = (state) => state.appData.principles;
export const isOverlay = (state) => state.appData.isOverlay;
export const isVideo = (state) => state.appData.isVideo;
export const getVideo = (state) => state.appData.videoData;
export const { setCurrentPath, setOverlay, setShowVideo, setVideoData } = appDataSlice.actions;
export default appDataSlice.reducer;