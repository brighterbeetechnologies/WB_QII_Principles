
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
				path: "/governance",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<Governance />
					</Suspense>
				),
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
				path: "/qii4",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<QII4LandingPage />
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
				path: "/qii6",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<QII6LandingPage />
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
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

