import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { About } from "@/components/Features";
import Product from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Team } from "@/components/Pricingdemo";

export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden overflow-hidden">
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      
      <About />
      
      <Product />
      <FAQs />
      <Team/>
     
      <CallToAction />
      </div>
      <Footer />
    </>
  );
}
