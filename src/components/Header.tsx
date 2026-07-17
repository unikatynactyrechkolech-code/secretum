"use client";

import Image from "next/image";
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
    <header className="relative z-30 w-full shrink-0 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-10">
        <a href="#uvod" className="flex items-center gap-2">
          <Image
            src="/logo-emblem.png"
            alt="Secretum logo"
            width={140}
            height={140}
            priority
            className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
          />
          <div className="leading-tight">
            <p className="font-heading text-2xl tracking-[0.12em] text-white sm:text-3xl">
              SECRETUM
            </p>
            <p className="text-[9px] tracking-[0.3em] text-accent sm:text-[10px]">
              DETEKTIVNÍ SLUŽBY
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs font-medium tracking-wider transition-colors hover:text-accent ${
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
          {open ? <X size={22} /> : <Menu size={22} />}
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
