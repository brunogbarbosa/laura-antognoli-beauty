import { motion } from "framer-motion";
import { Sparkles, Droplets, Gem, BellRing } from "lucide-react";
import { Reveal, Divider } from "./Reveal";
import { WHATSAPP } from "./data";

const products = [
  {
    icon: Droplets,
    name: "Linha Skincare L.A",
    desc: "Cuidado diário desenvolvido para prolongar e potencializar os resultados.",
  },
  {
    icon: Gem,
    name: "Kits Profissionais",
    desc: "Materiais e insumos selecionados para alunos e profissionais da estética.",
  },
  {
    icon: Sparkles,
    name: "Protocolos Exclusivos",
    desc: "Guias e protocolos autorais para elevar a sua prática clínica.",
  },
];

export function Products() {
  return (
    <section id="produtos" className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="text-center">
          <p className="label-caps text-rosegold">Em breve</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-light italic leading-tight text-wine md:text-5xl">
            Produtos Dra. Laura Antognoli
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-taupe">
            Estamos preparando uma linha de produtos pensada com o mesmo cuidado
            dos nossos atendimentos. Cadastre seu interesse e seja a primeira a saber.
          </p>
          <Divider className="mt-8" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-dashed border-rosegold/50 bg-card p-8 text-center shadow-[0_12px_40px_-30px_rgba(0,0,0,0.5)]"
              >
                <span className="absolute right-4 top-4 rounded-full bg-rosegold/15 px-3 py-1 label-caps text-[0.5rem] text-rosegold">
                  Em breve
                </span>
                <p.icon className="mx-auto size-8 text-rosegold" strokeWidth={1.1} />
                <h3 className="mt-5 font-display text-2xl italic text-wine">{p.name}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-taupe">{p.desc}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={0.1}>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-wine px-8 py-3.5 label-caps text-[0.62rem] text-ivory transition-all hover:bg-wine-deep hover:shadow-soft"
          >
            <BellRing className="size-4" strokeWidth={1.5} /> Avise-me no lançamento
          </a>
        </Reveal>
      </div>
    </section>
  );
}