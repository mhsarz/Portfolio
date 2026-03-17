import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Lora({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Mahsa Barzegarsakhvidi | Portfolio",
  description: "Computer Science student at York University",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased min-h-screen">
        {/* The container that centers your "Book" layout */}
        <main className="max-w-3xl mx-auto px-8 py-10">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}