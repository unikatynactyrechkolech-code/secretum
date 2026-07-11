import Image from "next/image";
import { UserRound, ListChecks } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="uvod"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-black pt-32 pb-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/hero-bg.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.35em] text-accent">
            DETEKTIVNÍ KANCELÁŘ
          </p>
          <h1 className="font-heading text-4xl leading-tight tracking-wide text-white sm:text-5xl lg:text-6xl">
            Pravda ukrytá
            <br />
            <span className="italic text-accent">v detailech</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Diskrétní detektivní služby pro soukromé osoby i firmy.
            Poskytujeme profesionální šetření, sledování osob, prověřování
            nevěry a zajišťování důkazních materiálů v souladu s platnou
            legislativou.
          </p>

          <p className="mt-6 font-heading text-lg italic tracking-wide text-white/90 sm:text-xl">
            Důkazy, na které se můžete spolehnout.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#kontakt"
              className="flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-red-700"
            >
              <UserRound size={18} />
              NEZÁVAZNÁ KONZULTACE
            </a>
            <a
              href="#sluzby"
              className="flex items-center justify-center gap-2 rounded-md border border-white/30 px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:border-accent hover:text-accent"
            >
              <ListChecks size={18} />
              NAŠE SLUŽBY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
