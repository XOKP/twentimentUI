import Head from "next/head";

const HTMLMeta = () => (
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
);

export default HTMLMeta;
