import styled from "styled-components";
import { scroll } from "../../utils";

const StyledDiv = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.color.light[3]};
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.header};
  padding: ${({ theme }) =>
    theme.preset.header.top + " " + theme.preset.header.side};
`;

const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.color.dark[1]};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: 100;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
    transition: 0.4s;
  }
`;

const Header = ({ setView }) => (
  <StyledDiv>
    <button
      onClick={() => {
        setView("about");
        scroll.toContent();
      }}
    >
      <StyledH1>twentiment</StyledH1>
    </button>
  </StyledDiv>
);

export default Header;
