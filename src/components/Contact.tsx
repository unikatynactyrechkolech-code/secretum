export default function Contact() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-5 py-4 sm:px-6 lg:px-10">
      <p className="mb-2 text-[10px] font-semibold tracking-[0.25em] text-accent sm:text-xs">
        SPOJTE SE S NÁMI
      </p>
      <h2 className="font-heading text-xl tracking-wide text-white sm:text-2xl lg:text-3xl">
        KONTAKT
      </h2>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:gap-10 lg:mt-8">
        <a
          href="mailto:info@secretum.cz"
          className="text-white/90 transition-colors hover:text-accent"
        >
          <span className="text-sm sm:text-base">info@secretum.cz</span>
        </a>
        <a
          href="tel:+420739057350"
          className="text-white/90 transition-colors hover:text-accent"
        >
          <span className="text-sm sm:text-base">+420 739 057 350</span>
        </a>
      </div>

      <a
        href="mailto:info@secretum.cz"
        className="mt-8 flex w-fit items-center justify-center rounded-md bg-accent px-6 py-3 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-red-700 sm:text-sm"
      >
        NEZÁVAZNÁ KONZULTACE
      </a>
    </div>
  );
}
