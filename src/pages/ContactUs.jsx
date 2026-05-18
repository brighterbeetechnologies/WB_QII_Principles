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
        <div className="contact-us-container">
          <p>GET IN TOUCH</p>
          <h1>Contact Us</h1>
          <p>
            The QII Reference Guide team. Reach out about content, partnerships,
            or technical issues.
          </p>
        </div>
        <div className="contacts-card-container">
          <div className="contact-card">
            <p className="role">Program Manager</p>
            <h2 className="name">Jane Jamieson</h2>
            <p className="org">World Bank, QII Partnership</p>
            <p className="email">qii_secretariat@worldbankgroup.org</p>
          </div>
          <div className="contact-card">
            <p className="role">Senior Infrastructure Specialist </p>
            <h2 className="name">Ludovic Delplanque</h2>
            <p className="org">World Bank, QII Partnership</p>
            <p className="email">qii_secretariat@worldbankgroup.org</p>
          </div>
          <div className="contact-card">
            <p className="role">Senior Infrastructure Specialist</p>
            <h2 className="name">William Davies</h2>
            <p className="org">World Bank, QII Partnership</p>
            <p className="email">qii_secretariat@worldbankgroup.org</p>
          </div>
         <div className="contact-card">
            <p className="role">Infrastructure Specialist</p>
            <h2 className="name">Naomitsu Nakagawa</h2>
            <p className="org">World Bank, QII Partnership</p>
            <p className="email">qii_secretariat@worldbankgroup.org</p>
          </div>
          <div className="contact-card">
            <p className="role">Infrastructure Specialist </p>
            <h2 className="name">Ishan Khokar</h2>
            <p className="org"> World Bank, QII Partnership</p>
            <p className="email">qii_secretariat@worldbankgroup.org</p>
          </div>
          <div className="contact-card">
            <p className="role">Infrastructure Specialist</p>
            <h2 className="name-contact">Luciana Guimaraes Drummond e Silva</h2>
            <p className="org-contact">World Bank, QII Partnership</p>
            <p className="email-contact">qii_secretariat@worldbankgroup.org</p>
          </div>
           <div className="contact-card">
            <p className="role">Monitoring and Evaluation Specialist </p>
            <h2 className="name">Helen Gall </h2>
            <p className="org">World Bank, QII Partnership</p>
            <p className="email">qii_secretariat@worldbankgroup.org</p>
          </div>
           <div className="contact-card">
            <p className="role">Senior Knowledge Management Assistant </p>
            <h2 className="name">John Saville </h2>
            <p className="org">World Bank, QII Partnership</p>
            <p className="email">qii_secretariat@worldbankgroup.org</p>
          </div>
           <div className="contact-card">
            <p className="role">Communications Lead </p>
            <h2 className="name">Sunny Kaplan </h2>
            <p className="org">World Bank, QII Partnership</p>
            <p className="email">qii_secretariat@worldbankgroup.org</p>
          </div>
           <div className="contact-card">
            <p className="role">Communications Consultant </p>
            <h2 className="name">Kasumi Shirahata </h2>
            <p className="org">World Bank, QII Partnership</p>
            <p className="email">qii_secretariat@worldbankgroup.org</p>
          </div>
        </div>
      </section>
    </div>
  );
}
