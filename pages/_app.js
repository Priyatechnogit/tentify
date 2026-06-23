import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import GlobalStyles from "../styles/GlobalStyles";

const fetcher = (url) =>
  fetch(url).then((response) => {
    if (!response.ok) throw new Error("Failed to fetch");
    return response.json();
  });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyles />
        <Component {...pageProps} />
      </SWRConfig>
    </SessionProvider>
  );
}
