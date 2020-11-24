import sanitized from "sanitized";
import { isValidSearch as validateSearch } from "../../lib";
import db from "../../db";
import twentiment from "twentiment";

export default (req, res) =>
  req.method === "GET"
    ? (() => {
        const requestQuery = sanitized(req.query);

        const isValidSearch = validateSearch(requestQuery.search);

        function getTwentimentResults() {
          requestQuery.from && (requestQuery.since = requestQuery.from);
          delete requestQuery.from;
          return twentiment(requestQuery);
        }

        const sendTwentimentResults = (twentimentResults) =>
          res.json(twentimentResults);

        const sendTwentimentError = (twentimentError) =>
          res.status(500).send(twentimentError);

        isValidSearch
          ? db.Search.save(requestQuery.search)
              .then(getTwentimentResults)
              .then(sendTwentimentResults)
              .catch(sendTwentimentError)
          : res.status(400).send("Invalid search.");
      })()
    : res.status(405).send("Request method not supported.");
