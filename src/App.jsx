
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
				path: "/qii2",
				element: (
					<Suspense fallback={<Loader></Loader>}>
						<QII2LandingPage />
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
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

