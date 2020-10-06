import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Theme,
  Header,
  BackgroundOuterTop,
  BackgroundInner,
  Form,
  BackgroundOuterBottom,
  MainContent,
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
            scroll.toContent();
          })
          .catch(setError)
          .finally(setPending);
      })();
  }, [query]);

  return (
    <Theme>
      <Header setView={setView} />
      <BackgroundOuterTop>
        <BackgroundInner>
          <Form params={params} setParams={setParams} pending={pending} />
        </BackgroundInner>
      </BackgroundOuterTop>
      <BackgroundOuterBottom>
        <BackgroundInner>
          <MainContent
            pending={pending}
            query={query}
            view={view}
            setView={setView}
            data={data}
          />
        </BackgroundInner>
      </BackgroundOuterBottom>
      <StatusAlert error={error} />
    </Theme>
  );
}

export async function getServerSideProps({ query }) {
  return { props: { query } };
}

export default HomePage;
