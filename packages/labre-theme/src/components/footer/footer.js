// src/componnents/footer.js
import React from "react";
import { connect, styled } from "frontity";
import Widget from "./widget"

const Footer = () => {
  return (
  <>
    < Widget />
    <footer>
      <SiteInfo>
        Frontity LABRE Theme 2021 | {" "} Proudly Powered by {"  "}  
        <FooterLinks href="https://frontity.org/" target="_blank" rel="noopener"> Frontity</FooterLinks>
        {"  "} and {"  "}  
        <FooterLinks href="https://wordpress.org/" target="_blank" rel="noopener">WordPress</FooterLinks>       
      </SiteInfo>
    </footer>
    </>
  );
};

export default connect(Footer);

// 
const SiteInfo = styled.div`
  font-family: var(--body-family);
  font-size: clamp(1rem, .8rem + 0.25vw, 1.25rem);
  font-weight:300;
  color: var(--color-text-light);
  border-top: 1px solid #bbb;
  padding: 1em 2em 2em;
  margin-top: 1rem; 
  width: var(--normal-container);
  hyphens: auto;
  word-wrap: break-word;
  text-align: center;
    @media only screen and (min-width: 50rem) {
    margin: 0 auto;
      max-width: 49rem; 
      text-align: center;
    }
`;

const FooterLinks = styled.a`
 /* color: #414141; */
  border-bottom: none;
  padding: 5px 0px 2px;
  :hover {
    border-bottom: 2px solid var(--color-link-darker);
  } 
`;
