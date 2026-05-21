import React, { useEffect, useRef, useState } from "react";
import "./TopNavBar.css";
import NavDropDownMenu from "./NavDropDownMenu";
import SearchBox from "./SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { breadCrump, isOverlay, setOverlay } from "../slices/appDataSlice";
import { useNavigate, useLocation } from "react-router-dom";
export default function TopNavBar() {
	const navigate = useNavigate();
	const location = useLocation();
	const isHomePage = location.pathname === "/";
	const dispatch = useDispatch();
	const isMenuOpen = useSelector(isOverlay);
	const pageBreadCrump = useSelector(breadCrump);
	const [scrolled, setScrolled] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);
	const searchRef = useRef(null);
	const menuItems = [
		{ title: "QII.1 Sustainable Growth", path: "/qii1" },
		{ title: "QII.2 Economic Efficiency", path: "/qii2" },
		{ title: "QII.3 Environment", path: "/qii3" },
		{ title: "QII.4 Resilience", path: "/qii4" },
		{ title: "QII.5 Inclusion", path: "/qii5" },
		{ title: "QII.6 Governance", path: "/qii6" },
	];
	const referenceGuid = [
		{ title: "Resources", path: "/" },
		{ title: "Case Studies", path: "/" },
		{ title: "Tools", path: "/" },
		{ title: "Test Yourself", path: "/" },
	];

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	// Auto-open nav search when arriving from a home-page search
	useEffect(() => {
		if (!isHomePage && location.state?.highlightText) {
			setSearchOpen(true);
		}
	}, [location]);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (searchRef.current && !searchRef.current.contains(e.target)) {
				setSearchOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const toggleSearch = () => {
		setSearchOpen((prev) => !prev);
	};

	const goHome = () => {
		navigate("/", { state: { scrollTo: "principles-grid" } }); // Navigate to home page
	};

	const gotoHome = () => {
		navigate("/"); // Navigate to home page
	};

	return (
		<nav className={scrolled ? "nav scrolled" : "nav"}>
			<div className="nav-cnt">
				{pageBreadCrump.show && (
					<div className="breadcrump-container">
						<div className="breadcrump">
							<button className="breadcrump-home" onClick={gotoHome}>
								<span className="icon-home">&#xe920;</span>
							</button>
							<span className="breadcrump-separator">&gt;</span>
							{pageBreadCrump.dir.map((page, i) => {
								return (
									<React.Fragment key={i}>
										{i <= pageBreadCrump.dir.length - 2 && (
											<>
												<button onClick={() => navigate(page.path)}>
													{page.title}
												</button>
												<span className="breadcrump-separator">&gt;</span>
											</>
										)}
										{i === pageBreadCrump.dir.length - 1 && (
											<p>{page.title}</p>
										)}
									</React.Fragment>
								);
							})}
						</div>
					</div>
				)}
				<div className="nav-cnt-left">
					<div className="logo-cnt" id="homepage" onClick={gotoHome}>
						<img className="logo-1" src="images/WorldBank_logo.png" />
						<div className="logo-splitter"></div>
						<img className="logo-2" src="images/jcoflag.svg" />
					</div>
				</div>

				<div className={`right-panel ${isMenuOpen ? "open" : ""}`}>
					{!isHomePage && (
						<div className={`nav-search ${searchOpen ? "open" : ""}`} ref={searchRef}>
							<button className="nav-btn btn primary nav-search-btn" onClick={toggleSearch}>
								<span className="icon-search">&#xe90f;</span>
							</button>
							<SearchBox />
						</div>
					)}
					<div className={`nav-sub-menu ${isMenuOpen ? "open" : ""}`}>
						<div className="nav-sub-menu-cnt">
							<button className="nav-btn-link" onClick={() => navigate("/fundamentals_of_qii")}>
								What is QII
							</button>
							<div className="menu-splitter"></div>
							<NavDropDownMenu
								menuItems={menuItems}
								title="QII Principles"
							></NavDropDownMenu>
							{/* <div className="menu-splitter"></div>
              <NavDropDownMenu
                menuItems={referenceGuid}
                title="Reference Guide"
              ></NavDropDownMenu> */}
						</div>
					</div>
					<button
						className={`nav-btn btn primary nav-menu-btn ${isMenuOpen ? "open" : ""
							}`}
						onClick={(e) => {
							dispatch(setOverlay(!isMenuOpen));
						}}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>
		</nav>
	);
}
