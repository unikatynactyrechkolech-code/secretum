import { Mail } from "lucide-react";

export default function Pricing() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-5 py-4 sm:px-6 lg:px-10">
      <p className="mb-2 text-[10px] font-semibold tracking-[0.25em] text-accent sm:text-xs">
        CENÍK
      </p>
      <h2 className="font-heading text-xl tracking-wide text-white sm:text-2xl lg:text-3xl">
        CENA NA MÍRU <span className="text-accent">VAŠEMU PŘÍPADU</span>
      </h2>
      <p className="mt-4 max-w-xl text-xs leading-relaxed text-white/80 sm:text-sm lg:text-base">
        Cena každého šetření se odvíjí od rozsahu, časové náročnosti a
        specifik případu. Po nezávazné konzultaci vám připravíme přesnou
        a transparentní nabídku bez skrytých poplatků.
      </p>
      <a
        href="mailto:info@secretum.cz"
        className="mt-8 flex w-fit items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-red-700 sm:text-sm"
      >
        <Mail size={16} />
        VYŽÁDAT NABÍDKU
      </a>
    </div>
  );
}
