import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Reveal, Divider } from "./Reveal";
import { resultPhotos } from "./results";
import { WHATSAPP } from "./data";

export function Results() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const active = open ? resultPhotos[index] : null;

  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + resultPhotos.length) % resultPhotos.length)),
    [],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % resultPhotos.length)),
    [],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next]);

  return (
    <section id="antes-depois" className="relative bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="text-center">
          <p className="label-caps text-rosegold">Transformações</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-light italic leading-tight text-wine md:text-5xl">
            Antes &amp; Depois
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-taupe">
            Resultados reais de pacientes da Dra. Laura Antognoli. Toque em uma
            foto para ampliar.
          </p>
          <Divider className="mt-8" />
        </Reveal>

        <div className="mt-14 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {resultPhotos.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 0.05}>
              <motion.button
                type="button"
                onClick={() => setIndex(i)}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-[0_12px_40px_-30px_rgba(0,0,0,0.5)] transition-shadow hover:shadow-soft"
              >
                <img
                  src={p.src}
                  alt={`${p.title} — ${p.caption}`}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/5 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
                <span className="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-full bg-ivory/85 text-wine opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <Maximize2 className="size-3.5" strokeWidth={1.5} />
                </span>
                <span className="absolute bottom-4 left-4 right-4">
                  <span className="block font-display text-xl italic text-ivory">{p.title}</span>
                  <span className="label-caps mt-1 block text-[0.5rem] text-ivory/80">
                    {p.caption}
                  </span>
                </span>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent className="max-w-3xl gap-0 overflow-hidden border-border bg-ink p-0">
          {active && (
            <>
              <div className="relative flex items-center justify-center bg-ink">
                <img
                  src={active.src}
                  alt={`${active.title} — ${active.caption}`}
                  className="max-h-[78vh] w-full object-contain"
                />
                <button
                  type="button"
                  aria-label="Foto anterior"
                  onClick={prev}
                  className="absolute left-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/85 text-wine backdrop-blur transition-colors hover:bg-ivory"
                >
                  <ChevronLeft className="size-5" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  aria-label="Próxima foto"
                  onClick={next}
                  className="absolute right-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/85 text-wine backdrop-blur transition-colors hover:bg-ivory"
                >
                  <ChevronRight className="size-5" strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-6 py-4">
                <div>
                  <DialogTitle className="font-display text-2xl italic text-ivory">
                    {active.title}
                  </DialogTitle>
                  <DialogDescription className="mt-1 text-xs font-light text-ivory/70">
                    {active.caption}
                  </DialogDescription>
                </div>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-wine px-6 py-2.5 label-caps text-[0.6rem] text-ivory transition-all hover:bg-wine-deep hover:shadow-soft"
                >
                  Quero esse resultado
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
