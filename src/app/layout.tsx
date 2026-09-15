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
        <div className="fixed inset-0 -z-10">

          {/* Image */}
          <div className="absolute inset-0 bg-[url('/logo.jpeg')] bg-cover bg-center opacity-20" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/70" />

          {/* Blur */}
          <div className="absolute inset-0 backdrop-blur-sm" />

        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
