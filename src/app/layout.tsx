import { Raleway } from "next/font/google";
import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";
import "../app/globals.css";
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
