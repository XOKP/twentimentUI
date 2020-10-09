import jsontxt from "jsontxt";

export default (req, res) =>
  req.method === "GET"
    ? (() => {
        const recommendations = jsontxt.read();

        const getMostFrequentVariation = (group) =>
          group.variations.reduce(
            (a, b, i, arr) =>
              arr.filter((v) => v === a).length >=
              arr.filter((v) => v === b).length
                ? a
                : b,
            group[0]
          );

        const payload = recommendations
          .sort((a, b) => a.count - b.count)
          .reverse()
          .slice(0, 5)
          .map(getMostFrequentVariation);

        res.json(payload);
      })()
    : res.status(400).send("Request method not supported.");
