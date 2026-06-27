import { motion } from "framer-motion";
import { Sparkles, Smile, Activity, Droplet, Wand2, Syringe } from "lucide-react";
import { Reveal, Divider } from "./Reveal";

const services = [
  { icon: Smile, name: "Lábios & Perfiloplastia", desc: "Contorno, volume e harmonia do perfil com naturalidade." },
  { icon: Sparkles, name: "Full Face", desc: "Harmonização completa que valoriza todos os seus traços." },
  { icon: Activity, name: "HiPro", desc: "Tecnologia de ultrassom para firmeza e lifting sem cortes." },
  { icon: Syringe, name: "Toxina Botulínica", desc: "Suavização de linhas de expressão com naturalidade." },
  { icon: Droplet, name: "Lavieen Glow", desc: "Luminosidade e qualidade de pele com tecnologia avançada." },
  { icon: Wand2, name: "Rinomodelação", desc: "Refinamento do nariz sem cirurgia, com protocolo seguro." },
  { icon: Activity, name: "Bigbumm", desc: "Tratamento corporal para textura e firmeza dos glúteos." },
  { icon: Sparkles, name: "Bioestimuladores", desc: "Estímulo natural de colágeno para uma pele renovada." },
];

export function Services() {
  return (
    <section id="tratamentos" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="text-center">
          <p className="label-caps text-rosegold">Especialidades</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-light italic leading-tight text-wine md:text-5xl">
            Tratamentos que revelam sua melhor versão
          </h2>
          <Divider className="mt-8" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-2xl border-t-2 border-wine bg-card p-8 shadow-[0_12px_40px_-30px_rgba(0,0,0,0.5)] transition-shadow hover:shadow-soft"
              >
                <span className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-rosegold/0 blur-2xl transition-all duration-500 group-hover:bg-rosegold/15" />
                <s.icon className="size-7 text-rosegold" strokeWidth={1.2} />
                <h3 className="mt-5 font-display text-2xl italic text-wine">{s.name}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-taupe">{s.desc}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
