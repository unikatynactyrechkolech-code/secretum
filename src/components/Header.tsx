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
            <p className="font-heading text-base tracking-[0.12em] text-white sm:text-lg">
              SECRETUM
            </p>
            <p className="text-[8px] tracking-[0.3em] text-accent sm:text-[9px]">
              DETEKTIVNÍ SLUŽBY
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative py-1 text-xs font-medium tracking-wider transition-all duration-200 ease-out hover:text-accent active:scale-90 ${
                i === 0 ? "text-accent" : "text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-[2px] bg-accent transition-all duration-300 ease-out ${
                  i === 0 ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
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
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="border-b border-white/10 py-3 text-sm tracking-wider text-white transition-all duration-200 ease-out active:scale-95 active:text-accent hover:pl-2 hover:text-accent"
            style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
