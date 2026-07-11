import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseAndContact from "@/components/WhyChooseAndContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseAndContact />
      </main>
      <Footer />
    </>
  );
}

