import twentiment from "twentiment";

function sendTwentiment(requestQuery, res) {
  requestQuery.from && (requestQuery.since = requestQuery.from);

  delete requestQuery.from;

  function sendFilteredData(data) {
    data.tweets = data.tweets.filter(
      (tweet, index, self) =>
        index === self.findIndex((_tweet) => _tweet.tweet === tweet.tweet)
    );
    res.json(data);
  }

  twentiment({ ...requestQuery, pages: 4 })
    .then(sendFilteredData)
    .catch((err) => res.status(500).send(err));
}

export default sendTwentiment;
