import { useState, useEffect, Fragment } from "react";
import {
  StyledDiv,
  StyledParagraph,
  StyledUL,
} from "./FormPopularSearchesStyled";
import Chip from "@material-ui/core/Chip";
import { capitalize, fetcher } from "../../utils";

function FormPopularSearches({ updateParams }) {
  const [data, setData] = useState();
  const [pending, setPending] = useState(true);

  useEffect(() => {
    setPending(true);
    fetcher({ resource: "/popular-searches", method: "GET" })
      .then(setData)
      .catch(console.warn)
      .finally(setPending);
  }, []);

  return (
    <StyledDiv>
      {pending ? (
        <StyledParagraph>Loading popular searches...</StyledParagraph>
      ) : data && data.length ? (
        <Fragment>
          <StyledParagraph>Popular searches</StyledParagraph>
          <StyledUL>
            {data.map((i, index) => (
              <li key={index}>
                <Chip
                  clickable
                  label={capitalize(i)}
                  onClick={() => updateParams({ search: capitalize(i) })}
                />
              </li>
            ))}
          </StyledUL>
        </Fragment>
      ) : (
        ""
      )}
    </StyledDiv>
  );
}

export default FormPopularSearches;
