import { headers } from "next/headers";
import WagmiContextProvider from "@/contexts/WagmiContext";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config/wagmi";

import { Inter } from "next/font/google";
import "./globals.css";
import "./animations.css";
import { AnimationWrapper } from "@/contexts/AnimationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bitverse - your crypto friend is online",
  description: "Bitverse - your crypto friend is online",
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiContextProvider initialState={initialState}>
          <AnimationWrapper>{children}</AnimationWrapper>
        </WagmiContextProvider>
      </body>
    </html>
  );
}
