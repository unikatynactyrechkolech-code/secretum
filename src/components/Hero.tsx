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
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-4 px-5 py-10 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:py-0">
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-accent sm:text-sm lg:mb-3 lg:text-sm">
            DETEKTIVNÍ KANCELÁŘ
          </p>
          <h1 className="font-heading text-3xl leading-tight tracking-wide text-white sm:text-4xl lg:text-4xl xl:text-5xl">
            PRAVDA UKRYTÁ
            <br />
            <span className="text-accent">V DETAILECH</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base lg:mt-4 lg:text-base">
            Diskrétní detektivní služby pro soukromé osoby i firmy.
            Poskytujeme profesionální šetření, sledování osob, prověřování
            nevěry a zajišťování důkazních materiálů v souladu s platnou
            legislativou.
          </p>

          <p className="mt-4 font-heading text-base tracking-wide text-white/90 sm:text-lg lg:mt-4 lg:text-lg">
            DŮKAZY, NA KTERÉ SE MŮŽETE SPOLEHNOUT.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-6">
            <a
              href="#kontakt"
              className="flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-red-700 lg:px-7 lg:py-3.5"
            >
              <UserRound size={18} />
              NEZÁVAZNÁ KONZULTACE
            </a>
            <a
              href="#sluzby"
              className="flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:border-accent hover:text-accent lg:px-7 lg:py-3.5"
            >
              <ListChecks size={18} />
              NAŠE SLUŽBY
            </a>
          </div>
        </div>

        {/* Desktop side image, blending into black on all edges */}
        <div className="relative hidden h-[220px] w-full md:block sm:h-[280px] lg:h-[360px] xl:h-[420px]">
          <div
            className="absolute inset-0"
            style={{
              maskImage:
                "radial-gradient(ellipse 75% 75% at center, black 45%, transparent 85%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 75% at center, black 45%, transparent 85%)",
            }}
          >
            <Image
              src="/hero-bg.png"
              alt="Detektiv při práci"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
