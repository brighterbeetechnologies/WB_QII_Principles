import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-section footer-about">
            <h3>QII Principles</h3>
            <p>
              An educational resource on Quality Infrastructure Investment
              principles adopted by the G20 at the 2019 Osaka Summit. These
              principles guide sustainable, resilient, and inclusive
              infrastructure development worldwide.
            </p>
            <div className="footer-partnership">
              <span>A World Bank and Government of Japan Partnership</span>
            </div>
          </div>

          <div className="footer-section footer-principles">
            <h4>The six Principles</h4>
            <ul>
              <li>
                <a href="#/qii1" className="disable-link">
                  QII.1 Maximizing Positive Impact of Infrastructure
                </a>
              </li>
              <li>
                <a href="#/qii2">
                  QII.2 Raising Economic Efficiency in View of Life-Cycle Cost
                </a>
              </li>
              <li>
                <a href="#/qii3" className="disable-link">
                  QII.3 Integrating Environmental Considerations in
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="#/qii4">
                  QII.4 Building Resilience Against Natural Disasters and Other
                  Risks
                </a>
              </li>
              <li>
                <a href="#/qii5" className="disable-link">
                  QII.5 Integrating Social Considerations in Infrastructure
                  Investment
                </a>
              </li>
              <li>
                <a href="#/qii6" className="disable-link">
                  QII.6 Strengthening Infrastructure Governance
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section footer-resources">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#/case-studies" className="disable-link">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="disable-link">
                  Guidance
                </a>
              </li>
              <li>
                <a href="#" className="disable-link">
                  Tools
                </a>
              </li>
              <li>
                <a href="#" className="disable-link">
                  Glossary
                </a>
              </li>
              <li>
                <a
                  // href="#"
                  onClick={() =>
                    navigate("/", { state: { scrollTo: "faq_page" } })
                  }
                >
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="disable-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section footer-links">
            <h4>External Links</h4>
            <ul>
              <li>
                <a
                  href="https://www.worldbank.org/en/programs/quality-infrastructure-investment-partnership"
                  target="_blank"
                  rel="noopener"
                >
                  QII Partnership
                </a>
              </li>
              {/* <li>
                <a
                  href="https://www.worldbank.org/en/programs/quality-infrastructure-investment-partnership/qii-principles"
                  target="_blank"
                  rel="noopener"
                >
                  World Bank QII
                </a>
              </li> */}
              <li>
                <a
                  href="https://www.worldbank.org"
                  target="_blank"
                  rel="noopener"
                >
                  World Bank
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p className="copyright">
            &copy; QII Principles Reference Guide. For educational purposes
            only.
          </p>
          <ul className="footer-legal">
            <li>
              <a href="#/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#/terms">Terms of Use</a>
            </li>
            <li>
              <a href="#/accessibility">Accessibility</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
