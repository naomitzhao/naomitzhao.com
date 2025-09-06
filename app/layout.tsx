import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Footer } from "./_components/Footer/Footer";
import { Navbar } from "./_components/Navbar/Navbar";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hi, i'm naomi!",
  description: "personal website of naomi zhao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
