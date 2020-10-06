import { useState } from "react";
// import { useRouter } from "next/router";
import {
  Theme,
  Header,
  BackgroundOuterTop,
  BackgroundInner,
  Form,
  //   isValidSearch,
  //   fetcher,
  //   CONTENT_ID,
  //   scrollToContent,
  //   StatusAlert,
  //   MainContent,
} from "../lib";

function HomePage({ query }) {
  //   const router = useRouter();

  const [view, setView] = useState("search");
  const [params, setParams] = useState(query);
  const [pending, setPending] = useState();
  //   const [data, setData] = useState();
  //   const [error, setError] = useState();

  //   useEffect(() => {
  //     router.push({ pathname: "/", query: params });
  //   }, [params]);

  //   useEffect(() => {
  //       !pending &&
  //       isValidSearch(query.search) &&
  //       (() => {
  //         setPending(true);
  //         setError();
  //         fetcher({ resource: "/search", method: "GET", query })
  //           .then((responseData) => {
  //             setData(responseData);
  //             setView("search");
  //             scrollToContent();
  //           })
  //           .catch(setError)
  //           .finally(setPending);
  //       })();
  //   }, [query]);

  return (
    <Theme>
      <Header setView={setView} />
      <BackgroundOuterTop>
        <BackgroundInner>
          <Form params={params} setParams={setParams} pending={pending} />
        </BackgroundInner>
      </BackgroundOuterTop>
    </Theme>
  );
  //       <ViewportOuterBottom id={CONTENT_ID}>
  //         <ViewportInner>
  //           <MainContent
  //             pending={pending}
  //             query={query}
  //             view={view}
  //             setView={setView}
  //             data={data}
  //           />
  //         </ViewportInner>
  //       </ViewportOuterBottom>
  //       <StatusAlert error={error} />
}

export async function getServerSideProps({ query }) {
  return { props: { query } };
}

export default HomePage;
