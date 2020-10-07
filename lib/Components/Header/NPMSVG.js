import styled from "styled-components";

const StyledPath = styled.path`
  fill: ${({ theme }) => theme.color.light[3]};
`;

const NPMSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="49px"
    height="19px"
    viewBox="0 0 256 100"
    preserveAspectRatio="xMinYMin meet"
    {...props}
  >
    <path
      className="withFill"
      d="M0 0v85.498h71.166V99.83H128V85.498h128V0H0z"
    />
    <StyledPath d="M42.502 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V14.332H42.502zM85.498 14.332v71.166h28.664V71.166h28.17V14.332H85.498zM128 56.834h-13.838v-28.17H128v28.17zM184.834 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V28.664h14.332v42.502h14.332V14.332h-57.328z" />
  </svg>
);

export default NPMSVG;