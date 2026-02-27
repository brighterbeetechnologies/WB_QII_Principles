
import { lazy, Suspense } from "react";
import { createBrowserRouter, createHashRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Loader from "./components/Loader.jsx";
import TechnicalSolutions from "./pages/TechnicalSolutions.jsx";
import CostRecovery from "./pages/CostRecovery.jsx";
import Procurement from "./pages/Procurement.jsx";
import QII2LandingPage from "./pages/QII2LandingPage.jsx";
import QII4LandingPage from "./pages/QII4LandingPage.jsx";
import DiagnosingVulnerabilities from "./pages/DiagnosingVulnerabilities.jsx";
import ResilientDesignAndOperation from "./pages/ResilientDesignAndOperation.jsx";
import FinancingResilience from "./pages/FinancingResilience.jsx";
import ManagingCyberSecurityRisks from "./pages/ManagingCyberSecurityRisks.jsx";
import QII1LandingPage from "./pages/QII1LandingPage.jsx";
import QII3LandingPage from "./pages/QII3LandingPage.jsx";
import QII5LandingPage from "./pages/QII5LandingPage.jsx";
import QII6LandingPage from "./pages/QII6LandingPage.jsx";
import QualityEnvironmentalStandards from "./pages/QualityEnvironmentalStandards.jsx"
import GreenDesignsAndNatureBasedInfrastructure from "./pages/GreenDesignsAndNatureBasedInfrastructure.jsx";
import GreenFinancingforInfrastructure from "./pages/GreenFinancingforInfrastructure.jsx";
import QII2CaseStudy1 from "./pages/QII2CaseStudy1.jsx";
import QII2CaseStudy2 from "./pages/QII2CaseStudy2.jsx";
import QII4CaseStudy1 from "./pages/CaseStudy/QII4CaseStudy1.jsx";
import QII4CaseStudy2 from "./pages/CaseStudy/QII4CaseStudy2.jsx";
import QII4CaseStudy3 from "./pages/CaseStudy/QII4CaseStudy3.jsx";
import QII4CaseStudy4 from "./pages/CaseStudy/QII4CaseStudy4.jsx";
import Decarbonizing_Infrastructure from "./pages/Decarbonizing_Infrastructure.jsx";
import Policies_Standards_Regulation from "./pages/Policies_Standards_Regulation.jsx";
import Project_Planning_And_Design from "./pages/Project_Planning_And_Design.jsx";
import Stakeholder_Engagement from "./pages/Stakeholder_Engagement.jsx";
import Infrastructure_Institutions from "./pages/Infrastructure_Institutions.jsx";
import Govtech_For_Infrastructure from "./pages/Govtech_For_Infrastructure.jsx";
import Public_Investment_And_Asset_Management from "./pages/Public_Investment_And_Asset_Management.jsx";
import QII3CaseStudy1 from "./pages/QII3CaseStudy/QII3CaseStudy1.jsx";
import QII3CaseStudy2 from "./pages/QII3CaseStudy/QII3CaseStudy2.jsx";
const Governance = lazy(() => import("./pages/Governance.jsx"));
export const router = createHashRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Home></Home>,
			},
			
			{
				path: "/qii1",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<QII1LandingPage />
					</Suspense>
				),
			},
			{
				path: "/qii2",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<QII2LandingPage />
					</Suspense>
				),
			},
			{
				path: "/governance",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<Governance />
					</Suspense>
				),
			},
			{
				path: "/technicalsolutions",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<TechnicalSolutions />
					</Suspense>
				),
			},
			{
				path: "/costrecovery",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<CostRecovery />
					</Suspense>
				),
			},
			{
				path: "/procurement",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<Procurement />
					</Suspense>
				),
			},
			{
				path: "/qii2casestudy1",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<QII2CaseStudy1 />
					</Suspense>
				),
			},
			{
				path: "/qii2casestudy2",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<QII2CaseStudy2 />
					</Suspense>
				),
			},
			{
				path: "/qii3",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<QII3LandingPage />
					</Suspense>
				),
			},
			{
				path: "/qii3casestudy1",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<QII3CaseStudy1 />
					</Suspense>
				),
			},
			{
				path: "/qii3casestudy2",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<QII3CaseStudy2 />
					</Suspense>
				),
			},
			{
				path: "/QualityEnvironmentalStandards",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<QualityEnvironmentalStandards />
					</Suspense>
				),
			},
			{
				path: "/GreenDesigns&Nature-BasedInfrastructure",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<GreenDesignsAndNatureBasedInfrastructure />
					</Suspense>
				),
			},
			{
				path: "/GreenFinancingforInfrastructure",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<GreenFinancingforInfrastructure />
					</Suspense>
				),
			},
			{
				path: "/DecarbonizingInfrastructure",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<Decarbonizing_Infrastructure />
					</Suspense>
				),
			},
			{
				path: "/qii4",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<QII4LandingPage />
					</Suspense>
				),
			}, 
			{
				path: "/Diagnosing-vulnerabilities",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<DiagnosingVulnerabilities />
					</Suspense>
				),
			},
			{
				path: "/Resilient-design&operation",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<ResilientDesignAndOperation />
					</Suspense>
				),
			},
			{
				path: "/Financing-resilience",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<FinancingResilience />
					</Suspense>
				),
			},
			{
				path: "/Managing-cyber-security-risks",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<ManagingCyberSecurityRisks />
					</Suspense>
				),
			},
			{
				path: "/qii4casestudy1",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<QII4CaseStudy1 />
					</Suspense>
				),
			},
			{
				path: "/qii4casestudy2",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<QII4CaseStudy2 />
					</Suspense>
				),
			},
			{
				path: "/qii4casestudy3",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<QII4CaseStudy3 />
					</Suspense>
				),
			},
			{
				path: "/qii4casestudy4",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<QII4CaseStudy4 />
					</Suspense>
				),
			},
			{
				path: "/qii5",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<QII5LandingPage />
					</Suspense>
				),
			},
			{
				path: "/Policies_Standards_Regulation",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<Policies_Standards_Regulation />
					</Suspense>
				),
			},
			{
				path: "/Project_Planning_And_Design",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<Project_Planning_And_Design />
					</Suspense>
				),
			},
			{
				path: "/Stakeholder_Engagement",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<Stakeholder_Engagement />
					</Suspense>
				),
			},
			{
				path: "/qii6",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<QII6LandingPage />
					</Suspense>
				),
			},
			{
				path: "/Infrastructure-Institutions",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<Infrastructure_Institutions />
					</Suspense>
				),
			},
			{
				path: "/govtech-for-infrastructure",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<Govtech_For_Infrastructure />
					</Suspense>
				),
			},
			{
				path: "/Public-Investment-And-Asset-Management",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<Public_Investment_And_Asset_Management />
					</Suspense>
				),
			},


			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

