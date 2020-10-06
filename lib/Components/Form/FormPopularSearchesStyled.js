import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  margin: 30px 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const StyledParagraph = styled.p`
  height: 30px;
  display: flex;
  align-items: center;
  margin: 10px 10px;
`;

export const StyledUL = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
  li {
    margin: 0 5px;
    text-transform: capitalize;
  }
`;
