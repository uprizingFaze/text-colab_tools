import "../styles/globals.css";
import "../styles/text-editor.css";
import { Suspense } from "react";

export const metadata = {
  title: "ColabTools - Text",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="/icon.svg"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/icon.svg"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
      </head>
      <body>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
