import styled from "styled-components";

export const BackgroundOuterTop = styled.div`
  background-color: ${({ theme }) => theme.color.light[3]};
  color: ${({ theme }) => theme.color.dark[1]};
`;

export const BackgroundOuterBottom = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 50px 0;
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
