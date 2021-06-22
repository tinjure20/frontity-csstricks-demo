import React from "react";

const DateIcon = () => (
  <svg
    className="svg-icon"
    width="16"
    height="16"
    aria-hidden="true"
    role="img"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <defs>
      <path id="a" d="M0 0h24v24H0V0z" />
    </defs>
    <clipPath id="b">
      <use href="#a" overflow="visible" />
    </clipPath>
    <path
      clipPath="url(#b)"
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"
    />
  </svg>
);

export default DateIcon;
