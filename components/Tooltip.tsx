'use client';
import { useState } from 'react';
export default function Tooltip({ tip, children }:{ tip:string, children: React.ReactNode }){
  const [open, setOpen] = useState(false);
  return (
    <span className="relative" onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
      {children}
      {open && <span className="absolute left-1/2 -translate-x-1/2 -top-9 text-xs bg-black/80 border border-white/15 rounded-md px-2 py-1">{tip}</span>}
    </span>
  );
}
