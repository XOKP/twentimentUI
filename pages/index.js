import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Theme,
  HTMLMeta,
  Header,
  BackgroundOuterOne,
  BackgroundInner,
  Form,
  BackgroundOuterTwo,
  Main,
  StatusAlert,
  isValidSearch,
  fetcher,
  scroll,
} from "../lib";

function HomePage({ query }) {
  const [view, setView] = useState("search");
  const [params, setParams] = useState(query);
  const [pending, setPending] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();

  const router = useRouter();

  useEffect(() => {
    router.push({ pathname: "/", query: params });
  }, [params]);

  useEffect(() => {
    !pending &&
      isValidSearch(query.search) &&
      (() => {
        setPending(true);
        setError();
        fetcher({ resource: "/search", method: "GET", query })
          .then((responseData) => {
            setData(responseData);
            setView("search");
            scroll.toMain();
          })
          .catch(setError)
          .finally(setPending);
      })();
  }, [query]);

  return (
    <Theme>
      <HTMLMeta />
      <Header setView={setView} />
      <Form params={params} setParams={setParams} pending={pending} />
      <Main
        query={query}
        data={data}
        view={view}
        setView={setView}
        pending={pending}
      />
      <StatusAlert error={error} />
    </Theme>
  );
}

export async function getServerSideProps({ query }) {
  return { props: { query } };
}

export default HomePage;
