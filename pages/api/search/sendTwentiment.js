import twentiment from "twentiment";

function sendTwentiment(requestQuery, res) {
  requestQuery.from && (requestQuery.since = requestQuery.from);

  delete requestQuery.from;

  twentiment({ ...requestQuery, pages: 2 })
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send(err));
}

export default sendTwentiment;
