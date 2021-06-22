import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Container>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isAuthor ? (
          <Header>
            Author Archives:{" "}
            <PageDescription>
            {decode(state.source.author[data.id].name)}
            </PageDescription>
          </Header>
        ) : null}

        {/* If the list is a taxonomy or category, we render a title. */}
        {data.isTaxonomy || data.isCategory ? (
          <Header>
            {data.taxonomy.charAt(0).toUpperCase() + data.taxonomy.slice(1)}{" "}
            Archives:{" "}
            <PageDescription>
            {decode(state.source[data.taxonomy][data.id].name)}
            </PageDescription>
          </Header>
        ) : null}

      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        // Render one Item component for each one.
        return <Item key={item.id} item={item} />;
      })}
      <Pagination />
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  /* width: 800px; */
  width: 90vw;
  width: var(--normal-container);
  margin-top: 4.5rem;
  padding: 24px 0;
  list-style: none;
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  font-style: italic;
  font-size: clamp(1.2rem, 1.2rem + .66vw, 2.5rem);
  color: var(--color-text-light);
`;

const PageDescription = styled.span`
  font-weight: bold;
  font-family: var(--body-family);
  color: var(--color-text);
`;