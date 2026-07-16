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
    <section id="sluzby" className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-14 sm:grid-cols-3 lg:grid-cols-5 lg:px-10">
        {services.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-4 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/60 text-accent">
              <Icon size={28} />
            </div>
            <p className="text-sm font-semibold tracking-wide text-white">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
