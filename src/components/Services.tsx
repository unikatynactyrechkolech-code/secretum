const services = [
  "SLEDOVÁNÍ OSOB",
  "PROVĚŘOVÁNÍ NEVĚRY",
  "DISKRÉTNÍ ŠETŘENÍ",
  "DŮKAZNÍ MATERIÁLY",
  "PÁTRÁNÍ PO OSOBÁCH",
];

export default function Services() {
  const items = [...services, ...services];

  return (
    <section
      id="sluzby"
      className="w-full overflow-hidden border-t border-white/10 bg-black py-2"
    >
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {items.map((label, i) => (
          <p
            key={`${label}-${i}`}
            className="text-[11px] font-semibold tracking-wide text-white sm:text-sm"
          >
            {label}
          </p>
        ))}
      </div>
    </section>
  );
}
