'use client';
import { useEffect, useState } from 'react';

export default function Parallax(){
  const [pos, setPos] = useState({x:50, y:50});
  useEffect(()=>{
    const onMove = (e: MouseEvent)=>{
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPos({x, y});
    };
    window.addEventListener('mousemove', onMove);
    return ()=> window.removeEventListener('mousemove', onMove);
  },[]);
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background: `radial-gradient(600px 300px at ${pos.x}% ${pos.y}%, rgba(199,160,82,.18), transparent)`
      }}
    />
  );
}
