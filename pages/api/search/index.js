import sanitized from "sanitized";
import { isValidSearch as validateSearch } from "../../../lib";
import updatePopularSearches from "./updatePopularSearches";
import sendTwentiment from "./sendTwentiment";

export default (req, res) =>
  req.method === "GET" &&
  (() => {
    const requestQuery = sanitized(req.query);

    const isValidSearch = validateSearch(requestQuery.search);

    isValidSearch
      ? (updatePopularSearches(requestQuery.search),
        sendTwentiment(requestQuery, res))
      : res.status(400).send("Invalid search string.");
  })();
