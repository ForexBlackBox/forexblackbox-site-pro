export default function Page(){
  return (
    <section className="my-12 space-y-6">
      <h1 className="h2">Overview & Methodology</h1>
      <p className="muted">We focus on majors and XAUUSD using market structure, liquidity sweeps, and confluence across HTF→LTF. Signals include entry, SL, TP, and reasoning.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          ["Multi‑Timeframe Confluence","HTF bias (H4/D1) + LTF (M15/M5) precision entries."],
          ["Risk Management","Fixed % risk per trade, asymmetric RR, avoid overtrading."],
          ["Transparency","Every signal carries clear invalidation and targets."],
        ].map(([t,d])=> (
          <div key={t} className="card p-6"><h3 className="text-xl font-semibold">{t}</h3><p className="muted mt-2">{d}</p></div>
        ))}
      </div>
    </section>
  )
}
