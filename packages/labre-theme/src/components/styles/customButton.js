// src/components/styles/customBlockStyles.js
import { css } from "frontity";

const customButton = css`
 
/* wp_blockbutton */
    .wp-block-button__link {
      color: #e6e6e6;
      background-color: var(--button-background);
    }
    
    a.wp-block-button__link:hover {
      color: #fff;
      border: 1px solid #000;
    }

    .wp-block-button.is-style-outline .wp-block-button__link:hover {
       color: var(--color-link);
       border-color: var(--color-link);
    }

 /* end of resume button*/
`;

export { customButton };