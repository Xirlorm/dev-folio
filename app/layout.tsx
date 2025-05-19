import type { Metadata } from "next";
import Header from "@/ui/Header";
import "@/globals.css";
import Footer from "./ui/Footer";

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
      <body className=" antialiased">
        <Header />
        {children}
        <hr className="m-2 text-gray-300" />
        <Footer />
      </body>
    </html>
  );
}
