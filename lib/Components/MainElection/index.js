import { useState, useMemo } from "react";
import styled from "styled-components";
import { WhiteBox } from "../Styled";
import MainElectionAvatars from "./MainElectionAvatars";
import MainElectionChart from "./MainElectionChart";
import MainElectionDataVisualizer from "./MainElectionDataVisualizer";
import Clinton2016 from "./2016Clinton";
import Trump2016 from "./2016Trump";
import Biden2020 from "./2020Biden";
import Trump2020 from "./2020Trump";

const StyledP = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  opacity: 0.8;
  margin-top: 20px;
`;

function MainElection({ year }) {
  const [dayData, setDayData] = useState();

  const initialData = React.useMemo(
    () =>
      ({
        "2016": [
          {
            name: "Hillary Clinton",
            avatar: "/avatars/clinton.png",
            data: Clinton2016,
          },
          {
            name: "Donald Trump",
            avatar: "/avatars/trump.png",
            data: Trump2016,
          },
        ],
        "2020": [
          {
            name: "Joe Biden",
            avatar: "/avatars/biden.png",
            data: Biden2020,
          },
          {
            name: "Donald Trump",
            avatar: "/avatars/trump.png",
            data: Trump2020,
          },
        ],
      }[year]),
    []
  );

  return (
    <WhiteBox>
      <MainElectionAvatars
        avatars={initialData.map((i) => ({ alt: i.name, src: i.avatar }))}
      />
      <MainElectionChart initialData={initialData} setDayData={setDayData} />
      <StyledP>
        Click a point in the chart to see detailed Twentiment results.
      </StyledP>
      {dayData ? <MainElectionDataVisualizer {...dayData} /> : ""}
    </WhiteBox>
  );
}

export default MainElection;
