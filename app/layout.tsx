import type { Metadata } from "next";
import "./globals.css";

import { Poppins, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranish",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-neutral-100">
        {/* <div className="absolute -z-50 bottom-0 left-0 right-0 -top-50 bg-[radial-gradient(circle_500px_at_50%_200px,#b8e6fe,transparent)]" /> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
