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
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-14 sm:grid-cols-3 lg:grid-cols-5 lg:px-10">
        {services.map((label) => (
          <div
            key={label}
            className="flex flex-col items-center gap-4 text-center"
          >
            <p className="text-sm font-semibold tracking-wide text-white">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
