import { CheckCircle2, Mail, Phone } from "lucide-react";

const reasons = [
  "Maximální diskrétnost",
  "Individuální přístup",
  "Profesionální zkušenosti",
  "Rychlé a efektivní jednání",
  "Působnost po celé České republice",
];

export default function WhyChooseAndContact() {
  return (
    <section id="o-nas" className="shrink-0 border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-4 py-2 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:py-5">
        <div>
          <h2 className="font-heading text-[11px] tracking-wide text-white sm:text-base lg:text-xl">
            PROČ SI VYBRAT <span className="text-accent">SECRETUM</span>
          </h2>
          <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-0.5 sm:grid-cols-2 lg:mt-3 lg:gap-y-2">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-1.5 lg:gap-2">
                <CheckCircle2 size={11} className="shrink-0 text-accent sm:h-4 sm:w-4" />
                <span className="text-[9px] text-white/85 sm:text-xs lg:text-sm">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div id="kontakt">
          <h2 className="font-heading text-[11px] tracking-wide text-white sm:text-base lg:text-xl">
            KONTAKT
          </h2>
          <div className="mt-1 flex flex-col gap-1 sm:flex-row sm:gap-6 lg:mt-3">
            <a
              href="mailto:info@secretum.cz"
              className="flex items-center gap-1.5 text-white/90 transition-colors hover:text-accent lg:gap-3"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/60 text-accent sm:h-8 sm:w-8">
                <Mail size={10} className="sm:h-4 sm:w-4" />
              </span>
              <span className="text-[9px] sm:text-xs lg:text-sm">info@secretum.cz</span>
            </a>
            <a
              href="tel:+420739057350"
              className="flex items-center gap-1.5 text-white/90 transition-colors hover:text-accent lg:gap-3"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/60 text-accent sm:h-8 sm:w-8">
                <Phone size={10} className="sm:h-4 sm:w-4" />
              </span>
              <span className="text-[9px] sm:text-xs lg:text-sm">+420 739 057 350</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
