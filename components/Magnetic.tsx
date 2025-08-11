'use client';
import { useRef } from 'react';
export default function Magnetic({ children, strength=0.35 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if(!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width/2);
    const dy = e.clientY - (rect.top + rect.height/2);
    el.style.transform = `translate(${dx*strength}px, ${dy*strength}px)`;
  };
  const onLeave = () => { const el = ref.current; if(el) el.style.transform = 'translate(0,0)'; };
  return <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="transition-transform">{children}</div>;
}
