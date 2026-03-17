import React from "react";
import "./Header4.css";
export default function Header3({ img, title, children, hideDeskTitle }) {
  return (
    <div className="Header4">
      <div className="header4-bg" style={{ backgroundImage: `url(${img})` }}>
        <h1 className="header-title mob-title">{title}</h1>
        <div className="header-overlay-4"> </div>
      </div>

      <div className="container-hearder-4">
        {!hideDeskTitle && <h1 className="header-title desk-title">{title}</h1>}
        <div className="footer-header-4">{children}</div>
      </div>
    </div>
  );
}
