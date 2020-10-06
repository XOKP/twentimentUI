import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  padding: 15px 25px 10px 25px;
  box-sizing: border-box;
  margin-top: 100px;
  background-color: ${({ theme }) => theme.color._light[1]};
  color: ${({ theme }) => theme.color._dark[1]};
  transition: 0.1s;
  box-shadow: ${({ isFocus, theme }) => (isFocus ? theme.boxShadow[1] : "")};
`;

export const StyledSVG = styled(SearchIcon)`
  height: 35px !important;
  width: 35px !important;
  color: ${({ theme }) => theme.color._dark[3]};
`;

export const StyledInput = styled.input`
  padding: 0;
  margin: 0 15px;
  border: 0;
  height: 36px;
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  width: -webkit-fill-available;
  background-color: inherit;
  color: ${({ theme }) => theme.color._dark[1]};
  &:focus {
    outline: 0;
  }
`;

export const StyledLoaderContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
