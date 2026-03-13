import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

// Initialize the font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karthik | Full-Stack Developer",
  description:
    "Portfolio of Koushal Karthik Rao. Showcasing full-stack applications, AI integrations, and secure systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/* We moved the background, text color, and selection styles directly here */}
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-black text-neutral-300 antialiased selection:bg-blue-500/30 selection:text-white`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
