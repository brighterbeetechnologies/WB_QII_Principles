import React, { useEffect, useState } from "react";
import "./TopNavBar.css";
import NavDropDownMenu from "./NavDropDownMenu";
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
    { title: "QII.1 Sustainable Growth", path: "/qii1" },
    { title: "QII.2 Economic Efficiency", path: "/qii2" },
    { title: "QII.3 Environment", path: "/qii3" },
    { title: "QII.4 Resilience", path: "/qii4" },
    { title: "QII.5 Social", path: "/qii5" },
    { title: "QII.6 Governance", path: "/qii5" },
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
    navigate("/", { state: { scrollTo: "principles-grid" } }); // Navigate to home page
  };

  return (
    <nav className={scrolled ? "nav scrolled" : "nav"}>
      <div className="nav-cnt">
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
                      <img src="images/right-arrow.png" alt="" />
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
        <div className="nav-cnt-left">
          <div className="logo-cnt" onClick={goHome}>
            <img className="logo-1" src="images/WorldBank_logo.png" />
            <div className="logo-splitter"></div>
            <img className="logo-2" src="images/jcoflag.svg" />
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
              {/* <div className="menu-splitter"></div>
              <NavDropDownMenu
                menuItems={referenceGuid}
                title="Reference Guide"
              ></NavDropDownMenu> */}
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
    </nav>
  );
}
