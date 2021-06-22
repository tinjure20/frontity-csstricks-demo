import { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import List from "../list";
import FeaturedMedia from "../featured-media";
// import entry-meta
import Author from "../entry-meta/author";
import PostedOn from "../entry-meta/posted-on";
import Categories from "../entry-meta/categories";
import Tags from "../entry-meta/tags";

/**
 * The Post component that Mars uses to render any kind of "post type", like
 * posts, pages, attachments, etc.
 * It doesn't receive any prop but the Frontity store, which it receives from
 * {@link connect}. The current Frontity state is used to know which post type
 * should be rendered.
 * @returns The {@link Post} element rendered.
 */
const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  //const author = state.source.author[post.author];
  // Get a human readable date.
  //const date = new Date(post.date);

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
  }, [actions.source]);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container className="main">
      <div>
        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

        {/* Hide author and date on pages */}
        {data.isPost && (
          <EntryMeta>
          <Author authorId={post.author} />
          <PostedOn post={post} />
        </EntryMeta>
        )}
      </div>

      {/* Look at the settings to see if we should include the featured image */}
      {state.theme.featured.showOnPost && (
        <FeaturedMedia id={post.featured_media} />
      )}

      {data.isAttachment ? (
        // If the post is an attachment, just render the description property,
        // which already contains the thumbnail.
        <div dangerouslySetInnerHTML={{ __html: post.description.rendered }} />
      ) : (
        // Render the content using the Html2React component so the HTML is
        // processed by the processors we included in the
        // libraries.html2react.processors array.
        <Content>
          <Html2React html={post.content.rendered} />
          {/* add footer meta-entry */}
          <EntryFooter>
            <Categories cats={post.categories} />
            <Tags tags={post.tags} />
          </EntryFooter>
        </Content>
      )}
    </Container>
  ) : null;
};

export default connect(Post);

const Container = styled.div`
  /* width: 800px; */
  width: 90vw;
  width: var(--normal-container);
  margin-top: 4rem;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: clamp(1.2rem, 1.2rem + 3vw, 4rem);
  font-family: var(--header-family);
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: var(--header-color);
  text-align: center;
`;

const EntryMeta = styled.div`
  margin-bottom: 1rem !important;
  color: var(--color-text-light);
  font-family: var(--meta-family);
  & .svg-icon {
    margin-right: 0.5em;
  }

  & a:hover {
    color: var(--color-link-darker);
    border-bottom: 2px solid var(--color-link-darker);
  }

  @media (min-width: 48rem) {
    margin-bottom: 0 !important;
    text-align: center !important;
      &&::after {
        display: block;
        content: "";
        width: 20%;
        border-bottom: 7px solid var(--color-text);
        margin: 1.5rem auto;
  }
`;

const EntryFooter = styled.footer`
  margin-bottom: 1rem !important;
  color: var(--color-text-light);
  font-family: var(--meta-family);

  & .svg-icon {
    margin-right: 0.5em;
  }

  & a {
    text-decoration: none;
  }

  & a:hover {
    color: var(--color-link-darker);
    border-bottom: 2px solid var(--color-link-darker);
  }

  @media (min-width: 768px) {
    margin-bottom: 1.5rem !important;
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  padding: 0;
`;
/*
const Author = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-family: var(--meta-family);
  font-size: clamp(.8rem, .8rem + .33vw, 1rem);
  font-style: normal;
  text-align: center!important;
  display: inline;
`;

const DateWrapper = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-family: var(--meta-family);
  font-size: clamp(.8rem, .8rem + .33vw, 1rem);
  font-style: normal;
  text-align: center!important;
  display: inline;
`; */

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
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
    color: var(--color-link);
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

  /* add Block Style customization */
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
