import { Eye, Search, ShieldCheck, FolderSearch, MapPin } from "lucide-react";

const services = [
  { icon: Eye, label: "SLEDOVÁNÍ OSOB" },
  { icon: Search, label: "PROVĚŘOVÁNÍ NEVĚRY" },
  { icon: ShieldCheck, label: "DISKRÉTNÍ ŠETŘENÍ" },
  { icon: FolderSearch, label: "DŮKAZNÍ MATERIÁLY" },
  { icon: MapPin, label: "PÁTRÁNÍ PO OSOBÁCH" },
];

export default function Services() {
  return (
    <section id="sluzby" className="shrink-0 border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-y-2 px-4 py-2 sm:grid-cols-5 lg:px-10 lg:py-4">
        {services.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1 text-center lg:gap-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/60 text-accent sm:h-10 sm:w-10 lg:h-12 lg:w-12">
              <Icon size={16} className="sm:hidden" />
              <Icon size={20} className="hidden sm:block lg:hidden" />
              <Icon size={22} className="hidden lg:block" />
            </div>
            <p className="text-[9px] font-semibold tracking-wide text-white sm:text-[11px] lg:text-sm">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
