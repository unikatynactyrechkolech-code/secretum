const services = [
  "SLEDOVÁNÍ OSOB",
  "PROVĚŘOVÁNÍ NEVĚRY",
  "DISKRÉTNÍ ŠETŘENÍ",
  "DŮKAZNÍ MATERIÁLY",
  "PÁTRÁNÍ PO OSOBÁCH",
];

export default function Services() {
  return (
    <section id="sluzby" className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-2 px-4 py-2 sm:grid-cols-3 lg:grid-cols-5 lg:px-10">
        {services.map((label) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1 text-center"
          >
            <p className="text-[11px] font-semibold tracking-wide text-white sm:text-xs">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
