import { connect, styled } from "frontity";
import Link from "../link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
 
  return (
    <NavContainer>
       {items.map((item, link) => {
         const isCurrentPage = state.router.link === link;
         return (
          <NavItem key={item.ID}>
             <Link link={item.url} aria-current={isCurrentPage ? "page" : undefined}>
               {item.title}</Link>
           </NavItem>
         );
       })}
     </NavContainer>
   );
 };

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
 /* width: 90vw;
  width: clamp(16rem, 90vw, 58rem); 
  width: var(--wide-container); */
 /* width: 848px;*/
  max-width: 100%; 
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  margin-right: 5rem;
  overflow-x: auto;

  @media screen and (max-width: 35rem) {
    display: none;
  }
`;

const NavItem = styled.div`
  font-family: var(--body-family);
  padding: 0;
  margin: 0 16px;
  color: black;
  font-size: clamp(1.05rem, .9rem + 0.25vw, 1.25rem); 
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    text-decoration: none;
    color: black;
    line-height: 2em;
    font-weight: 400;
    border-bottom: 2px solid;
    border-bottom-color: transparent; 
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: black!omportant;
      font-weight:400;
    }
    &:hover,
    &:focus {
      border-bottom: 4px solid var(--color-link-darker);
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
