'use client';
import { motion } from 'framer-motion';
export default function SplitText({ text }:{ text:string }){
  const chars = Array.from(text);
  return (
    <h1 className="h1 leading-[1.1]">
      {chars.map((c,i)=>(
        <motion.span
          key={i}
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{delay:i*0.02, duration:.4}}
        >{c===' ' ? '\u00A0' : c}</motion.span>
      ))}
    </h1>
  );
}
