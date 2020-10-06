import { useState } from "react";
import FormSearch from "./FormSearch";
import FormHelpers from "./FormHelpers";
import FormPopularSearches from "./FormPopularSearches";
import FormFilters from "./FormFilters";
import styled from "styled-components";

const StyledForm = styled.form`
  position: relative;
  width: 100%;
  margin-top 200px;
  margin-bottom: 140px;
`;

function Form({ params, setParams, pending }) {
  const [showFilters, setShowFilters] = useState(false);

  const updateParams = (newParam) => setParams({ ...params, ...newParam });

  const onSubmit = (e) => e && e.preventDefault();

  return (
    <StyledForm onSubmit={onSubmit}>
      <FormSearch
        params={params}
        updateParams={updateParams}
        pending={pending}
      />
      <FormHelpers showFilters={showFilters} setShowFilters={setShowFilters} />
      <FormPopularSearches updateParams={updateParams} />
      {showFilters ? (
        <FormFilters
          setShowFilters={setShowFilters}
          params={params}
          updateParams={updateParams}
          pending={pending}
        />
      ) : (
        ""
      )}
    </StyledForm>
  );
}

export default Form;
