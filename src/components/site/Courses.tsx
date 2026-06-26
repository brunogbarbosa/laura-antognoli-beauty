import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Reveal, Divider } from "./Reveal";
import { courses, type Course } from "./courses";
import { WHATSAPP } from "./data";

export function Courses() {
  const [active, setActive] = useState<Course | null>(null);

  return (
    <section id="cursos" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="text-center">
          <p className="label-caps text-rosegold">Formação & Mentoria</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-light italic leading-tight text-wine md:text-5xl">
            Cursos da Dra. Laura Antognoli
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-taupe">
            Conhecimento autoral para profissionais que querem elevar a técnica.
            Toque em um curso para visualizar a apresentação completa.
          </p>
          <Divider className="mt-8" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05}>
              <motion.button
                type="button"
                onClick={() => setActive(c)}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group block h-full w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-[0_12px_40px_-30px_rgba(0,0,0,0.5)] transition-shadow hover:shadow-soft"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={c.cover}
                    alt={`Capa do curso ${c.title}`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-ivory/90 px-4 py-1.5 label-caps text-[0.55rem] text-wine backdrop-blur">
                    <FileText className="size-3" strokeWidth={1.5} /> Ver apresentação
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl italic text-wine">{c.title}</h3>
                  <p className="label-caps mt-1 text-[0.55rem] text-rosegold">
                    {c.subtitle}
                  </p>
                  <p className="mt-3 text-sm font-light leading-relaxed text-taupe">
                    {c.description}
                  </p>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl gap-0 overflow-hidden border-border bg-ivory p-0">
          {active && (
            <>
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <div>
                  <DialogTitle className="font-display text-2xl italic text-wine">
                    {active.title}
                  </DialogTitle>
                  <DialogDescription className="label-caps text-[0.55rem] text-rosegold">
                    {active.subtitle}
                  </DialogDescription>
                </div>
              </div>
              <div className="h-[70vh] w-full bg-cream">
                <iframe
                  src={`${active.pdf}#view=FitH`}
                  title={`Apresentação ${active.title}`}
                  className="size-full"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-6 py-4">
                <a
                  href={active.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 label-caps text-[0.6rem] text-ink/70 transition-colors hover:text-wine"
                >
                  <ExternalLink className="size-3.5" strokeWidth={1.5} /> Abrir em nova aba
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-wine px-6 py-2.5 label-caps text-[0.6rem] text-ivory transition-all hover:bg-wine-deep hover:shadow-soft"
                >
                  Quero me inscrever
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}