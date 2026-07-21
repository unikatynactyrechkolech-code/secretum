import { Mail, Phone, UserRound } from "lucide-react";

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
          className="flex items-center gap-3 text-white/90 transition-colors hover:text-accent"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/60 text-accent sm:h-11 sm:w-11">
            <Mail size={16} className="sm:h-5 sm:w-5" />
          </span>
          <span className="text-sm sm:text-base">info@secretum.cz</span>
        </a>
        <a
          href="tel:+420739057350"
          className="flex items-center gap-3 text-white/90 transition-colors hover:text-accent"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/60 text-accent sm:h-11 sm:w-11">
            <Phone size={16} className="sm:h-5 sm:w-5" />
          </span>
          <span className="text-sm sm:text-base">+420 739 057 350</span>
        </a>
      </div>

      <a
        href="mailto:info@secretum.cz"
        className="mt-8 flex w-fit items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-red-700 sm:text-sm"
      >
        <UserRound size={16} />
        NEZÁVAZNÁ KONZULTACE
      </a>
    </div>
  );
}
