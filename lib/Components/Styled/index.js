import styled from "styled-components";

export const BackgroundOuterOne = styled.div`
  background-color: ${({ theme }) => theme.color.light[3]};
  color: ${({ theme }) => theme.color.dark[1]};
`;

export const BackgroundOuterTwo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  background-color: ${({ theme }) => theme.color._dark[2]};
  color: ${({ theme }) => theme.color._light[1]};
`;

export const BackgroundInner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  box-sizing: border-box;
  padding: 0 30px;
`;

export const ButtonSmall = styled.button`
  color: ${({ theme }) => theme.color.dark[3]};
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
  padding-top: 8px;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

// export const BoxOneStyle = (theme) => `
//   background-color: ${theme.color._light[1]};
//   padding: 15px 20px;
//   border-radius: 5px;
//   box-shadow: ${theme.boxShadow[3]};
//   transition: 0.4s;
//   &:hover {
//     box-shadow: ${theme.boxShadow[1]};
//   }
// `;

// export const BoxOne = styled.div`
//   width: 350px;
//   ${({ theme }) => BoxOneStyle(theme)}
// `;
