import styled from "styled-components";
import { scroll } from "../../utils";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import NPMSVG from "./NPMSVG";

const StyledDiv = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.color.light[3]};
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: ${({ theme }) => theme.zIndex.header};
  padding: ${({ theme }) =>
    theme.preset.header.top + " " + theme.preset.header.side};
  padding-right: 45px;
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
        scroll.toMain();
      }}
    >
      <StyledH1>twentiment</StyledH1>
    </button>
    <div>
      {[
        {
          label: "See Twentiment's GitHub repository.",
          href: "https://github.com/nameer-rizvi/twentimentUI",
          icon: GitHubIcon,
        },
        {
          label: "See Twentiment's NPM package.",
          href: "https://www.npmjs.com/package/twentiment",
          icon: NPMSVG,
        },
        {
          label: "Email developer of Twentiment.",
          href: "mailto:team@twentiment.com",
          icon: EmailIcon,
        },
      ].map((link, index) => (
        <IconButton
          size="small"
          aria-label={link.label}
          color="inherit"
          style={{ marginRight: 15 }}
          onClick={() => window.open(link.href, "_blank")}
        >
          <link.icon />
        </IconButton>
      ))}
    </div>
  </StyledDiv>
);

export default Header;
