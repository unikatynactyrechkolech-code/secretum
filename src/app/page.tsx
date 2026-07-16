import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseAndContact from "@/components/WhyChooseAndContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden">
      <Header />
      <main className="flex flex-1 flex-col overflow-hidden">
        <Hero />
        <Services />
        <WhyChooseAndContact />
      </main>
      <Footer />
    </div>
  );
}

