import styled from "styled-components";
import { scroll } from "../../utils";
import MainConfigs from "./MainConfigs";
import MainHeader from "./MainHeader";
import MainMenu from "./MainMenu";
import { BackgroundOuterOne, BackgroundInner } from "../Styled";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

function Main({ query, view, setView }) {
  const configs = MainConfigs({ query });
  return (
    <StyledMain id={scroll.id.MAIN}>
      <MainHeader configs={configs} view={view} />
      <BackgroundOuterOne>
        <MainMenu configs={configs} view={view} setView={setView} />
        <BackgroundInner>main...</BackgroundInner>
      </BackgroundOuterOne>
    </StyledMain>
  );
}

export default Main;
