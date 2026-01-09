import { Outlet, Link } from "react-router-dom";
import TopNavBar from "../components/TopNavBar.";
import Overlay from "../components/Overlay";
import ScrollToTop from "../components/ScrollToTop";
import VideoModal from "../components/VideoModal";
import Footer from "../components/Footer";

export default function MainLayout() {
	return (
		<div className="wrapper">
			<TopNavBar></TopNavBar>
			<VideoModal > </VideoModal>
			<ScrollToTop />
			<Overlay></Overlay>
			<main  >
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}