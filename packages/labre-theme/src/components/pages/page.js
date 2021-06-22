// src/components/pages/page.js
import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import List from "../list";

const Page = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const page = state.source[data.type][data.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container>
      <div className="post-title">
        <Title dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      </div>

      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      <Content>
        <Html2React html={page.content.rendered} />
      </Content>
    </Container>
  ) : null;
};

export default connect(Page);

const Container = styled.div`
    width: 90vw;
    width: clamp(16rem, 93vw, 58rem);
    margin-top: 4rem;
    padding: 24px;
`;

const Title = styled.h1`
    font-size: clamp(1.8rem, 3.5vw, 4rem);
    font-family: var(--header-family);
    margin: 0;
    margin-top: 24px;
    margin-bottom: 8px;
    color: rgba(12, 17, 43);
      @media screen and (min-width: 48rem) {
        text-align: center;
         &::after {
            display: block;
            content: "";
            width: 20%;
            border-bottom: 6px solid var(--color-text);
            margin: .5rem auto 1.5rem;
        }
    }
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */

const Content = styled.div`
color: var(--color-text);
word-break: break-word;

* {
  max-width: 100%;
}

p {
  line-height: 1.6em;
}

img {
  width: 100%;
  object-fit: cover;
  object-position: center;
}

figure :not(.alignful) {
  margin: 24px auto;
  /* next line overrides an inline style of the figure element. */
  width: 100% !important;

  figcaption {
    font-size: 0.7em;
  }
}

iframe {
  display: block;
  margin: auto;
}

blockquote {
  margin: 16px 0;
  background-color: rgba(0, 0, 0, 0.1);
  border-left: 4px solid rgba(12, 17, 43);
  padding: 4px 16px;
}

a {
  color: rgb(31, 56, 197);
  text-decoration: none;
}

/* Input fields styles */

input[type="text"],
input[type="email"],
input[type="url"],
input[type="tel"],
input[type="number"],
input[type="date"],
textarea,
select {
  display: block;
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 4px;
  outline-color: transparent;
  transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 8px 0 4px 0;

  &:focus {
    outline-color: #1f38c5;
  }
}

input[type="submit"] {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid #1f38c5;
  padding: 12px 36px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  color: #fff;
  background-color: #1f38c5;
}

/* WordPress Core Align Classes */

@media (min-width: 26.25rem) {
  img.aligncenter,
  img.alignleft,
  img.alignright
  img.alignwide,
  img.alignfull {
    width: auto;
  }

  .aligncenter {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .alignright {
    float: right;
    margin-left: 24px;
  }

  .alignleft {
    float: left;
    margin-right: 24px;
  }
  
}

/* add Gutenberg button customization styles*/
  .wp-block-button__link {
    color: #fff;
    background-color: var(--button-background);
    :hover {
      color: #fff;
      background-color: var(--color-link-darker);
      border-bottom: none;
  }
  }

  .wp-block-button.is-style-outline .wp-block-button__link,
  .wp-block-button__link.is-style-outline {
    color: #414141;
    background-color: transparent;
    border: 2px solid;
    :hover {
      color: var(--color-link-darker);
    }
  }
`;
