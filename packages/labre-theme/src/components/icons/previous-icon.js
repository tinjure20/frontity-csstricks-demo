import React from "react";
import { styled } from "frontity";

const PreviousIcon = () => (
  <IconWrapper>
    <svg
      className="svg-icon"
      width="22"
      height="22"
      aria-hidden="true"
      role="img"
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </IconWrapper>
);

const IconWrapper = styled.span`
  display: inline-block;
  margin-top: 2px;
  vertical-align: middle;
  fill: ${({ theme }) => theme.color};
`;

export default PreviousIcon;
