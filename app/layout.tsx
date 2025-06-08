import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "../components/Header";
import "../styles/globals.css";
import Footer from "../components/Footer";
import AppContext from "../context/AppContext";

export const metadata: Metadata = {
  title: "Dev-folio",
  description: "Selorm's Developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <SpeedInsights />
      <body className="antialiased">
        <AppContext>
          <Header />
          {children}
          <hr className="m-2 text-gray-300" />
          <Footer />
        </AppContext>
      </body>
    </html>
  );
}
