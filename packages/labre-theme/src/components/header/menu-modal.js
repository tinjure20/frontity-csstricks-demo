import { styled, connect } from "frontity";
import Link from "../link";

const MenuModal = ({ state }) => {
   
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
  //const { menu } = state.theme;
  //const isThereLinks = menu != null && menu.length > 0;

    return (
      <>
        <MenuOverlay />
          <MenuContent as="nav">
            {items.map((item) => {
              return (
                <MenuLink key={item.ID} link={item.url}>
                  {item.title}
                </MenuLink>
              );

            })}
          </MenuContent>
      </>
    );
};

const MenuOverlay = styled.div`
  background-color: var(--body-background);
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;
  border-bottom: 1px solid #bbb;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.09);
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: yellow;
    font-weight: bold;
    /* border-bottom: 4px solid yellow; */
  }
`;

export default connect(MenuModal);
