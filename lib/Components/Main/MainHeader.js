import styled from "styled-components";
import { BackgroundOuterTwo, BackgroundInner } from "../Styled";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  word-break: break-word;
`;

const StyledH1 = styled.h1`
  font-size: 60px;
  font-weight: bold;
`;

const StyledH2 = styled.h2`
  margin: 20px 0 10px 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 300;
  line-height: 28px;
`;

const StyledH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 300;
`;

const MainHeader = ({
  currentConfig: { title, subtitle, subSubtitle },
  view,
}) => (
  <BackgroundOuterTwo>
    <BackgroundInner>
      <StyledHeader id="content-title">
        <StyledH1>{title}</StyledH1>
        <StyledH2>{subtitle}</StyledH2>
        {subSubtitle && <StyledH3>{subSubtitle}</StyledH3>}
      </StyledHeader>
    </BackgroundInner>
  </BackgroundOuterTwo>
);

export default MainHeader;
