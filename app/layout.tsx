import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { Footer } from "./_components/Footer/Footer";
import { Navbar } from "./_components/Navbar/Navbar";

const calibri = localFont({
  src: "/fonts/Calibri.ttf",
  variable: "--calibri",
});

const georgia = localFont({
  src: "/fonts/Georgia.ttf",
  variable: "--georgia",
});

export const metadata: Metadata = {
  title: "Naomi Zhao",
  description: "Personal website of Naomi Zhao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${calibri.variable} ${georgia.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
