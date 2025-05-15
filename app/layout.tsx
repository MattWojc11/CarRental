import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KARZONE - Ekskluzywna wypożyczalnia samochodów",
  description: "Najlepsza wypożyczalnia luksusowych i sportowych samochodów we Wrocławiu. Szeroki wybór aut w konkurencyjnych cenach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.className} bg-black text-white`}>
        <Navigation />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
