// src/components/styles/globalStyles.js
import { css } from "frontity";

const settings = css`
  :root {
    --system-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    --code-family: Menlo, 'Roboto Mono', Courier New, monospace;

    --header-family: 'SourceSansPro', var(--system-family);
    --body-family: 'PtSerif', var(--system-family);
    --meta-family: 'PtSansNarrow', var(--system-family);
    --body-background: #f7f7f7;
    --header-color: #404040;
    --background-footer: #e6e6e6;
    --button-background: #5183f5;
   
    --color-brand: #3291f1;
    --color-brand-light: #b1eaf5;
    --color-text: #414141;
    --color-text-medium: rgba(96,101,108,0);
    --color-text-light: rgb(184, 185, 188);
    --color-border: #e1e5e8;

    --color-link: #414141;
    --color-link-darker: #364fc7;
    
    --wide-container: clamp(16rem, 90vw, 80rem);
    --normal-container: clamp(16rem, 90vw, 58rem);
  }
`;

const cssReset = css`
/* Modern CSS Reset by Andy Bell. https://hankchizljaw.com/wrote/a-modern-css-reset/ */

    /* Box sizing rules */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    /* Remove default padding */
    ul[class],
    ol[class] {
      padding: 0;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    ul[class],
    ol[class],
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
      margin: 0;
    }

    /* Set core body defaults */
    body {
      min-height: 100vh;
      scroll-behavior: smooth;
      text-rendering: optimizeSpeed;
      line-height: 1.5;
    }

    /* Remove list styles on ul, ol elements with a class attribute */
    ul[class],
    ol[class] {
      list-style: none;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
      text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    /* Remove all animations and transitions for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
`;

const documentSetup = (colors) => css`
    html, body {
        background: var(--body-background);
        box-sizing: border-box;
        color: var(--color-text);
        font-family: var(--body-family);
        font-size: clamp(1.05rem, .9rem + 0.25vw, 1.25rem); 
        letter-spacing: -0.015em;
        text-align: left;
    }
    *,
    *::before,
    *::after {
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        word-break: break-word;
        word-wrap: break-word;
    }

    #site-content {
        overflow: hidden;
    }
`;

const accessibilitySettings = css`
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
    }
  }
`;

const elementBase = (colors) => css`
    main {
        display: block;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 1rem 0;
        font-weight: 600;
        font-family: var(--header-family);
        line-height: 1.25;
        letter-spacing: -0.0415625em;
        color: var(--header-color);
    }
    
    h1 {
        font-size: clamp(1.5rem, 1.5rem + 3vw, 4rem);
        font-weight: 800;
        line-height: 1.1;
    }

    h2 {
        font-size: clamp(1.5rem, 1.5rem + 2.5vw, 3rem);
      }
    h3 {
        font-size: clamp(1.5rem, 1.5rem + 1vw, 2.75rem);
    }
    h4 {
       font-size: clamp(1.5rem, 1.5rem + .75vw, 2rem);
    }
    H5 {
        font-size: clamp(1.5rem, 1.5rem + .33vw, 1.5rem);
    }

    h6 {
        font-size: clamp(1.25rem, 1.25rem + .125vw, 1.125rem);
        letter-spacing: 0.03125em;
        text-transform: uppercase;
    }

    p {
        line-height: 1.5;
        padding-bottom: 1em;
    }

    em,
    i,
    q,
    dfn {
        font-style: italic;
    }

    em em,
    em i,
    i em,
    i i,
    cite em,
    cite i {
        font-weight: bolder;
    }

    big {
        font-size: 1.2em;
    }

    small {
        font-size: 0.75em;
    }

    b,
    strong {
        font-weight: 700;
    }

    ins {
        text-decoration: underline;
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sup {
        top: -0.5em;
    }

    sub {
        bottom: -0.25em;
    }

    abbr,
    acronym {
        cursor: help;
    }

    address {
        line-height: 1.5;
        margin: 0 0 2rem 0;
    }

    hr {
        border-style: solid;
        border-width: 0.1rem 0 0 0;
        border-color: #DCD7CA;
        margin: 4rem 0;
    }
  
    a {
        color: black;
        text-decoration: none;
       border-bottom: 2px solid var(--color-link); 
    }
    
    a:hover  {
        color: var(--color-link);
        border-bottom:2.5px solid var(--color-link-darker);
    } 
    
`;

/* add other styles later */
const globalStyle = (colors) =>
  css([
    cssReset,
    settings,
    documentSetup(colors),
    accessibilitySettings,
    elementBase(colors),
   // listStyle,
   // quoteStyle(colors),
   // codeStyle(colors),
  //  mediaStyle(colors),
   // tableStyles(colors),
  ]);

export default globalStyle;