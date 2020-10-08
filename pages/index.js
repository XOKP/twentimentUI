import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  Theme,
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
      <Head>
        <title>twentiment</title>
        <meta name="title" content="twentiment" />
        <meta
          name="description"
          content="Follow the public mood. Get historical and live sentiment analysis of any person or topic on Twitter."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://twentytwenty.io/" />
        <meta property="og:title" content="twentiment" />
        <meta
          property="og:description"
          content="Follow the public mood. Get historical and live sentiment analysis of any person or topic on Twitter."
        />
        <meta property="og:image" content="/twpromo.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://twentytwenty.io/" />
        <meta property="twitter:title" content="twentiment" />
        <meta
          property="twitter:description"
          content="Follow the public mood. Get historical and live sentiment analysis of any person or topic on Twitter."
        />
        <meta property="twitter:image" content="/twpromo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
