import db from "../../../db";

export default (req, res) =>
  req.method === "GET"
    ? db.Election.getGraphPoints({ year: req.query.year })
        .then((data) => res.json(data))
        .catch((err) => res.status(500).send(err))
    : res.status(400).send("Request method not supported.");
