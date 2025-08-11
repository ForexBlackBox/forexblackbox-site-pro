'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Nav(){
  const path = usePathname();
  const link = (href:string, label:string)=>(
    <Link href={href} className={`px-3 py-2 rounded-lg hover:bg-white/5 ${path===href?'text-brand-gold':''}`}>{label}</Link>
  );
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/40">
      <div className="container-max flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="ForexBlackBox" className="h-9 w-9 rounded-full" />
          <span className="font-semibold">ForexBlackBox</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {link('/pricing','Pricing')}
          {link('/subscribe','Subscribe')}
          {link('/features','Overview')}
          {link('/reviews','Reviews')}
          {link('/about','About')}
          {link('/faq','FAQ')}
          {link('/contact','Contact')}
        </nav>
      </div>
    </header>
  )
}
