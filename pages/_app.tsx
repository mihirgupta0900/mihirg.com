import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import "../styles/fonts.css";
import "../styles/blog.scss";
import "../styles/prism.css";
import { MDXProvider } from "@mdx-js/react";
import components from "../components/Mdx";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
