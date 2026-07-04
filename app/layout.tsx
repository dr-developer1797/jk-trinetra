import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JK Trinetra Pro Dashboard",
  description: "Pro trading terminal for market analysis and trading signals.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="flex h-screen overflow-hidden bg-background-light font-sans text-slate-800 antialiased transition-colors duration-200 dark:bg-background-dark dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}