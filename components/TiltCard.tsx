'use client';
import { useRef } from 'react';
export default function TiltCard({ children }: { children: React.ReactNode }){
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent)=>{
    const el = ref.current;
    if(!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateX(${(-py*6).toFixed(2)}deg) rotateY(${(px*6).toFixed(2)}deg) translateZ(0)`;
  };
  const onLeave = ()=>{
    const el = ref.current;
    if(el) el.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };
  return <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="transition-transform">{children}</div>
}
