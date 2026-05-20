import { useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";
import Overlay from "../components/Overlay";
import ScrollToTop from "../components/ScrollToTop";
import VideoModal from "../components/VideoModal";
import Footer from "../components/Footer";

function removeHighlights() {
	document.querySelectorAll("mark.search-highlight").forEach((mark) => {
		const parent = mark.parentNode;
		parent.replaceChild(document.createTextNode(mark.textContent), mark);
		parent.normalize();
	});
}

function highlightText(searchTerm, root) {
	if (!searchTerm || !root) return;
	const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
	const matches = [];
	while (walker.nextNode()) {
		const node = walker.currentNode;
		if (node.nodeValue.toLowerCase().includes(searchTerm.toLowerCase())) {
			matches.push(node);
		}
	}
	matches.forEach((textNode) => {
		const text = textNode.nodeValue;
		const lowerText = text.toLowerCase();
		const lowerSearch = searchTerm.toLowerCase();
		const fragment = document.createDocumentFragment();
		let lastIndex = 0;
		let index = lowerText.indexOf(lowerSearch, lastIndex);
		while (index !== -1) {
			if (index > lastIndex) {
				fragment.appendChild(document.createTextNode(text.slice(lastIndex, index)));
			}
			const mark = document.createElement("mark");
			mark.className = "search-highlight";
			mark.textContent = text.slice(index, index + searchTerm.length);
			fragment.appendChild(mark);
			lastIndex = index + searchTerm.length;
			index = lowerText.indexOf(lowerSearch, lastIndex);
		}
		if (lastIndex < text.length) {
			fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
		}
		textNode.parentNode.replaceChild(fragment, textNode);
	});
}

export default function MainLayout() {
	const location = useLocation();
	const navigate = useNavigate();
	const mainRef = useRef(null);
	const highlightRef = useRef(null);
	const observerCleanupRef = useRef(null);

	const stopObserver = () => {
		if (observerCleanupRef.current) {
			observerCleanupRef.current();
			observerCleanupRef.current = null;
		}
	};

	const applyHighlight = () => {
		stopObserver();

		const searchTerm = highlightRef.current;
		if (!searchTerm || !mainRef.current) return;

		highlightRef.current = null;
		window.scrollTo(0, 0);
		removeHighlights();

		const mainEl = mainRef.current;
		highlightText(searchTerm, mainEl);

		let debounceTimer = null;
		const observer = new MutationObserver(() => {
			clearTimeout(debounceTimer);
			debounceTimer = setTimeout(() => {
				observer.disconnect();
				observerCleanupRef.current = null;
				removeHighlights();
				highlightText(searchTerm, mainEl);
			}, 300);
		});
		observer.observe(mainEl, { childList: true, subtree: true });

		observerCleanupRef.current = () => {
			observer.disconnect();
			clearTimeout(debounceTimer);
		};
	};

	useEffect(() => {
		if (location.state?.highlightText) {
			highlightRef.current = location.state.highlightText;
			// Clear route state immediately so back/forward won't re-trigger
			navigate(location.pathname, { replace: true, state: null });
			// Apply immediately for same-page searches
			applyHighlight();
		}
	}, [location]);

	// Listen for clear event from SearchBox to stop highlighting on future pages
	useEffect(() => {
		const handleClear = () => {
			highlightRef.current = null;
			stopObserver();
			removeHighlights();
		};
		window.addEventListener("clearSearchHighlight", handleClear);
		return () => window.removeEventListener("clearSearchHighlight", handleClear);
	}, []);

	useEffect(() => {
		applyHighlight();
		return () => stopObserver();
	}, [location.pathname]);

	return (
		<div className="wrapper">
			<TopNavBar></TopNavBar>
			<VideoModal > </VideoModal>
			<ScrollToTop />
			<Overlay></Overlay>
			<main ref={mainRef}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
