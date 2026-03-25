import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hotel Booking",
  description: "Book your perfect hotel room",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased`}
        style={{ fontFamily: "var(--font-raleway)" }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
