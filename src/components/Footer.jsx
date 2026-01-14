import React from "react";
import "./Footer.css"

const Footer = () => {
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
            <h4>The 6 Principles</h4>
            <ul>
              <li>
                <a href="#/qii1">
                  Maximizing Positive Impact of Infrastructure
                </a>
              </li>
              <li>
                <a href="#/qii2">
                  Raising Economic Efficiency in View of Life-Cycle Cost
                </a>
              </li>
              <li>
                <a href="#/qii3">
                  Integrating Environmental Considerations in Infrastructure
                </a>
              </li>
              <li>
                <a href="#/qii4">
                  Building Resilience Against Natural Disasters and Other Risks
                </a>
              </li>
              <li>
                <a href="#/qii5">
                  Integrating Social Considerations in Infrastructure Investment
                </a>
              </li>
              <li>
                <a href="#/qii6">
                  Strengthening Infrastructure Governance
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section footer-resources">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#/case-studies">Case Studies</a>
              </li>
              <li>
                <a href="#/publications">Publications</a>
              </li>
              <li>
                <a href="#/tools">Assessment Tools</a>
              </li>
              <li>
                <a href="#/glossary">Glossary</a>
              </li>
              <li>
                <a href="#/faq">FAQ</a>
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
              <li>
                <a
                  href="https://www.worldbank.org/en/programs/quality-infrastructure-investment-partnership/qii-principles"
                  target="_blank"
                  rel="noopener"
                >
                  World Bank QII
                </a>
              </li>
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
            &copy; 2025 QII Principles Learning Module. Educational purposes
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
