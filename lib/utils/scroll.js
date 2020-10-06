export const id = {
  CONTENT: "content-container",
  TWEETS_LIST: "tweets-list",
};

export function toEl(id) {
  const el = document.getElementById(id);
  el && el.scrollIntoView();
}

export const toContent = () => toEl(id.CONTENT);

export const toTweets = () => toEl(id.TWEETS_LIST);
