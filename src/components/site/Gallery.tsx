import { motion } from "framer-motion";
import { photos, INSTAGRAM } from "./data";
import { Reveal, Divider } from "./Reveal";

const items = [
  { src: photos.beforeAfter, label: "Lábios & Perfil", span: "row-span-2" },
  { src: photos.procedure1, label: "Procedimento" },
  { src: photos.machines, label: "Tecnologia HiPro" },
  { src: photos.procedure2, label: "Atendimento" },
  { src: photos.syringes, label: "Bioestimuladores" },
  { src: photos.bemVinda, label: "Bem vinda", span: "row-span-2" },
];

export function Gallery() {
  return (
    <section id="resultados" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="text-center">
          <p className="label-caps text-rosegold">Galeria</p>
          <h2 className="mt-4 font-display text-4xl font-light italic text-wine md:text-5xl">
            Resultados que falam por si
          </h2>
          <Divider className="mt-8" />
        </Reveal>

        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[230px]">
          {items.map((it, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 0.08}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${it.span ?? ""}`}
            >
              <motion.img
                src={it.src}
                alt={it.label}
                loading="lazy"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-wine-deep/70 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="label-caps text-[0.6rem] text-ivory">{it.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="label-caps text-wine transition-colors hover:text-rosegold"
          >
            Ver mais no Instagram →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
