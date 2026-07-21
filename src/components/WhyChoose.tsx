import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Maximální diskrétnost",
  "Individuální přístup",
  "Profesionální zkušenosti",
  "Rychlé a efektivní jednání",
  "Působnost po celé České republice",
];

export default function WhyChoose() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-5 py-4 sm:px-6 lg:px-10">
      <p className="mb-2 text-[10px] font-semibold tracking-[0.25em] text-accent sm:text-xs">
        O NÁS
      </p>
      <h2 className="font-heading text-xl tracking-wide text-white sm:text-2xl lg:text-3xl">
        PROČ SI VYBRAT <span className="text-accent">SECRETUM</span>
      </h2>
      <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:mt-8 lg:gap-y-5">
        {reasons.map((reason) => (
          <div key={reason} className="flex items-center gap-2.5">
            <CheckCircle2 size={18} className="shrink-0 text-accent sm:h-5 sm:w-5" />
            <span className="text-xs text-white/85 sm:text-sm lg:text-base">
              {reason}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
