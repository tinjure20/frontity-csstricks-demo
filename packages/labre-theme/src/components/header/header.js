import { connect, styled } from "frontity";
import Link from "../link";
import Nav from "./nav";
import MobileMenu from "./menu";
import logo from '../images/frontity.png'

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Logo src={logo} />
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        {/* <Description>{state.frontity.description}</Description> */}
        <Nav />
      </Container>  
      <MobileMenu />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
 /* width: 848px;
  max-width: 100%; */
  max-width: 100%;
  width: clamp(16rem, 93vw, 100rem); 
  /* width: var(--wide-container); */
  max-width: 100%;
  box-sizing: border-box;
  padding: 1.5rem 1rem 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Logo = styled.img`
  max-width: 1.5em;
  display: inline-block;
  border-radius: 15px;
  margin-right: .2rem;
  vertical-align: middle;
`;

const Title = styled.h2`
  fonts-family: var(--header-family);
  {/* font-size: clamp(1.5rem, 1.5rem + 1vw, 3rem); */}
  display: inline-block;
  vertical-align: middle;
  font-size: 1.5rem;
  margin: 0; 
  margin-right: 5rem;
`;

{/*}
const Description = styled.h4`
  margin: 0;
 color: rgba(255, 255, 255, 0.7); 
  color: rgba(153, 255,153, 0.7);
`; */}

const StyledLink = styled(Link)`
  text-decoration: none;
  align-self: flex-start;
  border-bottom: none;
  :hover {
    border-bottom: none!important;
  }
`;
