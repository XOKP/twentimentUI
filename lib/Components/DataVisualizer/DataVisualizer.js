import styled from "styled-components";
import Placeholder from "../Placeholder";
import DataVisualizerScore from "./DataVisualizerScore";
import { DataVisualizerEmoji } from "./DataVisualizerEmoji";

const StyledDiv = styled.div`
  display: flex;
  position: relative;
`;

function DataVisualizer({ pending, tweets, cumulative }) {
  return pending || (!tweets || !cumulative) ? (
    <Placeholder pending={pending} size={10} />
  ) : (
    <StyledDiv>
      <DataVisualizerEmoji score={cumulative.score} />
      <DataVisualizerScore score={cumulative.score} />
    </StyledDiv>
  );
}

export default DataVisualizer;
