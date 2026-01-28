import React, { useEffect, useState } from "react";
import "./QIILandingPage.css";
// import "./QII4LandingPage.css";
// import "./QII3LandingPage.css";
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
import ImagewithStatement from "../components/ImagewithStatement";

export default function QII3LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [preSelectedResources, setPreSelectedResources] = useState([
    {
      show: true,
      category: "QII Principle",
      title: "QII.3 Environment",
      id: 2,
    },
  ]);
  const textCrData = [
    {
      id: 0,
      icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="128.576" height="92.471" viewBox="0 0 128.576 92.471">
  <g id="Group_3333" data-name="Group 3333" transform="translate(-230.469 -3553.024)">
    <path id="Path_6910" data-name="Path 6910" d="M-18030.5,9582.5h0c-7.42,0-13.77-1.725-18.363-4.986a19.5,19.5,0,0,1-6.184-7.146,24.881,24.881,0,0,1-2.475-10.832,30.26,30.26,0,0,1,1.6-10.791,21.654,21.654,0,0,1,3.9-6.824,17.906,17.906,0,0,1,5.188-4.238,23.12,23.12,0,0,1,.131-5.357,22.146,22.146,0,0,1,1.609-5.8,20.037,20.037,0,0,1,4.072-6.053c4.377-4.46,10.23-5.4,14.371-5.4a27.411,27.411,0,0,1,4.215.322,30.6,30.6,0,0,1,1-3.178,35.777,35.777,0,0,1,4.934-9.031,31.745,31.745,0,0,1,10.676-9.059,39.111,39.111,0,0,1,18.271-4.1c.447,0,.9.006,1.355.017,7.2.182,13.395,1.89,18.4,5.075a28.536,28.536,0,0,1,9.7,10.424,36.231,36.231,0,0,1,3.7,10.206,33.4,33.4,0,0,1,.549,3.793,30.951,30.951,0,0,1,11.9,4.642,27.19,27.19,0,0,1,8.848,9.467,35.527,35.527,0,0,1,4.152,17.158c.092,8.022-1.816,14.793-5.67,20.125a27.127,27.127,0,0,1-11.086,8.9c-5.193,2.284-15.752,2.645-16.2,2.658h-67.717C-18029.922,9582.494-18030.213,9582.5-18030.5,9582.5Zm3.844-65.423c-3.758,0-9.053.832-12.943,4.8a18.792,18.792,0,0,0-5.129,10.725,19.835,19.835,0,0,0-.045,5.5l.141.8-.758.3a15.014,15.014,0,0,0-5.187,4.1c-3.367,3.993-5.076,9.593-4.945,16.191.371,18.956,17.621,21,25.021,21h0c.275,0,.559,0,.84-.008h67.7c.453-.016,10.688-.4,15.443-2.49,5.9-2.587,15.762-9.555,15.561-27.168-.135-11.341-4.182-19.729-12.029-24.932a29.411,29.411,0,0,0-8.174-3.715,23.029,23.029,0,0,0-3.732-.761l-.893-.079-.021-.895a28,28,0,0,0-.578-4.382,34.106,34.106,0,0,0-3.506-9.624c-5.145-9.245-14.014-14.09-26.365-14.4-.436-.012-.875-.017-1.3-.017-11.936,0-21.139,4.161-27.352,12.368a32.3,32.3,0,0,0-5.779,12.336l-.184,1.039-1.027-.24A23.535,23.535,0,0,0-18026.656,9517.074Z" transform="translate(18288 -5937.002)"/>
    <path id="Ellipse_458" data-name="Ellipse 458" d="M10.79,2C5.943,2,2,6.427,2,11.869s3.943,9.869,8.79,9.869,8.79-4.427,8.79-9.869S15.637,2,10.79,2m0-2C16.75,0,21.58,5.314,21.58,11.869S16.75,23.739,10.79,23.739,0,18.424,0,11.869,4.831,0,10.79,0Z" transform="translate(292.592 3593.205)"/>
    <path id="Path_6913" data-name="Path 6913" d="M-18022.072,9535.6c-.33,0-.658-.015-.98-.044a9.079,9.079,0,0,1-6.062-2.921c-1.791-1.989-2.686-4.79-2.662-8.323a15.4,15.4,0,0,1,.824-5.079,10.248,10.248,0,0,1,2.148-3.591,9.521,9.521,0,0,1,6.4-2.944c.223-.014.445-.021.666-.021a9.773,9.773,0,0,1,4.811,1.219,5.577,5.577,0,0,1,2.994,4.028,1,1,0,0,1-.857,1.124,1.041,1.041,0,0,1-.135.009,1,1,0,0,1-.988-.867c-.266-1.976-2.875-3.512-5.83-3.512-.178,0-.355,0-.535.017-1.742.109-7.437,1.127-7.5,9.633-.053,7.766,4.811,9.047,6.9,9.237a9.158,9.158,0,0,0,4.748-.845,3.738,3.738,0,0,0,2.221-2.31,1,1,0,0,1,.982-.826.972.972,0,0,1,.176.016,1,1,0,0,1,.811,1.158,5.513,5.513,0,0,1-3.3,3.756A11.141,11.141,0,0,1-18022.072,9535.6Z" transform="translate(18304.432 -5919.015)"/>
    <path id="Path_6914" data-name="Path 6914" d="M-18004.469,9532.583h-8.152l.3-1.237a5.128,5.128,0,0,1,.932-2.048,14.942,14.942,0,0,1,2.664-2.506c1.6-1.291,3.408-2.755,3.26-4.075l0-.044a1.729,1.729,0,0,0-.682-1.381,2.8,2.8,0,0,0-2.334-.209,2.108,2.108,0,0,0-1.365,1.849,1,1,0,0,1-1,.947h-.053a1,1,0,0,1-.945-1.052,4.606,4.606,0,0,1,.389-1.52,3.725,3.725,0,0,1,2.42-2.146,4.723,4.723,0,0,1,4.035.494,3.647,3.647,0,0,1,1.527,2.861c.254,2.4-2,4.222-3.992,5.831a13.257,13.257,0,0,0-2.336,2.172l-.045.063h5.377a1,1,0,0,1,1,1A1,1,0,0,1-18004.469,9532.583Z" transform="translate(18326.926 -5911.766)"/>
  </g>
</svg>
`,
      text: (
        <>
          <strong>Lock in carbon-intensive pathways</strong> through decisions
          made at the planning and design stages, with emissions persisting
          across decades of operation.
        </>
      ),
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

  const subPages = [
    {
      id: 0,
      icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="75.27" height="89.765" viewBox="0 0 75.27 89.765">
  <g id="Group_3462" data-name="Group 3462" transform="translate(-914.236 -880.745)">
    <path id="Union_5" data-name="Union 5" d="M18999.3-8713.228c-8.279-4.377-13.979-7.492-18.576-10.469-5.164-3.344-8.619-6.3-11.189-9.6a29.961,29.961,0,0,1-5.531-12.265c-1-4.448-1.539-10.015-1.764-18.046v-.033c0-.225.057-22.3.436-26.226a1.085,1.085,0,0,1,.439-.77,1.091,1.091,0,0,1,.625-.2,1.091,1.091,0,0,1,.248.028,37.238,37.238,0,0,0,8.414.994,34.288,34.288,0,0,0,19.67-6.331,33.494,33.494,0,0,0,6.875-6.292,1.086,1.086,0,0,1,.861-.435,1.115,1.115,0,0,1,.859.43,33.407,33.407,0,0,0,6.928,6.335,34.255,34.255,0,0,0,19.607,6.293,37.321,37.321,0,0,0,8.424-.994,1.02,1.02,0,0,1,.238-.028,1.088,1.088,0,0,1,.627.2,1.029,1.029,0,0,1,.439.77c.387,3.928.578,7.96.578,11.982,0,11.357-.139,19.174-.818,25.494-.74,6.924-2.139,11.858-4.529,15.991s-5.867,7.64-11.27,11.367c-5.328,3.674-12.475,7.52-20.588,11.806a1.124,1.124,0,0,1-.5.119A1.163,1.163,0,0,1,18999.3-8713.228Zm-34.906-50.425c.369,13.6,1.568,22.26,6.842,29.034,4.912,6.3,12.857,10.913,28.572,19.217,16.3-8.614,25.766-13.9,30.5-22.068,4.553-7.889,5.051-18.892,5.051-40.416,0-3.535-.148-7.09-.449-10.568a38.887,38.887,0,0,1-7.7.793,35.433,35.433,0,0,1-12.049-2.106,37.876,37.876,0,0,1-8.85-4.615,37.706,37.706,0,0,1-6.5-5.738,38.139,38.139,0,0,1-6.508,5.738,37.723,37.723,0,0,1-8.844,4.615,35.425,35.425,0,0,1-12.055,2.106,38.531,38.531,0,0,1-7.668-.788C18964.439-8782.577,18964.391-8763.978,18964.391-8763.652Zm35.266,38.834a1,1,0,0,1-.436-.1,66.422,66.422,0,0,1-12.131-6.354c-3.182-2.26-6.766-4.605-8.672-6.966-2.531-3.135-4.5-6.207-4.562-8.959,0,0-.143-1.48-.225-2.766s-.109-2.862-.109-2.862a1.063,1.063,0,0,1,.32-.76,1.065,1.065,0,0,1,.764-.315,1.082,1.082,0,0,1,1.07,1.075s.072,2.628.168,4.138a11.286,11.286,0,0,0,.205,1.906c.961,5.738,7.76,10.54,12.289,13.755,3.492,2.476,8.025,4.349,10.143,5.385v-6.761a52.178,52.178,0,0,0-.264-5.27c-.051-.521-.109-1.013-.172-1.409a35.483,35.483,0,0,0-.816-3.794c-.158-.583-.334-1.166-.516-1.739q-.486-1.49-1.09-2.909a12.645,12.645,0,0,1-6.205-1,13.155,13.155,0,0,1-5.238-4.237,18.256,18.256,0,0,1-3.424-9.7,24.219,24.219,0,0,1,2.188-11.691,1.073,1.073,0,0,1,.822-.621,1.082,1.082,0,0,1,.969.349,30.619,30.619,0,0,0,4.955,3.961,45.224,45.224,0,0,1,7.381,6.039,12.218,12.218,0,0,1,2.438,3.938,13.007,13.007,0,0,1,.875,4.84,1.081,1.081,0,0,1-1.09,1.07,1.082,1.082,0,0,1-1.066-1.09,10.694,10.694,0,0,0-2.742-7.3,43.5,43.5,0,0,0-7.037-5.738,48.379,48.379,0,0,1-4.137-3.119c-2.395,6.378-1.816,13.21,1.6,17.764a10.461,10.461,0,0,0,8.738,4.419,35.49,35.49,0,0,0-5.375-7.816,1.1,1.1,0,0,1,.033-1.52,1.077,1.077,0,0,1,1.547.053,37.526,37.526,0,0,1,4.625,6.307,37.943,37.943,0,0,1,3.287,7.329c.2.607.383,1.224.551,1.84.229.846.43,1.7.6,2.556a22.178,22.178,0,0,1,2.016-4.094c.092-.134.178-.272.268-.406-1.1-4.511-.02-8.485,3.086-11.224a12.78,12.78,0,0,1,3.809-2.283,16.857,16.857,0,0,1,4.629-1.061,22.21,22.21,0,0,1,10.383,1.672,1.073,1.073,0,0,1,.65.8,1.076,1.076,0,0,1-.32.979,26.354,26.354,0,0,0-3.2,4.3,38.575,38.575,0,0,1-4.943,6.493,10.814,10.814,0,0,1-3.33,2.227,11.671,11.671,0,0,1-1.463.506,11.522,11.522,0,0,1-2.7.393,1.083,1.083,0,0,1-1.1-1.052,1.081,1.081,0,0,1,1.051-1.108,8.911,8.911,0,0,0,6.021-2.5,37.134,37.134,0,0,0,4.658-6.134c.813-1.252,1.6-2.451,2.4-3.45-5.729-1.9-11.658-1.218-15.117,1.835a8.209,8.209,0,0,0-2.732,7.3c.271-.3.549-.588.836-.865a18.2,18.2,0,0,1,4.289-3.072,1.086,1.086,0,0,1,1.459.464,1.079,1.079,0,0,1-.465,1.452,15.967,15.967,0,0,0-6.344,5.892,21.2,21.2,0,0,0-2.666,6.54l-.029.129a18.487,18.487,0,0,0-.42,3.976v7.635a68.413,68.413,0,0,0,10.242-5.48c4.119-2.924,9.566-7.577,10.727-12.728a1.071,1.071,0,0,1,1.137-.836,1.1,1.1,0,0,1,.779.435,1.093,1.093,0,0,1,.178.874,17.338,17.338,0,0,1-3.6,6.947,41.085,41.085,0,0,1-7.975,7.062,66.741,66.741,0,0,1-12.035,6.354,1,1,0,0,1-.426.1Zm25.168-48.041v-3.487a12.031,12.031,0,0,0-.08-1.443,52.122,52.122,0,0,1-11.635-2.217,38.647,38.647,0,0,1-12.078-6.827,1,1,0,0,1-.1-1.41,1,1,0,0,1,1.41-.1,37.261,37.261,0,0,0,11.375,6.436,49.3,49.3,0,0,0,11.906,2.164,1,1,0,0,1,.932.731,10.805,10.805,0,0,1,.268,2.671v3.487a1,1,0,0,1-1,1A1,1,0,0,1,19024.824-8772.859Z" transform="translate(-18048 9683.618)"/>
  </g>
</svg>
`,
      title: "Quality Environmental Standards",
      description: "",
      path: "/QualityEnvironmentalStandards",
    },
    {
      id: 0,
      icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="97.336" height="91.317" viewBox="0 0 97.336 91.317">
  <g id="Group_3422" data-name="Group 3422" transform="translate(1 1)">
    <path id="Line_975" data-name="Line 975" d="M9.995,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H9.995a1,1,0,0,1,1,1A1,1,0,0,1,9.995,1Z" transform="translate(49.206 59.201)"/>
    <path id="Path_7181" data-name="Path 7181" d="M2064.442,4123.115h-19.221a20.221,20.221,0,1,1,0-40.442c.181,0,.368,0,.56.009a21.76,21.76,0,0,1,33.545-17.286,21.813,21.813,0,0,1,7.312,7.891,11.372,11.372,0,0,1,18.015,9.232,11.194,11.194,0,0,1-.282,2.491,19.063,19.063,0,0,1,12.249,32.651,1,1,0,0,1-1.4-1.428,17.068,17.068,0,0,0-11.951-29.254l-.077,0c-.048,0-.1.005-.144,0a1,1,0,0,1-.943-1.333,9.365,9.365,0,0,0-15.128-10.069,1,1,0,0,1-1.577-.315,19.759,19.759,0,0,0-37.641,8.405v.009c0,.019,0,.038,0,.057a1,1,0,0,1-1.078,1c-.542-.042-1.02-.063-1.461-.063a18.221,18.221,0,1,0,0,36.442h19.221a1,1,0,0,1,0,2Z" transform="translate(-2026 -4062.914)"/>
    <path id="Path_7182" data-name="Path 7182" d="M2047.3,4128.215a13.317,13.317,0,0,1-13.3-13.3,1,1,0,0,1,2,0,11.314,11.314,0,0,0,11.3,11.3,1,1,0,0,1,0,2Z" transform="translate(-2028.081 -4074.934)"/>
    <path id="Path_7183" data-name="Path 7183" d="M2062.258,4084.414a1,1,0,0,1-.987-1.169,14.862,14.862,0,0,1,14.627-12.331,14.676,14.676,0,0,1,6.216,1.376,1,1,0,0,1-.841,1.814,12.818,12.818,0,0,0-18.031,9.478A1,1,0,0,1,2062.258,4084.414Z" transform="translate(-2034.381 -4064.995)"/>
    <path id="Path_7184" data-name="Path 7184" d="M2137.614,4114.063a1,1,0,0,1-1-1,10.17,10.17,0,0,0-10.079-10.148l-.155,0h-.029a1,1,0,0,1-.028-2l.172,0h.033a12.161,12.161,0,0,1,12.085,12.148A1,1,0,0,1,2137.614,4114.063Z" transform="translate(-2049.198 -4071.93)"/>
    <path id="Line_976" data-name="Line 976" d="M4.613,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H4.613a1,1,0,0,1,1,1A1,1,0,0,1,4.613,1Z" transform="translate(69.964 59.201)"/>
    <path id="Path_7185" data-name="Path 7185" d="M2067.226,4121.517h-1.538a8.7,8.7,0,0,1-8.689-8.689V4103.6a8.7,8.7,0,0,1,8.689-8.688h1.538a8.7,8.7,0,0,1,8.688,8.688,1,1,0,0,1-2,0,6.7,6.7,0,0,0-6.688-6.688h-1.538A6.7,6.7,0,0,0,2059,4103.6v9.225a6.7,6.7,0,0,0,6.689,6.689h1.538a6.7,6.7,0,0,0,6.688-6.689,1,1,0,0,1,2,0A8.7,8.7,0,0,1,2067.226,4121.517Z" transform="translate(-2033.397 -4070.543)"/>
    <path id="Rectangle_1869" data-name="Rectangle 1869" d="M8.457-1a9.468,9.468,0,0,1,9.457,9.457v7.688A9.457,9.457,0,0,1-1,16.146V8.457A9.468,9.468,0,0,1,8.457-1Zm0,24.6a7.466,7.466,0,0,0,7.457-7.457V8.457A7.457,7.457,0,1,0,1,8.457v7.688A7.466,7.466,0,0,0,8.457,23.6Z" transform="translate(46.899 25.372)"/>
    <path id="Path_7186" data-name="Path 7186" d="M2074.723,4159.648a2.53,2.53,0,0,1-1.793-.741l-9.358-9.359a2.537,2.537,0,0,1,1.794-4.332h4.514v-1.308a1,1,0,0,1,2,0v2.308a1,1,0,0,1-1,1h-5.514a.537.537,0,0,0-.38.918l9.358,9.358a.54.54,0,0,0,.761,0l9.357-9.358a.538.538,0,0,0-.38-.918h-5.514a1,1,0,0,1-1-1v-12.3a1,1,0,0,1,2,0v11.3h4.514a2.538,2.538,0,0,1,1.794,4.332l-9.358,9.358A2.532,2.532,0,0,1,2074.723,4159.648Z" transform="translate(-2034.743 -4079.327)"/>
    <path id="Path_7187" data-name="Path 7187" d="M2101.723,4169.644h0a2.518,2.518,0,0,1-1.794-.744l-9.357-9.357a2.537,2.537,0,0,1,1.793-4.332h4.515v-11.3a1,1,0,0,1,2,0v12.3a1,1,0,0,1-1,1h-5.515a.538.538,0,0,0-.38.917l9.358,9.358a.532.532,0,0,0,.38.158h0a.532.532,0,0,0,.38-.158l9.358-9.358a.538.538,0,0,0-.38-.918h-5.514a1,1,0,0,1-1-1v-22.3a1,1,0,0,1,2,0v21.3h4.514a2.538,2.538,0,0,1,1.794,4.333l-9.358,9.357A2.52,2.52,0,0,1,2101.723,4169.644Z" transform="translate(-2040.985 -4079.327)"/>
    <path id="Path_7188" data-name="Path 7188" d="M2123.688,4129.248H2116.9a1,1,0,0,1-.845-1.535l1.751-2.766a5.963,5.963,0,0,1,2.989-2.509,2.85,2.85,0,0,0,1.889-2.678,2.9,2.9,0,0,0-2.845-2.847,2.848,2.848,0,0,0-2.844,2.844,1,1,0,0,1-2,0,4.851,4.851,0,0,1,4.843-4.844,4.9,4.9,0,0,1,4.845,4.847,4.853,4.853,0,0,1-3.216,4.561,4.052,4.052,0,0,0-1.972,1.7l-.78,1.231h4.968a1,1,0,0,1,0,2Z" transform="translate(-2046.805 -4075.165)"/>
    <path id="Path_7189" data-name="Path 7189" d="M2032.966,4145.012a30.8,30.8,0,0,1,9.373,1.289,16.139,16.139,0,0,1,10.954,10.866,30.616,30.616,0,0,1,1.332,9.5,1,1,0,0,1-.96,1c-.5.02-.994.03-1.475.03-6.588,0-11.664-1.868-15.089-5.552-3.407-3.665-5.134-9.093-5.134-16.136A1,1,0,0,1,2032.966,4145.012Zm19.647,20.685c-.146-6.309-1.73-10.877-4.831-13.945-3.06-3.027-7.582-4.578-13.8-4.728.154,6.025,1.694,10.651,4.586,13.762,3.031,3.26,7.615,4.914,13.624,4.914Z" transform="translate(-2027.611 -4082.123)"/>
    <path id="Line_977" data-name="Line 977" d="M11.5,12.54a1,1,0,0,1-.708-.294L-.708.706a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0l11.5,11.54A1,1,0,0,1,11.5,12.54Z" transform="translate(14.512 73.007)"/>
    <path id="Path_7190" data-name="Path 7190" d="M2138.559,4137.874a1,1,0,0,1,1,1c0,5.06-1.249,8.968-3.712,11.617-2.481,2.669-6.146,4.022-10.893,4.022-.344,0-.7-.007-1.053-.021a1,1,0,0,1-.96-1,21.954,21.954,0,0,1,.957-6.817,11.711,11.711,0,0,1,7.939-7.876A22.082,22.082,0,0,1,2138.559,4137.874Zm-13.6,14.639c4.167,0,7.338-1.139,9.425-3.384,1.948-2.095,3.008-5.2,3.158-9.238-4.164.146-7.2,1.214-9.259,3.251C2126.192,4145.21,2125.1,4148.282,2124.957,4152.513Z" transform="translate(-2048.64 -4080.473)"/>
  </g>
</svg>
`,
      title: "Decarbonizing Infrastructure",
      description: "",
      path: "/DecarbonizingInfrastructure",
    },
    {
      id: 0,
      icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="84.659" height="84.809" viewBox="0 0 84.659 84.809">
  <g id="green_city" data-name="green city" transform="translate(-107.439 -107)">
    <g id="Group_3350" data-name="Group 3350" transform="translate(131.144 120.02)">
      <path id="Path_6926" data-name="Path 6926" d="M260.466,218.4a1,1,0,0,1-1-1V187.345l-15.412-6.421a1,1,0,1,1,.769-1.846l16.027,6.678a1,1,0,0,1,.615.923V217.4A1,1,0,0,1,260.466,218.4Z" transform="translate(-244.439 -180)"/>
    </g>
    <path id="Path_6927" data-name="Path 6927" d="M316.452,453.027a9.013,9.013,0,1,1,9.013-9.012A9.023,9.023,0,0,1,316.452,453.027Zm0-16.027a7.013,7.013,0,1,0,7.013,7.015A7.022,7.022,0,0,0,316.452,437Z" transform="translate(-166.611 -273.241)"/>
    <path id="Path_6928" data-name="Path 6928" d="M356.439,509.46a1,1,0,0,1-1-1V491.987a1,1,0,0,1,.293-.707l2.671-2.674a1,1,0,1,1,1.415,1.414l-2.379,2.381V508.46A1,1,0,0,1,356.439,509.46Z" transform="translate(-206.597 -317.654)"/>
    <path id="Path_6929" data-name="Path 6929" d="M188.452,405.027a9.013,9.013,0,1,1,9.013-9.012A9.023,9.023,0,0,1,188.452,405.027Zm0-16.027a7.013,7.013,0,1,0,7.013,7.015A7.022,7.022,0,0,0,188.452,389Z" transform="translate(-59.98 -233.255)"/>
    <path id="Path_6930" data-name="Path 6930" d="M228.439,462.8a1,1,0,0,1-1-1V443.987a1,1,0,0,1,.293-.707l2.671-2.674a1,1,0,0,1,1.415,1.414l-2.379,2.381V461.8A1,1,0,0,1,228.439,462.8Z" transform="translate(-99.966 -277.667)"/>
    <g id="Group_3352" data-name="Group 3352" transform="translate(108.439 113.342)">
      <g id="Group_3351" data-name="Group 3351" transform="translate(58.765 50.746)">
        <path id="Path_6931" data-name="Path 6931" d="M468.946,471.686a13.378,13.378,0,0,1-2.916-.314,14.435,14.435,0,0,1-5.682-2.584,1,1,0,1,1,1.259-1.554,12.541,12.541,0,0,0,4.859,2.186,14.522,14.522,0,0,0,13.314-4.625c3.547-4.084,3.811-9.14,3.409-12.662a25.262,25.262,0,0,0-1.436-5.958,7.351,7.351,0,0,1-2.7,2.27,19.668,19.668,0,0,1-5.007,1.473c-2.92.593-5.939,1.207-8.515,3.644a12.686,12.686,0,0,0-4.1,8.825,1,1,0,0,1-2,0,13.231,13.231,0,0,1,.952-4.728,15.253,15.253,0,0,1,3.768-5.55c2.991-2.83,6.444-3.532,9.491-4.151,3.358-.683,6.011-1.222,7.225-4.349a1.007,1.007,0,0,1,.9-.643c.713-.027,1.007.582,1.265,1.119a26.465,26.465,0,0,1,2.235,8.92,20.326,20.326,0,0,1-.557,6.565,16.1,16.1,0,0,1-3.43,6.535,16.654,16.654,0,0,1-6.9,4.6A16.21,16.21,0,0,1,468.946,471.686Z" transform="translate(-460.439 -443.966)"/>
      </g>
      <path id="Path_6932" data-name="Path 6932" d="M149.842,218.464a42.368,42.368,0,0,1-42.4-42.4V154.691a1,1,0,0,1,.457-.84l22.7-14.691a1,1,0,0,1,1.543.84v36.061a1,1,0,0,1-2,0V141.838l-20.7,13.4v20.825a40.449,40.449,0,0,0,40.4,40.4c14.608,0,26.762-4.892,32.514-13.086a1,1,0,0,1,1.637,1.149,26.547,26.547,0,0,1-6.37,6.33,36.141,36.141,0,0,1-8.261,4.324A56.116,56.116,0,0,1,149.842,218.464Z" transform="translate(-108.439 -140)"/>
    </g>
    <g id="Group_3353" data-name="Group 3353" transform="translate(161.862 129.369)">
      <path id="Line_827" data-name="Line 827" d="M0,17.027a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V16.027A1,1,0,0,1,0,17.027Z" transform="translate(12.02 18.698)"/>
      <path id="Line_828" data-name="Line 828" d="M0,14.356a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V13.356A1,1,0,0,1,0,14.356Z" transform="translate(12.02 0)"/>
      <path id="Line_829" data-name="Line 829" d="M0,7.678a1,1,0,0,1-.875-.515A1,1,0,0,1-.486,5.8L11.535-.874a1,1,0,0,1,1.36.389,1,1,0,0,1-.389,1.36L.486,7.552A1,1,0,0,1,0,7.678Z" transform="translate(0 13.356)"/>
      <path id="Line_830" data-name="Line 830" d="M12.019,7.678a1,1,0,0,1-.485-.126L-.486.874A1,1,0,0,1-.874-.486,1,1,0,0,1,.486-.874L12.506,5.8a1,1,0,0,1-.487,1.874Z" transform="translate(12.02 13.356)"/>
    </g>
    <path id="Path_6933" data-name="Path 6933" d="M369.822,411.678h-5.342c-4.266,0-7.436-1.761-10.5-3.465C351,406.561,348.193,405,344.446,405h-4.007a1,1,0,0,1,0-2h4.007c4.266,0,7.436,1.761,10.5,3.465,2.974,1.652,5.784,3.213,9.531,3.213h5.342a1,1,0,0,1,0,2Z" transform="translate(-193.268 -246.584)"/>
    <path id="Path_6934" data-name="Path 6934" d="M308.479,143.725a1,1,0,0,1-1-1V109h-22.04v13.691a1,1,0,1,1-2,0V108a1,1,0,0,1,1-1h24.04a1,1,0,0,1,1,1v34.725A1,1,0,0,1,308.479,143.725Z" transform="translate(-146.617)"/>
  </g>
</svg>
`,
      title: "Green Designs and Nature-Based Infrastructure",
      description: "",
      path: "/GreenDesigns&Nature-BasedInfrastructure",
    },
    {
      id: 0,
      icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="80.534" height="81.659" viewBox="0 0 80.534 81.659">
  <path id="Path_7201" data-name="Path 7201" d="M307.536,417.346a15.664,15.664,0,1,0,0,22.152,15.664,15.664,0,0,0,0-22.152Zm-11.076-6.761a17.837,17.837,0,1,1-17.837,17.837,17.837,17.837,0,0,1,17.837-17.837Zm-18.682-6.948c-2.062,5.276-4.072,10.414-15.707,11.783A36.767,36.767,0,0,0,292.824,465a1.083,1.083,0,0,1-.212,2.156A38.946,38.946,0,0,1,260,414.759c-3.723-3.222-4.5-7.562-3.264-11.854,1.386-4.8,5.165-9.088,9.5-11.8,6.474-4.049,15.135-5.289,23.03.031h0a1.085,1.085,0,0,1-.33,1.947c-7.844,2.071-9.521,6.361-11.159,10.553ZM263.041,413.1a36.816,36.816,0,0,1,6.41-9.608,1.084,1.084,0,1,0-1.6-1.469,38.971,38.971,0,0,0-6.973,10.587,8.87,8.87,0,0,1-2.063-9.1c1.234-4.276,4.691-8.136,8.566-10.56,5.27-3.3,12.136-4.533,18.627-1.218-6.9,2.532-8.593,6.87-10.254,11.118-1.746,4.468-3.449,8.823-12.717,10.254Zm52.1,40.106c2.062-5.276,4.071-10.413,15.7-11.783a36.765,36.765,0,0,0-30.708-49.576,1.083,1.083,0,1,1,.212-2.156,38.951,38.951,0,0,1,32.567,52.395c3.721,3.222,4.5,7.561,3.263,11.853-1.386,4.8-5.165,9.088-9.5,11.8-6.474,4.049-15.135,5.289-23.029-.031h0a1.085,1.085,0,0,1,.33-1.947c7.844-2.071,9.521-6.361,11.159-10.553Zm14.735-9.464a36.8,36.8,0,0,1-6.591,9.8,1.084,1.084,0,0,0,1.579,1.486,39,39,0,0,0,7.175-10.8,8.87,8.87,0,0,1,2.062,9.1c-1.235,4.276-4.691,8.136-8.566,10.56-5.27,3.3-12.136,4.533-18.627,1.218,6.9-2.532,8.593-6.87,10.254-11.118,1.746-4.468,3.449-8.822,12.715-10.253Zm-17.537-31.2a22.458,22.458,0,1,1-31.76,0,22.458,22.458,0,0,1,31.76,0Zm-15.88-8.751a24.631,24.631,0,1,1-24.631,24.631,24.632,24.632,0,0,1,24.631-24.631ZM290.6,432.545a1.087,1.087,0,0,1,2.173,0c0,2.724,3.963,4.076,6.21,2.1a2.8,2.8,0,0,0,1-2.1c0-5.1-9.227-.885-9.227-8.245a5.4,5.4,0,0,1,4.692-5.117v-1.524a1.087,1.087,0,1,1,2.173,0v1.524a5.4,5.4,0,0,1,4.692,5.117,1.087,1.087,0,1,1-2.173,0c0-2.724-3.963-4.076-6.21-2.1a2.8,2.8,0,0,0-1,2.1c0,5.026,9.227.831,9.227,8.245a5.376,5.376,0,0,1-4.535,5.088v1.554a1.087,1.087,0,1,1-2.173,0v-1.5A5.416,5.416,0,0,1,290.6,432.545Z" transform="translate(-256.192 -387.593)" fill-rule="evenodd"/>
</svg>
`,
      title: "Green Financing for Infrastructure",
      description: "",
      path: "/GreenFinancingforInfrastructure",
    },
  ];

  const resourceArray = [
    {
      id: 0,
      title: "Environmental and Social Framework World Bank (2017)",
      description:
        "This framework provides a replicable approach for integrating E&S considerations into infrastructure projects through ten standards, ensuring sustainable and responsible infrastructure development across the project lifecycle. ",
      img_path:
        "images/qii3/Environmental and Social Framework World Bank (2017).png",
      path: "https://thedocs.worldbank.org/en/doc/837721522762050108-0290022018/original/ESFFramework.pdf#page=29&zoom=80",
      target: "_self",
    },
    {
      id: 1,
      title: "Climate Toolkits for Infrastructure PPPs World Bank",
      description:
        "This toolkit offers practical, step-by-step guidance to integrate climate mitigation and adaptation measures into infrastructure PPPs, helping structure bankable projects that align with climate policies, assess climate risks, and incorporate climate solutions that are technically and financially feasible.",
      img_path:
        "images/qii3/Climate Toolkits for Infrastructure PPPs World Bank.png",
      path: "https://documents1.worldbank.org/curated/en/099120004052270615/pdf/P1746330d584ff0210a9670dcf49a5becb0.pdf",
      target: "_blank",
    },
    {
      id: 2,
      title:
        "IFC Performance Standards on Environmental and Social Sustainability",
      description:
        "These standards provide a globally recognized framework to identify and manage E&S risks in infrastructure investments, covering a range of key environmental topics including resource efficiency, pollution prevention, and biodiversity conservation.",
      img_path:
        "images/qii3/IFC Performance Standards on Environmental and Social Sustainability.png",
      path: "https://www.ifc.org/en/insights-reports/2012/ifc-performance-standards",
      target: "_blank",
    },
    {
      id: 3,
      title: "Infrastructure for a Climate-Resilient Future OECD (2024)",
      description:
        "This report provides evidence-based strategies for building climate-resilient infrastructure systems, covering adaptation planning, financing mechanisms, nature-based solutions, and governance frameworks.",
      img_path:
        "images/qii3/Infrastructure for a Climate Resilient Future OECD (2024).png",
      path: "https://doi.org/10.1787/a74a45b0-en",
      target: "_blank",
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
        dir: [{ path: "/qii3", title: "QII.3 Environment" }],
      }),
    );
  }, []);
  return (
    <div className="qii2">
      <section className="q2_landing_page color-dark">
        <section className="color-light landingpage-banner">
          <Header3 img="images/qii3/QII3_Landing_main.png">
            <div className="langing-page-container">
              <img
                src="images/UpdatedAssets/Qii3.svg"
                alt="landing-page-logo"
                className="landingpage-logo"
              />
              <div className="landingpage-description">
                <p className="light-font">
                  Infrastructure accounts for ~79% of global greenhouse gas
                  emissions, but can also be a driver of environmental solutions
                  through renewable energy, climate-smart transport, and designs
                  that work with nature. <br />
                  QII 3 supports efforts to move beyond "do-no-harm" to actively
                  promoting positive environmental outcomes throughout a
                  project's lifecycle.
                </p>
                {/* <p className="bold-text">
                      <strong></strong>
                    </p> */}
              </div>
            </div>
          </Header3>
        </section>
        <div className="container internal-pages-cards">
          <div className="center-header">
            <h1 className="light-font mBottom">
              Pathways to Integrating Environmental Value
            </h1>
            {/* <h3 className="light-font">
              
            </h3> */}
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
      <ImagewithStatement
        backgroundImage={"images/qii3/shutterstock_708204115.png"}
        text={
          "By accounting for climate impacts, biodiversity risks, and ecosystem services from project conception through delivery, infrastructure becomes a driver of environmental regeneration rather than degradation."
        }
      />
      <section className="color-light">
        <div className="container ">
          <div className="video-text-cnt">
            <div className="video-text-box">
              <img src="images/qii3/Video1_thumbnail.png" alt="" />
              <div className="vid-cnt">
                <button
                  className="video-play-btn icon-play"
                  onClick={() => {
                    openVideo(
                      "./video/LandingPageVideo.mp4",
                      "The Environmental Challenge and Opportunity",
                      1920,
                      1080,
                    );
                  }}
                >
                  &#xe91e;
                </button>
                <p className="video-title">
                  <strong>The Environmental Challenge and Opportunity</strong>
                </p>
              </div>
            </div>
            <div className="text-cnt">
              {/* <h1 className="light-font mBottom">
                Infrastructure's Environmental Footprint
              </h1> */}
              <h3 className="light-font sub-text">
                Infrastructure shapes environmental outcomes for generations.
                Without intentional action, projects can:
              </h3>
              <TextIconCarousal data={textCrData} />
            </div>
          </div>
        </div>
      </section>
      <section className="container internal-pages-container color-dark">
        <h3 className="statement-text">
          <strong> Infrastructure's Environmental Footprint</strong>
        </h3>
        <h1 className="light-font "></h1>
      </section>
      <section className="qii_video_landing_page color-light">
        <img
          className="qii_video-thumbnail-image"
          src="images/qii3/Highlight_video_thumbnail.png"
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
          <p className="video-title">Lessons from Success Stories</p>
          <p className="video-desc">
            How Belgrade transformed decades of waste into clean energy,
            pioneering a new model for sustainable infrastructure in emerging
            markets.
          </p>
          <Link to="/qii3casestudy1">
            <button className="btn-primary qii2-video-cta">
              Explore Case Study <span className="icon-arrow">&#xe900;</span>
            </button>
          </Link>
        </div>
      </section>
      {/* <section className="q4_landing_page color-dark">
        <div className="container">
          <div className="qii4-video-card">
            <img
              className="desk_image"
              src="images/qii3/Highlight_video_thumbnail.png"
              alt=""
            />
            <img
              className="mob_image"
              src="images/qii3/Highlight_video_thumbnail.png"
              alt=""
            />
            <div className="vid-cnt qii4-vid-cnt">
              <button
                className="video-play-btn icon-play"
                onClick={() => {
                  openVideo(
                    "./video/LandingPageVideo.mp4",
                    "Lessons from Success Stories ",
                    1920,
                    1080,
                  );
                }}
              >
                &#xe91e;
              </button>
            </div>
            <div className="qii4-video-overlay">
              <p className="qii4-video-title">Lessons from Success Stories</p>
              <p className="qii4-video-desc">
                How Belgrade transformed decades of waste into clean energy,
                pioneering a new model for sustainable infrastructure in
                emerging markets.
              </p>

              <button className="qii4-video-cta">Explore Case Studies →</button>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="color-dark ">
        <div className="container">
          <div className="center-header">
            <h1 className="light-font mBottom">Top Resources</h1>
          </div>
          <div className="top-resource-card-cnt-qii4">
            <TopResourceCard
              image="images/qii3/Environmental and Social Framework World Bank (2017).png"
              title={
                <p>Environmental and Social Framework World Bank (2017) </p>
              }
              buttonText="Programs"
              link="https://thedocs.worldbank.org/en/doc/837721522762050108-0290022018/original/ESFFramework.pdf#page=29&zoom=80"
            ></TopResourceCard>
            <TopResourceCard
              image="images/qii3/Climate Toolkits for Infrastructure PPPs World Bank.png"
              title={
                <p>Climate Toolkits for Infrastructure PPPs World Bank </p>
              }
              buttonText="Programs"
              link="https://documents1.worldbank.org/curated/en/099120004052270615/pdf/P1746330d584ff0210a9670dcf49a5becb0.pdf"
            ></TopResourceCard>
            <TopResourceCard
              image="images/qii3/IFC Performance Standards on Environmental and Social Sustainability.png"
              title={
                <p>
                  IFC Performance Standards on Environmental and Social Sustainability{" "}
                </p>
              }
              buttonText="Programs"
              link="https://www.ifc.org/en/insights-reports/2012/ifc-performance-standards"
            ></TopResourceCard>
            <TopResourceCard
              image="images/qii3/Infrastructure for a Climate Resilient Future OECD (2024).png"
              title={
                <p>
                  Infrastructure for a Climate-Resilient Future OECD (2024){" "}
                </p>
              }
              buttonText="Programs"
              link="https://doi.org/10.1787/a74a45b0-en"
            ></TopResourceCard>
          </div>
        </div>
      </section> */}
      <section className="color-dark">
        <div className="container">
          <h2 className="section-title light-font">QII.3 Case Studies</h2>
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
                    title: "QII.3 Environment",
                    id: 2,
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
