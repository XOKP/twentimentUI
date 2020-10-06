// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import {
//   isValidSearch,
//   fetcher,
//   CONTENT_ID,
//   scrollToContent,
//   Theme,
//   ViewportOuterTop,
//   ViewportOuterBottom,
//   ViewportInner,
//   Header,
//   Form,
//   StatusAlert,
//   MainContent,
// } from "../lib";
// import twentiment from "twentiment";

function HomePage({ query }) {
  //   const router = useRouter();

  //   const [params, setParams] = useState(query);
  //   const [pending, setPending] = useState();
  //   const [data, setData] = useState();
  //   const [error, setError] = useState();
  //   const [view, setView] = useState("search");

  //   useEffect(() => {
  //     router.push({ pathname: "/", query: params });
  //   }, [params]);

  //   useEffect(() => {
  //     !data &&
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

  return "asdasdasdasasd";
  //   return (
  //     <Theme>
  //       <Header setView={setView} />
  //       <ViewportOuterTop>
  //         <ViewportInner>
  //           <Form params={params} setParams={setParams} pending={pending} />
  //         </ViewportInner>
  //       </ViewportOuterTop>
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
  //     </Theme>
  //   );
}

export async function getServerSideProps({ query }) {
  return { props: { query } };
}

export default HomePage;
