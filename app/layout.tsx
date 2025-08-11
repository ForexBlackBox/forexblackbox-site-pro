import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "ForexBlackBox — Premium Forex Signals",
  description: "Crypto-only forex signal subscriptions with Apple-level polish.",
  icons: [{ url: "/logo.png" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ForexBlackBox",
    "url": "https://example.com",
    "logo": "/logo.png",
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main className="container-max">
          <Suspense fallback={<div className="py-10 text-center text-white/60">Loading…</div>}>
            <PageTransition>{children}</PageTransition>
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
