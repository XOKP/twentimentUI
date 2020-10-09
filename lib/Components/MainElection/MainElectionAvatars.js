import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

const StyledDiv = styled.div`
  display: flex;
  margin: 15px 0 30px 0;

  .MuiAvatar-root.MuiAvatar-circle {
    height: 80px;
    width: 80px;
  }

  // *** DEMOCRAT AVATAR ***
  .MuiAvatar-root.MuiAvatar-circle:nth-of-type(1) {
    border: solid 2px #4ab5eb;
  }

  // *** REPUBLICAN AVATAR ***
  .MuiAvatar-root.MuiAvatar-circle:nth-of-type(2) {
    border: solid 2px #f66869;
    margin-left: 20px;
  }
`;

const MainElectionAvatars = ({ avatars }) => (
  <StyledDiv>
    {avatars.map((i, index) => (
      <Avatar key={index} alt={i.alt} src={i.src} />
    ))}
  </StyledDiv>
);

export default MainElectionAvatars;
