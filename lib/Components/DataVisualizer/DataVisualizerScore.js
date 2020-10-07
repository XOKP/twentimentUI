import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as dvUtils from "./DataVisualizerUtils";
import Box from "@material-ui/core/Box";

const StyledBox = styled(Box)`
  background-color: ${(props) => dvUtils.scoreColor({ ...props, index: 3 })};
  border-radius: 50%;
  opacity: 0.8;
  font-size: 30px;
`;

function DataVisualizerScore({ score = 0 }) {
  const limitedScore = dvUtils.limitedScore(score);
  const scoreCode = dvUtils.scoreCode(score);
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="static"
        value={limitedScore}
        size={100}
        thickness={2}
      />
      <StyledBox
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
        _color={scoreCode}
      >
        {dvUtils.scoreString(limitedScore)}
      </StyledBox>
    </Box>
  );
}

export default DataVisualizerScore;
