import styled from "styled-components";
import { scroll } from "../../utils";
import { DataVisualizer } from "../DataVisualizer";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;

const StyledH4 = styled.h4`
  font-size: 30px;
  opacity: 0.9;
  // text-transform: uppercase;
  margin-bottom: 40px;
`;

const MainElectionDataVisualizer = ({ name, data: { date, data } }) => (
  <StyledDiv id={scroll.id.ELECTION_DATA_VISUALIZER}>
    <StyledH4>
      {name} ({date})
    </StyledH4>
    {data.tweets ? (
      <DataVisualizer {...data} />
    ) : (
      "We're not there yet!! Stay tuned..."
    )}
  </StyledDiv>
);

export default MainElectionDataVisualizer;
