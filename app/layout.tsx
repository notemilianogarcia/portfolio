import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";

const heading = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emiliano Garcia Ochoa | ML Engineer & Researcher",
  description:
    "Research-driven machine learning engineer crafting efficient, reliable systems and publications.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Emiliano Garcia Ochoa | ML Engineer & Researcher",
    description:
      "Research-driven machine learning engineer crafting efficient, reliable systems and publications.",
    url: "https://example.com",
    siteName: "Emiliano Garcia Ochoa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emiliano Garcia Ochoa",
    description:
      "Research-driven machine learning engineer crafting efficient, reliable systems and publications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${heading.variable} ${body.variable} ${mono.variable} bg-bg text-text antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <div className="min-h-screen bg-bg flex flex-col" suppressHydrationWarning>
            <NavBar />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
