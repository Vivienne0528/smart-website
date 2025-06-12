import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import UseContextProvider from "./utils/UseContextProvider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <UseContextProvider> {/* ✅ 加上这层 */}
        <Component {...pageProps} className={roboto.className} />
      </UseContextProvider>
    </ClerkProvider>
  );
}
