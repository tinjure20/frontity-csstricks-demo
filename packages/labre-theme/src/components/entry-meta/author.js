import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import AuthorIcon from "../icons/author-icon";

const Author = ({ state, authorId }) => {
  const author = state.source.author[authorId];

  return (
    <Wrapper>
      <AuthorIcon />
      <Link link={author.link}>{author.name}</Link>
    </Wrapper>
  );
};

export default connect(Author);

const Wrapper = styled.span`
  display: inline;
  margin-right: .2em;

  & a {
    color: currentColor;
    font-weight: 500;
    font-size: 0.8rem;
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  & svg {
    margin-right: 0.5em;
    transition: fill 120ms ease-in-out 0s;
    position: relative;
    vertical-align: middle;
  }
`;
