import { Inter } from "next/font/google";
import "./globals.css";
import "./animations.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bitverse - your crypto friend is online",
  description: "Bitverse - your crypto friend is online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
