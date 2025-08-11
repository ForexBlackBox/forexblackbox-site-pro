import { Accordion } from "@/components/Accordion";

export default function Page(){
  const items = [
    { q: "How are signals delivered?", a: "Email or private channel after subscription." },
    { q: "Which pairs?", a: "Majors and XAUUSD." },
    { q: "Do you offer refunds?", a: "See our Refund Policy. Signals are informational only." },
    { q: "What about risk?", a: "Trading is risky. Use appropriate position sizing; nothing here is financial advice." },
  ];
  return (
    <section className="my-12">
      <h1 className="h2">Frequently Asked Questions</h1>
      <div className="mt-4">
        <Accordion items={items} />
      </div>
    </section>
  )
}
