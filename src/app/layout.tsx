"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import PromoBanner from "./components/PromoBanner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0a192f] text-white">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen pb-[var(--footer-height)] md:pb-0">
          <Header />
          <div className="flex flex-grow pt-[var(--nav-height)]">
            <SideMenu />
            <main className="flex-grow md:pl-[var(--sidebar-width)]">
              <div className="p-4 md:p-6 lg:p-8">
                {children}
              </div>
            </main>
          </div>
          <PromoBanner />
        </div>
      </body>
    </html>
  );
}
