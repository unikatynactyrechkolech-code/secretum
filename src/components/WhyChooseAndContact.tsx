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
    <section id="o-nas" className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10">
        <div>
          <h2 className="font-heading text-2xl tracking-wide text-white sm:text-3xl">
            PROČ SI VYBRAT <span className="text-accent">SECRETUM</span>
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="shrink-0 text-accent" />
                <span className="text-sm text-white/85 sm:text-base">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div id="kontakt">
          <h2 className="font-heading text-2xl tracking-wide text-white sm:text-3xl">
            KONTAKT
          </h2>
          <div className="mt-6 flex flex-col gap-5">
            <a
              href="mailto:info@secretum.cz"
              className="flex items-center gap-4 text-white/90 transition-colors hover:text-accent"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/60 text-accent">
                <Mail size={18} />
              </span>
              <span className="text-base sm:text-lg">info@secretum.cz</span>
            </a>
            <a
              href="tel:+420739057350"
              className="flex items-center gap-4 text-white/90 transition-colors hover:text-accent"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/60 text-accent">
                <Phone size={18} />
              </span>
              <span className="text-base sm:text-lg">+420 739 057 350</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

