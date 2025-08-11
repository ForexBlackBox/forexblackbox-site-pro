'use client';
import { useState } from 'react';

export function Accordion({ items }:{ items: {q:string,a:React.ReactNode}[] }){
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, idx)=> (
        <div key={idx} className="card">
          <button onClick={()=> setOpen(open===idx?null:idx)} className="w-full text-left px-5 py-4 flex justify-between items-center">
            <span className="font-medium">{it.q}</span>
            <span className="text-white/60">{open===idx? '−':'+'}</span>
          </button>
          {open===idx && <div className="px-5 pb-5 -mt-2 muted">{it.a}</div>}
        </div>
      ))}
    </div>
  )
}
