'use client';
import { useEffect, useRef } from 'react';
export default function Marquee({ children, speed=50 }:{ children: React.ReactNode; speed?: number }){
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el = ref.current!;
    let x = 0;
    let raf:number;
    const loop = ()=>{
      x -= speed/60;
      if(x < -el.scrollWidth/2) x = 0;
      el.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return ()=> cancelAnimationFrame(raf);
  },[speed]);
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div ref={ref} className="inline-flex gap-10 will-change-transform">
        {children}{children}
      </div>
    </div>
  );
}
