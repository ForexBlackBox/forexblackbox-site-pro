'use client';
import { useEffect, useState } from 'react';

export default function Carousel({ items }:{ items: React.ReactNode[] }){
  const [i,setI] = useState(0);
  useEffect(()=>{
    const t = setInterval(()=> setI(v => (v+1)%items.length), 3500);
    return ()=> clearInterval(t);
  },[items.length]);
  return (
    <div className="relative overflow-hidden card p-6">
      <div className="min-h-28">
        {items[i]}
      </div>
      <div className="flex gap-2 justify-center mt-4">
        {items.map((_,idx)=> (
          <button key={idx} onClick={()=>setI(idx)} className={`w-2.5 h-2.5 rounded-full ${i===idx?'bg-white':'bg-white/30'}`} />
        ))}
      </div>
    </div>
  );
}
