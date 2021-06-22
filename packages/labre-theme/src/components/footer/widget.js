// src/components/footer/footer-widget.js
import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

const Widget = ({ state }) => {

  return (
    <>
      <Container>
       {/* <hr className="divider div1" /> */}
        <div className="footer-grid">
          <div className="footer-widget">
           <h2 className="widget-title">Labre Theme</h2>
           <p>A demo Frontity theme project prepared as part of the CSS-Tricks article. </p>
          </div>
          <div className="footer-widget">
            <h2 className="widget-title">Sitemap</h2>
            <ul className="widget-list">
              <li><Link className="widget-list-link" link="/">Home</Link></li>
              <li><Link className="widget-list-link" link="/prosjekter/">Block</Link></li>
              <li><Link className="widget-list-link" link="/blogg/">Classic</Link></li>
              <li><Link className="widget-list-link" link="/kontakt-oss/">Alignments</Link></li>
              <li><Link className="widget-list-link" link="/kontakt-oss/">About</Link></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h2 className="widget-title">Useful Links</h2>
            <ul className="widget-list">
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://frontity.org/">Frontity</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://wordpress.org/">WordPress</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://css-tricks.com/">CSS-Tricks</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://github.com/">GitHub</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://vercel.com/">Vercel</Link></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h2 className="widget-title">Connect</h2>
            <ul className="widget-list">
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://www.linkedin.com/">LinkedIn</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://www.facebook.com/">Facebook</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://www.instagram.com/">Instagram</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://twitter.com/">Twitter</Link></li>
            </ul>
          </div>
        </div>
      {/*  <hr className="divider div2" /> */}
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Widget);

const Container = styled.widget`
  display: block;
  width: 100%;
  max-width: var(--normal-container); /* 62rem */
  justify-content: center;
  margin: 1.5rem auto;
  padding: 0;
 /* margin-top: 2rem; */
  .footer-grid {
   /* padding-top: 25px;
    padding-bottom: 25px; */
    margin-bottom: 0;
    display: grid;
    grid-template-columns: 0.8fr repeat(3, auto);
  }
  .footer-widget {
    line-height: 1.5rem;
    margin-bottom: .5rem;
    padding: 0 1.5rem;
    :not(:first-of-type) {
      margin-left: 32px;
    }
    .widget-title {
      color: #414141;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      font-weight: 600;
    }
    p {
      font-size: 1.1rem;
    }
    .widget-list {
      list-style: none;
      padding-left: 0;
      li {
        margin: 0 !important;
        margin-bottom: 0.5rem;
        .widget-list-link {
          text-decoration: none;
          border-bottom: none;
          transition: all 0.3s ease;
          color: var(--color-text);
          font-size: 1rem;
          &:hover {
            border-bottom: 2px solid var(--color-link-darker);
          }
        }
      }
    }
  }
  .divider {
    display: block;
    width: 100%;
    height: 1px;
    border: 0;
    margin: 0;
    border-top: 1px solid red;
    padding: 0;
  }
  {/*
  .copyright-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .column2 {
    text-align: right;
  }
  .copyright {
    font-size: var(--footerp);
    margin: 1rem 0;
    color: var(--text);
  }
  .copyright a {
    color: var(--text);
    font-size: var(--footerp);
  }
  */}
  @media screen and (max-width: 800px) {
    container {
      margin: 0 auto;
    }
    padding: 20px 15px;
    .footer-grid {
      display: grid;
      grid-template-rows: auto repeat(3, auto);
      grid-template-columns: 1fr 1fr;
      padding-top: 0;
      padding-bottom: 0px;
     /* margin-top: 25px; */
      flex-wrap: wrap;
    }
    .footer-widget {
      :first-of-type {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }
    .footer-widget {
      :not(:first-of-type) {
        margin-left: 0;
      }
    }
  }
`;