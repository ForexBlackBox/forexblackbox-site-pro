'use client';
import { useSearchParams } from 'next/navigation';
import { ADDRESSES, PLANS, BRAND } from '@/lib/config';
import { useMemo, useState } from 'react';

export default function Page(){
  const sp = useSearchParams();
  const planId = sp.get('plan') || 'starter';
  const plan = useMemo(()=> PLANS.find(p=>p.id===planId) ?? PLANS[0], [planId]);

  const [coin, setCoin] = useState<'USDT_TRC20'|'USDT_ERC20'|'BTC'|'ETH'>('USDT_TRC20');
  const address = ADDRESSES[coin];
  const qr = `/qr/${coin.toLowerCase()}.png`;

  const submit = async (e: React.FormEvent)=>{
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    const payload = {
      plan: plan.name, price: plan.price,
      coin, address,
      email: String(fd.get('email')||''),
      tx: String(fd.get('tx')||''),
      contact: String(fd.get('contact')||''),
      ts: new Date().toISOString()
    };
    try{
      const res = await fetch('/api/subscribe', { method:'POST', body: JSON.stringify(payload) });
      if(res.ok){
        window.location.href = '/success';
        return;
      }
    }catch{}
    // Fallback to email if API fails
    const subject = encodeURIComponent(`New ${plan.name} subscription`);
    const body = encodeURIComponent(
      `Plan: ${plan.name} ($${plan.price}/mo)\nCoin/Network: ${coin}\nAddress: ${address}\nTX: ${payload.tx}\nUser email: ${payload.email}\nContact: ${payload.contact}`
    );
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="my-12">
      <h1 className="h2">Subscribe</h1>
      <p className="muted mt-2">Selected plan: <strong>{plan.name}</strong> — ${"{"+ "plan.price"+"}"}/mo</p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="card p-6">
          <label className="block text-sm mb-2">Choose coin / network</label>
          <div className="grid grid-cols-2 gap-2">
            {(['USDT_TRC20','USDT_ERC20','BTC','ETH'] as const).map(k=> (
              <button key={k} onClick={()=>setCoin(k)} className={`btn ${coin===k?'btn-primary':'btn-ghost'}`}>{k.replace('_',' ')}</button>
            ))}
          </div>
          <div className="mt-6">
            <img src={qr} alt="QR" className="w-40 h-40 rounded-xl border border-white/10" />
            <div className="mt-3 text-sm">Address</div>
            <div className="font-mono break-all select-all">{address}</div>
            <button onClick={()=>navigator.clipboard.writeText(address)} className="btn btn-ghost mt-3">Copy Address</button>
          </div>
        </div>

        <form onSubmit={submit} className="card p-6 space-y-4">
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input name="email" required placeholder="you@email.com" className="w-full bg-black/30 border border-white/15 rounded-xl px-4 py-3" />
          </div>
          <div>
            <label className="block text-sm mb-2">Transaction Hash / Link</label>
            <input name="tx" required placeholder="Paste TX hash or explorer link" className="w-full bg-black/30 border border-white/15 rounded-xl px-4 py-3" />
          </div>
          <div>
            <label className="block text-sm mb-2">Optional contact (Telegram/WhatsApp)</label>
            <input name="contact" placeholder="@username or +123..." className="w-full bg-black/30 border border-white/15 rounded-xl px-4 py-3" />
          </div>
          <button className="btn btn-primary w-full">Submit</button>
          <p className="text-xs muted">We’ll verify your transaction and activate access. Manual step for now; API route is ready for SMTP integration.</p>
        </form>
      </div>
    </section>
  )
}
