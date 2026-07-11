"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "ÚVOD", href: "#uvod" },
  { label: "SLUŽBY", href: "#sluzby" },
  { label: "O NÁS", href: "#o-nas" },
  { label: "CENÍK", href: "#cenik" },
  { label: "KONTAKT", href: "#kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#uvod" className="leading-tight">
          <p className="font-heading text-2xl tracking-[0.2em] text-white">
            SECRETUM
          </p>
          <p className="text-[10px] tracking-[0.4em] text-accent">
            DETEKTIVNÍ SLUŽBY
          </p>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wider transition-colors hover:text-accent ${
                i === 0 ? "border-b-2 border-accent pb-1 text-accent" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Otevřít menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 bg-black/95 px-6 pb-6 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-3 text-sm tracking-wider text-white hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
