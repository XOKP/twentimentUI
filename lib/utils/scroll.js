export const id = {
  MAIN: "main-container",
  TWEETS_LIST: "tweets-list",
};

export function toEl(id) {
  const el = document.getElementById(id);
  el && el.scrollIntoView();
}

export const toMain = () => toEl(id.MAIN);

export const toTweets = () => toEl(id.TWEETS_LIST);
