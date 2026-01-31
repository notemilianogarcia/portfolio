import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import Script from "next/script";
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  alternates: {
    canonical: "/",
  },
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
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
        <ThemeProvider>
          <div className="min-h-screen bg-bg flex flex-col" suppressHydrationWarning>
            <NavBar />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Emiliano Garcia Ochoa",
                "jobTitle": "ML Engineer & Researcher",
                "url": process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
                "sameAs": [
                  "https://github.com/notemilianogarcia/notemilianogarcia",
                  "https://www.linkedin.com/in/emiliano-garcia-ochoa/"
                ]
              })
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
