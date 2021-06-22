import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

import Author from "../entry-meta/author";
import PostedOn from "../entry-meta/posted-on";

/** Item Component
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post */
const Item = ({ state, item }) => {
 // const author = state.source.author[item.author];
  //const date = new Date(item.date);

  return (
    <article>
        <div>
        {/* If the post has an author, we render a clickable author text. */}
        {/* If the post has an author, we render a clickable author text. */}
        <EntryMeta>
          <Author authorId={item.author} /> {"|  "}
          <PostedOn post={item} />
        </EntryMeta>
      </div>
      
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>
      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}

      {/* If the post has an excerpt (short summary text), we render it */}
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
    </article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const EntryMeta = styled.div`
    color: rgb(118, 118, 118);
    font-family: var(--meta-family);

    & .svg-icon {
      margin-right: 0.5em;
      color: var(--color-text); }
    & a:hover {
        color: var(--color-link-darker);
        border-bottom:2px solid var(--color-link-darker); }
    @media (min-width: 48em) {
      margin-bottom: 0 !important;
    }
`;

const Title = styled.h1`
  font-size: clamp(1.5rem, 1.5rem + .75vw, 3.5rem);
  color: var(--header-color);
  margin: 0;
  padding-top: .2rem;
  padding-bottom: .1rem;
  box-sizing: border-box;
  @media screen and (min-width: 48rem) {
    text-decoration: none !important;
    display: block;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 4em;
      transform: scaleX(0);
      height: 4px;
      bottom: 0;
      left: 0;
      background-color: var(--color-link-darker);
      transform-origin: bottom right;
      transition: transform 0.2s cubic-bezier(0.86, 0, 0.07, 1);
      }
    &:hover::after {
      color: #000;
      text-decoration: none !important;
      transform: scaleX(1);
      transform-origin: bottom left;
      }
    }
   } 
`;

const Excerpt = styled.div`
  padding-top: .5rem;
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  & :after {
    padding-top: .75rem;
    display: block;
    content: "";
    width: 70%;
    border-bottom: 1px solid #c3c3c3;
}
`;
