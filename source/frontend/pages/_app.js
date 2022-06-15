import "../styles/globals.css";
import Layout from "../components/Layout";
import MoralisProvider from "react-moralis"

export default function MyApp({ Component, pageProps }) {
  return (
    
      <Layout>
        <Component {...pageProps} />
      </Layout>
    
  );
}
