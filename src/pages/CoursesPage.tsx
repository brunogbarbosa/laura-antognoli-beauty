import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Courses } from "@/components/site/Courses.tsx";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export function CoursesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-x-hidden bg-ivory pt-16">
      <Navbar />
      <Courses />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}