'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Magnetic from './Magnetic';
import SplitText from './SplitText';

export default function Hero(){
  return (
    <section className="relative overflow-hidden pt-24 pb-24">
      <div className="container-max text-center">
        <SplitText text="Premium Forex Signals, Delivered." />
        <p className="muted mt-4 max-w-2xl mx-auto">High-quality, risk-conscious trade ideas with clear entries, SL, and TP. Crypto-only checkout. Cancel anytime.</p>
        <div className="mt-8 flex gap-4 justify-center">
          <Magnetic><Link href="/pricing" className="btn btn-primary">View Pricing</Link></Magnetic>
          <Magnetic><Link href="/subscribe" className="btn btn-ghost">Subscribe with Crypto</Link></Magnetic>
        </div>
      </div>
      <motion.div
        className="absolute inset-0 -z-10 bg-[radial-gradient(600px_300px_at_50%_-50%,rgba(199,160,82,.25),transparent)]"
        initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}
      />
    </section>
  )
}
