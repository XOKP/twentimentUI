import { useMemo } from "react";
import styled from "styled-components";
import MainElectionChart from "./MainElectionChart";
import Clinton2016 from "./2016Clinton";
import Trump2016 from "./2016Trump";
import Biden2020 from "./2020Biden";
import Trump2020 from "./2020Trump";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

function MainElection({ year }) {
  const initialData = React.useMemo(
    () =>
      ({
        "2016": [
          { name: "Hillary Clinton", data: Clinton2016 },
          { name: "Donald Trump", data: Trump2016 },
        ],
        "2020": [
          { name: "Joe Biden", data: Biden2020 },
          { name: "Donald Trump", data: Trump2020 },
        ],
      }[year]),
    []
  );

  return (
    <StyledDiv>
      <MainElectionChart initialData={initialData} />
    </StyledDiv>
  );
}

export default MainElection;
