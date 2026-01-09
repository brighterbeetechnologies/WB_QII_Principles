import React, { useEffect, useState } from "react";
import "./TopNavBar.css";
import NavDropDownMenu from "./NavDropdownMenu";
import { useDispatch, useSelector } from "react-redux";
import { breadCrump, isOverlay, setOverlay } from "../slices/appDataSlice";
import { useNavigate } from "react-router-dom";
export default function TopNavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(isOverlay);
  const pageBreadCrump = useSelector(breadCrump);
  const [scrolled, setScrolled] = useState(false);
  const menuItems = [
    { title: "Sustainable Growth", path: "/qii1" },
    { title: "Economic Efficiency", path: "/qii2" },
    { title: "Environment", path: "/qii3" },
    { title: "Resilience", path: "/qii4" },
    { title: "Social", path: "/qii5" },
    { title: "Governance", path: "/qii5" },
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
  const goHome = () => {
    navigate("/"); // Navigate to home page
  };

  return (
    <nav className={scrolled ? "nav scrolled" : "nav"}>
      <div className="nav-cnt">
        <div className="nav-cnt-left">
          <div className="logo-cnt">
            <img className="logo-1" src="images/WorldBank_logo.png" />
            <div className="logo-splitter"></div>
            <img className="logo-2" src="images/japan_logo.png" />
          </div>
        </div>
        <div className={`right-panel ${isMenuOpen ? "open" : ""}`}>
          <button className="nav-btn btn primary">
            <span className="icon-home" onClick={goHome}>
              &#xe920;
            </span>
          </button>
          <div className={`nav-sub-menu ${isMenuOpen ? "open" : ""}`}>
            <div className="nav-sub-menu-cnt">
              <button className="nav-btn-link">What is QII</button>
              <div className="menu-splitter"></div>
              <NavDropDownMenu
                menuItems={menuItems}
                title="QII Principles"
              ></NavDropDownMenu>
              <div className="menu-splitter"></div>
              <NavDropDownMenu
                menuItems={referenceGuid}
                title="Reference Guide"
              ></NavDropDownMenu>
            </div>
          </div>
          <button
            className={`nav-btn btn primary nav-menu-btn ${
              isMenuOpen ? "open" : ""
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
      {pageBreadCrump.show && (
        <div className="breadcrump">
          {pageBreadCrump.dir.map((page, i) => {
            return (
              <>
                {i <= pageBreadCrump.dir.length - 2 && (
                  <>
                    <button key={i} onClick={() => navigate(page.path)}>
                      {page.title}
                    </button>
                    <img src="images/right-arrow.png" alt="" srcset="" />
                  </>
                )}
                {i == pageBreadCrump.dir.length - 1 && (
                  <>
                    <p>{page.title}</p>
                  </>
                )}
              </>
            );
          })}
        </div>
      )}
    </nav>
  );
}
