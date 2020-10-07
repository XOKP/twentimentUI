export const fetcher = ({ resource, method, data, query }) =>
  new Promise((resolve, reject) =>
    fetch("/api" + resource + (query ? "?" + new URLSearchParams(query) : ""), {
      method,
      body: data && JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(resolve)
      .catch(reject)
  );
