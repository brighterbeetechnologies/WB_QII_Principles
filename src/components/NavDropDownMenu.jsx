import React, { useEffect, useRef, useState } from "react";
import "./NavDropDownMenu.css";
import { useNavigate } from "react-router-dom";
export default function NavDropDownMenu({ menuItems, title }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <div className="nav-dropdown-menu" ref={dropdownRef}>
      <div
        className="nav-dropdown-header"
        onClick={(e) => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="nav-dropdown-title ">{title} </div>
        <span
          className="dropdown-arrow icon-arrow"
          dangerouslySetInnerHTML={{
            __html: isMenuOpen ? "&#xe911;" : "&#xe915;",
          }}
        ></span>
      </div>
      {isMenuOpen && (
        <div className="menuItems">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="nav-dropdown-menu-item"
              onClick={() => {
                navigate(item?.path);
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              {item?.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
