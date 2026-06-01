import { motion } from "framer-motion";
import { WHATSAPP } from "./data";

export function FinalCTA() {
  return (
    <section className="grain relative overflow-hidden bg-wine py-24 text-ivory md:py-32">
      <div
        className="pointer-events-none absolute -left-20 -top-20 size-96 rounded-full bg-rosegold/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-16 size-96 rounded-full bg-champagne/10 blur-3xl"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-10"
      >
        <p className="label-caps text-champagne">Sua transformação começa aqui</p>
        <h2 className="mt-5 font-display text-5xl font-light italic leading-tight md:text-6xl">
          Pronta para se revelar?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg font-light text-ivory/80">
          Agende sua avaliação e descubra o tratamento ideal para você.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full bg-ivory px-10 py-4 label-caps text-[0.62rem] text-wine transition-all hover:bg-champagne hover:shadow-soft"
        >
          Falar com a Dra. Laura no WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
