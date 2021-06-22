
import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";

/**
 * Pagination Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
 const Pagination = ({ state, actions, libraries }) => {
  const { totalPages } = state.source.get(state.router.link);
  const { path, page, query } = libraries.source.parse(state.router.link);

  const isThereNextPage = page < totalPages;
  const isTherePreviousPage = page > 1;

  const getPageLink = pageNo => {
    return libraries.source.stringify({
      path,
      page: pageNo,
      query
    });
  };

  const createPaginationArray = (currentPage, totalPages) => {
    let loopableArray = [];
    let countOfDotItems = 0;

    // If there is only one page, return an empty array.
    if (1 === totalPages) {
      return loopableArray;
    }

    /** Push the two inde items before the current page. */
    if (0 < currentPage - 2) {
      loopableArray.push(currentPage - 2);
    }

    if (0 < currentPage - 1) {
      loopableArray.push(currentPage - 1);
    }

    // Push the current page index item.
    loopableArray.push(currentPage);

    /** Push the two index items after the current page. */
    if (totalPages >= currentPage + 1) {
      loopableArray.push(currentPage + 1);
    }

    if (totalPages >= currentPage + 2) {
      loopableArray.push(currentPage + 2);
    }

    /** Push the '...' at the beginning of the array only if the difference of between 
    * the 1st and 2nd index item is greater than 1. */
    if (1 < loopableArray[0] - 1) {
      loopableArray.unshift("...");
      countOfDotItems += 1;
    }

    /** Push the '...' at the end of the array. only if the difference of between the 
    * last and 2nd last item is greater than 1. We remove the count of dot items from 
    * the array to get the actual indexes, while checking the condition. */
    if (
      1 <
      totalPages - loopableArray[loopableArray.length - (2 - countOfDotItems)]
    ) {
      loopableArray.push("...");
    }

    // Push first index item in the array if it does not already exists.
    if (-1 === loopableArray.indexOf(1)) {
      loopableArray.unshift(1);
    }

    // Push last index item in the array if it does not already exists.
    if (-1 === loopableArray.indexOf(totalPages)) {
      loopableArray.push(totalPages);
    }

    return loopableArray;
  };

  const paginationArray = createPaginationArray(page, totalPages);

  /** Fetch the next page if it hasn't been fetched yet */
  useEffect(() => {
    if (isThereNextPage) actions.source.fetch(getPageLink(page + 1));
  }, []);

  return (
    <PaginationContainer>
      {isTherePreviousPage && (
        <PaginationLinks
          position="prev"
          aria-label="Read newer posts"
          link={getPageLink(page - 1)}
        >
        {/*  <PreviousIcon /> */}
          <NavText>← Newer posts</NavText>
        </PaginationLinks>
      )}

      <>
        {paginationArray &&
          paginationArray.map((item, index) => {
        // If item is not equal to '...' and the item value is not equal to current page.
            if ("..." !== item && item !== page) {
              return (
                <React.Fragment key={`${item}-${index}`}>
                  <PageNumbers link={getPageLink(item)}>
                    <Text>{item}</Text>
                  </PageNumbers>
                </React.Fragment>
              );
            } else {
              return (
                <CurrentOrDots key={`${item}-${index}`} dots={item === "..."}>
                  <Text>{item}</Text>
                </CurrentOrDots>
              );
            }
          })}
      </>

      {isThereNextPage && (
        <PaginationLinks
          position="next"
          aria-label="Read older posts"
          link={getPageLink(page + 1)}
        >
          <NavText>Older posts →</NavText>
        {/*  <NextIcon /> */}
        </PaginationLinks>
      )}
    </PaginationContainer>
  );
};

export default connect(Pagination);

const CurrentOrDots = styled.span`
  display: inline-block;
  padding: calc(0.5 * 1rem) ${({ dots }) => (dots ? "0" : "")};
  @media (min-width: 48rem) {
    ${({ dots }) => (dots ? "padding: 1rem 0;" : "")}
  }
`;

const PageNumbers = styled(Link)`
  padding: calc(0.5 * 1rem);
  display: inline-block;
  @media (min-width: 48rem) {
    padding: 1rem;
    padding-bottom: .5rem;
    border-bottom: none;
  }
`;

const PaginationLinks = styled(Link)`
  display: inline-block;
  @media (min-width: 48rem) {
    padding: 1rem
    padding-bottom: .5rem;;
    ${({ position }) =>
      position === "next" ? "padding-right: 0;" : "padding-left: 0;"}
      border-bottom: none;
  }
`;

const NavText = styled.span`
  display: none;
  @media (min-width: 48rem) {
    display: inline-block;
  }
`;

const PaginationContainer = styled.div`
  padding: 0;
  margin: 0 1rem;
  font-family: var(--meta-family);
  font-weight: 400;
  font-size: 0.88889em;
  color: var(--color-text);
  letter-spacing: -0.02em;
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media (min-width: 48rem) {
    margin: 0 calc(10% + 60px);
    padding-top: .5em;
  }
`;

const Text = styled.span`
  display: inline-block;
`;