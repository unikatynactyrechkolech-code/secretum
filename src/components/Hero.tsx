import Image from "next/image";

export default function Hero() {
  return (
    <section id="uvod" className="relative flex-1 bg-black">
      <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-1 items-center gap-6 px-4 py-2 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-accent sm:text-sm">
            DETEKTIVNÍ KANCELÁŘ
          </p>
          <h1 className="font-heading text-2xl leading-tight tracking-wide text-white sm:text-3xl lg:text-5xl">
            Pravda ukrytá
            <br />
            <span className="italic text-accent">v detailech</span>
          </h1>

          <p className="mt-3 max-w-xl text-xs leading-relaxed text-white/80 sm:text-sm lg:text-base">
            Diskrétní detektivní služby pro soukromé osoby i firmy.
            Poskytujeme profesionální šetření, sledování osob, prověřování
            nevěry a zajišťování důkazních materiálů v souladu s platnou
            legislativou.
          </p>

          <p className="mt-3 font-heading text-sm italic tracking-wide text-white/90 sm:text-base lg:text-lg">
            Důkazy, na které se můžete spolehnout.
          </p>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <a
              href="#kontakt"
              className="flex items-center justify-center rounded-md bg-accent px-5 py-2 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-red-700 sm:text-sm"
            >
              NEZÁVAZNÁ KONZULTACE
            </a>
            <a
              href="#sluzby"
              className="flex items-center justify-center rounded-md border border-white/30 px-5 py-2 text-xs font-semibold tracking-wide text-white transition-colors hover:border-accent hover:text-accent sm:text-sm"
            >
              NAŠE SLUŽBY
            </a>
          </div>
        </div>

        <div className="relative h-32 w-full overflow-hidden rounded-lg sm:h-52 lg:h-[280px]">
          <Image
            src="/hero-bg.png"
            alt="Detektiv při práci"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
