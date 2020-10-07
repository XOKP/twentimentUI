import styled from "styled-components";
import { _StyledUL, WhiteBoxStyle } from "../Styled";
import * as dvUtils from "./DataVisualizerUtils";

export const StyledDiv = styled.div`
  flex: 1;
`;

export const StyledH2 = styled.h2`
  font-size: 40px;
  opacity: 0.8;
`;

export const StyledUL = styled(_StyledUL)`
  margin: 0;
  max-height: 600px;
  overflow: auto;
  flex-wrap: unset;
  margin-top: 30px;
  padding: 15px;
  li:not(:first-child) {
    margin-top: 30px;
  }
`;

export const StyledA = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  opacity: 0.9;
  line-height: 22px;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  
  &:hover {
    // text-decoration: underline;
    opacity: 1;
  }
  
  ${WhiteBoxStyle}
  
  background-color: ${dvUtils.scoreColor};

  span.positive {
    font-weight: bold;
    color: ${({ theme }) => theme.color.positive[2]};
    // border: solid 1px ${({ theme }) => theme.color.positive[2]};
    // padding: 3px 6px;
    // border-radius: 4px;
  }
  
  span.negative {
    font-weight: bold;
    color: ${({ theme }) => theme.color.negative[2]};
    // border: solid 1px ${({ theme }) => theme.color.negative[2]};
    // padding: 3px 6px;
    // border-radius: 4px;
  }
`;

export const StyledSpanOne = styled.span`
  font-size: 12px;
  opacity: 0.6;
  line-height: 16px;
  margin-bottom: 5px;
`;

export const StyledSpanTwo = styled.span`
  position: absolute;
  top: 11px;
  right: 19px;
`;
