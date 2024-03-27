import "@/styles/globals.css";

import { Saira, Fraunces } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import Script from "next/script";

const inter = Saira({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "700"],
});

export const metadata = {
  title: "The AI Foundry",
  description:
    "AI community exploring ideas on how to monetize AI and maximize productivity using frontier technology",
  icons: [{ rel: "icon", url: "/icon.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${fraunces.variable}`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Script src="https://substackapi.com/widget.js" async />
        <Script src="https://substackapi.com/embeds/feed.js" async />
      </body>
    </html>
  );
}
