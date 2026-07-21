"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { TabId } from "@/app/page";

const navLinks: { label: string; id: TabId }[] = [
  { label: "ÚVOD", id: "uvod" },
  { label: "SLUŽBY", id: "sluzby" },
  { label: "O NÁS", id: "o-nas" },
  { label: "CENÍK", id: "cenik" },
  { label: "KONTAKT", id: "kontakt" },
];

export default function Header({
  active,
  onNavigate,
}: {
  active: TabId;
  onNavigate: (id: TabId) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 w-full shrink-0 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-10">
        <button
          onClick={() => {
            onNavigate("uvod");
            setOpen(false);
          }}
          className="flex items-center gap-2"
        >
          <Image
            src="/logo-emblem.png"
            alt="Secretum logo"
            width={140}
            height={140}
            priority
            className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
          />
          <div className="leading-tight">
            <p className="font-heading text-base tracking-[0.12em] text-white sm:text-lg">
              SECRETUM
            </p>
            <p className="text-[8px] tracking-[0.3em] text-accent sm:text-[9px]">
              DETEKTIVNÍ SLUŽBY
            </p>
          </div>
        </button>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`group relative py-1 text-xs font-medium tracking-wider transition-all duration-200 ease-out hover:text-accent active:scale-90 ${
                active === link.id ? "text-accent" : "text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-[2px] bg-accent transition-all duration-300 ease-out ${
                  active === link.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </nav>

        <button
          className="text-white transition-transform duration-200 active:scale-90 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Otevřít menu"
        >
          <span className="inline-block transition-transform duration-300" style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </span>
        </button>
      </div>

      <nav
        className={`flex flex-col gap-1 overflow-hidden bg-black/95 px-6 transition-all duration-300 ease-out lg:hidden ${
          open ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
        }`}
      >
        {navLinks.map((link, i) => (
          <button
            key={link.id}
            onClick={() => {
              onNavigate(link.id);
              setOpen(false);
            }}
            className={`border-b border-white/10 py-3 text-left text-sm tracking-wider transition-all duration-200 ease-out active:scale-95 active:text-accent hover:pl-2 hover:text-accent ${
              active === link.id ? "text-accent" : "text-white"
            }`}
            style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

