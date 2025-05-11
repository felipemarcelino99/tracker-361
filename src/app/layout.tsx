import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Providers from "@/providers";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tracker - 361",
  description: "Rastreador de veículos em tempo real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${inter.variable} font-[family-name:var(--font-roboto)] antialiased`}
      >
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
