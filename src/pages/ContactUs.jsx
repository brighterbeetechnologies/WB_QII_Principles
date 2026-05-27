import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import { useDispatch } from "react-redux";
import { setBradcrump } from "../slices/appDataSlice";

export default function ContactUs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [{ path: "/contact-us", title: "Contact Us" }],
      }),
    );
  }, []);

  return (
    <div className="contact-us">
      <section className="contact-us color-light">
        <div className="contact-us-mobile">
          <div className="contact-us-main">
            <div className="contact-us-container">
              <img src="images/contactus/shutterstock_2228424131.png" alt="" />
            </div>
            <div className="contacts-card-container">
              <p className="p1">GET IN TOUCH</p>
              <h1>Contact Us</h1>
              <p>
                The QII Reference Guide team. Reach out about content,
                partnerships, or technical issues.
              </p>
              <div className="contact-card">
                <h2 className="name">William Davies</h2>
                <p className="role">Senior Infrastructure Specialist </p>
                <p className="org">World Bank, QII Partnership</p>
                <p className="email">
                  <a href="mailto:qii_secretariat@worldbankgroup.org">
                    qii_secretariat@worldbankgroup.org
                  </a>
                </p>
              </div>
              <div className="contact-card-email">
                <img src="images/contactus/email.png" alt="" />
                <p>
                  <strong style={{ color: "#000" }}>Primary contact:</strong>{" "}
                  <span
                    style={{
                      color: "#009FDA",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.textDecoration = "none")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.textDecoration = "underline")
                    }
                  >
                    <a href="mailto:qii_secretariat@worldbankgroup.org">
                      qii_secretariat@worldbankgroup.org
                    </a>
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
