import React, { useEffect, useState } from "react";
import "./QIILandingPage.css";
import "./QII4LandingPage.css";
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
// import textCrData_tab from "images/qii4/QII2_Landing_main.png"
export default function QII4LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const textCrData = [
    {
      id: 0,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="105" height="131.249" viewBox="0 0 148.806 131.249">
  <g id="Tab01" transform="translate(1 1)">
    <g id="Group_2606" data-name="Group 2606" transform="translate(0 85.993)">
      <path id="Path_5864" data-name="Path 5864" d="M609.54,257.544H579.513a1,1,0,0,1,0-2H609.54a2.905,2.905,0,0,0,2.9-2.9A11.456,11.456,0,0,0,601,241.2H573.974a14.444,14.444,0,0,1-5.92-1.261l-5.443-2.428a21.183,21.183,0,0,0-15.6-.68l-12.5,4.315a1,1,0,0,1-.653-1.891l12.5-4.315a23.254,23.254,0,0,1,17.063.745l5.442,2.428a12.457,12.457,0,0,0,5.106,1.088H601a13.443,13.443,0,0,1,13.443,13.443A4.908,4.908,0,0,1,609.54,257.544Z" transform="translate(-506.133 -234.665)"/>
      <path id="Path_5865" data-name="Path 5865" d="M580.887,282.049a10.341,10.341,0,0,1-2.343-.263,14.544,14.544,0,0,1-1.644-.487l-26.135-9.354-.038-.014a6.949,6.949,0,0,0-6.007.374l-10.039,5.576a1,1,0,0,1-.971-1.748l10.039-5.576a8.94,8.94,0,0,1,7.709-.488l26.117,9.348a12.576,12.576,0,0,0,1.422.422,9.287,9.287,0,0,0,4.646-.189c6.685-1.915,26.369-8.751,27.879-9.594l.021-.011,39.881-21.052a.962.962,0,0,0,.506-.716.941.941,0,0,0-.268-.815,15.068,15.068,0,0,0-17.224-2.837l-13.281,6.511a1,1,0,0,1-.88-1.8l13.282-6.512a17.07,17.07,0,0,1,19.513,3.214,2.964,2.964,0,0,1-.714,4.719l-39.872,21.048c-1.331.731-10.534,3.922-12.371,4.556-6.71,2.316-12.959,4.36-15.92,5.208A11.989,11.989,0,0,1,580.887,282.049Z" transform="translate(-506.135 -237.793)"/>
      <path id="Path_5866" data-name="Path 5866" d="M504.285,278.816H485.714a1,1,0,0,1,0-2h18.571a2.455,2.455,0,0,0,2.453-2.453V242.8a2.455,2.455,0,0,0-2.453-2.452H485.714a1,1,0,0,1,0-2h18.571a4.457,4.457,0,0,1,4.453,4.452v31.565A4.458,4.458,0,0,1,504.285,278.816Z" transform="translate(-485.714 -236.637)"/>
    </g>
    <g id="Group_2607" data-name="Group 2607" transform="translate(58.343 30.2)">
      <g id="Group_2753" data-name="Group 2753" transform="translate(22.09 12.837)">
        <path id="Path_5867" data-name="Path 5867" d="M631.027,193.742a8.943,8.943,0,0,1-7.137-3.287,1,1,0,0,1,1.589-1.215,6.939,6.939,0,0,0,5.548,2.5c3.586,0,6.5-2.343,6.5-5.222,0-2.63-2.559-4.867-5.952-5.2h0a8.393,8.393,0,0,1-4.979-2.052,5.979,5.979,0,0,1,.223-9.336,8.535,8.535,0,0,1,5.456-1.885,8.248,8.248,0,0,1,6.494,2.945,1,1,0,0,1-1.571,1.238,6.24,6.24,0,0,0-4.923-2.183c-3.206,0-5.813,2.086-5.813,4.65,0,2.383,2.324,4.417,5.29,4.63l.062.006a9.623,9.623,0,0,1,5.389,2.264,6.567,6.567,0,0,1,2.326,4.925,6.684,6.684,0,0,1-2.56,5.169A9.3,9.3,0,0,1,631.027,193.742Z" transform="translate(-624.685 -164.069)"/>
        <path id="Line_429" data-name="Line 429" d="M0,5.4a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V4.4A1,1,0,0,1,0,5.4Z" transform="translate(6.924 28.937)"/>
        <path id="Line_430" data-name="Line 430" d="M0,5.589a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V4.589A1,1,0,0,1,0,5.589Z" transform="translate(6.924)"/>
      </g>
      <path id="Ellipse_418" data-name="Ellipse 418" d="M22.559-1a23.564,23.564,0,0,1,9.17,45.265A23.564,23.564,0,0,1,13.388.852,23.412,23.412,0,0,1,22.559-1Zm0,45.117A21.558,21.558,0,1,0,1,22.558,21.583,21.583,0,0,0,22.559,44.117Z" transform="matrix(0.935, -0.354, 0.354, 0.935, 0, 15.992)"/>
    </g>
    <g id="Group_2608" data-name="Group 2608" transform="translate(69.532 0)">
      <path id="Line_431" data-name="Line 431" d="M0,18.428a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V17.428A1,1,0,0,1,0,18.428Z" transform="translate(0 12.955)"/>
      <path id="Line_432" data-name="Line 432" d="M0,18.428a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V17.428A1,1,0,0,1,0,18.428Z" transform="translate(35.8 12.955)"/>
      <path id="Line_433" data-name="Line 433" d="M0,18.428a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V17.428A1,1,0,0,1,0,18.428Z" transform="translate(17.9)"/>
    </g>
  </g>
</svg>`,
      text: "Reduces costly service interruptions, protecting households and businesses from economic losses.",
    },
    {
      id: 0,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="105" height="122.749" viewBox="0 0 141.672 122.749">    <g id="Tab02" transform="translate(1 1)">
      <path id="Path_6901" data-name="Path 6901" d="M41.6,0c22.978,0,41.6,18.087,41.6,40.4S64.582,80.8,41.6,80.8,0,62.71,0,40.4,18.627,0,41.6,0Z" transform="translate(43.941 27.737)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"/>
      <path id="Path_6902" data-name="Path 6902" d="M0,0V9.647" transform="translate(86.148 27.737)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"/>
      <path id="Path_6903" data-name="Path 6903" d="M0,0H13.265" transform="translate(43.941 66.326)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"/>
      <path id="Path_6904" data-name="Path 6904" d="M0,13.265V0" transform="translate(86.148 95.269)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"/>
      <path id="Path_6905" data-name="Path 6905" d="M12.059,0H0" transform="translate(115.091 66.326)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"/>
      <path id="Path_5762" data-name="Path 5762" d="M1633,328.769l11.264,11.264L1664.539,313" transform="translate(-1558.659 -266.593)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <path id="Path_6906" data-name="Path 6906" d="M0,27.737,19.295,0" transform="translate(86.148 45.826)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"/>
      <path id="Path_6907" data-name="Path 6907" d="M0,13.265V0" transform="translate(78.913 0)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"/>
      <path id="Path_6908" data-name="Path 6908" d="M0,13.265V0" transform="translate(93.384 0)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"/>
      <path id="Path_6909" data-name="Path 6909" d="M0,0H31.354" transform="translate(69.265 0)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"/>
      <g id="Group_2540" data-name="Group 2540" transform="translate(-0.001 12.616)">
        <path id="Path_5763" data-name="Path 5763" d="M1571.2,336.276a54.064,54.064,0,1,0-1.329-56.243" transform="translate(-1531.085 -253)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <line id="Line_330" data-name="Line 330" x2="34.284" transform="translate(4.506 27.033)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <line id="Line_331" data-name="Line 331" x1="32.006" transform="translate(0 47.058)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <line id="Line_332" data-name="Line 332" x1="25.906" transform="translate(6.758 65.08)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <line id="Line_333" data-name="Line 333" x1="21.346" y1="0.174" transform="translate(18.773 83.102)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </g></g></svg>`,
      text: "Enhances recovery speed after disasters, sustaining reliable access to essential services.",
    },
    {
      id: 0,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="105" height="131.251" viewBox="0 0 117.181 131.251">
  <g id="Tab03" transform="translate(1 1)">
    <path id="Path_5557" data-name="Path 5557" d="M1099.564,303.1h0a1,1,0,0,1-.771-.363l-11.884-14.4a1,1,0,0,1,1.542-1.273l11.113,13.464,23.868-28.893v-3.876h-12.089a1,1,0,0,1-1-1V236a1,1,0,0,1,2,0v29.758h12.089a1,1,0,0,1,1,1v5.235a1,1,0,0,1-.229.637l-24.869,30.1A1,1,0,0,1,1099.564,303.1Z" transform="translate(-1014.488 -172.847)"/>
    <path id="Path_5558" data-name="Path 5558" d="M904.869,303.1a1,1,0,0,1-.771-.363l-24.868-30.1a1,1,0,0,1-.229-.637v-5.235a1,1,0,0,1,1-1h12.089V236a1,1,0,0,1,2,0v30.758a1,1,0,0,1-1,1H881v3.876l23.868,28.893,11.114-13.464a1,1,0,1,1,1.542,1.273l-11.885,14.4A1,1,0,0,1,904.869,303.1Z" transform="translate(-874.764 -172.847)"/>
    <path id="Path_5559" data-name="Path 5559" d="M988.868,307.7a1,1,0,0,1-.771-.363l-24.868-30.1A1,1,0,0,1,963,276.6v-5.236a1,1,0,0,1,1-1h12.089V260a1,1,0,1,1,2,0v11.361a1,1,0,0,1-1,1H965v3.876l23.868,28.893,23.869-28.893v-3.876h-12.089a1,1,0,0,1-1-1V260a1,1,0,1,1,2,0v10.361h12.089a1,1,0,0,1,1,1V276.6a1,1,0,0,1-.229.637l-24.869,30.1A1,1,0,0,1,988.868,307.7Z" transform="translate(-931.278 -185.303)"/>
    <g id="Group_2752" data-name="Group 2752" transform="translate(0 0)">
      <path id="Path_6098" data-name="Path 6098" d="M2715.181,485.208a1,1,0,0,1-1-1V473.972a1.5,1.5,0,0,0-1.439-1.5l-9.613-.418a3.507,3.507,0,0,1-3.2-2.569,43.742,43.742,0,0,0-3.842-9.262,3.509,3.509,0,0,1,.451-4.084l6.5-7.1a1.5,1.5,0,0,0-.045-2.08l-10.774-10.774a1.5,1.5,0,0,0-2.079-.046l-7.1,6.5a3.507,3.507,0,0,1-4.083.451,43.8,43.8,0,0,0-9.262-3.841,3.507,3.507,0,0,1-2.569-3.2l-.418-9.613a1.5,1.5,0,0,0-1.5-1.439h-15.237a1.5,1.5,0,0,0-1.5,1.439l-.417,9.613a3.507,3.507,0,0,1-2.569,3.2,43.784,43.784,0,0,0-9.262,3.841,3.505,3.505,0,0,1-4.083-.451l-7.1-6.5a1.5,1.5,0,0,0-2.079.045l-10.774,10.774a1.5,1.5,0,0,0-.045,2.079l6.5,7.1a3.508,3.508,0,0,1,.451,4.083,43.739,43.739,0,0,0-3.842,9.263,3.509,3.509,0,0,1-3.205,2.569l-9.613.418a1.5,1.5,0,0,0-1.439,1.5v10.236a1,1,0,0,1-2,0V473.972a3.5,3.5,0,0,1,3.352-3.5l9.614-.418a1.512,1.512,0,0,0,1.369-1.12,45.744,45.744,0,0,1,4.017-9.685,1.492,1.492,0,0,0-.178-1.759l-6.5-7.1a3.5,3.5,0,0,1,.1-4.845l10.774-10.774a3.5,3.5,0,0,1,4.845-.105l7.1,6.5a1.509,1.509,0,0,0,1.759.177,45.789,45.789,0,0,1,9.686-4.017,1.51,1.51,0,0,0,1.12-1.368l.417-9.613a3.5,3.5,0,0,1,3.5-3.352h15.237a3.5,3.5,0,0,1,3.5,3.352l.418,9.613a1.51,1.51,0,0,0,1.12,1.368,45.808,45.808,0,0,1,9.685,4.017,1.511,1.511,0,0,0,1.76-.177l7.1-6.5a3.5,3.5,0,0,1,4.845.105l10.774,10.774a3.5,3.5,0,0,1,.1,4.845l-6.5,7.1a1.511,1.511,0,0,0-.177,1.76,45.74,45.74,0,0,1,4.017,9.685,1.511,1.511,0,0,0,1.368,1.12l9.613.418a3.5,3.5,0,0,1,3.352,3.5v10.236A1,1,0,0,1,2715.181,485.208Z" transform="translate(-2600 -424)"/>
      <path id="Path_6099" data-name="Path 6099" d="M2704.1,556.156a1,1,0,0,1-.995-.91c-.067-.743-.1-1.493-.1-2.232a24.56,24.56,0,0,1,49.12,0c0,.743-.034,1.494-.1,2.232a1,1,0,1,1-1.992-.181c.061-.678.093-1.368.093-2.051a22.56,22.56,0,0,0-45.12,0c0,.679.031,1.369.093,2.052a1,1,0,0,1-.906,1.086Q2704.14,556.156,2704.1,556.156Z" transform="translate(-2669.755 -494.948)"/>
      <g id="Group_2754" data-name="Group 2754" transform="translate(52.402 41.633)">
        <path id="Path_5867" data-name="Path 5867" d="M629.783,189.092a7.385,7.385,0,0,1-5.892-2.719,1,1,0,1,1,1.589-1.215,5.381,5.381,0,0,0,4.3,1.934c2.774,0,5.032-1.795,5.032-4,0-2.013-1.981-3.727-4.607-3.987h0a6.943,6.943,0,0,1-4.115-1.7,5,5,0,0,1,.185-7.8,7.056,7.056,0,0,1,4.511-1.56,6.827,6.827,0,0,1,5.373,2.442,1,1,0,1,1-1.571,1.238,4.819,4.819,0,0,0-3.8-1.68c-2.468,0-4.477,1.588-4.477,3.541,0,1.813,1.788,3.362,4.07,3.526l.059.006a7.931,7.931,0,0,1,4.438,1.868,5.472,5.472,0,0,1,1.936,4.106,5.565,5.565,0,0,1-2.128,4.306A7.67,7.67,0,0,1,629.783,189.092Z" transform="translate(-624.685 -165.045)"/>
        <path id="Line_429" data-name="Line 429" d="M0,4.538a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V3.538A1,1,0,0,1,0,4.538Z" transform="translate(5.565 23.259)"/>
        <path id="Line_430" data-name="Line 430" d="M0,4.689a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V3.689A1,1,0,0,1,0,4.689Z" transform="translate(5.565 0)"/>
      </g>
    </g>
  </g>
</svg>
`,
      text: "Lowers long-term maintenance and replacement expenses through better design and risk management.",
    },
  ];

  const subPages = [
    {
      id: 0,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="102.351" height="102.129" viewBox="0 0 102.351 102.129">
  <g id="Managing_cybersecurity_risks" data-name="Managing cybersecurity risks" transform="translate(-1129.272 -729.5)">
    <path id="Ellipse_382" data-name="Ellipse 382" d="M36.493-1A37.5,37.5,0,0,1,51.088,71.04,37.5,37.5,0,0,1,21.9,1.947,37.26,37.26,0,0,1,36.493-1Zm0,72.987A35.493,35.493,0,1,0,1,36.493,35.534,35.534,0,0,0,36.493,71.987Z" transform="translate(1130.272 730.5)"/>
    <path id="Line_291" data-name="Line 291" d="M12.776,13.753a1,1,0,0,1-.706-.292L-.706.708a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0L13.483,12.045a1,1,0,0,1-.706,1.708Z" transform="translate(1192.566 792.594)"/>
    <path id="Path_5714" data-name="Path 5714" d="M1302.253,912.932a10.6,10.6,0,0,1-7.545-3.125l-15.414-15.414a1,1,0,0,1,0-1.414l13.685-13.685a1,1,0,0,1,1.414,0l15.414,15.414a10.683,10.683,0,0,1,0,15.091l-.009.009A10.6,10.6,0,0,1,1302.253,912.932Zm-20.838-19.247,14.707,14.707a8.671,8.671,0,0,0,12.262,0l.009-.009a8.68,8.68,0,0,0,0-12.262l-14.707-14.707Z" transform="translate(-81.303 -81.303)"/>
    <g id="lock" transform="translate(1148.975 745.325)">
      <path id="Rectangle_1690" data-name="Rectangle 1690" d="M0-1H35.581a1,1,0,0,1,1,1V15.545a11,11,0,0,1-11,11H10a11,11,0,0,1-11-11V0A1,1,0,0,1,0-1ZM34.581,1H1V15.545a9.01,9.01,0,0,0,9,9H25.581a9.01,9.01,0,0,0,9-9Z" transform="translate(0 17.791)"/>
      <path id="Path_5717" data-name="Path 5717" d="M2169.646,748.681a1,1,0,0,1-1-1v-7.858a8.823,8.823,0,0,0-17.646,0v7.858a1,1,0,0,1-2,0v-7.858a10.823,10.823,0,1,1,21.646,0v7.858A1,1,0,0,1,2169.646,748.681Z" transform="translate(-2142.142 -730)"/>
      <path id="Ellipse_384" data-name="Ellipse 384" d="M3.877-1A4.877,4.877,0,1,1-1,3.877,4.883,4.883,0,0,1,3.877-1Zm0,7.755A2.877,2.877,0,1,0,1,3.877,2.881,2.881,0,0,0,3.877,6.755Z" transform="translate(13.685 25.545)"/>
      <path id="Line_292" data-name="Line 292" d="M0,3.281a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V2.281A1,1,0,0,1,0,3.281Z" transform="translate(17.791 33.3)"/>
    </g>
  </g>
</svg>`,
      title: "Diagnosing vulnerabilities",
      description:
        "Systematically assessing infrastructure risks and weaknesses to prioritize targeted, effective resilience measures",
      path: "/Diagnosing-vulnerabilities",
    },
    {
      id: 0,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="99.164" height="85.183" viewBox="0 0 99.164 85.183">
  <g id="Resilient_design_and_operation_" data-name="Resilient design and operation " transform="translate(-345 -486.893)">
    <g id="Group_3233" data-name="Group 3233" transform="translate(347.901 491.77)">
      <path id="Path_6854" data-name="Path 6854" d="M16.583,42.7l-.056,0a1,1,0,0,1-.945-1,5.471,5.471,0,0,1,.17-1.352,29.359,29.359,0,0,1,58.021,0,5.468,5.468,0,0,1,.17,1.352,1,1,0,0,1-1.994.11c-.039-.35-.085-.7-.137-1.053C71.1,38.231,67.687,36.4,63.665,36.4a11.149,11.149,0,0,0-6.128,1.677A4.515,4.515,0,0,0,55.214,41.7a1,1,0,0,1-2,0,4.515,4.515,0,0,0-2.323-3.623A11.149,11.149,0,0,0,44.763,36.4a11.149,11.149,0,0,0-6.128,1.677A4.515,4.515,0,0,0,36.312,41.7a1,1,0,0,1-2,0,4.515,4.515,0,0,0-2.323-3.623A11.149,11.149,0,0,0,25.861,36.4c-4.023,0-7.437,1.83-8.148,4.358-.052.348-.1.7-.137,1.052A1,1,0,0,1,16.583,42.7Zm28.18-8.3A13.159,13.159,0,0,1,52,36.415a8,8,0,0,1,2.214,2.136,8,8,0,0,1,2.214-2.136,13.988,13.988,0,0,1,13.742-.4q.315.18.606.378a27.358,27.358,0,0,0-52.027,0q.292-.2.606-.378A13.077,13.077,0,0,1,25.861,34.4,13.159,13.159,0,0,1,33.1,36.415a8,8,0,0,1,2.214,2.136,8,8,0,0,1,2.214-2.136A13.159,13.159,0,0,1,44.763,34.4Z" transform="translate(-16.582 -16.5)"/>
      <path id="Path_6855" data-name="Path 6855" d="M44.4,42.7a1,1,0,0,1-1-.964,58.315,58.315,0,0,0-3.054-17.6,17.1,17.1,0,0,0-2.727-5.043A3.721,3.721,0,0,0,34.951,17.5a3.721,3.721,0,0,0-2.671,1.593,17.1,17.1,0,0,0-2.727,5.043,58.315,58.315,0,0,0-3.054,17.6,1,1,0,0,1-2-.073,60.326,60.326,0,0,1,3.18-18.232A19.024,19.024,0,0,1,30.759,17.8a5.576,5.576,0,0,1,4.192-2.3,5.576,5.576,0,0,1,4.192,2.3,19.024,19.024,0,0,1,3.078,5.639A60.326,60.326,0,0,1,45.4,41.666a1,1,0,0,1-.963,1.036Z" transform="translate(-6.77 -16.5)"/>
    </g>
    <g id="Group_3234" data-name="Group 3234" transform="translate(346 530.642)">
      <path id="Ellipse_355" data-name="Ellipse 355" d="M7.017-1A8.017,8.017,0,1,1-1,7.017,8.026,8.026,0,0,1,7.017-1Zm0,14.034A6.017,6.017,0,1,0,1,7.017,6.024,6.024,0,0,0,7.017,13.034Z" transform="translate(12.556 13.295)"/>
      <path id="Path_5609" data-name="Path 5609" d="M2123.452,807h7.008a2.684,2.684,0,0,1,2.675,2.462l.3,3.577a.721.721,0,0,0,.436.579,16.185,16.185,0,0,1,2.272,1.313.8.8,0,0,0,.45.148.63.63,0,0,0,.271-.06l3.247-1.53a2.662,2.662,0,0,1,1.143-.256h0a2.694,2.694,0,0,1,2.326,1.342l3.5,6.069a2.684,2.684,0,0,1-.794,3.548l-2.949,2.046a.715.715,0,0,0-.283.668c.042.461.063.889.063,1.311s-.021.853-.063,1.312a.715.715,0,0,0,.284.668l2.949,2.047a2.684,2.684,0,0,1,.794,3.548l-3.5,6.069a2.694,2.694,0,0,1-2.326,1.343,2.662,2.662,0,0,1-1.144-.257l-3.247-1.53a.631.631,0,0,0-.271-.06.8.8,0,0,0-.45.148,16.192,16.192,0,0,1-2.271,1.312.721.721,0,0,0-.436.579l-.3,3.577a2.684,2.684,0,0,1-2.675,2.462h-7.008a2.684,2.684,0,0,1-2.676-2.462l-.3-3.577a.72.72,0,0,0-.436-.579,16.187,16.187,0,0,1-2.272-1.312.8.8,0,0,0-.449-.148.63.63,0,0,0-.271.06l-3.247,1.53a2.663,2.663,0,0,1-1.144.256,2.693,2.693,0,0,1-2.326-1.343l-3.5-6.069a2.685,2.685,0,0,1,.793-3.548l2.949-2.047a.715.715,0,0,0,.283-.668c-.042-.461-.063-.889-.063-1.311s.021-.85.063-1.31a.716.716,0,0,0-.284-.669l-2.948-2.046a2.685,2.685,0,0,1-.794-3.548l3.5-6.069a2.693,2.693,0,0,1,2.326-1.343,2.664,2.664,0,0,1,1.144.256l3.247,1.531a.631.631,0,0,0,.271.06.805.805,0,0,0,.45-.148,16.159,16.159,0,0,1,2.271-1.312.72.72,0,0,0,.436-.579l.3-3.577a2.684,2.684,0,0,1,2.676-2.462Zm13.139,10.078a2.783,2.783,0,0,1-1.587-.5,14.189,14.189,0,0,0-1.991-1.15,2.7,2.7,0,0,1-1.573-2.22l-.3-3.577a.688.688,0,0,0-.682-.628h-7.008a.68.68,0,0,0-.682.628l-.3,3.577a2.7,2.7,0,0,1-1.573,2.22,14.158,14.158,0,0,0-1.99,1.149,2.784,2.784,0,0,1-1.588.5,2.615,2.615,0,0,1-1.123-.251l-3.247-1.531a.678.678,0,0,0-.291-.066.688.688,0,0,0-.594.342l-3.5,6.069a.689.689,0,0,0,.2.9l2.949,2.046a2.727,2.727,0,0,1,1.135,2.5c-.037.4-.054.767-.054,1.127s.018.729.054,1.128a2.725,2.725,0,0,1-1.135,2.495l-2.949,2.047a.689.689,0,0,0-.2.9l3.5,6.07a.688.688,0,0,0,.594.343.679.679,0,0,0,.291-.066l3.247-1.53a2.614,2.614,0,0,1,1.123-.251,2.783,2.783,0,0,1,1.587.5,14.169,14.169,0,0,0,1.99,1.149,2.7,2.7,0,0,1,1.573,2.22l.3,3.577a.68.68,0,0,0,.682.628h7.008a.688.688,0,0,0,.682-.627l.3-3.578a2.7,2.7,0,0,1,1.573-2.22,14.2,14.2,0,0,0,1.99-1.149,2.783,2.783,0,0,1,1.587-.5,2.614,2.614,0,0,1,1.124.251l3.247,1.53a.678.678,0,0,0,.291.066.688.688,0,0,0,.594-.343l3.5-6.069a.688.688,0,0,0-.2-.9l-2.949-2.047a2.725,2.725,0,0,1-1.135-2.5c.037-.4.055-.765.055-1.127s-.018-.729-.054-1.127a2.726,2.726,0,0,1,1.135-2.495l2.949-2.047a.688.688,0,0,0,.2-.9l-3.5-6.07a.688.688,0,0,0-.594-.343.676.676,0,0,0-.291.066l-3.247,1.53A2.614,2.614,0,0,1,2136.591,817.078Z" transform="translate(-2107.47 -808)"/>
    </g>
    <path id="Rectangle_1849" data-name="Rectangle 1849" d="M2,2V20.239H12.152V2H2M0,0H14.152V22.239H0Z" transform="translate(388.456 548.652)"/>
    <path id="Rectangle_1850" data-name="Rectangle 1850" d="M2,2V33.38H12.152V2H2M0,0H14.152V35.38H0Z" transform="translate(408.672 535.511)"/>
    <path id="Rectangle_1851" data-name="Rectangle 1851" d="M2,2V45.51H12.152V2H2M0,0H14.152V47.51H0Z" transform="translate(428.889 523.381)"/>
    <path id="Path_6856" data-name="Path 6856" d="M-20009,6342.974a1,1,0,0,1-.861-.493,1,1,0,0,1,.354-1.369l54.586-32.125a1,1,0,0,1,1.369.354,1,1,0,0,1-.354,1.369l-54.586,32.125A1,1,0,0,1-20009,6342.974Z" transform="translate(20397.457 -5804.817)"/>
    <path id="Path_6857" data-name="Path 6857" d="M-19960.457,6321.193a1,1,0,0,1-.484-.125,1,1,0,0,1-.391-1.359l4.9-8.861h-11.375a1,1,0,0,1-1-1,1,1,0,0,1,1-1h13.07a1,1,0,0,1,.861.492,1,1,0,0,1,.014.992l-5.717,10.345A1,1,0,0,1-19960.457,6321.193Z" transform="translate(20397.904 -5804.817)"/>
    <path id="Path_6858" data-name="Path 6858" d="M-20021.24,6297.77a1,1,0,0,1-1-1v-3.876a1,1,0,0,1,1-1,1,1,0,0,1,1,1v3.876A1,1,0,0,1-20021.24,6297.77Z" transform="translate(20397.322 -5805.001)"/>
    <path id="Path_6859" data-name="Path 6859" d="M-20021.24,6336.583a1,1,0,0,1-1-1v-20.619a1,1,0,0,1,1-1,1,1,0,0,1,1,1v20.619A1,1,0,0,1-20021.24,6336.583Z" transform="translate(20397.322 -5804.07)"/>
  </g>
</svg>`,
      title: "Resilient design and operation",
      description:
        "Integrating climate-smart and adaptive practices into infrastructure planning, construction, and management to ensure long-term reliability",
      path: "/Resilient-design&operation",
    },
    {
      id: 0,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="81.252" height="85.182" viewBox="0 0 81.252 85.182">
  <g id="Financing_resilience" data-name="Financing resilience" transform="translate(1 1)">
    <g id="Group_3090" data-name="Group 3090" transform="translate(5.28 1.32)">
      <g id="Group_3089" data-name="Group 3089">
        <path id="Line_669" data-name="Line 669" d="M0,27.27a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V26.27A1,1,0,0,1,0,27.27Z" transform="translate(6.641 23.846)"/>
        <path id="Line_670" data-name="Line 670" d="M0,25.946a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V24.946A1,1,0,0,1,0,25.946Z" transform="translate(62.051 23.846)"/>
        <path id="Rectangle_1840" data-name="Rectangle 1840" d="M0-1H15.674a1,1,0,0,1,1,1V15.674a1,1,0,0,1-1,1H0a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1ZM14.674,1H1V14.674H14.674Z" transform="translate(14.588 27.82)"/>
        <path id="Rectangle_1841" data-name="Rectangle 1841" d="M0-1H15.895a1,1,0,0,1,1,1V20.972a1,1,0,0,1-1,1H0a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1ZM14.895,1H1V19.972H14.895Z" transform="translate(38.209 27.82)"/>
        <path id="Path_6315" data-name="Path 6315" d="M318.637,226.039a1,1,0,0,1-.645-.237L284.319,197.31,250.646,225.8a1,1,0,0,1-1.292-1.527l34.319-29.039a1,1,0,0,1,1.292,0l34.319,29.039a1,1,0,0,1-.646,1.763Z" transform="translate(-250 -196)"/>
        <g id="Group_3088" data-name="Group 3088" transform="translate(27.74 9.281)">
          <path id="Path_6316" data-name="Path 6316" d="M277.595,217.19a7.579,7.579,0,1,1,7.579-7.579A7.587,7.587,0,0,1,277.595,217.19Zm0-13.159a5.579,5.579,0,1,0,5.579,5.58A5.586,5.586,0,0,0,277.595,204.031Z" transform="translate(-271.015 -203.031)"/>
          <path id="Line_671" data-name="Line 671" d="M0,14.158a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V13.158A1,1,0,0,1,0,14.158Z" transform="translate(6.579 0)"/>
          <path id="Line_672" data-name="Line 672" d="M13.158,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H13.158a1,1,0,0,1,1,1A1,1,0,0,1,13.158,1Z" transform="translate(0 6.579)"/>
        </g>
        <path id="Line_673" data-name="Line 673" d="M0,16.674a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V15.674A1,1,0,0,1,0,16.674Z" transform="translate(22.536 29.145)"/>
        <path id="Line_674" data-name="Line 674" d="M15.674,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H15.674a1,1,0,0,1,1,1A1,1,0,0,1,15.674,1Z" transform="translate(14.588 35.546)"/>
        <path id="Line_675" data-name="Line 675" d="M2.649,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H2.649a1,1,0,0,1,1,1A1,1,0,0,1,2.649,1Z" transform="translate(47.481 39.52)"/>
        <path id="Line_676" data-name="Line 676" d="M0,19.892a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V18.892A1,1,0,0,1,0,19.892Z" transform="translate(59.398 2.64)"/>
        <path id="Path_6317" data-name="Path 6317" d="M287,208.58a1,1,0,0,1-1-1V199a1,1,0,0,1,1-1h6.6a1,1,0,0,1,0,2H288v7.58A1,1,0,0,1,287,208.58Z" transform="translate(-238.162 -195.04)"/>
      </g>
    </g>
    <g id="Group_3091" data-name="Group 3091" transform="translate(0 19.868)">
      <path id="Line_677" data-name="Line 677" d="M5.3,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H5.3a1,1,0,0,1,1,1A1,1,0,0,1,5.3,1Z"/>
      <path id="Line_678" data-name="Line 678" d="M2.649,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H2.649a1,1,0,0,1,1,1A1,1,0,0,1,2.649,1Z" transform="translate(7.947)"/>
    </g>
    <g id="Group_3092" data-name="Group 3092" transform="translate(68.656 11.921)">
      <path id="Line_679" data-name="Line 679" d="M5.3,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H5.3a1,1,0,0,1,1,1A1,1,0,0,1,5.3,1Z" transform="translate(0)"/>
      <path id="Line_680" data-name="Line 680" d="M2.649,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H2.649a1,1,0,0,1,1,1A1,1,0,0,1,2.649,1Z" transform="translate(7.947)"/>
    </g>
    <g id="Group_3095" data-name="Group 3095" transform="translate(0 0)">
      <g id="Group_3093" data-name="Group 3093">
        <path id="Path_6318" data-name="Path 6318" d="M251.28,206.56H246a1,1,0,1,1,0-2h4.359a6.3,6.3,0,0,1,5.269-5.211,6.28,6.28,0,0,1,12.491.931,1,1,0,0,1-2,0,4.28,4.28,0,0,0-8.56,0,1,1,0,0,1-1,1,4.285,4.285,0,0,0-4.28,4.28A1,1,0,0,1,251.28,206.56Z" transform="translate(-246 -195)"/>
      </g>
      <g id="Group_3094" data-name="Group 3094" transform="translate(18.479 5.28)">
        <path id="Path_6319" data-name="Path 6319" d="M270.56,205.28a1,1,0,0,1-1-1,4.28,4.28,0,0,0-8.56,0,1,1,0,0,1-2,0,6.28,6.28,0,0,1,12.56,0A1,1,0,0,1,270.56,205.28Z" transform="translate(-260 -199)"/>
      </g>
      <path id="Line_681" data-name="Line 681" d="M5.3,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H5.3a1,1,0,0,1,1,1A1,1,0,0,1,5.3,1Z" transform="translate(14.57 11.921)"/>
      <path id="Line_682" data-name="Line 682" d="M2.649,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H2.649a1,1,0,0,1,1,1A1,1,0,0,1,2.649,1Z" transform="translate(9.272 11.921)"/>
    </g>
    <g id="Group_3104" data-name="Group 3104" transform="translate(10.537 54.118)">
      <g id="Group_3099" data-name="Group 3099" transform="translate(31.679)">
        <g id="Group_3098" data-name="Group 3098">
          <g id="Group_3097" data-name="Group 3097">
            <g id="Group_3096" data-name="Group 3096">
              <path id="Path_6320" data-name="Path 6320" d="M292.888,265.737a1,1,0,0,1-1-1v-2.225a3.51,3.51,0,0,1,.882-2.2l3.726-4.866a10.934,10.934,0,0,0,2.243-6.615V238.018h-.361a2.963,2.963,0,0,0-2.96,2.96v7.833a1,1,0,1,1-2,0v-7.833a4.966,4.966,0,0,1,4.96-4.96h1.361a1,1,0,0,1,1,1v11.814a12.944,12.944,0,0,1-2.655,7.831l-3.76,4.911a1,1,0,0,1-.088.1,1.56,1.56,0,0,0-.347.837v2.225A1,1,0,0,1,292.888,265.737Z" transform="translate(-273.214 -235.674)"/>
              <path id="Line_683" data-name="Line 683" d="M0,7.672a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V6.672A1,1,0,0,1,0,7.672Z" transform="translate(15.856)"/>
              <path id="Path_6321" data-name="Path 6321" d="M286.92,242.671h-2V236h2Z" transform="translate(-275.443 -236)"/>
              <path id="Path_6322" data-name="Path 6322" d="M281.961,243.671a1,1,0,0,1-1-.993l-.043-6.671a1,1,0,0,1,.993-1.007h.007a1,1,0,0,1,1,.993l.024,3.706a1,1,0,0,1,.019.2v2.775a1,1,0,0,1-1,1Z" transform="translate(-276.724 -236)"/>
              <path id="Path_6323" data-name="Path 6323" d="M280.726,266.064a1,1,0,0,1-1-1v-2.542a40.282,40.282,0,0,1-2.743-14.558V236a1,1,0,1,1,2,0v11.964a38.289,38.289,0,0,0,2.614,13.851,1.567,1.567,0,0,1,.129.585v2.665A1,1,0,0,1,280.726,266.064Z" transform="translate(-277.983 -236)"/>
            </g>
          </g>
        </g>
        <path id="Path_6324" data-name="Path 6324" d="M285.983,251.3a1,1,0,0,1-1-1,6.287,6.287,0,0,1,6.28-6.28h6.6a1,1,0,0,1,0,2h-6.6a4.285,4.285,0,0,0-4.28,4.28A1,1,0,0,1,285.983,251.3Z" transform="translate(-275.423 -233.115)"/>
      </g>
      <g id="Group_3103" data-name="Group 3103">
        <g id="Group_3102" data-name="Group 3102">
          <g id="Group_3101" data-name="Group 3101">
            <g id="Group_3100" data-name="Group 3100">
              <path id="Path_6325" data-name="Path 6325" d="M260.832,265.737a1,1,0,0,1-1-1v-2.225a1.559,1.559,0,0,0-.346-.837,1,1,0,0,1-.088-.1l-3.761-4.912a12.944,12.944,0,0,1-2.655-7.831V237.018a1,1,0,0,1,1-1h1.361a4.966,4.966,0,0,1,4.96,4.96v7.833a1,1,0,1,1-2,0v-7.833a2.963,2.963,0,0,0-2.96-2.96h-.361v10.814a10.934,10.934,0,0,0,2.242,6.615l3.726,4.866a3.51,3.51,0,0,1,.881,2.2v2.225A1,1,0,0,1,260.832,265.737Z" transform="translate(-253.983 -235.674)"/>
              <path id="Line_684" data-name="Line 684" d="M0,7.672a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V6.672A1,1,0,0,1,0,7.672Z" transform="translate(10.669)"/>
              <path id="Path_6326" data-name="Path 6326" d="M267.141,242.671h-2V236h2Z" transform="translate(-250.093 -236)"/>
              <path id="Path_6327" data-name="Path 6327" d="M270.111,243.671h0a1,1,0,0,1-1-1V239.9a1.006,1.006,0,0,1,.019-.2l.024-3.706a1,1,0,0,1,1-.993h.007a1,1,0,0,1,.993,1.007l-.043,6.671A1,1,0,0,1,270.111,243.671Z" transform="translate(-248.823 -236)"/>
              <path id="Path_6328" data-name="Path 6328" d="M272,266.064a1,1,0,0,1-1-1V262.4a1.565,1.565,0,0,1,.129-.585,38.32,38.32,0,0,0,2.613-13.85V236a1,1,0,1,1,2,0v11.964A40.307,40.307,0,0,1,273,262.522v2.542A1,1,0,0,1,272,266.064Z" transform="translate(-248.218 -236)"/>
            </g>
          </g>
        </g>
        <path id="Path_6329" data-name="Path 6329" d="M268.958,251.3a1,1,0,0,1-1-1,4.285,4.285,0,0,0-4.28-4.28h-6.6a1,1,0,0,1,0-2h6.6a6.287,6.287,0,0,1,6.28,6.28A1,1,0,0,1,268.958,251.3Z" transform="translate(-252.993 -233.115)"/>
      </g>
    </g>
    <path id="Line_685" data-name="Line 685" d="M36.867,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H36.867a1,1,0,0,1,1,1A1,1,0,0,1,36.867,1Z" transform="translate(2.649 50.112)"/>
    <path id="Line_686" data-name="Line 686" d="M13.245,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H13.245a1,1,0,0,1,1,1A1,1,0,0,1,13.245,1Z" transform="translate(63.357 50.112)"/>
  </g>
</svg>`,
      title: "Financing resilience",
      description:
        "Mobilizing dedicated and sustainable funding sources to support resilient infrastructure investments and ongoing risk management",
      path: "/Financing-resilience",
    },
    {
      id: 0,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="87" height="84" viewBox="0 0 87 84">
  <g id="Managing_cybersecurity_risks_" data-name="Managing cybersecurity risks " transform="translate(-614 -475)">
    <path id="Rectangle_1852" data-name="Rectangle 1852" d="M2,2V16H85V2H2M0,0H87V18H0Z" transform="translate(614 475)"/>
    <path id="Rectangle_1853" data-name="Rectangle 1853" d="M2,2V16H85V2H2M0,0H87V18H0Z" transform="translate(614 500)"/>
    <path id="Rectangle_1854" data-name="Rectangle 1854" d="M2,2V16H85V2H2M0,0H87V18H0Z" transform="translate(614 526)"/>
    <g id="Group_3237" data-name="Group 3237" transform="translate(624.765 483.808)">
      <path id="Path_6860" data-name="Path 6860" d="M-19755.99,6302h-30.414a1,1,0,0,1-1-1,1,1,0,0,1,1-1h30.414a1,1,0,0,1,1,1A1,1,0,0,1-19755.99,6302Z" transform="translate(19786.404 -6301)"/>
      <path id="Path_6861" data-name="Path 6861" d="M-19755.99,6302h-30.414a1,1,0,0,1-1-1,1,1,0,0,1,1-1h30.414a1,1,0,0,1,1,1A1,1,0,0,1-19755.99,6302Z" transform="translate(19820.656 -6301)"/>
    </g>
    <g id="Group_3236" data-name="Group 3236" transform="translate(625.742 509.252)">
      <path id="Path_6862" data-name="Path 6862" d="M-19781.74,6328h-4.664a1,1,0,0,1-1-1,1,1,0,0,1,1-1h4.664a1,1,0,0,1,1,1A1,1,0,0,1-19781.74,6328Z" transform="translate(19786.404 -6327)"/>
      <path id="Path_6863" data-name="Path 6863" d="M-19781.74,6328h-4.664a1,1,0,0,1-1-1,1,1,0,0,1,1-1h4.664a1,1,0,0,1,1,1A1,1,0,0,1-19781.74,6328Z" transform="translate(19796.191 -6327)"/>
      <path id="Path_6864" data-name="Path 6864" d="M-19781.74,6328h-4.664a1,1,0,0,1-1-1,1,1,0,0,1,1-1h4.664a1,1,0,0,1,1,1A1,1,0,0,1-19781.74,6328Z" transform="translate(19835.336 -6327)"/>
      <path id="Path_6865" data-name="Path 6865" d="M-19781.74,6328h-4.664a1,1,0,0,1-1-1,1,1,0,0,1,1-1h4.664a1,1,0,0,1,1,1A1,1,0,0,1-19781.74,6328Z" transform="translate(19845.121 -6327)"/>
    </g>
    <g id="Group_3238" data-name="Group 3238" transform="translate(625.745 534.696)">
      <path id="Path_6866" data-name="Path 6866" d="M-19774.434,6354H-19786a1,1,0,0,1-1-1,1,1,0,0,1,1-1h11.57a1,1,0,0,1,1,1A1,1,0,0,1-19774.434,6354Z" transform="translate(19786.004 -6353)"/>
      <path id="Path_6867" data-name="Path 6867" d="M-19774.434,6354H-19786a1,1,0,0,1-1-1,1,1,0,0,1,1-1h11.57a1,1,0,0,1,1,1A1,1,0,0,1-19774.434,6354Z" transform="translate(19837.871 -6353)"/>
    </g>
    <g id="lock" transform="translate(638.465 508.273)">
      <rect id="Rectangle_1690" data-name="Rectangle 1690" width="40" height="29" rx="6" transform="translate(-0.465 20.727)" fill="#fff"/>
      <path id="Rectangle_1690_-_Outline" data-name="Rectangle 1690 - Outline" d="M6-1H34a7.008,7.008,0,0,1,7,7V23a7.008,7.008,0,0,1-7,7H6a7.008,7.008,0,0,1-7-7V6A7.008,7.008,0,0,1,6-1ZM34,28a5.006,5.006,0,0,0,5-5V6a5.006,5.006,0,0,0-5-5H6A5.006,5.006,0,0,0,1,6V23a5.006,5.006,0,0,0,5,5Z" transform="translate(-0.465 20.727)"/>
      <path id="Path_5717" data-name="Path 5717" d="M2172.241,750.017v-8.9a11.121,11.121,0,1,0-22.241,0v8.9Z" transform="translate(-2141.549 -730)" fill="#fff"/>
      <path id="Path_5717_-_Outline" data-name="Path 5717 - Outline" d="M2172.241,751.017H2150a1,1,0,0,1-1-1v-8.9a12.121,12.121,0,0,1,24.241,0v8.9A1,1,0,0,1,2172.241,751.017Zm-21.241-2h20.241v-7.9a10.121,10.121,0,1,0-20.241,0Z" transform="translate(-2141.549 -730)"/>
      <path id="Ellipse_384" data-name="Ellipse 384" d="M5-1A6.659,6.659,0,0,1,9.16.391,4.6,4.6,0,0,1,11,4,4.6,4.6,0,0,1,9.16,7.609,6.659,6.659,0,0,1,5,9,6.659,6.659,0,0,1,.84,7.609,4.6,4.6,0,0,1-1,4,4.6,4.6,0,0,1,.84.391,6.659,6.659,0,0,1,5-1ZM5,7a4.656,4.656,0,0,0,2.911-.952A2.644,2.644,0,0,0,9,4,2.644,2.644,0,0,0,7.911,1.952,4.656,4.656,0,0,0,5,1a4.656,4.656,0,0,0-2.911.952A2.644,2.644,0,0,0,1,4,2.644,2.644,0,0,0,2.089,6.048,4.656,4.656,0,0,0,5,7Z" transform="translate(14.535 30.727)"/>
      <path id="Line_292" data-name="Line 292" d="M0,3A1,1,0,0,1-1,2V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V2A1,1,0,0,1,0,3Z" transform="translate(19.535 38.727)"/>
    </g>
  </g>
</svg>`,
      title: "Managing cybersecurity risks",
      description:
        "Implementing robust safeguards and protocols to protect critical infrastructure from digital threats and service interruptions",
      path: "/Managing-cyber-security-risks",
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
        dir: [{ path: "/qii4", title: "QII.4 Resilience" }],
      })
    );
  }, []);
  return (
    <div className="qii2">
      <section className="q2_landing_page color-dark">
        {/* <img
          className="desk_image"
          src="images/qii4/QII2_Landing_main.png"
          alt=""
        />
        <img
          className="mob_image"
          src="images/qii4/QII2_Landing_main.png"
          alt=""
        /> */}
        {/* <div className="hero-wrapper">
          <img className="desk_image" src="images/qii4/QII2_Landing_main.png" alt="" />
          <img
            className="mob_image"
            src="images/qii4/QII2_Landing_main.png"
            alt=""
          />
          <div className="hero-content">
            <h1 className="light-font">Resilience</h1>
          </div>
        </div> */}
        <section className="color-light landingpage-banner">
          <Header3 img="images/qii4/QII2_Landing_main.png">
            <div className="langing-page-container">
              <img
                src="images/UpdatedAssets/Qii4.svg"
                alt="landing-page-logo"
                className="landingpage-logo"
              />
              <div className="landingpage-description">
                <p className="light-font">
                  Resilience in infrastructure refers to the capacity to
                  withstand, adapt to, and recover from disruptions—whether
                  caused by natural disasters, climate change, or human-made
                  risks. Resilience ensures reliable infrastructure service
                  delivery and reduces the economic disruptions caused by
                  extreme events. Resilience can be especially important in low-
                  and middle-income countries which can lack the system
                  redundancies and emergency response capacity needed in
                  disaster situations.
                </p>
                {/* <p className="bold-text">
                      <strong></strong>
                    </p> */}
              </div>
            </div>
          </Header3>
        </section>
        <section className="">
          <div className="container">
            <div className="center-header">
              <h1 className="light-font mBottom">
                To turn the principle of 'Resilience' into practice, we focus on
                four key actionable aspects:
              </h1>
            </div>
            <div className="sub-pages">
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
        {/* <div className="container">
          <p className="header-text">
            Resilience in infrastructure refers to the capacity to withstand,
            adapt to, and recover from disruptions—whether caused by natural
            disasters, climate change, or human-made risks. Resilience ensures
            reliable infrastructure service delivery and reduces the economic
            disruptions caused by extreme events. Resilience can be especially
            important in low- and middle-income countries which can lack the
            system redundancies and emergency response capacity needed in
            disaster situations.
          </p>
          <div className="header-items-cnt">
            <div className="header-item">
              <label className="item-label">
                <strong>Diagnosing vulnerabilities</strong>
              </label>
            </div>
            <div className="devider"></div>
            <div className="header-item">
              <label className="item-label">
                <strong>Resilient design and operation</strong>
              </label>
            </div>
            <div className="devider"></div>
            <div className="header-item">
              <label className="item-label">
                <strong>Financing resilience</strong>
              </label>
            </div>
            <div className="devider"></div>
            <div className="header-item">
              <label className="item-label">
                <strong>Managing cybersecurity risks</strong>
              </label>
            </div>
          </div>
        </div> */}
      </section>
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
                      "Unlocking the Potential of Life Cycle Costing",
                      1920,
                      1080
                    );
                  }}
                >
                  &#xe91e;
                </button>
                <p className="video-title">
                  <strong>
                    Unlocking The Urgent Need for Resilient Infrastructure
                  </strong>
                </p>
              </div>
            </div>
            <div className="text-cnt">
              <h1 className="light-font mBottom">
                The Benefits of Resilience in Infrastructure
              </h1>
              <h3 className="light-font sub-text">
                Resilient infrastructure strengthens society's capacity to cope
                with shocks and disruptions, unlocking enduring economic,
                social, and operational advantages. Resilience:
              </h3>
              <TextIconCarousal data={textCrData} />
            </div>
          </div>
        </div>
        <Header3 img="images/qii4/QII2_Landing_image2.png">
          <p>
            Resilience is more than a safeguard—it's a foundational principle
            for infrastructure that must withstand, adapt to, and recover from
            shocks to ensure uninterrupted service, especially in rapidly
            changing and vulnerable environments.
          </p>
        </Header3>
      </section>
      <section className="q4_landing_page color-dark">
        <div className="container">
          <div className="qii4-video-card">
            <img
              className="desk_image"
              src="images/qii4/QII 2 in Action poster.png"
              alt=""
            />
            <img
              className="mob_image"
              src="images/qii4/QII 2 in Action poster.png"
              alt=""
            />
            {/* <button
					className="qii4-play-btn"
					onClick={() =>
					openVideo(
						"",
						"QII 4 in Action",
						1920,
						1080
					)
					}
				>
					&#9658;
				</button> */}
            <div className="vid-cnt qii4-vid-cnt">
              <button
                className="video-play-btn icon-play"
                onClick={() => {
                  openVideo(
                    "./video/LandingPageVideo.mp4",
                    "Lessons from Success Stories",
                    1920,
                    1080
                  );
                }}
              >
                &#xe91e;
              </button>
            </div>
            <div className="qii4-video-overlay">
              <p className="qii4-video-title">QII 4 in Action</p>

              <p className="qii4-video-desc">
                The Solomon Islands' adoption of prefabricated modular bridges
                demonstrates an efficient, climate-resilient solution for
                strengthening vital transport infrastructure in the Pacific.
              </p>
              <Link
                target="_blank"
                to="https://blogs.worldbank.org/en/ppps/modular-bridges-climate-resilient-solution-small-bridges-pacific"
              >
                <button className="qii4-video-cta">
                  Explore Case Studies →
                </button>
              </Link>
              {/* <button className="qii4-video-cta">Explore Case Studies →</button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="color-dark ">
        <div className="container">
          <div className="center-header">
            <h1 className="light-font mBottom">Top Resources</h1>
          </div>
          <div className="top-resource-card-cnt-qii4">
            <TopResourceCard
              image="images/qii4/Fukuoka image.png"
              title={<p>World Bank Tokyo Disaster Risk Management (DRM) Hub</p>}
              buttonText="Programs"
              link="https://www.worldbank.org/en/programs/tokyo-drm-hub"
            ></TopResourceCard>
            <TopResourceCard
              image="images/qii4/Ganga-case-study-image.png"
              title={<p>Global Facility For Disaster Reduction And Recovery</p>}
              buttonText="Programs"
              link="https://www.gfdrr.org/en"
            ></TopResourceCard>
          </div>
        </div>
      </section>
      <section className="color-light z-2">
        <ResourceLibrary subPages={subPages}></ResourceLibrary>
      </section>
    </div>
  );
}
