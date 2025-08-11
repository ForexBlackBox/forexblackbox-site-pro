import Carousel from "@/components/Carousel";

export default function Page(){
  const items = [
    <p key="1">“Consistent clarity. The risk notes alone improved my results.” — A. Khan</p>,
    <p key="2">“Transparent TP/SL. No hype, just solid trades.” — J. Sharma</p>,
    <p key="3">“Great value at Elite tier. Support is fast.” — R. Patel</p>,
    <p key="4">“Best risk management guidance I’ve used.” — M. Ortega</p>,
  ];
  return (
    <section className="my-12 space-y-6">
      <h1 className="h2">Member Reviews</h1>
      <Carousel items={items} />
    </section>
  )
}
