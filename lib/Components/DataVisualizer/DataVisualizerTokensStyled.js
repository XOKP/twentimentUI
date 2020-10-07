import styled from "styled-components";
import * as dvUtils from "./DataVisualizerUtils";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px;
  div:not(:first-child) {
    margin-top: 20px;
  }
`;

export const StyledH4 = styled.h4`
  font-weight: normal;
  font-size: 20px;
  opacity: 0.9;
`;

export const StyledH5 = styled.h5`
  font-weight: normal;
  font-size: 15px;
  opacity: 0.8;
  margin-top: 5px;
`;

export const StyledUL = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0;
  li {
    margin-right: 10px;
    margin-top: 10px;
  }
`;

export const StyledButton = styled.button`
  font-size: 14px;
  background-color: ${dvUtils.scoreColor};
  padding: 5px 10px;
  border-radius: 3px;
  opacity: 0.8;
  transition: 0.2s;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "")};
  &:hover {
    opacity: 1;
  }
`;
