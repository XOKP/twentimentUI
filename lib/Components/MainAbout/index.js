import styled from "styled-components";
import { WhiteBox } from "../Styled";

const StyledH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 500;
  margin: 30px 0;
`;

const StyledP = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 24px;
  margin: 20px 0;
  a {
    color: blue;
  }
`;

function MainAbout() {
  return (
    <WhiteBox>
      <StyledH3>Oh, sweet... what is it?</StyledH3>
      <StyledP>
        Twentiment (pronounced: 'hindsight-is-twenti-twenti') is a
        single-purpose application that gives you a sentiment analysis of things
        you might be interested in based on what people are saying on Twitter.
        It uses <a>natural language processing (NLP)</a> technology
        behind-the-scenes to gauge whether the language used in a tweet is
        positive or negative.
      </StyledP>
      <StyledP>
        It scrapes the first 4 pages of tweets...runs it through wink.js
      </StyledP>
      <StyledP>
        Of course, it's not perfect. In fact, a lot of results may seem
        borderline-ridiculous. For example, you might come across quite a few
        tweets that very obviously convey negative sentiments, but because of
        their use of positive language, they might score positively on the
        sentiment scale. In cases like these it might help to note that - and,
        as the author, I'm completely hypothesising here - there is something to
        be said of the use of positive language to convey negative sentiments...
        it might make it easier to digest, as a consumer, and as a result, it
        might be more effective in subconcious persuasion.
      </StyledP>
      <StyledP>
        But, aside from unqualified pseudo-anaylis from someone who is
        absolutely NOT-AT-ALL an expert in these matters, I think it's just a
        fun thing to do once in a while...
      </StyledP>
    </WhiteBox>
  );
}

export default MainAbout;

// Some of the res
//
// open-source project
//
// https://www.npmjs.com/package/twentiment
//
// https://winkjs.org/wink-sentiment/
//
// "Accurate and fast sentiment scoring of phrases with emoticons & emojis." []
