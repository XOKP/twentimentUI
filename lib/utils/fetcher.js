export const fetcher = ({ resource, method, data, query }) =>
  new Promise((resolve, reject) =>
    fetch("/api" + resource + (query ? "?" + new URLSearchParams(query) : ""), {
      method,
      body: data && JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(resolve)
      .catch(reject)
  );
