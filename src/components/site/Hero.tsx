import { motion } from "framer-motion";
import { Crown } from "lucide-react";
import { photos, WHATSAPP, WHATSAPP_GROUP } from "./data";

const ease = [0.22, 1, 0.36, 1] as const;
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-screen items-center overflow-hidden bg-ivory pt-24"
    >
      {/* decorative organic line art */}
      <svg
        className="pointer-events-none absolute -right-24 top-1/4 hidden w-[480px] text-wine/[0.07] md:block"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <path
          d="M100 10c40 30 60 60 40 100s-80 60-100 20S40 40 100 10Z"
          stroke="currentColor"
          strokeWidth="0.6"
        />
        <path
          d="M100 30c28 22 44 46 30 78s-58 46-74 14S58 50 100 30Z"
          stroke="currentColor"
          strokeWidth="0.6"
        />
      </svg>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="label-caps mb-6 text-rosegold">
            BioMedicina Estética Avançada · Sumaré, SP
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-5xl font-light italic leading-[1.05] text-wine sm:text-6xl lg:text-7xl"
          >
            Revelo a <span className="not-italic">GATA</span>
            <br />
            que existe em você
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-7 max-w-md text-lg font-light leading-relaxed text-taupe"
          >
            Lábios, perfiloplastia e full face com olhar artístico e técnica
            exclusiva. Resultados naturais que realçam a sua essência.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-wine px-8 py-4 label-caps text-[0.62rem] text-ivory transition-all hover:bg-wine-deep hover:shadow-soft"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href={WHATSAPP_GROUP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rosegold to-champagne px-8 py-4 label-caps text-[0.62rem] text-wine shadow-soft transition-all hover:brightness-105"
            >
              <Crown className="size-3.5" strokeWidth={1.5} />
              Grupo VIP
            </a>
            <a
              href="#tratamentos"
              className="rounded-full border border-wine/30 px-8 py-4 label-caps text-[0.62rem] text-wine transition-all hover:border-wine hover:bg-wine/5"
            >
              Conheça os tratamentos
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-rosegold/40" />
          <img
            src={photos.leather}
            alt="Dra. Laura Antognoli"
            width={640}
            height={800}
            className="aspect-[4/5] w-full rounded-[1.8rem] object-cover shadow-soft"
          />
        </motion.div>
      </div>
    </section>
  );
}
