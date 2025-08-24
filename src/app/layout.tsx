import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple todo application .",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col justify-between bg-gray-900  ">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
