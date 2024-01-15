import type {Metadata} from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "portfolio",
  description: "Generated by appncy",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header className="text-xl font-bold leading-[4rem]">portfolio</header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} portfolio
        </footer>
      </body>
    </html>
  );
}
