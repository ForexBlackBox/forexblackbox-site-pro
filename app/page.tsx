'use client';
import Hero from "@/components/Hero";
import Parallax from "@/components/Parallax";
import TiltCard from "@/components/TiltCard";
import MorphDivider from "@/components/MorphDivider";
import Marquee from "@/components/Marquee";
import Tooltip from "@/components/Tooltip";

export default function Page(){
  return (
    <>
      <Parallax />
      <Hero />
      <section className="grid md:grid-cols-3 gap-6 my-12">
        {[
          ["Clear Entries & Exits","Every setup comes with defined SL/TP and reasoning."],
          ["Risk-First Approach","We avoid hype and respect risk management."],
          ["Fast Delivery","Signals delivered promptly to your inbox or channel."],
        ].map(([t,d])=>(
          <TiltCard key={t}>
            <div className="card p-6"><h3 className="text-xl font-semibold">{t}</h3><p className="muted mt-2">{d}</p></div>
          </TiltCard>
        ))}
      </section>

      <MorphDivider />

      <section className="my-16 relative">
        <div className="sticky top-20 card p-8">
          <h2 className="h2">Built for Focus</h2>
          <p className="muted mt-2">Subtle motion, clean hierarchy, and fast loading. Designed to feel premium.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {['60fps Animations','Responsive First','Accessible by Design'].map((t,i)=>(
              <div key={i} className="bg-black/30 rounded-2xl border border-white/10 p-6">
                <h3 className="font-semibold">{t}</h3>
                <p className="muted mt-2">We tune motion to be smooth and respectful of reduced-motion settings.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="my-16">
        <Marquee>
          <span className="opacity-70">ForexBlackBox •</span>
          <span className="opacity-70">Premium Signals •</span>
          <span className="opacity-70">Crypto Checkout •</span>
          <span className="opacity-70">Risk Disclosure •</span>
        </Marquee>
      </section>

      <section className="my-20 grid md:grid-cols-2 gap-6">
        <div className="card p-8">
          <h3 className="text-2xl font-semibold">Signal Quality</h3>
          <p className="muted mt-2">Every trade idea includes clear invalidation and structured targets.</p>
          <div className="mt-6 flex gap-3">
            <Tooltip tip="One-click subscribe"><a href="/subscribe" className="btn btn-primary">Start Now</a></Tooltip>
            <a href="/features" className="btn btn-ghost">How it works</a>
          </div>
        </div>
        <div className="card p-8">
          <h3 className="text-2xl font-semibold">Security</h3>
          <p className="muted mt-2">Crypto-only checkout; we never store card data. Manual verification for accuracy.</p>
        </div>
      </section>
    </>
  )
}
