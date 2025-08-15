import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";

export const metadata: Metadata = {
  title: "Daily Challenges",
  description:
    "A website focusing on daily challenges, starting with Wordle and going through to Heardle and Worldle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Daily Challenges</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
        <script
          defer
          src="https://umami.jackkershaw.pp.ua/script.js"
          data-website-id="6631bf3f-b159-41a3-a071-5b89e06f35e0"
        ></script>
      </head>
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
