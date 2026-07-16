import Image from "next/image";
import { UserRound, ListChecks } from "lucide-react";

export default function Hero() {
  return (
    <section id="uvod" className="relative flex flex-1 items-center bg-black">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-4 px-4 lg:grid-cols-2 lg:gap-8 lg:px-10">
        <div className="relative z-10">
          <p className="mb-1.5 text-[10px] font-semibold tracking-[0.3em] text-accent sm:text-xs lg:mb-3 lg:text-sm">
            DETEKTIVNÍ KANCELÁŘ
          </p>
          <h1 className="font-heading text-xl leading-tight tracking-wide text-white sm:text-2xl lg:text-4xl xl:text-5xl">
            PRAVDA UKRYTÁ
            <br />
            <span className="text-accent">V DETAILECH</span>
          </h1>

          <p className="mt-2 max-w-xl text-[11px] leading-relaxed text-white/80 sm:text-xs lg:mt-4 lg:text-base">
            Diskrétní detektivní služby pro soukromé osoby i firmy.
            Poskytujeme profesionální šetření, sledování osob, prověřování
            nevěry a zajišťování důkazních materiálů v souladu s platnou
            legislativou.
          </p>

          <p className="mt-2 font-heading text-xs tracking-wide text-white/90 sm:text-sm lg:mt-4 lg:text-lg">
            DŮKAZY, NA KTERÉ SE MŮŽETE SPOLEHNOUT.
          </p>

          <div className="mt-3 flex flex-col gap-2 sm:flex-row lg:mt-6">
            <a
              href="#kontakt"
              className="flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2 text-[11px] font-semibold tracking-wide text-white transition-colors hover:bg-red-700 sm:text-xs lg:px-7 lg:py-3.5 lg:text-sm"
            >
              <UserRound size={16} />
              NEZÁVAZNÁ KONZULTACE
            </a>
            <a
              href="#sluzby"
              className="flex items-center justify-center gap-2 rounded-md border border-white/30 px-4 py-2 text-[11px] font-semibold tracking-wide text-white transition-colors hover:border-accent hover:text-accent sm:text-xs lg:px-7 lg:py-3.5 lg:text-sm"
            >
              <ListChecks size={16} />
              NAŠE SLUŽBY
            </a>
          </div>
        </div>

        <div className="relative hidden h-[220px] w-full overflow-hidden rounded-lg sm:h-[280px] md:block lg:h-[360px] xl:h-[420px]">
          <Image
            src="/hero-bg.png"
            alt="Detektiv při práci"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 backdrop-blur-xl"
            style={{
              maskImage: "linear-gradient(to right, black, transparent)",
              WebkitMaskImage: "linear-gradient(to right, black, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
