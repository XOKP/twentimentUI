import styled from "styled-components";
import { useState } from "react";
import Placeholder from "../Placeholder";
import { DataVisualizerEmoji } from "./DataVisualizerEmoji";
import DataVisualizerScore from "./DataVisualizerScore";
import DataVisualizerTokens from "./DataVisualizerTokens";

const StyledDivOuter = styled.div`
  display: flex;
  position: relative;
`;

const StyledDivInner = styled.div`
  display: flex;
`;

function DataVisualizer({ pending, tweets, cumulative }) {
  const [tweetFilter, setTweetFilter] = useState();
  return pending || (!tweets || !cumulative) ? (
    <Placeholder pending={pending} size={10} />
  ) : (
    <StyledDivOuter>
      <DataVisualizerEmoji score={cumulative.score} />
      <StyledDivInner>
        <DataVisualizerScore score={cumulative.score} />
        <DataVisualizerTokens
          tokens={cumulative.tokenizedPhrase}
          tweetFilter={tweetFilter}
          setTweetFilter={setTweetFilter}
        />
      </StyledDivInner>
    </StyledDivOuter>
  );
}

export default DataVisualizer;
