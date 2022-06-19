import "../styles/globals.css";
import Layout from "../components/Layout";

import { MoralisProvider } from "react-moralis"



export default function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId="0DsJ5q6c7g3ZkM2ttbBSbZkIRqpLvzw0fRQiAXa5"
     serverUrl="https://qabpkr6vuyud.usemoralis.com:2053/server">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </MoralisProvider>
    
  );
}
