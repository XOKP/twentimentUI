import jsontxt from "jsontxt";
import levenshtein from "fast-levenshtein";

function updatePopularSearches(search) {
  const cleanSearch = search
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  const groups = jsontxt.read();

  const groupIndex = groups.findIndex((i) =>
    i.variations.some(
      (variation) =>
        variation === cleanSearch ||
        (cleanSearch.length > 4 &&
          (variation.includes(cleanSearch) ||
            cleanSearch.includes(variation))) ||
        levenshtein.get(cleanSearch, variation, { useCollator: true }) < 3
    )
  );

  const group = groupIndex !== -1 && groups[groupIndex];

  group
    ? (groups[groupIndex] = {
        variations: [].concat([cleanSearch, ...group.variations]).slice(0, 50),
        count: group.count + 1,
        lastSearch: Date.now(),
      })
    : groups.push({
        variations: [cleanSearch],
        count: 1,
        lastSearch: Date.now(),
      });

  groups.sort((a, b) => a.lastSearch - b.lastSearch).reverse();

  jsontxt.write(groups.slice(0, 500));
}

export default updatePopularSearches;
