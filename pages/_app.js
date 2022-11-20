import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/login.css";
import Head from "next/head";
import Layout from "../components/Layout";

// import "../styles/LoginSignup.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
  f;
}

export default MyApp;
