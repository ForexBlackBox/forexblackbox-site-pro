import Link from "next/link";
import { PLANS } from "@/lib/config";

const features = [
  { key: "signals", label: "Signals / day", values: ["1-3","2-5","3-7"]},
  { key: "channel", label: "VIP Channel", values: ["—","Yes","Yes"]},
  { key: "recap", label: "Weekly Recap", values: ["—","Yes","Yes"]},
  { key: "support", label: "Priority Support", values: ["—","—","Yes"]},
  { key: "edu", label: "Education Pack", values: ["—","—","Yes"]},
];

export default function Page(){
  return (
    <section className="my-12">
      <h1 className="h2">Pricing</h1>
      <p className="muted mt-2">Simple plans. Crypto-only checkout.</p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {PLANS.map((p) => (
          <div key={p.id} className="card p-6 flex flex-col">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <div className="text-4xl font-bold mt-2">
              ${p.price}
              <span className="text-base font-normal text-white/70">/mo</span>
            </div>
            <ul className="mt-4 space-y-2">
              {p.features.map((f: string) => (
                <li key={f} className="flex items-center gap-2">• {f}</li>
              ))}
            </ul>
            <Link href={`/subscribe?plan=${p.id}`} className="btn btn-primary mt-auto">
              Subscribe
            </Link>
          </div>
        ))}
      </div>

      <div className="card p-6 mt-8 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left py-3">Feature</th>
              {PLANS.map((p) => (
                <th key={p.id} className="text-left py-3">{p.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((f) => (
              <tr key={f.key} className="border-t border-white/10">
                <td className="py-3">{f.label}</td>
                {f.values.map((v, i) => (
                  <td key={i} className="py-3">{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
