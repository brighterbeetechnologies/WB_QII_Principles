import React, { useEffect, useState } from 'react';
import './TopNavBar.css';
import NavDropDownMenu from './NavDropdownMenu';
import { useDispatch, useSelector } from 'react-redux';
import { isOverlay, setOverlay } from '../slices/appDataSlice';
import { useNavigate } from 'react-router-dom';
export default function TopNavBar() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isMenuOpen = useSelector(isOverlay);
	const [scrolled, setScrolled] = useState(false);
	const menuItems = [
		"Sustainable Growth",
		"Economic Efficiency",
		"Environment",
		"Resilience",
		"Social",
		"Governance"
	]; const referenceGuid = [
		"Resources",
		"Case Studies",
		"Tools",
		"Test Yourself"
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
	const goHome = () => {
		navigate("/"); // Navigate to home page
	};
	return (
		<nav className={scrolled ? "nav scrolled" : "nav"}>
			<div className="nav-cnt">
				<div className="logo-cnt">
					<img className="logo-1" src="images/WorldBank_logo.png" />
					<div className="logo-splitter"></div>
					<img className="logo-2" src="images/japan_logo.png" />
				</div>
				<div className={`right-panel ${isMenuOpen ? 'open' : ''}`}>

					<button className='nav-btn btn primary'><span className="icon-home" onClick={goHome}>&#xe920;</span></button>
					<div className={`nav-sub-menu ${isMenuOpen ? 'open' : ''}`}>
						<div className="nav-sub-menu-cnt">
							<button className='nav-btn-link'>What is QII</button>
							<div className="menu-splitter"></div>
							<NavDropDownMenu menuItems={menuItems} title="QII Principles"></NavDropDownMenu><div className="menu-splitter"></div>
							<NavDropDownMenu menuItems={referenceGuid} title="Reference Guide"></NavDropDownMenu>
						</div>
					</div>
					<button className={`nav-btn btn primary nav-menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={(e) => {
						dispatch(setOverlay(!isMenuOpen));
					}}>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>

			</div>
		</nav>
	);
};
