'use client';
import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { useEffect } from "react";
import Lenis from "lenis";

export const metadata: Metadata = {
  title: "ForexBlackBox — Premium Forex Signals",
  description: "Crypto-only forex signal subscriptions with Apple-level polish.",
  icons: [{ url: "/logo.png" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(()=>{
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.12 });
    function raf(time:number){ lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return ()=> { /* lenis cleanup not strictly necessary */ };
  },[]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ForexBlackBox",
    "url": "https://example.com",
    "logo": "/logo.png"
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
        <Nav />
        <main className="container-max">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
