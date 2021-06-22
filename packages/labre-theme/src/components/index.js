// src/components/index.js
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header/header";
import List from "./list";
import Page from "./pages/page";
import Post from "./posts/post";
import Footer from "./footer/footer.js";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";

import FontFace from "./styles/font-face";
import globalStyles from "./styles/globalStyles";
import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css"


/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>
      {/* Add some global styles for the whole site, like body or a's.
     *  Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />
      <Global styles={css(gutenbergStyle)} /> 
      <Global styles={css(gutenbergTheme)} />
      <FontFace />
      {/* Add the header of the site. */}
      
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Page when={data.isPage} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default connect(Theme);
/*
const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: clamp(.8rem, .8rem + 0.66vw, 1.25rem);  
  }

  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-size: clamp(1.5rem, 1.5rem + 3vw, 4rem);
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
  H6 {
    font-size: clamp(1.25rem, 1.25rem + .125vw, 1.125rem);
  }
`;
*/

const HeadContainer = styled.div`
    display: flex;
    width: 100vw;
    align-items: center;
    flex-direction: column;
    background-color: rgba(240, 240, 244, .4);
    height: 4.5rem;
    position: fixed;
    width: 100%;
    z-index: 99;
    webkit-box-shadow: 0 0 26px -7px rgba(57, 63, 72, 0.36) !important;
    box-shadow: 0 0 26px -7px rgba(57, 63, 72, 0.36) !important;
/*
  display: flex;
  align-items: center;
  flex-direction: ;
  background-color: #1f38c5;
  */
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(245, 239, 224, 0.4),
    rgba(245, 239, 224, 0)
  );
`;

const FooterContainer = styled.div`
  background-color: rgba(240, 240, 244, .3);
  border-top: 2px solid #bbb;
  margin: 0;
`;
