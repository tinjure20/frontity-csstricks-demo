// src/components/styles/font-face.js
import React from "react";
import { css, Global } from "frontity";

import SourceSansProBold from "../fonts/source-sans-pro-latin-700.woff2";
import PtSansNarrow from "../fonts/pt-sans-narrow-latin-regular.woff2";
import PtSerif from "../fonts/pt-serif-latin-regular.woff2";
import PtSerifItalic from "../fonts/pt-serif-latin-italic.woff2";

const FontFace = () => (
  <Global
     styles={css`
        @font-face {
            font-family: "SourceSansPro";
            src: url(${SourceSansProBold}) format("woff2");
            font-weight: 700;
            font-style: normal;
            font-display: swap;
        }
     
        @font-face {
            font-family: "PtSansNarrow";
            src: url(${PtSansNarrow}) format("woff2");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

      @font-face {
         font-family: "PtSerif";
         src: url(${PtSerif}) format("woff2");
         font-weight: normal;
         font-style: normal;
         font-display: swap;
      }

      @font-face {
        font-family: "PtSerifItalic";
        src: url(${PtSerifItalic}) format("woff2");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
     }
   `}
  />
);

export default FontFace;
