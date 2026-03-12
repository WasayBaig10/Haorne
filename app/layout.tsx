import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { SmoothScroll } from "@/components/shared/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "HAORNE | Minimalist Luxury Timepieces",
  description: "Exceptional Swiss craftsmanship meets contemporary minimalism. Discover timepieces that transcend generations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable + " " + montserrat.variable}>
      <body className="custom-cursor">
        <CustomCursor />
        <SmoothScroll>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
