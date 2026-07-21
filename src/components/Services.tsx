const services = [
  { label: "SLEDOVÁNÍ OSOB" },
  { label: "PROVĚŘOVÁNÍ NEVĚRY" },
  { label: "DISKRÉTNÍ ŠETŘENÍ" },
  { label: "DŮKAZNÍ MATERIÁLY" },
  { label: "PÁTRÁNÍ PO OSOBÁCH" },
];

export default function Services() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-5 py-4 sm:px-6 lg:px-10">
      <p className="mb-2 text-[10px] font-semibold tracking-[0.25em] text-accent sm:text-xs">
        CO NABÍZÍME
      </p>
      <h2 className="mb-6 font-heading text-xl tracking-wide text-white sm:text-2xl lg:mb-10 lg:text-3xl">
        NAŠE <span className="text-accent">SLUŽBY</span>
      </h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-6">
        {services.map(({ label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 rounded-md border border-white/10 px-3 py-4 text-center transition-colors hover:border-accent/50"
          >
            <p className="text-xs font-semibold tracking-wide text-white sm:text-sm">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
