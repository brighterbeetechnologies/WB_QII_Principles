import React, { useEffect, useState } from "react";
import "./QIILandingPage.css";
import "./QII6LandingPage.css";
import TextIconCarousal from "../components/TextIconCarousal";
import Header3 from "../components/Header3";
import { Link, useNavigate } from "react-router-dom";
import ResourceLibrary from "./ResourceLibrary";
import TopResourceCard from "../components/TopResourceCard";
import { useDispatch } from "react-redux";
import {
  setBradcrump,
  setShowVideo,
  setVideoData,
} from "../slices/appDataSlice";
import CardBox from "../components/CardBox";
import { Popover, Tooltip } from "antd";
// import ImagewithStatement from "../components/ImagewithStatement";
import Qii6ImagewithStatement from "../components/Qii6ImagewithStatement";
import Video from "../components/Video";
import QII6CaseStudy1 from "./QII6CaseStudy/QII6CaseStudy1";
import "./QII2CaseStudy.css";

export default function QII2LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [preSelectedResources, setPreSelectedResources] = useState([
    {
      show: true,
      category: "QII Principle",
      title: "QII.6 Governance",
      id: 5,
    },
  ]);
  const resourceArray = [
    {
      id: 0,
      title:
        "​Innovations to Accelerate Inclusive and High Impact Public Services",
      country: "Albania",
      org: "World Bank",
      description:
        "​With support from the World Bank and the QII Partnership, Albania is advancing a GovTech paradigm that pairs public administration reform with digital technologies to transform service delivery. Today, 95% of central government services are available online through the e-Albania portal, serving over 3 million registered users, alongside 216 Education Smart Labs and strengthened digital inclusion measures for vulnerable populations.",
      img_path: "images/qii6/QII6-Landing/PIMA.png",
      path: "pdf/Albania Innovations_Results Story_March 2024.pdf",
      pdf: true,
      target: "_blank",
    },
    {
      id: 0,
      title:
        "Public Transport Demand Forecasting Regional Platform for the Post COVID-19 Era",
      country: "Multi-country",
      org: "World Bank",
      description:
        "With co-funding from the QII Partnership and the Mobility and Logistics Multidonor Trust Fund (MOLO), this project developed a replicable methodology for monitoring travel demand patterns using big data from mobile devices. The approach was demonstrated in Bogota, Buenos Aires, and Medellin, supporting transport authorities in leveraging new data sources to inform public transport planning and infrastructure investment decisions. ​",
      img_path:
        "images/qii6/QII6-Landing/Getting-Infrastructure-Right-A-Framework-for-Better-Governance.png",
      path: "",
      target: "_blank",
    },
    {
      id: 0,
      title: "Supporting Sustainable Digital Infrastructure through Innovation",
      country: "Kosovo",
      org: "World Bank",
      description:
        "This QII grant provides advisory and analytical support for ICT infrastructure management to underpin the Government of Kosovo's digital transformation of public services. The grant complements the World Bank's Strengthening Digital Governance for Service Delivery project, which targets improved system interoperability, an upgraded e-Kosova platform, and citizen-centric service delivery organized around life events.​",
      img_path:
        "images/qii6/QII6-Landing/Infrastructure-Governance-Assessment-Framework.png",
      path: "https://www.worldbank.org/en/news/press-release/2023/09/28/world-bank-and-kosovo-sign-agreement-to-support-digital-governance-for-service-delivery",
      target: "_blank",
    },
    {
      id: 0,
      title: "Well Spent",
      country: "Multi-country",
      org: "International Monetary Fund",
      description:
        "This publication provides evidence, analysis, and policy recommendations on how strong infrastructure governance can reduce inefficiency and waste in public investment for sustainable development and fiscal performance. ",
      img_path: "images/qii6/QII6-Landing/WellSpent.png",
      path: "https://www.imf.org/en/Publications/Books/Issues/2020/09/03/Well-Spent-How-Strong-Infrastructure-Governance-Can-End-Waste-in-Public-Investment-48603",
      target: "_blank",
    },
  ];
  const textCrData = [
    {
      id: 0,
      icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="103.994" height="100.9" viewBox="0 0 103.994 119.9">
  <g id="Icon_1" transform="translate(-516.3 -482.8)">
    <g id="Group_2593" data-name="Group 2593">
      <path id="Path_5666" data-name="Path 5666" d="M532.6,565.45a1.43,1.43,0,0,0-.45,1.05v11.35a1.538,1.538,0,0,0,1.5,1.5h8.9a1.538,1.538,0,0,0,1.5-1.5V566.5a1.538,1.538,0,0,0-1.5-1.5h-8.9a1.43,1.43,0,0,0-1.05.45m2.55,2.55h5.9v8.35h-5.9V568M524.9,509.35a1.43,1.43,0,0,0-.45,1.05v79.3a1.538,1.538,0,0,0,1.5,1.5H555.4a1.5,1.5,0,0,0,0-3H527.45V511.9H584.1v21a1.5,1.5,0,0,0,3,0V510.4a1.538,1.538,0,0,0-1.5-1.5H525.95a1.43,1.43,0,0,0-1.05.45m22.8,21.5a1.43,1.43,0,0,0,1.05.45H576.3a1.5,1.5,0,0,0,0-3H548.75a1.485,1.485,0,0,0-1.05,2.55m19.1-9.15a1.43,1.43,0,0,0-1.05-.45h-17a1.5,1.5,0,0,0,0,3h17a1.485,1.485,0,0,0,1.05-2.55m-33.15,21.65a1.538,1.538,0,0,0-1.5,1.5V556.2a1.538,1.538,0,0,0,1.5,1.5h8.9a1.538,1.538,0,0,0,1.5-1.5V544.85a1.538,1.538,0,0,0-1.5-1.5h-8.9m7.4,3v8.35h-5.9v-8.35h5.9m-7.4-27.2a1.538,1.538,0,0,0-1.5,1.5v11.3a1.538,1.538,0,0,0,1.5,1.5h8.9a1.538,1.538,0,0,0,1.5-1.5v-11.3a1.538,1.538,0,0,0-1.5-1.5h-8.9m7.4,3v8.3h-5.9v-8.3h5.9M588.1,490.4H572.8a7.562,7.562,0,0,0-2.3-5.35h0a7.43,7.43,0,0,0-5.45-2.25H546.1a7.661,7.661,0,0,0-5.5,2.2q-.024.051-.05.05a7.754,7.754,0,0,0-2.2,5.35h-14.3q-7.75,0-7.75,7.75v95.6q0,7.75,7.75,7.75H568.5a1.5,1.5,0,0,0,0-3H524.05q-4.75,0-4.75-4.75v-95.6q0-4.75,4.75-4.75h14.3v3a7.767,7.767,0,0,0,7.75,7.75h18.95a7.307,7.307,0,0,0,5.45-2.3h0a7.307,7.307,0,0,0,2.3-5.45v-3h15.3q4.75,0,4.75,4.75v39.2a1.43,1.43,0,0,0,.45,1.05,1.145,1.145,0,0,0,.25.2,34.871,34.871,0,0,0-7.8-.85,31.132,31.132,0,0,0-21,7.7h-16a1.5,1.5,0,0,0,0,3H561.7a35.348,35.348,0,0,0-3.2,4.05h-9.75a1.5,1.5,0,0,0,0,3h8a31.294,31.294,0,0,0-3.3,11.6h-4.7a1.5,1.5,0,0,0,0,3h4.6v.05a38.915,38.915,0,0,0,.2,4h-4.8a1.5,1.5,0,0,0,0,3h5.3a32.451,32.451,0,0,0,54.7,16h0a32.638,32.638,0,0,0,4.6-40.35l6.35-4.85a1.563,1.563,0,0,0,.4-1.95,1.591,1.591,0,0,0-.85-.7L612.4,543l-3.45-6.4a1.355,1.355,0,0,0-1.65-.75,1.58,1.58,0,0,0-.85.5l-4.5,5.6a29.815,29.815,0,0,0-7.5-3.1,1.462,1.462,0,0,0,.95-.45,1.43,1.43,0,0,0,.45-1.05v-39.2q0-7.75-7.75-7.75m-19.75-3.25a4.7,4.7,0,0,1,1.45,3.4v5.85a4.378,4.378,0,0,1-1.4,3.3l-.05.05a4.378,4.378,0,0,1-3.3,1.4H546.1a4.64,4.64,0,0,1-3.4-1.4,4.541,4.541,0,0,1-1.35-3.35v-5.85a4.949,4.949,0,0,1,1.35-3.4q.026,0,.05-.05a4.738,4.738,0,0,1,3.35-1.3h18.95a4.542,4.542,0,0,1,3.35,1.35h-.05m-3.4,103.9a29.537,29.537,0,0,1,35.85-46.3l.6,7.35-1.8,1.85A21.213,21.213,0,0,0,570.65,555l-.05.05a21.245,21.245,0,0,0,0,30.1h.05a21.306,21.306,0,0,0,31.1-29.1l1.85-1.9,6.9-.15a29.572,29.572,0,0,1-3.85,37.05h-.05a29.393,29.393,0,0,1-41.65,0m39.4-39.95-.55-6.6,3.6-4.5,2.65,4.95a1.49,1.49,0,0,0,.85.7l4.75,1.6-4.9,3.75-6.4.1m-9.5,11.8,4.8-4.7a17.458,17.458,0,0,1,4.4,11.9,18.314,18.314,0,0,1-31.3,12.95V583a18.168,18.168,0,0,1,0-25.85h0a18.205,18.205,0,0,1,24.75-1.05l-4.75,4.7a11.62,11.62,0,0,0-15.35.95l-.05.05a11.589,11.589,0,0,0,.05,16.45h0a11.647,11.647,0,0,0,17.45-15.35m-15.35,1h0a8.278,8.278,0,0,1,6.1-2.55,8.133,8.133,0,0,1,4.95,1.55l-4.95,4.85a1.581,1.581,0,0,0-.45,1.1,1.455,1.455,0,0,0,.4,1.05,1.578,1.578,0,0,0,1.1.45,1.378,1.378,0,0,0,1.05-.45l5-4.9a8.634,8.634,0,0,1-7.1,13.65,8.3,8.3,0,0,1-6.1-2.5v-.05a8.169,8.169,0,0,1-2.55-6.1A8.278,8.278,0,0,1,579.5,563.9Z"/>
    </g>
  </g>
</svg>
`,
      text: (
        <>
          <strong>Reprioritize existing public spending , </strong>so that
          investment targets the highest-priority projects
        </>
      ),
    },
    {
      id: 0,
      icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="114.353" height="90.9" viewBox="0 0 114.353 113.153">
  <g id="Icon_2" transform="translate(-696.05 -489.55)">
    <g id="Group_2589" data-name="Group 2589">
      <path id="Path_5664" data-name="Path 5664" d="M743.65,490.1a1.928,1.928,0,0,0-.8.35,1.786,1.786,0,0,0-.45.65l-3.65,11.1a41.592,41.592,0,0,0-9.35,4.05l-9.45-5.65a1.513,1.513,0,0,0-.85-.2,1.638,1.638,0,0,0-.85.3,61.38,61.38,0,0,0-5.85,5.2,60,60,0,0,0-5.9,6.8,1.682,1.682,0,0,0-.25.8,1.38,1.38,0,0,0,.2.8l5.5,9.95a41.576,41.576,0,0,0-3.8,9.9l-10.5,2.25a1.647,1.647,0,0,0-.75.5,1.476,1.476,0,0,0-.4.8,61.479,61.479,0,0,0-.45,7.6,59.7,59.7,0,0,0,.5,7.75,1.484,1.484,0,0,0,.35.75,1.286,1.286,0,0,0,.7.45l10.85,3.25a40.73,40.73,0,0,0,4.15,9.95l-5.9,9.15a1.524,1.524,0,0,0-.2.85,1.492,1.492,0,0,0,.3.85,64.084,64.084,0,0,0,11.8,11.85,1.438,1.438,0,0,0,.8.3,1.49,1.49,0,0,0,.85-.2l9.65-5.6a42.122,42.122,0,0,0,10.55,4.2l1.7,10.4a1.465,1.465,0,0,0,.45.8,1.3,1.3,0,0,0,.85.4,58,58,0,0,0,8.35.6,59.4,59.4,0,0,0,8.45-.6,1.252,1.252,0,0,0,.8-.35,1.337,1.337,0,0,0,.45-.75l2.85-11.65a1.447,1.447,0,0,0-.2-1.15,1.338,1.338,0,0,0-.9-.65,1.569,1.569,0,0,0-1.15.15,1.5,1.5,0,0,0-.65.9l-2.6,10.7a59.539,59.539,0,0,1-7.05.4,56.111,56.111,0,0,1-6.85-.4l-1.7-10.25a1.416,1.416,0,0,0-.35-.8,1.616,1.616,0,0,0-.8-.4,39.8,39.8,0,0,1-11.45-4.6,1.411,1.411,0,0,0-.75-.2,1.445,1.445,0,0,0-.75.2l-9.55,5.55a59.59,59.59,0,0,1-9.8-9.85l5.8-9a1.356,1.356,0,0,0,.25-.8,1.474,1.474,0,0,0-.25-.8,37.937,37.937,0,0,1-4.45-10.7,1.586,1.586,0,0,0-1.05-1.1l-10.7-3.2a55.583,55.583,0,0,1-.35-6.4q.005-3.145.3-6.15l10.35-2.25a1.46,1.46,0,0,0,1.15-1.15,37.793,37.793,0,0,1,4.15-10.7,1.522,1.522,0,0,0,.2-.75,1.562,1.562,0,0,0-.2-.75l-5.5-9.85a58.353,58.353,0,0,1,5-5.7,62.514,62.514,0,0,1,4.8-4.3l9.3,5.55a1.486,1.486,0,0,0,.8.25,1.246,1.246,0,0,0,.75-.25,39.016,39.016,0,0,1,10.2-4.35,1.5,1.5,0,0,0,1-1l3.6-10.95a56.363,56.363,0,0,1,6.85-.4,54.692,54.692,0,0,1,6.75.4l2.4,10.5a1.825,1.825,0,0,0,.4.75,1.666,1.666,0,0,0,.75.4,39.334,39.334,0,0,1,11.55,4.85,1.357,1.357,0,0,0,.8.25,1.435,1.435,0,0,0,.8-.25l9-5.75a56.7,56.7,0,0,1,4.85,4.3,59.348,59.348,0,0,1,5.3,6.05l-6.1,8.85a1.643,1.643,0,0,0-.25.8,1.44,1.44,0,0,0,.2.8,39.349,39.349,0,0,1,4.3,10.8,1.494,1.494,0,0,0,1.15,1.1l10.45,1.95a58.272,58.272,0,0,1,.4,6.95,56.017,56.017,0,0,1-.4,6.85L793.4,555.1a1.683,1.683,0,0,0-.7.4,1.594,1.594,0,0,0-.35.65,39.258,39.258,0,0,1-4.9,11.25,7.292,7.292,0,0,0-4.4-.45l-1.95-1.7a35.636,35.636,0,0,0-4.3-45.1h0a35.514,35.514,0,1,0-50.25,50.2h.05a34.116,34.116,0,0,0,25.1,10.45,33.728,33.728,0,0,0,20.95-6.85l2.05,1.85a6.456,6.456,0,0,0,2.4,6.65l-.05-.05,17.05,17.05a.055.055,0,0,1,0,.05q3.625,3.3,6.9,3.2,3.4.1,6.4-3.3h0q6.005-6.358,0-12.8-.026,0-.05-.05l-17.5-17.35A41.233,41.233,0,0,0,795,557.75l10.9-2.95a1.319,1.319,0,0,0,.7-.45,1.3,1.3,0,0,0,.35-.8,56.608,56.608,0,0,0,.6-8.25,59.063,59.063,0,0,0-.6-8.4,1.367,1.367,0,0,0-.4-.85,1.544,1.544,0,0,0-.8-.45l-10.55-1.95a41.588,41.588,0,0,0-3.9-9.85l6.15-8.9a1.443,1.443,0,0,0,.3-.9,1.528,1.528,0,0,0-.3-.85,63.009,63.009,0,0,0-6.25-7.25,58.626,58.626,0,0,0-5.95-5.25,1.416,1.416,0,0,0-.85-.3,1.6,1.6,0,0,0-.9.25l-9.1,5.8a42.724,42.724,0,0,0-10.7-4.5l-2.45-10.65a1.282,1.282,0,0,0-.45-.75,1.539,1.539,0,0,0-.8-.4,61.176,61.176,0,0,0-8.2-.55,60.058,60.058,0,0,0-8.15.55M728.7,568.2a32.509,32.509,0,0,1,46-45.95h-.05a32.628,32.628,0,0,1,3.35,42.2q0,.021-.05.05a.107.107,0,0,1-.05.05,36,36,0,0,1-3.2,3.7,33.923,33.923,0,0,1-2.7,2.4.808.808,0,0,1-.2.15h0l-.05.05a30.845,30.845,0,0,1-20.05,6.95,31.286,31.286,0,0,1-23-9.55v-.05m50.6-.55,1.25,1.1-4.25,4.45L775,572a24.288,24.288,0,0,0,1.8-1.65q1.332-1.317,2.5-2.7m4.15,2.3a4.62,4.62,0,0,1,3.55.65l18.2,18.05q.024.051.05.05,4.008,4.371-.05,8.65l-.05.05a5.737,5.737,0,0,1-4.15,2.3,7.759,7.759,0,0,1-4.85-2.4l.05.05L779.15,580.3a.465.465,0,0,1-.05-.1,3.889,3.889,0,0,1-1.4-4.15l5.75-6.1M770,526.8v-.05a26.135,26.135,0,0,0-36.75,0v.05A25.986,25.986,0,1,0,770,563.55h0a26.013,26.013,0,0,0,0-36.75m-34.65,2.1h0a23.056,23.056,0,0,1,32.5,0h.05a23.056,23.056,0,0,1-.05,32.55h.05a23.016,23.016,0,1,1-32.55-32.55m10.9-.3a1.417,1.417,0,0,0-.75-.85,1.536,1.536,0,0,0-1.15-.1q-9.123,3.214-12.25,15a1.5,1.5,0,0,0,2.2,1.7,1.488,1.488,0,0,0,.7-.95q2.672-10.064,10.35-12.9a1.37,1.37,0,0,0,.85-.75A1.45,1.45,0,0,0,746.25,528.6Z"/>
    </g>
  </g>
</svg>
`,
      text: (
        <>
          <strong>
            {" "}
            Strengthen transparency and efficiency in public investment
            processes,{" "}
          </strong>
          minimizing waste and delays
        </>
      ),
    },
    {
      id: 0,
      icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="130.186" height="90.4" viewBox="0 0 130.186 104.4">
  <g id="Icon_3" transform="translate(-865.798 -479.4)">
    <g id="Group_2591" data-name="Group 2591">
      <path id="Path_5665" data-name="Path 5665" d="M930.1,479.85a1.43,1.43,0,0,0-.45,1.05v6.15a11.52,11.52,0,0,0-7.05,3.25l-.05.05a11.5,11.5,0,0,0-3.3,6.75H889.8a1.629,1.629,0,0,0-.75.1h0a1.555,1.555,0,0,0-.8.85,1.315,1.315,0,0,0-.05.15L872.25,537H867.3a1.8,1.8,0,0,0-.8.2,2,2,0,0,0-.55.6,1.543,1.543,0,0,0-.15.75q.783,18.289,23.6,18.45,21.62-.1,24.45-18.25a1.244,1.244,0,0,0-.1-.85,1.283,1.283,0,0,0-.55-.65,1.376,1.376,0,0,0-.8-.25h-4.6l-15.9-36.9h27.35a11.823,11.823,0,0,0,10.4,10.2v70.5h-28.1a1.5,1.5,0,0,0,0,3H960.3a1.5,1.5,0,0,0,0-3H932.65V510.25a10.761,10.761,0,0,0,6.45-3.35h0a10.929,10.929,0,0,0,3.35-6.8h28L954.65,537h-5.2a1.8,1.8,0,0,0-.8.2,2,2,0,0,0-.55.6,1.55,1.55,0,0,0-.15.75q.728,18.291,23.55,18.45,21.62-.1,24.45-18.25a1.244,1.244,0,0,0-.1-.85,1.283,1.283,0,0,0-.55-.65,1.376,1.376,0,0,0-.8-.25h-5.45l-14.9-38.9q.015-.013,0-.05a.878.878,0,0,0-.05-.1,1.549,1.549,0,0,0-.6-.65,1.509,1.509,0,0,1-.15-.1l-.1-.05a1.9,1.9,0,0,0-.55-.05.464.464,0,0,0-.1,0H942.45a11.146,11.146,0,0,0-3.35-6.75,10.957,10.957,0,0,0-6.45-3.25v-6.2a1.485,1.485,0,0,0-2.55-1.05m-5.4,12.6a8.66,8.66,0,0,1,6.2-2.45h.25a8.154,8.154,0,0,1,5.85,2.45,8.359,8.359,0,0,1,2.55,6.1v.1a8.17,8.17,0,0,1-2.55,6.1l-.05.05a7.923,7.923,0,0,1-5.8,2.55h-.25a8.443,8.443,0,0,1-6.2-2.55,8.355,8.355,0,0,1-2.5-6.15v-.1a8.514,8.514,0,0,1,2.5-6.1h0M875.45,537l14.2-34.55L904.5,537H875.45m13.95,17q-18.652-.132-20.45-14h41.6q-3.356,13.908-21.15,14m82.1,0q-18.648-.133-20.4-14h36.8a1.118,1.118,0,0,0,.25,0h4.5q-3.356,13.908-21.15,14m1.15-51.45L985.85,537H957.9Z"/>
    </g>
  </g>
</svg>
`,
      text: (
        <>
          <strong>
            {" "}
            Build a predictable, accountable regulatory environment{" "}
          </strong>
          to lower risk and attract private-sector participation
        </>
      ),
    },
  ];

  const subPages = [
    {
      id: 0,
      icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="87.403" height="87.75" viewBox="0 0 87.403 87.75">
  <g id="Governance" transform="translate(-31.348 -18.95)">
    <g id="Group_2357" data-name="Group 2357">
      <path id="Path_5381" data-name="Path 5381" d="M118.6,47.15a.853.853,0,0,0-.3-.35l-43-27.7a1.083,1.083,0,0,0-1.1,0L31.8,46.25a1.363,1.363,0,0,0-.35.35,1.347,1.347,0,0,0-.1.5V59.7a5.4,5.4,0,0,0,1.15,3.55.049.049,0,0,1,0,.05A5.745,5.745,0,0,0,34.95,65V91q-2.529,2.2-3.1,7.05a.916.916,0,0,0,0,.15v7.5a1.025,1.025,0,0,0,1,1h84.1a1.025,1.025,0,0,0,1-1V98.3a11.473,11.473,0,0,0-.3-4.05q.013-.012,0-.05a7.318,7.318,0,0,0-3-3.5V64.2a6.052,6.052,0,0,0,3.1-2.6.139.139,0,0,0,.05-.05,9.173,9.173,0,0,0,.95-4.3v-9.6a.966.966,0,0,0-.15-.5M50.75,57.65q.705,5.179,4.55,6.4v26.4a7.1,7.1,0,0,0-4.85,6.75h-.1a6.911,6.911,0,0,0-4.8-6.75V64.05q3.8-1.229,4.55-6.4h.65m33.2,6.4v26.4A7.1,7.1,0,0,0,79.1,97.2H70.75a6.911,6.911,0,0,0-4.8-6.75V64.05q3.845-1.222,4.55-6.4h8.9q.705,5.179,4.55,6.4m-19.8-1.4a1.18,1.18,0,0,0-.2.65V91.15a.856.856,0,0,0,.2.55.942.942,0,0,0,.45.4q4,1.337,4.15,5.1H52.5q.177-3.764,4.1-5.1a.863.863,0,0,0,.5-.4.778.778,0,0,0,.2-.55V63.3a1.077,1.077,0,0,0-.8-1q-3.06-.753-3.75-4.65h15.7q-.64,3.9-3.75,4.65a1.332,1.332,0,0,0-.55.35m52.6-14.45v1.15H39.25a1,1,0,0,0,0,2h77.5v4.3H80.3q-.037,0-.1,0H69.65a.256.256,0,0,0-.05,0H49.3a.533.533,0,0,0-.1,0H35a1,1,0,0,0,0,2H48.05q-.677,3.9-3.75,4.65a1.337,1.337,0,0,0-.55.35,1.18,1.18,0,0,0-.2.65V91.15a.856.856,0,0,0,.2.55.942.942,0,0,0,.45.4q4,1.337,4.15,5.1H34a7.9,7.9,0,0,1,2.55-4.9,1.028,1.028,0,0,0,.3-.35,1.016,1.016,0,0,0,.1-.45V64.25a1.01,1.01,0,0,0-.25-.65,1,1,0,0,0-.55-.35A3.7,3.7,0,0,1,34.05,62l.05.05a3.586,3.586,0,0,1-.75-2.35V47.65l41.4-26.5,42,27.05m0,9.45a7.312,7.312,0,0,1-.75,3,4,4,0,0,1-2.6,1.8,1.365,1.365,0,0,0-.55.35,1.207,1.207,0,0,0-.2.65v27.8a1.038,1.038,0,0,0,.1.45.9.9,0,0,0,.35.35,6.771,6.771,0,0,1,2.6,2.65,9.617,9.617,0,0,1,.3,2.5H101.4a5.445,5.445,0,0,1,4.1-5.1.868.868,0,0,0,.5-.4.779.779,0,0,0,.2-.55V63.3a1.077,1.077,0,0,0-.8-1q-3.019-.787-3.7-4.65h15.05M99,57.65h.7q.71,5.121,4.5,6.4v26.4a7.17,7.17,0,0,0-4.85,6.75H99.3a6.969,6.969,0,0,0-4.85-6.75V64.1Q98.3,62.85,99,57.65M85.95,63.3a1.077,1.077,0,0,0-.8-1q-3.061-.753-3.75-4.65H97q-.7,3.9-3.75,4.7a.766.766,0,0,0-.55.35.818.818,0,0,0-.25.6V91.15a1.075,1.075,0,0,0,.2.6,1.056,1.056,0,0,0,.5.35q3.95,1.35,4.15,5.1H81.15q.177-3.764,4.1-5.1a.863.863,0,0,0,.5-.4.778.778,0,0,0,.2-.55V63.3M69.75,99.2H80.1a.6.6,0,0,0,.1,0h35.75v5.5H33.85V99.2h15.4q.063,0,.1,0h2.1a.6.6,0,0,0,.1,0h18.1q.063,0,.1,0M81.6,37.85V37.8a6.1,6.1,0,0,0-2-4.8s-.016-.017-.05-.05A6.257,6.257,0,0,0,74.85,31a6.475,6.475,0,0,0-4.75,2v-.05a6.628,6.628,0,0,0-2.05,4.75v.05a6.475,6.475,0,0,0,2,4.75H70a6.629,6.629,0,0,0,4.75,2.05h.05a6.6,6.6,0,0,0,4.8-1.95h0a6.538,6.538,0,0,0,2-4.75m-3.45-3.5.05.05a4.194,4.194,0,0,1,1.4,3.35v.05a4.634,4.634,0,0,1-1.4,3.4v-.05a4.709,4.709,0,0,1-6.75-.05h0a4.612,4.612,0,0,1-1.4-3.35h0A4.708,4.708,0,0,1,71.5,34.4h0A4.585,4.585,0,0,1,74.85,33,4.3,4.3,0,0,1,78.15,34.35Z"/>
    </g>
  </g>
</svg>
`,
      title: "Infrastructure Institutions",
      description:
        "Establishes legal frameworks and cross-government coordination for effective project delivery. ",
      path: "/Infrastructure-Institutions",
    },
    {
      id: 0,
      icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="86.033" height="85.901" viewBox="0 0 86.033 85.901">
  <g id="Public_Investment_and_" data-name="Public Investment and " transform="translate(-404.5 -429.795)">
    <g id="Group_2383" data-name="Group 2383" transform="translate(405 430.295)">
      <g id="Group_2382" data-name="Group 2382">
        <path id="Path_5400" data-name="Path 5400" d="M443.316,430.3q-.679.062-1.35.135a42.768,42.768,0,0,0-36.777,37.992q-.189,2.12-.189,4.32a42.7,42.7,0,0,0,38.316,42.448.552.552,0,0,0,.3-.054.512.512,0,0,0,.216-.216.463.463,0,0,0,.081-.27v-23.33A.524.524,0,0,0,443.8,491a.51.51,0,0,0-.27-.189q-13.462-4.622-13.8-17.174a24.261,24.261,0,0,1,.405-5.211q1.878-9.229,11.827-12.556.753-.254,1.539-.486a.476.476,0,0,0,.3-.189.514.514,0,0,0,.108-.324V430.838a.6.6,0,0,0-.081-.3.569.569,0,0,0-.216-.189.551.551,0,0,0-.3-.054m-1.35,1.215q.43-.035.864-.081v23.006q-.439.14-.864.27-11.027,3.533-12.934,13.717a25.619,25.619,0,0,0-.378,5.238q.308,13.118,14.176,18.038v22.358a41.6,41.6,0,0,1-36.75-41.314q0-2.2.189-4.32a41.686,41.686,0,0,1,35.7-36.912m9.748,59.675a.6.6,0,0,0-.054.27l.324,23.141a.444.444,0,0,0,.081.27.51.51,0,0,0,.513.27,40.167,40.167,0,0,0,21.656-9.046.443.443,0,0,0,.189-.243.46.46,0,0,0,0-.3.446.446,0,0,0-.135-.243L457.52,488.38a.517.517,0,0,0-.3-.162.642.642,0,0,0-.351.054l-4.941,2.7a.919.919,0,0,0-.216.216m1.026.567,4.293-2.349L473.1,505.635a38.967,38.967,0,0,1-20.063,8.344l-.3-22.223m.594-26.246a.5.5,0,0,0,.351.216.445.445,0,0,0,.405-.081.434.434,0,0,0,.216-.351.467.467,0,0,0-.081-.405,7.216,7.216,0,0,0-5.751-3.429v-2.349a.54.54,0,0,0-1.08,0v2.349q-3.744.146-5.427,2.376a7.136,7.136,0,0,0-1.242,3.105q0,.068,0,.108a8.256,8.256,0,0,0,.135,1.377,4.663,4.663,0,0,0,1.755,2.97,7.31,7.31,0,0,0,4.779,1.242v8.371a1.954,1.954,0,0,1-.243,0h-.027q-4.192.052-6.265-2.457a.5.5,0,0,0-.351-.189.586.586,0,0,0-.405.108.6.6,0,0,0-.189.378.5.5,0,0,0,.108.378q2.319,2.906,7.048,2.862a.449.449,0,0,0,.054,0,1.88,1.88,0,0,0,.27,0v3.024a.54.54,0,0,0,1.08,0v-2.97q3.34.063,4.914-1.242,1.868-1.424,1.539-4.482a.377.377,0,0,0-.027-.108q-1.133-4.231-6.427-4.725v-9.046a6.267,6.267,0,0,1,4.86,2.97m.513,11.1h0a3.71,3.71,0,0,1-1.107,3.456,6.768,6.768,0,0,1-4.266,1v-8.4q4.372.467,5.374,3.942m-6.454-5.049a6.522,6.522,0,0,1-4.1-1,3.8,3.8,0,0,1-1.323-2.187,6.167,6.167,0,0,1-.162-1.323q.066-.352.162-.7,1.032-3.607,5.427-3.807v9.019m42.34,6.157a.647.647,0,0,0-.3-.081l-23.087-.621a.49.49,0,0,0-.27.081.551.551,0,0,0-.216.216l-2.457,4.914a.544.544,0,0,0-.054.324.493.493,0,0,0,.135.27l16.093,17.228a.5.5,0,0,0,.27.162.452.452,0,0,0,.3,0,.5.5,0,0,0,.243-.162,40.452,40.452,0,0,0,9.586-21.818.583.583,0,0,0-.054-.3.627.627,0,0,0-.189-.216m-25.193,4.671,2.133-4.293,22.142.594a39.225,39.225,0,0,1-8.857,20.2l-15.418-16.5m-1.188-19.307a.606.606,0,0,0,.054.324l2.241,4.914a.546.546,0,0,0,.189.243.579.579,0,0,0,.3.081l23.357-.324a.552.552,0,0,0,.3-.081.522.522,0,0,0,.189-.243.448.448,0,0,0,.054-.27,40.394,40.394,0,0,0-9.262-21.845.439.439,0,0,0-.243-.162.613.613,0,0,0-.3-.027.75.75,0,0,0-.27.162l-16.471,16.958a.672.672,0,0,0-.135.27m1.188.216,15.769-16.255a39.114,39.114,0,0,1,8.56,20.2l-22.412.324-1.917-4.266m-12.286-32.673a.582.582,0,0,0-.081.3v23.735a.552.552,0,0,0,.054.243.639.639,0,0,0,.189.216l3.753,2.457a.53.53,0,0,0,.351.081.538.538,0,0,0,.324-.162l17.471-17.282a.652.652,0,0,0,.135-.567.608.608,0,0,0-.189-.243,40.443,40.443,0,0,0-21.494-9.019.554.554,0,0,0-.3.054.627.627,0,0,0-.216.189m4.158,25.787-3.159-2.052V431.513a39.455,39.455,0,0,1,19.874,8.344Z" transform="translate(-405 -430.295)" stroke="currentColor" stroke-width="1"/>
      </g>
    </g>
  </g>
</svg>
`,
      title: "Public Investment and Asset Management",
      description:
        "Applies systematic processes to plan, select, and maintain public infrastructure investments. ",
      path: "/Public-Investment-And-Asset-Management",
    },
    {
      id: 0,
      icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="80.942" height="79.594" viewBox="0 0 80.942 79.594">
  <g id="GovTech_for_" data-name="GovTech for " transform="translate(-644.25 -444.8)">
    <g id="Group_2380" data-name="Group 2380" transform="translate(644.75 445.3)">
      <path id="Path_5399" data-name="Path 5399" d="M669.97,490.947a.57.57,0,0,0,.419.18h30.97l4.792,10.962a.577.577,0,0,0,.24.24.542.542,0,0,0,.329.12h6.2a5.783,5.783,0,1,0,0-1.2H707.11l-4.792-10.962a.57.57,0,0,0-.21-.27.673.673,0,0,0-.33-.09h-31.39a.593.593,0,0,0-.419,1.018m52.147,7.608a4.7,4.7,0,1,1-3.325-1.378,4.534,4.534,0,0,1,3.325,1.378m-54.752-14.244a.6.6,0,0,0,0,1.2h45.527a5.638,5.638,0,1,0,.09-1.2H667.364m54.752-2.216a4.7,4.7,0,1,1-3.325-1.378,4.534,4.534,0,0,1,3.325,1.378m-40.405,17.06a.6.6,0,0,0,0,1.2H697.2l15.455,16.084a.64.64,0,0,0,.389.18,6.228,6.228,0,0,0-.15,1.378,5.931,5.931,0,1,0,1.737-4.163,6.155,6.155,0,0,0-1.2,1.647l-15.545-16.144a.61.61,0,0,0-.18-.15.85.85,0,0,0-.24-.03H681.711m32.378,18.84a4.7,4.7,0,1,1,1.378,3.325,4.534,4.534,0,0,1-1.378-3.325M673.654,468.9a.534.534,0,0,0-.419-.15Q658.965,469.467,658.5,484v.03q.154,14.733,15.006,16.354a.5.5,0,0,0,.419-.15.523.523,0,0,0,.24-.389.587.587,0,0,0-.15-.449.559.559,0,0,0-.389-.21q-13.775-1.494-13.928-15.156.431-13.414,13.6-14.077a.569.569,0,0,0,.419-.21.531.531,0,0,0,.15-.419.566.566,0,0,0-.21-.419m23.183-1.917a.6.6,0,0,0-.15-.449,32.124,32.124,0,0,0-6.739-6.35.6.6,0,0,0-.359-.09.608.608,0,0,0-.359.15l-3.714,3.115-5.361-2.007.329-4.792a.565.565,0,0,0-.12-.389.67.67,0,0,0-.359-.24,30.481,30.481,0,0,0-6.26-.629,30.949,30.949,0,0,0-5.481.479.762.762,0,0,0-.33.18.635.635,0,0,0-.15.359l-.449,4.762-4.792,2.067-3.474-3.415a.638.638,0,0,0-.359-.15.618.618,0,0,0-.389.09,31.22,31.22,0,0,0-5.092,4.1,32.137,32.137,0,0,0-3.624,4.283.739.739,0,0,0-.09.389.649.649,0,0,0,.12.359l3.325,3.954-2.1,5.272h-5a.643.643,0,0,0-.389.12.742.742,0,0,0-.21.359,32.448,32.448,0,0,0-.509,5.781,31.073,31.073,0,0,0,.629,6.32.627.627,0,0,0,.21.329.6.6,0,0,0,.389.15h4.133l2.815,5.242-3,3.864a.531.531,0,0,0-.12.329.6.6,0,0,0,.09.359,31.017,31.017,0,0,0,3.325,3.894,30.173,30.173,0,0,0,4.7,3.864.508.508,0,0,0,.359.12.517.517,0,0,0,.359-.18l3.415-3.2,5.631,2.4-.09,4.433a.523.523,0,0,0,.12.359.555.555,0,0,0,.359.21,31.185,31.185,0,0,0,5.661.509,29.6,29.6,0,0,0,6.02-.6.453.453,0,0,0,.329-.21.485.485,0,0,0,.15-.359v-3.894l5.421-2.845,3.684,2.905a.647.647,0,0,0,.359.12.509.509,0,0,0,.359-.12,30.273,30.273,0,0,0,4.163-3.5q.727-.726,1.378-1.468a.525.525,0,0,0,.18-.419.586.586,0,0,0-.21-.419.569.569,0,0,0-.419-.15.638.638,0,0,0-.419.18q-.637.727-1.348,1.438a30.209,30.209,0,0,1-3.654,3.115l-3.624-2.845a.516.516,0,0,0-.3-.12.685.685,0,0,0-.33.06l-6.11,3.175a.762.762,0,0,0-.24.21.684.684,0,0,0-.09.329v3.744a28.346,28.346,0,0,1-5.3.479,30.263,30.263,0,0,1-4.942-.389l.09-4.313a.528.528,0,0,0-.12-.329.559.559,0,0,0-.24-.24l-6.35-2.7a.893.893,0,0,0-.359-.03.942.942,0,0,0-.3.15l-3.325,3.145a29.551,29.551,0,0,1-7.039-6.829l2.965-3.8a.6.6,0,0,0,.12-.329.56.56,0,0,0-.09-.329l-3.175-5.9a.508.508,0,0,0-.21-.21.568.568,0,0,0-.3-.09h-4.014a29.918,29.918,0,0,1-.509-5.6,31.792,31.792,0,0,1,.389-5.062h4.942a.5.5,0,0,0,.329-.12.406.406,0,0,0,.21-.27l2.366-5.99a.465.465,0,0,0,.06-.3.581.581,0,0,0-.15-.3l-3.235-3.864a30.361,30.361,0,0,1,3.2-3.774,30.748,30.748,0,0,1,4.493-3.684L662,464.29a.46.46,0,0,0,.3.15.491.491,0,0,0,.359-.03l5.481-2.366a.713.713,0,0,0,.359-.479l.419-4.673a30.068,30.068,0,0,1,10.333.12l-.329,4.673a.635.635,0,0,0,.09.389.505.505,0,0,0,.3.21l6.11,2.306a.413.413,0,0,0,.3.03.459.459,0,0,0,.3-.12l3.624-3.055a29.964,29.964,0,0,1,6.11,5.841.584.584,0,0,0,.389.24.553.553,0,0,0,.449-.15.506.506,0,0,0,.24-.389m9.884-.329a.645.645,0,0,0-.329.09.886.886,0,0,0-.24.27l-4.792,11.591H670.539a.6.6,0,0,0,0,1.2h31.24a.526.526,0,0,0,.33-.12.444.444,0,0,0,.21-.27l4.792-11.561h5.871a5.789,5.789,0,0,0,1.647,2.965,5.857,5.857,0,1,0-1.737-4.163h-6.17m7.4.539q-.029-.273-.03-.539a4.673,4.673,0,1,1,.03.539M712.891,451.2q0,.277.03.539L696.3,468.573H681.232a.6.6,0,0,0,0,1.2h15.305a.565.565,0,0,0,.419-.18l16.234-16.444a5.918,5.918,0,0,0,1.438,2.216,5.858,5.858,0,1,0-1.737-4.163m1.2,0a4.7,4.7,0,1,1,1.378,3.325,4.459,4.459,0,0,1-1.318-2.666s-.015-.009-.03-.03a.085.085,0,0,0,0-.06A4.305,4.305,0,0,1,714.089,451.2Z" transform="translate(-644.75 -445.3)" stroke="currentColor" stroke-width="1"/>
    </g>
  </g>
</svg>
`,
      title: "GovTech for Infrastructure",
      description:
        "Leverages digital tools to enhance data access, coordination, and transparency. ",
      path: "/govtech-for-infrastructure",
    },
  ];

  const openVideo = (url, title, width, height) => {
    dispatch(setVideoData({ url, title, width, height }));
    dispatch(setShowVideo(true));
  };
  useEffect(() => {
    dispatch(
      setBradcrump({
        show: true,
        dir: [{ path: "/qii6", title: "QII.6 Governance" }],
      }),
    );
  }, []);
  return (
    <div className="qii2">
      <section className="q2_landing_page color-dark">
        <section className="color-light landingpage-banner">
          <Header3 img="images/qii6/QII6-Landing/QII6_Landing_main.jpg">
            <div className="langing-page-container">
              <img
                src="images/UpdatedAssets/Qii6.svg"
                alt="landing-page-logo"
                className="landingpage-logo"
              />
              <div className="landingpage-description">
                <p className="light-font">
                  Good governance is the backbone of quality infrastructure,
                  ensuring projects are transparent, accountable, and deliver
                  value for generations. Strong governance means smarter
                  investment, reduced waste, and greater public trust in
                  infrastructure decisions.
                </p>
                {/* <p className="bold-text">
              <strong></strong>
            </p> */}
              </div>
            </div>
          </Header3>
        </section>
        {/* <section className="container color-light">
          <div className="header-items-cnt">
            <div className="header-item">
              <div className="icon-item">&#xe91c;</div>
              <label className="item-label">
                <strong>Efficient investment</strong>
              </label>
            </div>
            <div className="devider"></div>
            <div className="header-item">
              <div className="icon-item">&#xe917;</div>
              <label className="item-label">
                <strong>Transparent processes</strong>
              </label>
            </div>
            <div className="devider"></div>
            <div className="header-item">
              <div className="icon-item">&#xe91a;</div>
              <label className="item-label">
                <strong>Sustainable growth</strong>
              </label>
            </div>
          </div>
        </section> */}
        <div className="container internal-pages-cards">
          <div className="center-header">
            {/* <h1 className="light-font mBottom">
              Building Blocks of Adopting a Life Cycle Costing Approach
            </h1> */}
            <h1 className="light-font mBottom">
              Governance Across the Infrastructure Lifecycle
            </h1>
            <h3 className="light-font">
              Across the infrastructure lifecycle, robust governance creates the
              confidence and stability needed to attract private sector
              investment. This governance is strengthened through:​
            </h3>
          </div>
          <div className="qii6-sub-pages">
            {subPages.map((page, i) => (
              <div className="subpage-cnt" key={i}>
                <div
                  className="icon-subpage"
                  dangerouslySetInnerHTML={{ __html: page.icon }}
                  onClick={() => navigate(page.path)}
                ></div>
                <h3
                  className="label-subpage"
                  onClick={() => navigate(page.path)}
                >
                  <strong>{page.title}</strong>
                </h3>
                <label
                  className="page-description"
                  onClick={() => navigate(page.path)}
                >
                  {page.description}
                </label>
                <Link to={page.path}>
                  <div className="arrow-btn icon-arrow">&#xe900;</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Qii6ImagewithStatement
        backgroundImage={"images/qii6/QII6-Landing/Ajay-Banga.png"}
        text={`"Private investment flows only where the right conditions exist and where there’s a clear probability of return. And for that, two things are essential: a strong infrastructure foundation and a predictable regulatory environment. Without these, private capital stays on the sidelines."`}
        subtext={"Ajay Banga"}
        subtext2={"April 2025"}
      />
      {/* <section className="container color-light">
        <p>
          Robust infrastructure governance, grounded in clear rules,
          transparency, and effective management, ensures value for money and
          creates the confidence and stability needed for private sector
          investment.{" "}
        </p>
      </section> */}
      <section className="color-dark">
        <div className="container ">
          <div className="video-text-cnt">
            <div className="video-text-box">
              {/* <img src="images/qii2/videoCover.png" alt="" />
              <div className="vid-cnt">
                <button
                  className="video-play-btn icon-play"
                  onClick={() => {
                    openVideo(
                      "",
                      "Why Infrastructure Governance Matters",
                      1920,
                      1080,
                    );
                  }}
                >
                  &#xe91e;
                </button>
                <p className="video-title">
                  <strong>Why Infrastructure Governance Matters</strong>
                </p>
              </div> */}
              <Video
                thumbnail="images/qii6/QII6-Landing/Qii6_Video_Cover.jpg"
                videoUrl=""
                videoTitle="Why Infrastructure Governance Matters"
                cardTitle={
                  <>
                    <span>Why Infrastructure Governance Matters</span>
                  </>
                }
                description=""
                duration="3 min watch"
              />
            </div>
            <div className="text-cnt">
              <h1 className="light-font mBottom">Quality Over Quantity</h1>
              <h3 className="light-font sub-text">
                Delivering quality infrastructure is about more than just
                spending. Without good governance, increased spending will not
                translate into value and lasting impact.
                <br />
                <br />
                Governments need to:
              </h3>
              <TextIconCarousal data={textCrData} />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="container internal-pages-container color-dark">
        <h3 className="statement-text">
          <strong>Life cycle costing</strong> breaks this cycle. <br />
          <br />
          By accounting for the <strong>total cost of service delivery</strong>,
          governments and institutions can make smarter investments that deliver
          better value over time.
        </h3>
        <h1 className="light-font "></h1>
      </section> */}
      {/* <section className="qii_video_landing_page color-light">
        <img
          className="qii_video-thumbnail-image"
          src="images/qii4/QII 2 in Action poster.png"
          alt="video thumbnail"
        />
        <div className="qii-video-overlay"></div>
        <div className="qii-video-cnt">
          <button
            className="video-play-btn icon-play"
            onClick={() => {
              openVideo(
                "",
                "QII.6 in Action",
                1920,
                1080,
              );
            }}
          >
            &#xe91e;
          </button>
        </div>
        <div className="qii-video-text-cnt">
          <p className="video-title">Lessons from Success Stories</p>
          <p className="video-desc">
            InfraGov assessments under the QII Partnership in Kyrgyz Republic,
            Tajikistan, and Uzbekistan provide practical roadmaps for
            strengthening infrastructure governance systems.
          </p>
          <Link to="">
            <button className="btn-primary qii2-video-cta disable-link">
              Explore Case Study <span className="icon-arrow">&#xe900;</span>
            </button>
          </Link>
        </div>
      </section> */}

      <QII6CaseStudy1 />

      {/* <section className="color-dark top_resource_page">
        <div className="container">
          <div className="center-header">
            <h1 className="light-font mBottom">QII.2 Case Studies</h1>
          </div>
          <div className="top-resource-card-cnt">
            <TopResourceCard
              image="images/qii2/Fukuoka.png"
              title={
                <p>
                  Fukuoka City: Pioneering Life Cycle Costing For Efficient Water Management
                </p>
              }
              buttonText="Case Study"
              link="pdf/Fukuoka_city_case_study.pdf"
            ></TopResourceCard>
            <TopResourceCard
              image="images/qii2/Ganga_case_study.png"
              title={
                <p>
                  The Ganga Wastewater Program Strengthening Life Cycle Costing
                  Through Public-Private Partnerships
                </p>
              }
              buttonText="Case Study"
              link="pdf/Ganga_case_study.pdf"
            ></TopResourceCard>
          </div>
        </div>
        {/* <div className="container resource_page">
          <div className="resource-carousel-container">
            <div className="resource-carousel-wrapper">
              <div
                className="resource-carousel-track"
                // style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {topResources.map((slide, i) => (
                  <div className="resource-carousel-slide" key={i}>
                    <div className="resource-card-container col-2">
                      {slide.map((card, j) => (
                        <CardBox key={j} card={card}></CardBox>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> }
      </section> */}

      <section className="color-dark">
        <div className="container">
          <h2 className="section-title light-font">QII.6 Case Studies</h2>
          <div className="page-resource-grid" role="list">
            {resourceArray.map((p, index) => {
              return (
                <article
                  className="page-resource-card"
                  key={index}
                  role="listitem"
                  style={{ backgroundImage: `url(${p.img})` }}
                >
                  <div className="page-resource-link">
                    <div className="page-resource-body">
                      <div className="page-resource-title title-small">
                        {p.country && (
                          <>
                            <span>{p.country}</span> <br />
                          </>
                        )}
                        <strong>{p.title}</strong>
                        {p.org && (
                          <>
                            <br />
                            <span>{p.org}</span>
                          </>
                        )}
                      </div>
                      <div className="page-resource-overlay" />
                      <img
                        className="page-resource-img"
                        src={p.img_path}
                        alt={p.title}
                      />
                      {/* <div className="page-resource-img-cnt">
                    </div> */}
                      <div className="page-resource-data">
                        <div className="page-resource-title title-big">
                          {p.country && (
                            <>
                              <span>{p.country}</span> <br />
                            </>
                          )}
                          <strong>{p.title}</strong>
                          {p.org && (
                            <>
                              <br />
                              <span>{p.org}</span>
                            </>
                          )}
                        </div>
                        <div className="page-resource-description">
                          {p.description}
                        </div>
                        {/* <Popover
                          content={p.description}
                          title={p.title}
                          trigger="click"
                        >
                          <div className="page-resource-description">
                            Read More...
                          </div>
                        </Popover> */}
                        {/* <div className="page-resource-btn-cnt">
                          {p.target === "_blank" ? (
                            <a
                              className="page-resource-arrow"
                              href={p.path}
                              target={p.target}
                            >
                              <span className="icon-arrow">&#xe900;</span>
                            </a>
                          ) : p.pdf? (
                            
                            <a 
                              className="page-resource-arrow"
                              href={p.path}
                              target={p.target}
                            >
                              <span className="icon-arrow">&#xe900;</span>
                            </a>
                          ) : (
                            
                            <Link 
                              className="page-resource-arrow"
                              to={p.path}
                              target={p.target}
                            >
                              <span className="icon-arrow">&#xe900;</span>
                            </Link>
                          )}
                        </div> */}
                        <div className="page-resource-btn-cnt">
                          {!p.path ? (
                            <span className="page-resource-arrow disable-link">
                              <span className="icon-arrow">&#xe900;</span>
                            </span>
                          ) : p.target === "_blank" ? (
                            <a
                              className="page-resource-arrow"
                              href={p.path}
                              target={p.target}
                              rel="noopener noreferrer"
                            >
                              <span className="icon-arrow">&#xe900;</span>
                            </a>
                          ) : p.pdf ? (
                            <a
                              className="page-resource-arrow"
                              href={p.path}
                              target={p.target}
                            >
                              <span className="icon-arrow">&#xe900;</span>
                            </a>
                          ) : (
                            <Link
                              className="page-resource-arrow"
                              to={p.path}
                              target={p.target}
                            >
                              <span className="icon-arrow">&#xe900;</span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="view-all-btn-container">
            <button
              className="btn-primary qii2-video-cta"
              onClick={() => {
                const el = document.getElementById("resourcesSection");
                el?.scrollIntoView({ behavior: "smooth" });
                setPreSelectedResources([
                  {
                    show: true,
                    category: "QII Principle",
                    title: "QII.6 Governance",
                    id: 5,
                  },
                  {
                    show: true,
                    category: "Media Type",
                    title: "Case Study",
                    id: 1,
                  },
                ]);
              }}
              // disabled
            >
              View All <span className="icon-arrow">&#xe900;</span>
            </button>
          </div>
        </div>
      </section>
      <section className="color-light z-2" id="resourcesSection">
        <ResourceLibrary
          subPages={subPages}
          preSelected={preSelectedResources}
        ></ResourceLibrary>
      </section>
    </div>
  );
}
