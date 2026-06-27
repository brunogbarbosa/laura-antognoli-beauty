import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Differentials } from "@/components/site/Differentials";
import { Courses } from "@/components/site/Courses.tsx";
import { Products } from "@/components/site/Products";
import { Clinic } from "@/components/site/Clinic";
import { Results } from "@/components/site/Results";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export function App() {
  return (
    <main className="overflow-x-hidden bg-ivory">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Courses />
      <Products />
      <Clinic />
      <Results />
      <Gallery />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
