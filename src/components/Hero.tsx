import Image from "next/image";
import { UserRound, ListChecks } from "lucide-react";

export default function Hero() {
  return (
    <section id="uvod" className="relative flex flex-1 items-center overflow-hidden bg-black">
      {/* Mobile background image with dark overlay */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/hero-bg.png"
          alt="Detektiv při práci"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-110 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-2 px-5 py-3 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:py-0">
        <div>
          <p className="mb-2 text-[10px] font-semibold tracking-[0.25em] text-accent sm:text-xs lg:mb-3 lg:text-sm">
            DETEKTIVNÍ KANCELÁŘ
          </p>
          <h1 className="font-heading text-xl leading-tight tracking-wide text-white sm:text-xl lg:text-3xl xl:text-4xl">
            PRAVDA UKRYTÁ
            <br />
            <span className="text-accent">V DETAILECH</span>
          </h1>

          <p className="mt-4 max-w-xl text-xs leading-relaxed text-white/80 sm:text-sm lg:mt-4 lg:text-base">
            Diskrétní detektivní služby pro soukromé osoby i firmy.
            Poskytujeme profesionální šetření, sledování osob, prověřování
            nevěry a zajišťování důkazních materiálů v souladu s platnou
            legislativou.
          </p>

          <p className="mt-4 font-heading text-sm tracking-wide text-white/90 sm:text-base lg:mt-4 lg:text-lg">
            DŮKAZY, NA KTERÉ SE MŮŽETE SPOLEHNOUT.
          </p>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row lg:mt-6 lg:gap-3">
            <a
              href="#kontakt"
              className="flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-red-700 sm:text-sm lg:px-7 lg:py-3.5"
            >
              <UserRound size={14} className="lg:hidden" />
              <UserRound size={18} className="hidden lg:block" />
              NEZÁVAZNÁ KONZULTACE
            </a>
            <a
              href="#sluzby"
              className="flex items-center justify-center gap-2 rounded-md border border-white/30 px-4 py-2.5 text-xs font-semibold tracking-wide text-white transition-colors hover:border-accent hover:text-accent sm:text-sm lg:px-7 lg:py-3.5"
            >
              <ListChecks size={14} className="lg:hidden" />
              <ListChecks size={18} className="hidden lg:block" />
              NAŠE SLUŽBY
            </a>
          </div>
        </div>

        {/* Desktop side image, blending into black on all edges */}
        <div className="relative hidden h-[220px] w-full md:block sm:h-[280px] lg:h-[360px] xl:h-[420px]">
          <Image
            src="/hero-bg.png"
            alt="Detektiv při práci"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover brightness-110 contrast-110"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 62% 62% at center, rgba(0,0,0,0) 10%, rgba(0,0,0,0.78) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
