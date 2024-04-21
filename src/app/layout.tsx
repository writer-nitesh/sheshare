import "./globals.css";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";
import { name, description } from "@/application.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { inter } from "@/utils";


export const metadata: Metadata = {
  title: name,
  description: description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Navbar />
        <main className="mx-2">
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}
