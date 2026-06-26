import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Differentials } from "@/components/site/Differentials";
import { Courses } from "@/components/site/Courses";
import { Products } from "@/components/site/Products";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Laura Antognoli | Estética Avançada · Sumaré, SP" },
      {
        name: "description",
        content:
          "Especialista em lábios, perfiloplastia e full face. Revelo a gata que existe em você. Sumaré, SP.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-hidden bg-ivory">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Courses />
      <Products />
      <Gallery />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
