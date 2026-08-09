"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export type TabId = "uvod" | "sluzby" | "o-nas" | "cenik" | "kontakt";

export default function Home() {
  const [tab, setTab] = useState<TabId>("uvod");

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden">
      <Header active={tab} onNavigate={setTab} />
      <main key={tab} className="flex flex-1 flex-col overflow-hidden animate-section-in">
        {tab === "uvod" && <Hero onNavigate={setTab} />}
        {tab === "sluzby" && <Services />}
        {tab === "o-nas" && <WhyChoose />}
        {tab === "cenik" && <Pricing />}
        {tab === "kontakt" && <Contact />}
      </main>
      <Footer />
    </div>
  );
}


