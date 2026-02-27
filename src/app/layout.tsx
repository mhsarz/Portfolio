import { Inter, Lora } from "next/font/google";
import "./globals.css";

// Modern Sans for UI
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
// Elegant Serif for headings (the "Book" look)
const serif = Lora({ subsets: ["latin"], variable: "--font-serif" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        <main className="max-w-4xl mx-auto px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}