import React, { useState, useEffect } from "react";
import "./QIILandingPage.css";
import "./QII5LandingPage.css";
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
import ImagewithStatement from "../components/ImagewithStatement";

export default function QII5LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [preSelectedResources, setPreSelectedResources] = useState([
    {
      show: true,
      category: "QII Principle",
      title: "QII.5 Social",
      id: 4,
    },
  ]);
  const textCrData = [
    {
      id: 0,
      icon: "&#xe919;",
      text: "Widening social and economic inequality",
    },
    {
      id: 0,
      icon: "&#xe922;",
      text: "Enhances recovery speed after disasters, sustaining reliable access to essential services.",
    },
    {
      id: 0,
      icon: "&#xe921;",
      text: "Lowers long-term maintenance and replacement expenses through better design and risk management.",
    },
  ];

  const resourceArray = [
    {
      id: 0,
      title:
        "Universal Design Principles - Convention on the Rights of Persons with Disabilities (CRPD) Article 9",
      country: false,
      org: false,
      description:
        "Foundation for international accessibility standards referenced throughout World Bank global policy and operational documents. Its mandates shape the development, adoption, and monitoring of accessibility norms and standards worldwide.",
      img_path: "images/qii2/Ganga_case_study.png",
      path: "https://social.desa.un.org/issues/disability/crpd/article-9-accessibility",
      target: "_self",
    },
    {
      id: 1,
      title: "PPP Gender Toolkit",
      country: false,
      org: "World Bank",
      description:
        "A comprehensive resource designed to guide the mainstreaming of gender considerations throughout the lifecycle of infrastructure projects delivered via Public-Private Partnerships (PPPs).",
      img_path: "images/governance/list/01.jpg",
      path: "https://thedocs.worldbank.org/en/doc/61714f214ed04bcd6e9623ad0e215897-0400012021/related/10050-PPP-Gender-Toolkit-1.pdf",
      target: "_blank",
    },
    {
      id: 2,
      title: "Inclusive Infrastructure Toolkit",
      country: false,
      org: "World Bank / GI Hub ",
      description:
        "A practical, evidence-based framework for developing infrastructure that advances social inclusivity. It outlines six key action areas and detailed practices to maximize infrastructure’s impact on reducing inequality and promoting shared prosperity, illustrated by real-life international examples. ",
      img_path: "images/governance/list/01.jpg",
      path: "https://inclusiveinfra.gihub.org/action-areas/policy-regulation-and-standards/",
      target: "_blank",
    },
  ];

  const subPages = [
    {
      id: 0,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="90.474" height="90.474" viewBox="0 0 90.474 90.474">
  <g id="QII_5_icon07" transform="translate(-1415 -211.5)">
    <path id="Path_216779" data-name="Path 216779" d="M1464.976,301.974H1455.5a5.746,5.746,0,0,1-5.74-5.74v-.968a3.75,3.75,0,0,0-2.5-3.519c-.873-.324-1.743-.685-2.586-1.073a3.9,3.9,0,0,0-1.641-.362,3.684,3.684,0,0,0-2.626,1.079l-.686.686a5.74,5.74,0,0,1-8.117,0l-6.7-6.7a5.747,5.747,0,0,1,0-8.117l.686-.686a3.753,3.753,0,0,0,.717-4.266c-.388-.844-.749-1.714-1.073-2.586a3.75,3.75,0,0,0-3.519-2.5h-.968a5.746,5.746,0,0,1-5.74-5.74V252a5.746,5.746,0,0,1,5.74-5.74h.968a3.75,3.75,0,0,0,3.519-2.5c.324-.872.685-1.742,1.073-2.586a3.753,3.753,0,0,0-.717-4.266l-.686-.686a5.747,5.747,0,0,1,0-8.117l6.7-6.7a5.74,5.74,0,0,1,8.117,0l.686.686a3.684,3.684,0,0,0,2.626,1.079,3.9,3.9,0,0,0,1.64-.362c.843-.388,1.713-.749,2.586-1.073a3.75,3.75,0,0,0,2.5-3.519v-.968a5.746,5.746,0,0,1,5.74-5.74h9.479a5.746,5.746,0,0,1,5.74,5.74v.968a3.75,3.75,0,0,0,2.5,3.519c.872.324,1.742.685,2.586,1.073a3.9,3.9,0,0,0,1.64.362,3.685,3.685,0,0,0,2.626-1.079l.686-.686a5.74,5.74,0,0,1,8.117,0l6.7,6.7a5.746,5.746,0,0,1,0,8.117l-.686.686a3.753,3.753,0,0,0-.717,4.266c.388.844.749,1.714,1.073,2.586a3.75,3.75,0,0,0,3.519,2.5h.968a5.746,5.746,0,0,1,5.74,5.74v9.479a5.746,5.746,0,0,1-5.74,5.74h-.968a3.75,3.75,0,0,0-3.519,2.5c-.324.872-.685,1.742-1.073,2.586a3.753,3.753,0,0,0,.717,4.266l.686.686a5.74,5.74,0,0,1,0,8.117l-6.7,6.7a5.74,5.74,0,0,1-8.117,0l-.686-.686a3.684,3.684,0,0,0-2.626-1.079,3.9,3.9,0,0,0-1.64.362c-.845.388-1.715.749-2.586,1.073a3.75,3.75,0,0,0-2.5,3.519v.968A5.746,5.746,0,0,1,1464.976,301.974Zm-21.947-13.663a5.886,5.886,0,0,1,2.476.545c.8.367,1.621.708,2.447,1.015a5.863,5.863,0,0,1,2.747,2.1,5.653,5.653,0,0,1,1.058,3.3v.968a3.744,3.744,0,0,0,3.74,3.74h9.479a3.744,3.744,0,0,0,3.74-3.74v-.968a5.653,5.653,0,0,1,1.058-3.3,5.863,5.863,0,0,1,2.748-2.1c.824-.306,1.647-.648,2.447-1.015a5.885,5.885,0,0,1,2.476-.545,5.671,5.671,0,0,1,4.04,1.665l.686.686a3.74,3.74,0,0,0,5.289,0l6.7-6.7a3.74,3.74,0,0,0,0-5.289l-.686-.686a5.652,5.652,0,0,1-1.586-3.087,5.871,5.871,0,0,1,.466-3.429c.367-.8.709-1.622,1.015-2.447a5.864,5.864,0,0,1,2.1-2.747,5.653,5.653,0,0,1,3.3-1.058h.968a3.744,3.744,0,0,0,3.74-3.74V252a3.744,3.744,0,0,0-3.74-3.74h-.968a5.653,5.653,0,0,1-3.3-1.058,5.865,5.865,0,0,1-2.1-2.748c-.306-.825-.648-1.648-1.015-2.447a5.87,5.87,0,0,1-.466-3.429,5.652,5.652,0,0,1,1.586-3.087l.685-.686a3.744,3.744,0,0,0,0-5.289l-6.7-6.7a3.74,3.74,0,0,0-5.289,0l-.686.686a5.672,5.672,0,0,1-4.04,1.665,5.887,5.887,0,0,1-2.476-.545c-.8-.367-1.622-.709-2.447-1.015a5.863,5.863,0,0,1-2.747-2.1,5.653,5.653,0,0,1-1.058-3.3v-.968a3.744,3.744,0,0,0-3.74-3.74H1455.5a3.744,3.744,0,0,0-3.74,3.74v.968a5.653,5.653,0,0,1-1.058,3.3,5.863,5.863,0,0,1-2.748,2.1c-.826.307-1.649.648-2.447,1.015a5.888,5.888,0,0,1-2.476.545,5.671,5.671,0,0,1-4.04-1.665l-.686-.686a3.74,3.74,0,0,0-5.289,0l-6.7,6.7a3.744,3.744,0,0,0,0,5.289l.686.686a5.653,5.653,0,0,1,1.586,3.087,5.871,5.871,0,0,1-.466,3.429c-.367.8-.709,1.622-1.016,2.447a5.864,5.864,0,0,1-2.1,2.747,5.653,5.653,0,0,1-3.3,1.058h-.968A3.744,3.744,0,0,0,1417,252v9.479a3.744,3.744,0,0,0,3.74,3.74h.968a5.653,5.653,0,0,1,3.3,1.058,5.864,5.864,0,0,1,2.1,2.748c.307.825.648,1.648,1.015,2.447a5.871,5.871,0,0,1,.466,3.429,5.653,5.653,0,0,1-1.586,3.087l-.686.686a3.744,3.744,0,0,0,0,5.289l6.7,6.7a3.74,3.74,0,0,0,5.289,0l.686-.686A5.671,5.671,0,0,1,1443.03,288.311Z" transform="translate(0 0)" fill="currentColor"/>
    <g id="Group_271095" data-name="Group 271095" transform="translate(1432.336 239.358)">
      <path id="Path_216780" data-name="Path 216780" d="M1595.74,345.139a5.746,5.746,0,0,1-5.74-5.74v-3.16a5.74,5.74,0,1,1,11.479,0v3.16A5.746,5.746,0,0,1,1595.74,345.139Zm0-12.639a3.744,3.744,0,0,0-3.74,3.74v3.16a3.74,3.74,0,1,0,7.479,0v-3.16A3.744,3.744,0,0,0,1595.74,332.5Z" transform="translate(-1567.839 -331.5)" fill="currentColor"/>
      <path id="Path_216781" data-name="Path 216781" d="M1581.278,429.139a1,1,0,0,1-1-1v-3.16a8.489,8.489,0,0,0-8.479-8.479h-6.32a8.489,8.489,0,0,0-8.479,8.479v3.16a1,1,0,0,1-2,0v-3.16a10.491,10.491,0,0,1,10.479-10.479h6.32a10.491,10.491,0,0,1,10.479,10.479v3.16A1,1,0,0,1,1581.278,429.139Z" transform="translate(-1540.738 -396.541)" fill="currentColor"/>
      <path id="Path_216782" data-name="Path 216782" d="M1665.74,359.139a5.746,5.746,0,0,1-5.74-5.74v-3.16a5.74,5.74,0,1,1,11.479,0v3.16A5.746,5.746,0,0,1,1665.74,359.139Zm0-12.639a3.744,3.744,0,0,0-3.74,3.74v3.16a3.74,3.74,0,1,0,7.479,0v-3.16A3.744,3.744,0,0,0,1665.74,346.5Z" transform="translate(-1622.04 -342.34)" fill="currentColor"/>
      <path id="Path_216783" data-name="Path 216783" d="M1700.389,436.836a1,1,0,0,1-.943-.668,8.492,8.492,0,0,0-8-5.667h-1.327a1,1,0,0,1,0-2h1.327a10.5,10.5,0,0,1,9.885,7,1,1,0,0,1-.943,1.332Z" transform="translate(-1644.588 -407.382)" fill="currentColor"/>
      <path id="Path_216784" data-name="Path 216784" d="M1525.74,359.139a5.746,5.746,0,0,1-5.74-5.74v-3.16a5.74,5.74,0,1,1,11.479,0v3.16A5.746,5.746,0,0,1,1525.74,359.139Zm0-12.639a3.744,3.744,0,0,0-3.74,3.74v3.16a3.74,3.74,0,1,0,7.479,0v-3.16A3.744,3.744,0,0,0,1525.74,346.5Z" transform="translate(-1513.638 -342.34)" fill="currentColor"/>
      <path id="Path_216785" data-name="Path 216785" d="M1488.38,436.836a1,1,0,0,1-.943-1.332,10.5,10.5,0,0,1,9.885-7h1.327a1,1,0,0,1,0,2h-1.327a8.492,8.492,0,0,0-8,5.667A1,1,0,0,1,1488.38,436.836Z" transform="translate(-1488.38 -407.382)" fill="currentColor"/>
    </g>
  </g>
</svg>
`,
      title: "Inclusion through Policies, Standards and Regulation",
      description:
        "Establishing robust laws, policies, and incentives to ensure infrastructure projects prioritize and embed social inclusion throughout their lifecycle",
      path: "/Policies_Standards_Regulation",
    },
    {
      id: 0,
      icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="95.514" height="92.5" viewBox="0 0 95.514 92.5">
  <g id="QII_5_icon08" transform="translate(-2035 -267)">
    <g id="Group_271159" data-name="Group 271159" transform="translate(2060.133 268)">
      <g id="Group_271157" data-name="Group 271157" transform="translate(0 1.492)">
        <path id="Path_216992" data-name="Path 216992" d="M2111.217,306.152a1.011,1.011,0,0,1-.142-.01,31.5,31.5,0,0,1-4.013-.894c-2.953-.869-4.9-1.992-5.8-3.335a1,1,0,0,1-.142-.78,85.522,85.522,0,0,0,1.969-16.47,13.536,13.536,0,0,1,.914-4.779,14.411,14.411,0,0,1,2.657-4.4,13.28,13.28,0,0,1,4.313-3.257,14.01,14.01,0,0,1,11.462-.085,13.233,13.233,0,0,1,4.241,3.061,14.3,14.3,0,0,1,3.806,8.782,1,1,0,0,1-.942,1.055l-.057,0a1,1,0,0,1-1-.944,11.7,11.7,0,0,0-23.4.566,85.293,85.293,0,0,1-1.916,16.451,10.383,10.383,0,0,0,4.43,2.21,30,30,0,0,0,3.753.839,1,1,0,0,1-.14,1.99Z" transform="translate(-2101.304 -271.957)" fill="currentColor"/>
        <path id="Path_216993" data-name="Path 216993" d="M2100,363.471a1,1,0,0,1-.2-1.98c2.635-.536,7.272-1.919,8.5-3.347.046-.053.454-.595.62-3.082.093-1.39.057-2.656.057-2.668a1,1,0,0,1,.97-1.029h.03a1,1,0,0,1,1,.971c0,.055.038,1.361-.06,2.844-.192,2.9-.719,3.826-1.1,4.269-.916,1.065-2.834,2.065-5.7,2.973-2.053.65-3.84,1.015-3.915,1.031A1.008,1.008,0,0,1,2100,363.471Z" transform="translate(-2100 -322.044)" fill="currentColor"/>
      </g>
      <g id="Group_271158" data-name="Group 271158" transform="translate(37.287)">
        <path id="Path_216994" data-name="Path 216994" d="M2260.162,364.559a1,1,0,0,1-.2-.02c-.076-.015-1.874-.377-3.941-.985-2.92-.859-4.793-1.73-5.725-2.661-.433-.433-.9-1.3-.66-4.188.118-1.432.355-2.721.365-2.776a1,1,0,0,1,1.967.363h0c0,.011-.211,1.154-.325,2.422a6.18,6.18,0,0,0,.091,2.787c1.281,1.24,5.957,2.543,8.621,3.077a1,1,0,0,1-.2,1.981Z" transform="translate(-2231.082 -321.64)" fill="currentColor"/>
        <path id="Path_216995" data-name="Path 216995" d="M2215.916,302.728a1,1,0,0,1-.163-1.987c5.058-.843,6.88-8.787,6.9-8.867l0-.013c.529-2.238,1.119-5.941,1.384-8.228a20.548,20.548,0,0,0,0-5.81c-.688-5.113-5.725-8.824-11.977-8.824s-11.289,3.711-11.977,8.825a19.075,19.075,0,0,0-.178,3.7,1,1,0,1,1-2,.1,20.894,20.894,0,0,1,.194-4.063,11.439,11.439,0,0,1,4.592-7.608,16.343,16.343,0,0,1,18.734,0,11.439,11.439,0,0,1,4.592,7.607,22.574,22.574,0,0,1,0,6.306c-.271,2.342-.877,6.142-1.423,8.452-.106.471-2.18,9.342-8.52,10.4A1,1,0,0,1,2215.916,302.728Z" transform="translate(-2198.883 -268)" fill="currentColor"/>
      </g>
      <g id="_Grupo_" data-name="&lt;Grupo&gt;" transform="translate(21.117 22.311)">
        <path id="Path_216996" data-name="Path 216996" d="M2180.133,399.184a1,1,0,0,1-.447-.106l-5.49-2.745a14.664,14.664,0,0,1-12.259,0l-5.49,2.745a1,1,0,1,1-.895-1.789l6.033-3.017a.946.946,0,0,1,1.146.179c.12.1,1.547,1.224,5.334,1.224,3.934,0,5.314-1.2,5.326-1.215a1,1,0,0,1,1.155-.187l6.034,3.017a1,1,0,0,1-.448,1.895Z" transform="translate(-2156 -369.525)" fill="currentColor"/>
        <path id="Path_216997" data-name="Path 216997" d="M2168.589,347.775a1,1,0,0,1-.554-.168c-4.058-2.705-4.271-4.792-4.593-7.951-.046-.455-.094-.926-.157-1.435-.276-2.254-.4-4.869.817-7.175a9.126,9.126,0,0,1,5.272-4.269,11.783,11.783,0,0,1,7.481,0,9.124,9.124,0,0,1,5.272,4.269c1.213,2.307,1.094,4.922.818,7.175-.063.51-.111.981-.157,1.436-.323,3.158-.536,5.245-4.593,7.95a1,1,0,1,1-1.109-1.664c3.273-2.182,3.4-3.443,3.713-6.489.048-.465.1-.946.162-1.476.239-1.947.354-4.183-.6-6a7.141,7.141,0,0,0-4.142-3.3,9.782,9.782,0,0,0-6.2,0,7.142,7.142,0,0,0-4.142,3.3c-.956,1.819-.841,4.054-.6,6,.065.53.114,1.011.161,1.476.311,3.046.439,4.307,3.713,6.49a1,1,0,0,1-.556,1.832Z" transform="translate(-2161.048 -327.167)" fill="currentColor"/>
      </g>
    </g>
    <g id="Group_271160" data-name="Group 271160" transform="translate(2036 323.808)">
      <path id="Path_216998" data-name="Path 216998" d="M2110.988,458.281a7,7,0,0,1-1.351-.131l-35.685-5.9H2068a1,1,0,0,1,0-2h6.034a1,1,0,0,1,.163.013l35.781,5.917.032.006a5.056,5.056,0,0,0,3.238-.435l33.145-16.593.025-.012a3.536,3.536,0,0,0,1.7-4.689,3.524,3.524,0,0,0-4.685-1.7l-.01,0-21.381,9.694a1,1,0,0,1-.826-1.822l21.376-9.692a5.526,5.526,0,0,1,4.684,10.01l-33.133,16.587A7.063,7.063,0,0,1,2110.988,458.281Z" transform="translate(-2055.933 -425.607)" fill="currentColor"/>
      <path id="Path_216999" data-name="Path 216999" d="M2119.283,435.74h-21.116a1,1,0,0,1,0-2h21.116a3.525,3.525,0,0,0,0-7.05h-16.592a1,1,0,0,1-.759-.349c-4.417-5.153-11.645-6.038-16.933-5.873a45.614,45.614,0,0,0-10.673,1.653,1,1,0,0,1-.294.044H2068a1,1,0,0,1,0-2h5.888a47.419,47.419,0,0,1,11.05-1.7,31.08,31.08,0,0,1,9.742,1.1,18.123,18.123,0,0,1,8.464,5.12h16.14a5.525,5.525,0,0,1,0,11.05Z" transform="translate(-2055.933 -418.148)" fill="currentColor"/>
      <path id="Path_217000" data-name="Path 217000" d="M2042.033,451.692H2036a1,1,0,0,1,0-2h6.033a5.039,5.039,0,0,0,5.034-5.033V417H2036a1,1,0,0,1,0-2h12.067a1,1,0,0,1,1,1v28.658A7.041,7.041,0,0,1,2042.033,451.692Z" transform="translate(-2036 -416)" fill="currentColor"/>
      <path id="Ellipse_3207" data-name="Ellipse 3207" d="M1.512-1A2.512,2.512,0,1,1-1,1.512,2.515,2.515,0,0,1,1.512-1Zm0,3.024A.512.512,0,1,0,1,1.512.513.513,0,0,0,1.512,2.024Z" transform="translate(0 22.596)" fill="currentColor"/>
    </g>
  </g>
</svg>
`,
      title: "Inclusion in Project Planning and Design",
      description:
        "Applying universal design principles to address the diverse needs of all user groups and promote equitable participation",
      path: "/Project_Planning_And_Design",
    },
    {
      id: 0,
      icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="101.161" height="90.107" viewBox="0 0 101.161 90.107">
  <g id="QII_5_icon09" transform="translate(-2270.188 -1322.8)">
    <g id="Group_271196" data-name="Group 271196" transform="translate(2303.243 1348.033)">
      <path id="Path_217185" data-name="Path 217185" d="M2440.018,1433.48a1,1,0,0,1-1-1v-15.52a2.4,2.4,0,0,0-1.388-2.175,1,1,0,0,1,.842-1.814,4.412,4.412,0,0,1,2.546,3.989v15.52A1,1,0,0,1,2440.018,1433.48Z" transform="translate(-2404.967 -1402.831)"/>
      <path id="Path_217186" data-name="Path 217186" d="M2422.835,1420.454a1,1,0,0,1-1-1v-15.879a2.4,2.4,0,0,0-1.261-2.111,1,1,0,1,1,.95-1.76,4.4,4.4,0,0,1,2.312,3.871v15.879A1,1,0,0,1,2422.835,1420.454Z" transform="translate(-2394.576 -1394.706)"/>
      <path id="Path_217187" data-name="Path 217187" d="M2397.5,1413.518a1,1,0,0,1-1-1v-23.653a2.4,2.4,0,1,0-4.792,0V1409.4a1,1,0,0,1-2,0v-20.532a4.4,4.4,0,1,1,8.792,0v23.653A1,1,0,0,1,2397.5,1413.518Z" transform="translate(-2376.032 -1385.469)"/>
      <path id="Path_217188" data-name="Path 217188" d="M2373.237,1414a1,1,0,0,1-1-1v-21.24a4.4,4.4,0,0,1,4.4-4.4,1,1,0,0,1,0,2,2.4,2.4,0,0,0-2.4,2.4V1413A1,1,0,0,1,2373.237,1414Z" transform="translate(-2365.356 -1387.236)"/>
      <path id="Path_217189" data-name="Path 217189" d="M2427.633,1482.376l-.064,0a1,1,0,0,1-.935-1.061,13.008,13.008,0,0,1,3.248-7.79,10.937,10.937,0,0,0,2.769-7.277v-4.529a1,1,0,0,1,2,0v4.529a12.933,12.933,0,0,1-3.275,8.607,11,11,0,0,0-2.746,6.587A1,1,0,0,1,2427.633,1482.376Z" transform="translate(-2398.6 -1432.068)"/>
      <path id="Path_217190" data-name="Path 217190" d="M2358.464,1467.756a1,1,0,0,1-.992-.887,10.776,10.776,0,0,0-2.479-5.746,12.823,12.823,0,0,1-3.021-8.26v-8.743a8.869,8.869,0,0,1,3.58-7.125,1,1,0,0,1,1.195,1.6,6.827,6.827,0,0,0-2.774,5.522v8.743a10.82,10.82,0,0,0,2.549,6.97,12.77,12.77,0,0,1,2.938,6.809,1,1,0,0,1-.88,1.107A1.014,1.014,0,0,1,2358.464,1467.756Z" transform="translate(-2352.971 -1417.449)"/>
      <path id="Rectangle_1871" data-name="Rectangle 1871" d="M5.579-1H23.651a6.579,6.579,0,0,1,0,13.157H5.579A6.579,6.579,0,0,1,5.579-1ZM23.651,10.157a4.579,4.579,0,0,0,0-9.157H5.579a4.579,4.579,0,0,0,0,9.157Z" transform="translate(2.425 52.717)"/>
    </g>
    <g id="Group_271199" data-name="Group 271199" transform="translate(2271.602 1324.214)">
      <g id="Group_271197" data-name="Group 271197" transform="translate(0 0)">
        <path id="Line_4274" data-name="Line 4274" d="M6.2,7.2a1,1,0,0,1-.707-.293l-6.2-6.2a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0l6.2,6.2A1,1,0,0,1,6.2,7.2Z" transform="translate(21.799 47.27)"/>
        <path id="Path_217191" data-name="Path 217191" d="M2312.5,1418.24a1,1,0,0,1-.707-.293l-3.2-3.2a12.938,12.938,0,0,1-3.771-8.4,11,11,0,0,0-2.715-6.6,1,1,0,1,1,1.5-1.322,13.007,13.007,0,0,1,3.211,7.805,10.94,10.94,0,0,0,3.188,7.1l3.2,3.2a1,1,0,0,1-.707,1.707Z" transform="translate(-2290.704 -1369.97)"/>
        <path id="Path_217192" data-name="Path 217192" d="M2361.37,1365.22a1,1,0,0,1-.707-.293l-2-2a10.819,10.819,0,0,0-6.731-3.126,12.763,12.763,0,0,1-6.892-2.737,1,1,0,1,1,1.245-1.565,10.768,10.768,0,0,0,5.816,2.309,12.82,12.82,0,0,1,7.977,3.705l2,2a1,1,0,0,1-.707,1.707Z" transform="translate(-2316.865 -1343.813)"/>
        <path id="Rectangle_1872" data-name="Rectangle 1872" d="M5.578-1H23.651a6.579,6.579,0,1,1,0,13.157H5.578A6.579,6.579,0,0,1,5.578-1ZM23.651,10.157a4.579,4.579,0,1,0,0-9.157H5.578a4.579,4.579,0,0,0,0,9.157Z" transform="translate(28.558 7.889) rotate(135)"/>
      </g>
      <g id="Group_271198" data-name="Group 271198" transform="translate(53.107 0)">
        <path id="Line_4275" data-name="Line 4275" d="M0,7.2a1,1,0,0,1-.707-.293,1,1,0,0,1,0-1.414l6.2-6.2a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414l-6.2,6.2A1,1,0,0,1,0,7.2Z" transform="translate(17.228 47.27)"/>
        <path id="Path_217193" data-name="Path 217193" d="M2468.42,1418.24a1,1,0,0,1-.707-1.707l3.2-3.2a10.939,10.939,0,0,0,3.188-7.1,13.006,13.006,0,0,1,3.211-7.805,1,1,0,0,1,1.5,1.322,11,11,0,0,0-2.715,6.6,12.936,12.936,0,0,1-3.771,8.4l-3.2,3.2A1,1,0,0,1,2468.42,1418.24Z" transform="translate(-2444.993 -1369.97)"/>
        <path id="Path_217194" data-name="Path 217194" d="M2408.174,1365.94a1,1,0,0,1-.707-1.707l2.718-2.719a12.823,12.823,0,0,1,7.977-3.705,10.772,10.772,0,0,0,5.816-2.31,1,1,0,1,1,1.245,1.565,12.764,12.764,0,0,1-6.892,2.737,10.821,10.821,0,0,0-6.731,3.126l-2.718,2.718A1,1,0,0,1,2408.174,1365.94Z" transform="translate(-2408.174 -1343.813)"/>
        <path id="Rectangle_1873" data-name="Rectangle 1873" d="M5.579-1H23.651a6.579,6.579,0,1,1,0,13.157H5.578A6.579,6.579,0,0,1,5.579-1ZM23.651,10.157a4.579,4.579,0,1,0,0-9.157H5.579a4.579,4.579,0,0,0,0,9.157Z" transform="translate(24.557) rotate(45)"/>
      </g>
    </g>
  </g>
</svg>
`,
      title: "Inclusive Stakeholder Engagement",
      description:
        "Involving communities and marginalized groups through participatory processes to ensure meaningful input, ownership, and the safeguarding of their interests",
      path: "/Stakeholder_Engagement",
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
        dir: [{ path: "/qii5", title: "QII.5 Social" }],
      }),
    );
  }, []);
  return (
    <div className="qii2">
      <section className="q2_landing_page color-dark">
        <section className="color-light landingpage-banner">
          <Header3 img="images/QII_Landing_images_updated/QII5_Landing_main.png">
            <div className="langing-page-container">
              <img
                src="images/UpdatedAssets/Qii5.svg"
                alt="landing-page-logo"
                className="landingpage-logo"
              />
              <div className="landingpage-description">
                <p className="light-font">
                  Inclusive infrastructure is built to serve everyone,
                  regardless of age, ability, gender, or background. Inclusion
                  matters socially and economically – wide access to
                  electricity, transport, and digital networks fuels
                  productivity and expands opportunities. More users improve
                  financial viability, especially when capital costs are high
                  and marginal costs low (for example, in public
                  transport).{" "}
                </p>
              </div>
            </div>
          </Header3>
        </section>
        <div className="container internal-pages-cards">
          <div className="center-header">
            <h3 className="light-font">
              To fully realize these social and economic benefits, inclusion
              must be integrated throughout the infrastructure lifecycle
              starting with policies and regulations, then through planning and
              design. Stakeholder engagement throughout these early stages, as
              well as during project delivery, ensures diverse needs are met.{" "}
              <br />
              <br />
              Making infrastructure inclusive does not need to be expensive.
              Studies indicate that{" "}
              <a
                href="https://inclusiveinfra.gihub.org/action-areas/policy-regulation-and-standards/#Inclusive_Standards_and_Universal_Design"
                target="_blank"
                rel="noopener noreferrer"
                className="blue-link"
              >
                inclusive design adds only 1–2% to upfront costs
              </a>{" "}
              - much less than the cost of future retrofits.
            </h3>
          </div>
          <div className="qii5-sub-pages">
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
      {/* <ImagewithStatement
        backgroundImage={"images/qii2/qii2_img2.png"}
        text={
          "When the building blocks are missing, infrastructure falls into a familiar and costly trap."
        }
      /> */}
      <section className="color-light">
        <div className="container ">
          <div className="video-text-cnt">
            <div className="video-text-box">
              <img src="images/qii2/videoCover.png" alt="" />
              <div className="vid-cnt">
                <button
                  className="video-play-btn icon-play"
                  onClick={() => {
                    openVideo(
                      "./video/LandingPageVideo.mp4",
                      "The Importance of Inclusion in Infrastructure",
                      1920,
                      1080,
                    );
                  }}
                >
                  &#xe91e;
                </button>
                <p className="video-title">
                  <strong>The Importance of Inclusion in Infrastructure</strong>
                </p>
              </div>
            </div>
            <div className="text-cnt">
              <h1 className="light-font mBottom">The Costs of Inaction</h1>
              <h3 className="light-font sub-text">
                Neglecting inclusion in infrastructure deepens inequality and
                reduces the long-term benefits of public investments. This can
                play out as:
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
      <section className="qii_video_landing_page color-light">
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
                "./video/FukuokaCaseStudy.mp4",
                "QII.2 in Action",
                1920,
                1080,
              );
            }}
          >
            &#xe91e;
          </button>
        </div>
        <div className="qii-video-text-cnt">
          <p className="video-title">QII.5 in Action</p>
          <p className="video-desc">
            Discover how the design of Maputo's Bus Rapid Transit system is
            transforming public transport in Mozambique's capital.
          </p>
          <Link to="/qii5casestudy1">
            <button className="btn-primary qii2-video-cta">
              Explore Case Study <span className="icon-arrow">&#xe900;</span>
            </button>
          </Link>
        </div>
      </section>
      <section className="color-dark">
        <div className="container">
          <h2 className="section-title light-font">QII.5 Case Studies</h2>
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
                        <div className="page-resource-btn-cnt">
                          {p.target === "_blank" ? (
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
                    title: "QII.5 Social",
                    id: 4,
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
