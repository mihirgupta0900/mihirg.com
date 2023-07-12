import "../styles/globals.css";
import "../styles/fonts.css";
import "../styles/blog.scss";
import "../styles/prism.css";
import { MDXProvider } from "@mdx-js/react";
import components from "../components/Mdx";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
