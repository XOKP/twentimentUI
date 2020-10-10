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
          return twentiment({ ...requestQuery, pages: 2 });
        }

        isValidSearch
          ? db.Search.save(requestQuery.search)
              .then(getTwentimentResults)
              .then((twentimentResults) => res.json(twentimentResults))
              .catch((err) => res.status(500).send(err))
          : res.status(400).send("Invalid search.");
      })()
    : res.status(500).send("fail");
