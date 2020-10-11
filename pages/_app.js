import ReactGA from "react-ga";

process.env.NODE_ENV === "production" &&
  ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID);

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
