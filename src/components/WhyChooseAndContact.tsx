const reasons = [
  "Maximální diskrétnost",
  "Individuální přístup",
  "Profesionální zkušenosti",
  "Rychlé a efektivní jednání",
  "Působnost po celé České republice",
];

export default function WhyChooseAndContact() {
  return (
    <section id="o-nas" className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-2 lg:grid-cols-2 lg:px-10">
        <div>
          <h2 className="font-heading text-sm tracking-wide text-white sm:text-lg">
            PROČ SI VYBRAT <span className="text-accent">SECRETUM</span>
          </h2>
          <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-0.5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-2">
                <span className="text-[11px] text-white/85 sm:text-xs">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div id="kontakt">
          <h2 className="font-heading text-sm tracking-wide text-white sm:text-lg">
            KONTAKT
          </h2>
          <div className="mt-1 flex flex-col gap-1 sm:flex-row sm:gap-6">
            <a
              href="mailto:info@secretum.cz"
              className="text-[11px] text-white/90 transition-colors hover:text-accent sm:text-sm"
            >
              info@secretum.cz
            </a>
            <a
              href="tel:+420739057350"
              className="text-[11px] text-white/90 transition-colors hover:text-accent sm:text-sm"
            >
              +420 739 057 350
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
