import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import DateIcon from "../icons/date-icon";

const PostedOn = ({ state, post }) => {
  const date = new Date(post.date);

  return (
    <Wrapper>
      <DateIcon />
      <Link link={post.link}>{date.toDateString()}</Link>
    </Wrapper>
  );
};

export default connect(PostedOn);

const Wrapper = styled.span`
  display: inline;
  margin-right: .2em;
  margin-left: .2em;

  & a {
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
