import "../styles/globals.scss";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={clsx(inter.className)}>
      <Component {...pageProps} />;
    </main>
  );
}

export default MyApp;
